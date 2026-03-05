import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from '@hello-pangea/dnd';
import { GripVertical, CheckCircle, XCircle } from 'lucide-react';

interface Item {
  id: string;
  content: string;
  correctIndex: number;
}

interface DragAndDropProps {
  items: Item[];
  title: string;
  description: string;
}

export default function DragAndDrop({ items: initialItems, title, description }: DragAndDropProps) {
  const [items, setItems] = useState<Item[]>([]);
  const [isChecked, setIsChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  // Shuffle items on mount
  useEffect(() => {
    const shuffled = [...initialItems].sort(() => Math.random() - 0.5);
    setItems(shuffled);
  }, [initialItems]);

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const newItems = Array.from(items);
    const [reorderedItem] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, reorderedItem);

    setItems(newItems);
    setIsChecked(false);
  };

  const checkOrder = () => {
    const correct = items.every((item, index) => item.correctIndex === index);
    setIsCorrect(correct);
    setIsChecked(true);
  };

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600 mb-6">{description}</p>

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="list">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="space-y-3 mb-6"
            >
              {items.map((item, index) => (
                // @ts-expect-error - key is a valid React prop
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      className={`flex items-center gap-4 p-4 bg-white border rounded-xl shadow-sm transition-shadow ${
                        snapshot.isDragging ? 'shadow-md border-indigo-300 ring-1 ring-indigo-100' : 'border-slate-200'
                      } ${
                        isChecked 
                          ? item.correctIndex === index 
                            ? 'border-emerald-300 bg-emerald-50' 
                            : 'border-red-300 bg-red-50'
                          : ''
                      }`}
                    >
                      <div
                        {...provided.dragHandleProps}
                        className="text-slate-400 hover:text-slate-600 cursor-grab active:cursor-grabbing"
                      >
                        <GripVertical className="w-5 h-5" />
                      </div>
                      <div className="flex-1 font-medium text-slate-700">
                        {item.content}
                      </div>
                      {isChecked && (
                        <div>
                          {item.correctIndex === index ? (
                            <CheckCircle className="w-5 h-5 text-emerald-500" />
                          ) : (
                            <XCircle className="w-5 h-5 text-red-500" />
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <div className="flex items-center justify-between">
        <button
          onClick={checkOrder}
          className="px-6 py-2.5 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 transition-colors"
        >
          Check Answer
        </button>
        
        {isChecked && (
          <div className={`font-medium ${isCorrect ? 'text-emerald-600' : 'text-red-600'}`}>
            {isCorrect ? 'Perfect! You got it right.' : 'Not quite right. Try again!'}
          </div>
        )}
      </div>
    </div>
  );
}
