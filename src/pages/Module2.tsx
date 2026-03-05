import React from 'react';
import ModuleLayout from '../components/ModuleLayout';
import MatchingExercise from '../components/MatchingExercise';

const signpostingItems = [
  { id: '1', left: 'In this part of my presentation, I\'d like to tell you about...', right: 'Saying what is coming' },
  { id: '2', left: 'This leads directly to my next point.', right: 'Moving on to the next point' },
  { id: '3', left: 'This brings me to the end of my second point.', right: 'Indicating the end of a section' },
  { id: '4', left: 'As I mentioned before...', right: 'Referring back' },
  { id: '5', left: 'Let me briefly summarize what I\'ve said so far.', right: 'Summarizing a point' },
];

export default function Module2() {
  return (
    <ModuleLayout
      id="module2"
      title="2. Today's topic is..."
      description="Master body language and use signposting to guide your audience through your presentation."
      prevModule="/module/1"
      nextModule="/module/3"
    >
      <section className="prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Body Language</h2>
        <p className="text-slate-600 mb-6">
          Your body language speaks volumes before you even say a word. Here are some key tips:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h4 className="font-bold text-slate-900 mb-2">Posture & Hands</h4>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li>Stand straight but relaxed. Keep knees unlocked.</li>
              <li>Keep your hands by your side or use open gestures.</li>
              <li>Avoid crossing your arms or hiding hands in pockets.</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h4 className="font-bold text-slate-900 mb-2">Eye Contact & Pacing</h4>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li>Make eye contact with individuals, not just the back wall.</li>
              <li>Speak about 20% more slowly than your normal conversational speed.</li>
              <li>Move or lean forward to emphasize important points.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="prose prose-slate max-w-none mt-12 mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Case Study: Analyzing Body Language</h2>
        <p className="text-slate-600 mb-6">
          Read the following scenario and consider how the presenter's body language impacts their message.
        </p>
        
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 mb-6">
          <h4 className="font-bold text-slate-900 mb-2">Scenario: The Quarterly Review</h4>
          <p className="text-slate-700 text-sm italic mb-4">
            "Sarah walks to the front of the room, keeping her eyes fixed on her notes. She stands behind the podium with her arms crossed tightly. When she begins to speak, she talks very quickly and rarely looks up at the audience. However, her slides are well-designed and the data she is presenting is highly positive."
          </p>
        </div>
        
        <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100">
          <h4 className="font-bold text-indigo-900 mb-2">Analysis Prompts:</h4>
          <ul className="list-disc pl-5 space-y-1 text-indigo-800 text-sm">
            <li>How might Sarah's crossed arms be interpreted by the audience?</li>
            <li>What effect does her lack of eye contact have on her credibility?</li>
            <li>What three specific changes could Sarah make to improve her delivery?</li>
          </ul>
        </div>
      </section>

      <section className="prose prose-slate max-w-none mt-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Signposting</h2>
        <p className="text-slate-600 mb-6">
          Signposting phrases help guide the audience through a presentation, acting like road signs. They tell the audience what is coming next, when a topic is finished, and how different parts connect.
        </p>
      </section>

      <MatchingExercise 
        title="Exercise 2: Signposting Functions"
        description="Match the signposting phrases on the left with their correct functions on the right. Click a phrase, then click its function."
        items={signpostingItems}
      />
    </ModuleLayout>
  );
}
