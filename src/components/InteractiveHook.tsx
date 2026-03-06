import React, { useState } from 'react';
import { useProgressStore } from '../store/useProgress';
import { Send, Sparkles } from 'lucide-react';

interface Props {
  title: string;
  description: string;
  placeholder: string;
}

export default function InteractiveHook({ title, description, placeholder }: Props) {
  const [hook, setHook] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { userName } = useProgressStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (hook.trim()) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm mt-8">
      <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-sm text-slate-600 mb-6">{description}</p>

      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            value={hook}
            onChange={(e) => setHook(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all h-32 resize-none text-sm"
            placeholder={placeholder}
            required
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white font-medium py-2.5 px-6 rounded-xl hover:bg-indigo-700 transition-colors flex items-center gap-2 text-sm"
          >
            Check My Hook <Send className="w-4 h-4" />
          </button>
        </form>
      ) : (
        <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100 animate-in fade-in slide-in-from-bottom-2 duration-500">
          <div className="flex items-center gap-2 text-indigo-700 font-bold mb-3">
            <Sparkles className="w-5 h-5" />
            <span>Expert Feedback</span>
          </div>
          <div className="space-y-4 text-sm text-indigo-900">
            <p>
              Great start, <strong>{userName}</strong>! Your hook: <span className="italic">"{hook}"</span> is a solid attempt.
            </p>
            <div className="bg-white/50 p-4 rounded-lg border border-indigo-200/50">
              <p className="font-semibold mb-2">Why this works:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>It directly addresses the audience's interests.</li>
                <li>It creates an immediate "gap" that your presentation will fill.</li>
                <li>It sets a professional yet engaging tone.</li>
              </ul>
            </div>
            <button
              onClick={() => setIsSubmitted(false)}
              className="text-indigo-600 font-semibold hover:text-indigo-800 transition-colors mt-2"
            >
              Try another one
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
