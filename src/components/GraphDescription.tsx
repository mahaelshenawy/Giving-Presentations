import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

interface GraphDescriptionProps {
  title: string;
  description: string;
  graphUrl: string;
  keywords: string[];
}

export default function GraphDescription({ title, description, graphUrl, keywords }: GraphDescriptionProps) {
  const [text, setText] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    if (text.trim().length > 20) {
      setIsSubmitted(true);
    } else {
      alert('Please write a more detailed description (at least 20 characters).');
    }
  };

  const checkKeywords = () => {
    const lowerText = text.toLowerCase();
    return keywords.map(kw => ({
      word: kw,
      found: lowerText.includes(kw.toLowerCase())
    }));
  };

  const keywordResults = isSubmitted ? checkKeywords() : [];

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600 mb-6">{description}</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 mb-4 h-64 flex items-center justify-center">
            {/* Placeholder for a graph */}
            <div className="w-full h-full relative flex items-end justify-between px-4 pb-4 pt-10">
              <div className="absolute inset-0 border-b-2 border-l-2 border-slate-300 m-4"></div>
              {/* Fake bars */}
              <div className="w-1/5 bg-indigo-200 h-1/4 rounded-t-sm z-10 mx-1"></div>
              <div className="w-1/5 bg-indigo-300 h-2/4 rounded-t-sm z-10 mx-1"></div>
              <div className="w-1/5 bg-indigo-400 h-3/4 rounded-t-sm z-10 mx-1"></div>
              <div className="w-1/5 bg-indigo-500 h-full rounded-t-sm z-10 mx-1"></div>
            </div>
          </div>
          <p className="text-xs text-slate-500 text-center italic">Sales figures over four quarters</p>
        </div>

        <div className="flex flex-col">
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Describe the trend shown in the graph:
          </label>
          <textarea
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              setIsSubmitted(false);
            }}
            className="flex-1 w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all resize-none min-h-[150px] mb-4"
            placeholder="E.g., As you can see from this bar chart, sales increased steadily over the four quarters..."
          />
          
          {!isSubmitted ? (
            <button
              onClick={handleSubmit}
              disabled={text.trim().length === 0}
              className={`px-6 py-2.5 font-medium rounded-xl transition-colors self-end ${
                text.trim().length === 0
                  ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                  : 'bg-indigo-600 text-white hover:bg-indigo-700'
              }`}
            >
              Submit Description
            </button>
          ) : (
            <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
              <div className="flex items-center gap-2 text-emerald-700 font-medium mb-3">
                <CheckCircle className="w-5 h-5" /> Good effort! Let's check your vocabulary.
              </div>
              <p className="text-sm text-emerald-800 mb-2">Did you use these keywords?</p>
              <div className="flex flex-wrap gap-2">
                {keywordResults.map((kw, i) => (
                  <span 
                    key={i} 
                    className={`px-2.5 py-1 rounded-md text-xs font-medium ${
                      kw.found 
                        ? 'bg-emerald-200 text-emerald-800' 
                        : 'bg-white border border-slate-200 text-slate-400 line-through'
                    }`}
                  >
                    {kw.word}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
