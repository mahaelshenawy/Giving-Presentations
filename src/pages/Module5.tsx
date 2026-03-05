import React from 'react';
import ModuleLayout from '../components/ModuleLayout';
import ConclusionBuilder from '../components/ConclusionBuilder';

export default function Module5() {
  return (
    <ModuleLayout
      id="module5"
      title="5. To sum up..."
      description="Learn how to conclude a presentation effectively, summarize key points, and make recommendations."
      prevModule="/module/4"
      nextModule="/module/6"
    >
      <section className="prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">The Anatomy of a Conclusion</h2>
        <p className="text-slate-600 mb-6">
          A strong conclusion is crucial because it's often what the audience remembers most. A good conclusion typically follows these four steps:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">1</div>
              <h4 className="font-bold text-slate-900 m-0">Signal the end</h4>
            </div>
            <p className="text-sm text-slate-600 ml-11">"That brings me to the end of my presentation."</p>
          </div>
          
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">2</div>
              <h4 className="font-bold text-slate-900 m-0">Summarize main points</h4>
            </div>
            <p className="text-sm text-slate-600 ml-11">"Let me briefly run through the main points again."</p>
          </div>
          
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">3</div>
              <h4 className="font-bold text-slate-900 m-0">Recommend / Final statement</h4>
            </div>
            <p className="text-sm text-slate-600 ml-11">"We therefore recommend that we..." or a memorable quote.</p>
          </div>
          
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">4</div>
              <h4 className="font-bold text-slate-900 m-0">Invite questions</h4>
            </div>
            <p className="text-sm text-slate-600 ml-11">"I'll be happy to answer any questions you may have."</p>
          </div>
        </div>
      </section>

      <section className="prose prose-slate max-w-none mt-12 mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Strategic Closing Moves</h2>
        <p className="text-slate-600">
          To make a lasting impression, consider using one of these techniques for your final statement:
        </p>
        <ul className="space-y-2 text-slate-600 list-disc pl-5">
          <li><strong>Use a question:</strong> Engage the audience with a thought-provoking inquiry.</li>
          <li><strong>Quote a well-known person:</strong> Borrow credibility by referencing a respected figure.</li>
          <li><strong>Call to action:</strong> Clearly state the specific steps you want them to take next.</li>
          <li><strong>The 'sandwich' technique:</strong> Refer back to a story or anecdote you told at the beginning.</li>
        </ul>
      </section>

      <ConclusionBuilder 
        title="Exercise 5: Build Your Conclusion"
        description="Write a complete conclusion for a presentation about a new product launch. Fill in each section using appropriate phrases."
      />
    </ModuleLayout>
  );
}
