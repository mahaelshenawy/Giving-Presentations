import React, { useState } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

interface MatchItem {
  id: string;
  left: string;
  right: string;
}

interface MatchingExerciseProps {
  title: string;
  description: string;
  items: MatchItem[];
}

export default function MatchingExercise({ title, description, items }: MatchingExerciseProps) {
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [matches, setMatches] = useState<Record<string, string>>({});
  const [isChecking, setIsChecking] = useState(false);

  // Shuffle right items for display
  const [rightItems] = useState(() => 
    [...items].sort(() => Math.random() - 0.5)
  );

  const handleLeftClick = (id: string) => {
    if (isChecking) return;
    setSelectedLeft(id === selectedLeft ? null : id);
  };

  const handleRightClick = (rightId: string) => {
    if (isChecking || !selectedLeft) return;
    
    setMatches(prev => ({
      ...prev,
      [selectedLeft]: rightId
    }));
    setSelectedLeft(null);
  };

  const checkAnswers = () => {
    setIsChecking(true);
  };

  const reset = () => {
    setMatches({});
    setIsChecking(false);
    setSelectedLeft(null);
  };

  const isAllMatched = Object.keys(matches).length === items.length;
  let correctCount = 0;
  if (isChecking) {
    items.forEach(item => {
      if (matches[item.id] === item.id) correctCount++;
    });
  }

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600 mb-6">{description}</p>

      <div className="grid grid-cols-2 gap-8 mb-8">
        {/* Left Column */}
        <div className="space-y-3">
          <h4 className="font-medium text-slate-500 uppercase text-xs tracking-wider mb-4">Phrases</h4>
          {items.map((item) => {
            const isMatched = !!matches[item.id];
            const isSelected = selectedLeft === item.id;
            
            let statusClass = "border-slate-200 hover:border-indigo-300";
            if (isSelected) statusClass = "border-indigo-500 bg-indigo-50 ring-1 ring-indigo-500";
            else if (isMatched && !isChecking) statusClass = "border-slate-300 bg-slate-50 text-slate-500";
            else if (isChecking) {
              statusClass = matches[item.id] === item.id 
                ? "border-emerald-500 bg-emerald-50" 
                : "border-red-500 bg-red-50";
            }

            return (
              <button
                key={`left-${item.id}`}
                onClick={() => handleLeftClick(item.id)}
                disabled={isChecking}
                className={`w-full text-left p-4 rounded-xl border transition-all ${statusClass}`}
              >
                <div className="flex justify-between items-center">
                  <span>{item.left}</span>
                  {isChecking && matches[item.id] === item.id && <CheckCircle className="w-5 h-5 text-emerald-500" />}
                  {isChecking && matches[item.id] !== item.id && <XCircle className="w-5 h-5 text-red-500" />}
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column */}
        <div className="space-y-3">
          <h4 className="font-medium text-slate-500 uppercase text-xs tracking-wider mb-4">Functions</h4>
          {rightItems.map((item) => {
            // Find if this right item is matched to any left item
            const matchedLeftId = Object.keys(matches).find(key => matches[key] === item.id);
            const isMatched = !!matchedLeftId;
            
            let statusClass = "border-slate-200 hover:border-indigo-300";
            if (isMatched && !isChecking) statusClass = "border-indigo-200 bg-indigo-50";
            else if (isChecking && isMatched) {
              statusClass = matchedLeftId === item.id 
                ? "border-emerald-500 bg-emerald-50" 
                : "border-red-500 bg-red-50";
            }

            return (
              <button
                key={`right-${item.id}`}
                onClick={() => handleRightClick(item.id)}
                disabled={isChecking || !selectedLeft}
                className={`w-full text-left p-4 rounded-xl border transition-all ${
                  !selectedLeft && !isMatched && !isChecking ? 'opacity-50 cursor-not-allowed' : ''
                } ${statusClass}`}
              >
                {item.right}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
        <div className="flex gap-3">
          <button
            onClick={checkAnswers}
            disabled={!isAllMatched || isChecking}
            className={`px-6 py-2.5 font-medium rounded-xl transition-colors ${
              !isAllMatched || isChecking
                ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                : 'bg-indigo-600 text-white hover:bg-indigo-700'
            }`}
          >
            Check Answers
          </button>
          {isChecking && (
            <button
              onClick={reset}
              className="px-6 py-2.5 font-medium rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors"
            >
              Try Again
            </button>
          )}
        </div>
        
        {isChecking && (
          <div className={`font-medium ${correctCount === items.length ? 'text-emerald-600' : 'text-slate-600'}`}>
            Score: {correctCount} / {items.length}
          </div>
        )}
      </div>
    </div>
  );
}
