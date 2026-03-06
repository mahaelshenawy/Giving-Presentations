import React from 'react';
import ModuleLayout from '../components/ModuleLayout';
import ModuleAudio from '../components/ModuleAudio';
import SlideDeck from '../components/SlideDeck';
import ConclusionBuilder from '../components/ConclusionBuilder';
import Quiz from '../components/Quiz';
import { useProgressStore } from '../store/useProgress';

const MODULE_5_NARRATION = `This section is all about concluding your presentation effectively. A strong conclusion is crucial because it's often what the audience remembers most. There are four steps to a great conclusion. Step one: signal the end. Let the audience know you're wrapping up with phrases like "That brings me to the end of my presentation" or "I'm now nearing the end of my talk." Step two: summarize your main points. Say "Let me briefly run through the main points again" and then recap each key idea concisely. Step three: make a recommendation or final statement. This is your chance to leave a lasting impression. You might say "Based on what we know, we suggest optimizing our procedures" or share a memorable quote. Step four: invite questions. End with "I'll be happy to answer any questions you may have." There's also a powerful technique called the Sandwich Technique. Think of your presentation as a sandwich. The bread is the introduction and conclusion — these should connect through a shared theme or story. The filling is the main body with your data and details. By tying your ending back to your opening, you create a satisfying sense of closure. For your final statement, you can use a quote, ask a provocative question, give a call to action like "So that's the plan — now let's go and put it into practice," or refer back to a story you told at the beginning.`;

const module5Slides = [
  {
    id: 'steps',
    title: 'The 4-Step Close',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1000',
    content: (
      <div className="space-y-3 text-sm">
        <div className="p-3 bg-white border border-slate-100 rounded-xl flex gap-3">
          <span className="font-black text-indigo-600">1</span>
          <div><strong>Signal the End:</strong> "That brings me to the end..."</div>
        </div>
        <div className="p-3 bg-white border border-slate-100 rounded-xl flex gap-3">
          <span className="font-black text-indigo-600">2</span>
          <div><strong>Summarize:</strong> "Let me briefly run through..."</div>
        </div>
        <div className="p-3 bg-white border border-slate-100 rounded-xl flex gap-3">
          <span className="font-black text-indigo-600">3</span>
          <div><strong>Recommend:</strong> "We therefore suggest..."</div>
        </div>
        <div className="p-3 bg-white border border-slate-100 rounded-xl flex gap-3">
          <span className="font-black text-indigo-600">4</span>
          <div><strong>Invite Questions:</strong> "I'll be happy to answer..."</div>
        </div>
      </div>
    )
  },
  {
    id: 'sandwich',
    title: 'Sandwich Technique',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=1000',
    content: (
      <div className="space-y-4">
        <p>Connect your <strong className="text-indigo-600">Opening</strong> and <strong className="text-indigo-600">Closing</strong> like two slices of bread.</p>
        <div className="bg-slate-50 p-6 rounded-3xl border-2 border-dashed border-slate-200">
          <p className="text-center font-bold text-slate-400 italic">"Tie your ending back to the story or quote you started with for perfect closure."</p>
        </div>
      </div>
    )
  }
];

export default function Module5() {
  const { setQuizScore } = useProgressStore();
  return (
    <ModuleLayout
      id="module5"
      title="5. To sum up..."
      description="Learn how to conclude a presentation effectively and make recommendations."
      prevModule="/module/4"
      nextModule="/module/6"
    >
      <ModuleAudio moduleId="module5" narration={MODULE_5_NARRATION} />
      
      <SlideDeck slides={module5Slides} />

      <ConclusionBuilder 
        title="Exercise 5: Build Your Conclusion"
        description="Write a complete conclusion for a presentation."
      />

      <Quiz 
        id="module5"
        title="Check Your Knowledge: Section 5"
        onComplete={(score) => setQuizScore('module5', score)}
        questions={[
          {
            id: 'm5-q1',
            question: "What is the very first step of a strong conclusion?",
            options: ['Summarize points', 'Signal the end', 'Invite questions', 'Make a recommendation'],
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
