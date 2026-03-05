import React, { useState } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

interface QuizProps {
  title: string;
  description: string;
  questions: Question[];
}

export default function Quiz({ title, description, questions }: QuizProps) {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [isChecking, setIsChecking] = useState(false);

  const handleSelect = (questionId: string, optionIndex: number) => {
    if (isChecking) return;
    setAnswers(prev => ({ ...prev, [questionId]: optionIndex }));
  };

  const checkAnswers = () => {
    setIsChecking(true);
  };

  const reset = () => {
    setAnswers({});
    setIsChecking(false);
  };

  const isAllAnswered = Object.keys(answers).length === questions.length;
  let correctCount = 0;
  if (isChecking) {
    questions.forEach(q => {
      if (answers[q.id] === q.correctAnswer) correctCount++;
    });
  }

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600 mb-6">{description}</p>

      <div className="space-y-8 mb-8">
        {questions.map((q, qIndex) => (
          <div key={q.id} className="space-y-3">
            <p className="font-medium text-slate-900">{qIndex + 1}. {q.question}</p>
            <div className="space-y-2">
              {q.options.map((option, oIndex) => {
                const isSelected = answers[q.id] === oIndex;
                const isCorrect = q.correctAnswer === oIndex;
                
                let statusClass = "border-slate-200 hover:bg-slate-50";
                if (isSelected && !isChecking) statusClass = "border-indigo-500 bg-indigo-50 ring-1 ring-indigo-500";
                else if (isChecking) {
                  if (isSelected && isCorrect) statusClass = "border-emerald-500 bg-emerald-50 text-emerald-900";
                  else if (isSelected && !isCorrect) statusClass = "border-red-500 bg-red-50 text-red-900";
                  else if (!isSelected && isCorrect) statusClass = "border-emerald-500 bg-emerald-50 text-emerald-900 border-dashed";
                }

                return (
                  <button
                    key={oIndex}
                    onClick={() => handleSelect(q.id, oIndex)}
                    disabled={isChecking}
                    className={`w-full text-left p-3 rounded-xl border transition-all flex items-center justify-between ${statusClass}`}
                  >
                    <span>{option}</span>
                    {isChecking && isSelected && isCorrect && <CheckCircle className="w-5 h-5 text-emerald-500" />}
                    {isChecking && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-red-500" />}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
        <div className="flex gap-3">
          <button
            onClick={checkAnswers}
            disabled={!isAllAnswered || isChecking}
            className={`px-6 py-2.5 font-medium rounded-xl transition-colors ${
              !isAllAnswered || isChecking
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
          <div className={`font-medium ${correctCount === questions.length ? 'text-emerald-600' : 'text-slate-600'}`}>
            Score: {correctCount} / {questions.length}
          </div>
        )}
      </div>
    </div>
  );
}
