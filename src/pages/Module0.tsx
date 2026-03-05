import React from 'react';
import ModuleLayout from '../components/ModuleLayout';

export default function Module0() {
  return (
    <ModuleLayout
      id="module0"
      title="0. Give a Killer Presentation"
      description="Watch this introductory video to learn the 5 essential steps for mastering any presentation."
      nextModule="/module/1"
    >
      <section className="prose prose-slate max-w-none mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">5 Steps to Mastery</h2>
        <p className="text-slate-600 mb-6">
          Before we dive into the specific language and phrases you'll need, watch this video to get a high-level overview of what makes a presentation truly successful. 
        </p>
        
        <div className="aspect-video bg-slate-900 rounded-2xl overflow-hidden relative mb-8 shadow-md">
          <video 
            controls 
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1540317580384-e5d43867caa6?auto=format&fit=crop&q=80&w=1000"
          >
            <source src="./presentation.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="text-xl font-bold text-indigo-900 mb-4">Video Summary: The 5 Key Stages</h3>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold flex-shrink-0">1</div>
              <div>
                <h4 className="font-bold text-slate-900 m-0">Start Strong</h4>
                <p className="text-sm text-slate-600 mt-1">Hook your audience from the very first word. Use the WISE flow (Welcome, Introduce, Say, Explain) and grab their attention with a question, statistic, story, or problem.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div>
                <h4 className="font-bold text-slate-900 m-0">Guide Them</h4>
                <p className="text-sm text-slate-600 mt-1">Use clear signposting to structure your talk. Phrases like "Moving on to my next point" act like road signs so nobody gets lost.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold flex-shrink-0">3</div>
              <div>
                <h4 className="font-bold text-slate-900 m-0">Use Visuals</h4>
                <p className="text-sm text-slate-600 mt-1">Show, don't just tell. Use the right visual for the job (e.g., bar charts for comparing, flowcharts for processes) and keep them clean and easy to read.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold flex-shrink-0">4</div>
              <div>
                <h4 className="font-bold text-slate-900 m-0">Finish Strong</h4>
                <p className="text-sm text-slate-600 mt-1">Leave a lasting impression with a powerful conclusion. Summarize, use a quote, ask a question, or use the 'sandwich' technique to tie back to your intro.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold flex-shrink-0">5</div>
              <div>
                <h4 className="font-bold text-slate-900 m-0">Master Q&A</h4>
                <p className="text-sm text-slate-600 mt-1">Handle any questions with confidence. If you get a tough question: ask them to repeat it, say it back, answer it, or be honest if you don't know.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ModuleLayout>
  );
}
