import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';

interface Flashcard {
  id: string;
  front: string;
  back: string;
  category?: string;
}

interface FlashcardsProps {
  title: string;
  description: string;
  cards: Flashcard[];
}

export default function Flashcards({ title, description, cards }: FlashcardsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleNext = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, 150);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
    }, 150);
  };

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const currentCard = cards[currentIndex];

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600 mb-6">{description}</p>

      <div className="flex flex-col items-center">
        <div className="w-full max-w-md aspect-[3/2] relative perspective-1000 mb-6 cursor-pointer" onClick={toggleFlip}>
          <motion.div
            className="w-full h-full relative preserve-3d"
            animate={{ rotateX: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.4, type: "spring", stiffness: 260, damping: 20 }}
          >
            {/* Front */}
            <div className={`absolute w-full h-full backface-hidden bg-indigo-50 border-2 border-indigo-200 rounded-2xl flex flex-col items-center justify-center p-8 text-center shadow-sm ${isFlipped ? 'invisible' : 'visible'}`}>
              {currentCard.category && (
                <span className="absolute top-4 left-4 text-xs font-bold uppercase tracking-wider text-indigo-400">
                  {currentCard.category}
                </span>
              )}
              <h4 className="text-3xl font-bold text-indigo-900">{currentCard.front}</h4>
              <p className="absolute bottom-4 text-sm text-indigo-400 font-medium">Click to flip</p>
            </div>

            {/* Back */}
            <div 
              className={`absolute w-full h-full backface-hidden bg-emerald-50 border-2 border-emerald-200 rounded-2xl flex flex-col items-center justify-center p-8 text-center shadow-sm ${!isFlipped ? 'invisible' : 'visible'}`}
              style={{ transform: 'rotateX(180deg)' }}
            >
              <h4 className="text-2xl font-bold text-emerald-900">{currentCard.back}</h4>
            </div>
          </motion.div>
        </div>

        <div className="flex items-center gap-6">
          <button
            onClick={handlePrev}
            className="p-2 rounded-full hover:bg-slate-100 text-slate-600 transition-colors"
            aria-label="Previous card"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <span className="text-sm font-medium text-slate-500">
            {currentIndex + 1} / {cards.length}
          </span>
          
          <button
            onClick={handleNext}
            className="p-2 rounded-full hover:bg-slate-100 text-slate-600 transition-colors"
            aria-label="Next card"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
