import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

interface ConclusionBuilderProps {
  title: string;
  description: string;
}

export default function ConclusionBuilder({ title, description }: ConclusionBuilderProps) {
  const [signal, setSignal] = useState('');
  const [summary, setSummary] = useState('');
  const [recommendation, setRecommendation] = useState('');
  const [invite, setInvite] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isComplete = signal.trim() && summary.trim() && recommendation.trim() && invite.trim();

  const handleSubmit = () => {
    if (isComplete) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600 mb-6">{description}</p>

      <div className="space-y-6">
        <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
          <label className="block text-sm font-medium text-slate-900 mb-2">
            1. Signal the end of the presentation
          </label>
          <p className="text-xs text-slate-500 mb-3">E.g., "Well, that brings me to the end of my talk."</p>
          <input
            type="text"
            value={signal}
            onChange={(e) => { setSignal(e.target.value); setIsSubmitted(false); }}
            className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
            placeholder="Your phrase here..."
          />
        </div>

        <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
          <label className="block text-sm font-medium text-slate-900 mb-2">
            2. Summarize the main points
          </label>
          <p className="text-xs text-slate-500 mb-3">E.g., "Before I stop, let me go over the key issues again."</p>
          <textarea
            value={summary}
            onChange={(e) => { setSummary(e.target.value); setIsSubmitted(false); }}
            className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none resize-none h-24"
            placeholder="Your summary here..."
          />
        </div>

        <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
          <label className="block text-sm font-medium text-slate-900 mb-2">
            3. Make a recommendation or final statement
          </label>
          <p className="text-xs text-slate-500 mb-3">E.g., "We therefore strongly recommend that..."</p>
          <input
            type="text"
            value={recommendation}
            onChange={(e) => { setRecommendation(e.target.value); setIsSubmitted(false); }}
            className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
            placeholder="Your recommendation here..."
          />
        </div>

        <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
          <label className="block text-sm font-medium text-slate-900 mb-2">
            4. Invite questions
          </label>
          <p className="text-xs text-slate-500 mb-3">E.g., "Are there any questions?"</p>
          <input
            type="text"
            value={invite}
            onChange={(e) => { setInvite(e.target.value); setIsSubmitted(false); }}
            className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
            placeholder="Your phrase here..."
          />
        </div>

        <div className="flex justify-end pt-4">
          {!isSubmitted ? (
            <button
              onClick={handleSubmit}
              disabled={!isComplete}
              className={`px-6 py-2.5 font-medium rounded-xl transition-colors ${
                !isComplete
                  ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                  : 'bg-indigo-600 text-white hover:bg-indigo-700'
              }`}
            >
              Build Conclusion
            </button>
          ) : (
            <div className="w-full">
              <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-200 mb-4">
                <div className="flex items-center gap-2 text-emerald-700 font-bold mb-4">
                  <CheckCircle className="w-6 h-6" /> Your Final Conclusion:
                </div>
                <div className="text-slate-800 italic space-y-2 text-lg">
                  <p>"{signal}</p>
                  <p>{summary}</p>
                  <p>{recommendation}</p>
                  <p>{invite}"</p>
                </div>
              </div>
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
              >
                Edit Conclusion
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
