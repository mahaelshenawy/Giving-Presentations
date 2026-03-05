import React, { useState } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

interface Scenario {
  id: string;
  question: string;
  options: { text: string; isCorrect: boolean; feedback: string }[];
}

interface QASimulationProps {
  title: string;
  description: string;
  scenarios: Scenario[];
}

export default function QASimulation({ title, description, scenarios }: QASimulationProps) {
  const [currentScenario, setCurrentScenario] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleSelect = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);
  };

  const handleNext = () => {
    setCurrentScenario(prev => prev + 1);
    setSelectedOption(null);
    setIsAnswered(false);
  };

  const scenario = scenarios[currentScenario];

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600 mb-6">{description}</p>

      <div className="mb-6 flex items-center justify-between text-sm font-medium text-slate-500">
        <span>Scenario {currentScenario + 1} of {scenarios.length}</span>
        <div className="flex gap-1">
          {scenarios.map((_, idx) => (
            <div 
              key={idx} 
              className={`w-2 h-2 rounded-full ${
                idx === currentScenario ? 'bg-indigo-600' : 
                idx < currentScenario ? 'bg-emerald-400' : 'bg-slate-200'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mb-6">
        <p className="text-lg font-medium text-slate-900 mb-2">Audience Member:</p>
        <p className="text-slate-700 italic">"{scenario.question}"</p>
      </div>

      <div className="space-y-3 mb-6">
        {scenario.options.map((option, index) => {
          const isSelected = selectedOption === index;
          
          let statusClass = "border-slate-200 hover:border-indigo-300 hover:bg-slate-50";
          if (isAnswered) {
            if (isSelected && option.isCorrect) statusClass = "border-emerald-500 bg-emerald-50 text-emerald-900";
            else if (isSelected && !option.isCorrect) statusClass = "border-red-500 bg-red-50 text-red-900";
            else if (!isSelected && option.isCorrect) statusClass = "border-emerald-500 bg-emerald-50 text-emerald-900 border-dashed opacity-70";
            else statusClass = "border-slate-200 opacity-50";
          }

          return (
            <button
              key={index}
              onClick={() => handleSelect(index)}
              disabled={isAnswered}
              className={`w-full text-left p-4 rounded-xl border transition-all flex justify-between items-center ${statusClass}`}
            >
              <span>{option.text}</span>
              {isAnswered && isSelected && option.isCorrect && <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 ml-4" />}
              {isAnswered && isSelected && !option.isCorrect && <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 ml-4" />}
            </button>
          );
        })}
      </div>

      {isAnswered && (
        <div className={`p-4 rounded-xl mb-6 ${selectedOption !== null && scenario.options[selectedOption].isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'}`}>
          <p className="font-medium mb-1">Feedback:</p>
          <p className="text-sm">{selectedOption !== null ? scenario.options[selectedOption].feedback : ''}</p>
        </div>
      )}

      <div className="flex justify-end">
        <button
          onClick={handleNext}
          disabled={!isAnswered || currentScenario === scenarios.length - 1}
          className={`px-6 py-2.5 font-medium rounded-xl transition-colors ${
            !isAnswered || currentScenario === scenarios.length - 1
              ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
              : 'bg-indigo-600 text-white hover:bg-indigo-700'
          }`}
        >
          Next Scenario
        </button>
      </div>
    </div>
  );
}
