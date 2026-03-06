import React from 'react';
import ModuleLayout from '../components/ModuleLayout';
import ModuleAudio from '../components/ModuleAudio';
import SlideDeck from '../components/SlideDeck';
import MatchingExercise from '../components/MatchingExercise';
import Quiz from '../components/Quiz';
import { useProgressStore } from '../store/useProgress';

const MODULE_2_NARRATION = `This section covers two essential skills: body language and signposting. Let's start with body language. Over seventy percent of communication is non-verbal, which means your posture, gestures, and eye contact are incredibly important. Here are the key rules: stand straight but relaxed, and keep your knees unlocked. Use open hand gestures and avoid crossing your arms or hiding your hands in your pockets. Make eye contact with individual people in the audience, not just the back wall. And here's an important tip — speak about twenty percent more slowly than your normal conversational speed. This gives the audience time to absorb your words. Now let's talk about signposting. Signposting phrases act like road signs that guide your audience through the presentation. They tell people what's coming next, when a section is finished, and how different parts connect. For example, use phrases like "In this part of my presentation, I'd like to tell you about" to introduce what's coming. Say "This leads directly to my next point" when moving on. Use "As I mentioned before" to refer back to something. And say "Let me briefly summarize what I've said so far" to recap. This section also covers handling difficult issues. Use verbs like identify, clarify, tackle, solve, and take care of when discussing problems. For example, "We first need to identify the problem, then we can tackle it before it impacts our business."`;

const signpostingItems = [
  { id: '1', left: 'In this part of my presentation, I\'d like to tell you about...', right: 'Saying what is coming' },
  { id: '2', left: 'This leads directly to my next point.', right: 'Moving on to the next point' },
  { id: '3', left: 'This brings me to the end of my second point.', right: 'Indicating the end of a section' },
  { id: '4', left: 'As I mentioned before...', right: 'Referring back' },
  { id: '5', left: 'Let me briefly summarize what I\'ve said so far.', right: 'Summarizing a point' },
];

const module2Slides = [
  {
    id: 'body-language',
    title: 'Power of Body Language',
    image: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&q=80&w=1000',
    content: (
      <div className="space-y-4">
        <p>Over <strong className="text-indigo-600">70%</strong> of communication is non-verbal. Your posture speaks before you do.</p>
        <ul className="space-y-2">
          <li className="flex gap-2">✅ <span>Stand straight but relaxed (unlocked knees).</span></li>
          <li className="flex gap-2">✅ <span>Use open hand gestures.</span></li>
          <li className="flex gap-2">✅ <span>Maintain eye contact with individuals.</span></li>
          <li className="flex gap-2">❌ <span>Avoid crossing arms or hiding hands.</span></li>
        </ul>
      </div>
    )
  },
  {
    id: 'pacing',
    title: 'Control Your Pace',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=1000',
    content: (
      <div className="space-y-4">
        <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100">
          <h4 className="font-black text-indigo-900 mb-2">The 20% Rule</h4>
          <p className="text-lg">Speak <strong className="text-indigo-600">20% slower</strong> than your normal speed. This ensures clarity and gives your audience time to absorb information.</p>
        </div>
      </div>
    )
  },
  {
    id: 'signposting',
    title: 'Signposting Phrases',
    image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=1000',
    content: (
      <div className="space-y-4">
        <p>Guide your audience like a GPS using clear road signs:</p>
        <div className="space-y-2 text-sm">
          <p>📍 <strong>Next Point:</strong> "I'd now like to turn to..."</p>
          <p>📍 <strong>Referring Back:</strong> "As I mentioned before..."</p>
          <p>📍 <strong>Summarizing:</strong> "Let me briefly summarize..."</p>
          <p>📍 <strong>Handling Issues:</strong> "Identify, clarify, tackle, solve."</p>
        </div>
      </div>
    )
  }
];

export default function Module2() {
  const { setQuizScore } = useProgressStore();
  return (
    <ModuleLayout
      id="module2"
      title="2. Today's topic is..."
      description="Master body language and use signposting to guide your audience through your presentation."
      prevModule="/module/1"
      nextModule="/module/3"
    >
      <ModuleAudio moduleId="module2" narration={MODULE_2_NARRATION} />
      
      <SlideDeck slides={module2Slides} />

      <MatchingExercise 
        title="Exercise 2: Signposting Functions"
        description="Match the signposting phrases on the left with their correct functions on the right."
        items={signpostingItems}
      />

      <Quiz 
        id="module2"
        title="Check Your Knowledge: Section 2"
        description="Test your understanding of body language and signposting."
        onComplete={(score) => setQuizScore('module2', score)}
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
            options: ["Moving to the next point...", "As I mentioned before...", "In this part of my presentation...", "Let me briefly summarize..."],
            correctAnswer: 1
          }
        ]}
      />
    </ModuleLayout>
  );
}
