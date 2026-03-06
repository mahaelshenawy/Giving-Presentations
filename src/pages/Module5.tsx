import React from 'react';
import ModuleLayout from '../components/ModuleLayout';
import ConclusionBuilder from '../components/ConclusionBuilder';
import Quiz from '../components/Quiz';

export default function Module5() {
  return (
    <ModuleLayout
      id="module5"
      title="5. To sum up..."
      description="Learn how to conclude a presentation effectively, summarize key points, and make recommendations."
      prevModule="/module/4"
      nextModule="/module/6"
    >
      <div className="relative rounded-3xl overflow-hidden mb-12 h-64 group">
        <img 
          src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1000" 
          alt="Meeting conclusion" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8">
          <p className="text-white font-medium text-lg">A strong finish ensures your message stays with the audience.</p>
        </div>
      </div>

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
        <p className="text-slate-600 mb-6">
          To make a lasting impression, consider using one of these techniques for your final statement:
        </p>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6 mb-8">
          <h4 className="font-bold text-slate-900 mb-3">Speaker Script Examples</h4>
          <div>
            <h5 className="font-bold text-sm text-slate-700 mb-1">Signaling the End and Summarizing</h5>
            <p className="text-sm text-slate-600 italic">I'm now nearing the end of my talk. Before I stop, let me go through my main points again. To sum up then, we have looked at the current status, the problems with suppliers, and the progress made since January.</p>
          </div>
          <div>
            <h5 className="font-bold text-sm text-slate-700 mb-1">Recommendation and Final Statement</h5>
            <p className="text-sm text-slate-600 italic">Based on what we know, we therefore <strong>suggest</strong> optimizing our procedures. In my opinion, we should go ahead with the project. As a final point, I'd like to leave you with this thought: knowing your entire product range is the key to success. Thank you all for listening.</p>
          </div>
        </div>

        <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100 mb-8">
          <h4 className="font-bold text-amber-900 mb-4">Coaching Notes: The Sandwich Technique</h4>
          <p className="text-amber-800 mb-3 text-sm">Think of your presentation as a sandwich:</p>
          <ul className="list-disc pl-5 space-y-1 text-sm text-amber-800 mb-4">
            <li><strong>The Bread:</strong> The Introduction and Conclusion (these should connect via a shared theme or story).</li>
            <li><strong>The Filling:</strong> The Main Body (your data and technical details).</li>
          </ul>
          <h5 className="font-bold text-sm text-amber-900 mb-2">Effective Conclusion Techniques</h5>
          <ul className="list-decimal pl-5 space-y-2 text-sm text-amber-800">
            <li><strong>Use a quote:</strong> "To put it in the words of Albert Einstein: 'The important thing is not to stop questioning.'"</li>
            <li><strong>Ask a provocative question:</strong> "After all, isn't that why we're here?"</li>
            <li><strong>Call to action:</strong> "So that's the plan. Now let's go and put it into practice!"</li>
            <li><strong>Refer back to the beginning:</strong> "Remember the story I told you earlier about Paris..."</li>
          </ul>
        </div>
      </section>

      <ConclusionBuilder 
        title="Exercise 5: Build Your Conclusion"
        description="Write a complete conclusion for a presentation about a new product launch. Fill in each section using appropriate phrases."
      />

      <Quiz 
        title="Check Your Knowledge: Module 5"
        description="Test your understanding of effective conclusions."
        questions={[
          {
            id: 'm5-q1',
            question: "What is the very first step of a strong conclusion?",
            options: ['Summarize points', 'Signal the end', 'Invite questions', 'Make a recommendation'],
            correctAnswer: 1
          },
          {
            id: 'm5-q2',
            question: "True or False: You should introduce new data or technical details in the conclusion.",
            options: ['True', 'False'],
            correctAnswer: 1
          },
          {
            id: 'm5-q3',
            question: "What is the 'Bread' in the Sandwich Technique?",
            options: ['The Main Body', 'The Data', 'The Introduction and Conclusion', 'The Slides'],
            correctAnswer: 2
          }
        ]}
      />
    </ModuleLayout>
  );
}
