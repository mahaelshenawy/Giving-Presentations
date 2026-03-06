import React from 'react';
import ModuleLayout from '../components/ModuleLayout';
import MatchingExercise from '../components/MatchingExercise';
import Quiz from '../components/Quiz';

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
        
        <div className="relative rounded-3xl overflow-hidden mb-12 h-80 group">
          <img 
            src="https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&q=80&w=1000" 
            alt="Body language" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-transparent flex items-center p-12">
            <div className="max-w-md">
              <h3 className="text-white text-3xl font-bold mb-4">Non-Verbal Communication</h3>
              <p className="text-slate-200">Over 70% of communication is non-verbal. Your posture and eye contact speak before you do.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all group">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-accessibility"><circle cx="16" cy="4" r="1"/><path d="m18 19 1-7-6 1"/><path d="m5 8 3-3 5.5 3.5"/><path d="M14 18V9"/><path d="m5 19 1-7-1-7"/><path d="M12 11h-3"/></svg>
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">Posture & Hands</h4>
            <ul className="space-y-3 text-slate-600">
              <li className="flex gap-2">
                <span className="text-blue-500 font-bold">•</span>
                <span>Stand straight but relaxed. Keep knees unlocked.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-500 font-bold">•</span>
                <span>Keep your hands by your side or use open gestures.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-500 font-bold">•</span>
                <span>Avoid crossing your arms or hiding hands in pockets.</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all group">
            <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">Eye Contact & Pacing</h4>
            <ul className="space-y-3 text-slate-600">
              <li className="flex gap-2">
                <span className="text-indigo-500 font-bold">•</span>
                <span>Make eye contact with individuals, not just the back wall.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-indigo-500 font-bold">•</span>
                <span>Speak about 20% more slowly than your normal speed.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-indigo-500 font-bold">•</span>
                <span>Move or lean forward to emphasize important points.</span>
              </li>
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

      <section className="prose prose-slate max-w-none mt-12 mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Signposting & Handling Issues</h2>
        <p className="text-slate-600 mb-6">
          Signposting phrases help guide the audience through a presentation, acting like road signs. They tell the audience what is coming next, when a topic is finished, and how different parts connect.
        </p>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6 mb-8">
          <div>
            <h4 className="font-bold text-slate-900 mb-3">Speaker Script Examples</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-bold text-sm text-slate-700 mb-1">Signposting Phrases</h5>
                <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600">
                  <li><strong>Moving to the next point:</strong> I'd now like to turn to the issue of [Topic].</li>
                  <li><strong>Referring back:</strong> As I mentioned before, our budget for this year is limited.</li>
                  <li><strong>Summarizing a point:</strong> Let me briefly summarize what I've said so far.</li>
                  <li><strong>Adding ideas:</strong> Moreover, there are other interesting facts we should look at. In addition to this, our IT business is performing well.</li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold text-sm text-slate-700 mb-1">Handling Difficult Issues</h5>
                <p className="text-sm text-slate-600 italic">
                  To begin, I think we first need to <strong>identify</strong> the problem regarding our recent supply delays. Of course, we'll have to <strong>clarify</strong> a few points regarding our vendor contracts before we start. However, if we <strong>tackle</strong> the distribution problems now, we can <strong>solve</strong> this issue before it impacts our Christmas business. We must <strong>take care of</strong> this problem immediately to avoid serious trouble.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MatchingExercise 
        title="Exercise 2: Signposting Functions"
        description="Match the signposting phrases on the left with their correct functions on the right. Click a phrase, then click its function."
        items={signpostingItems}
      />

      <Quiz 
        title="Check Your Knowledge: Module 2"
        description="Test your understanding of body language and signposting."
        questions={[
          {
            id: 'm2-q1',
            question: "How much slower should you speak than your normal conversational speed?",
            options: ['10%', '20%', '50%', 'Exactly the same'],
            correctAnswer: 1
          },
          {
            id: 'm2-q2',
            question: "True or False: Crossing your arms is an 'open gesture' that shows confidence.",
            options: ['True', 'False'],
            correctAnswer: 1
          },
          {
            id: 'm2-q3',
            question: "Which phrase is used for 'referring back'?",
            options: [
              "Moving to the next point...",
              "As I mentioned before...",
              "In this part of my presentation...",
              "Let me briefly summarize..."
            ],
            correctAnswer: 1
          }
        ]}
      />
    </ModuleLayout>
  );
}
