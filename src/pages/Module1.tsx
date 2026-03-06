import React from 'react';
import ModuleLayout from '../components/ModuleLayout';
import ModuleAudio from '../components/ModuleAudio';
import SlideDeck from '../components/SlideDeck';
import DragAndDrop from '../components/DragAndDrop';
import AudioRecorder from '../components/AudioRecorder';
import InteractiveHook from '../components/InteractiveHook';
import Quiz from '../components/Quiz';
import { useProgressStore } from '../store/useProgress';

const MODULE_1_NARRATION = `In this section, you'll learn how to open a presentation with confidence. The key framework is called the WISE flow. W stands for Welcome — greet your audience warmly. For example, say "Good morning, ladies and gentlemen. Thank you all for being here today." I stands for Introduce — tell them who you are and your role. S stands for Say your topic — clearly state what you'll be talking about. And E stands for Explain the relevance — tell the audience why this matters to them. To capture attention in the first few seconds, you can use four powerful techniques: ask a rhetorical question, share a surprising statistic, tell a short story, or give the audience a problem to think about. For example, you might say "Did you know that fast food consumption has increased by 600 percent in Europe since 2002?" This section also covers dealing with nervousness. The key tips are: prepare well, because failing to prepare is preparing to fail. Learn to relax with breathing exercises. Arrive early to check the room and equipment. Greet people as they arrive to build rapport. And finally, visualize yourself speaking confidently. Remember, a strong opening sets the tone for your entire presentation.`;

const wiseItems = [
  { id: 'w', content: 'Welcome the audience (e.g., "Good morning, ladies and gentlemen.")', correctIndex: 0 },
  { id: 'i', content: 'Introduce yourself (e.g., "My name is...")', correctIndex: 1 },
  { id: 's', content: 'Say what the topic is (e.g., "Today I\'d like to talk about...")', correctIndex: 2 },
  { id: 'e', content: 'Explain why the audience will be interested (e.g., "This is relevant to you because...")', correctIndex: 3 },
];

const module1Slides = [
  {
    id: 'intro',
    title: 'The WISE Flow',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=1000',
    content: (
      <div className="space-y-4">
        <p>A successful opening follows four key steps to build trust and clarity.</p>
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100">
            <span className="font-black text-indigo-600 mr-2 text-xl">W</span> <strong>Welcome</strong>
          </div>
          <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100">
            <span className="font-black text-indigo-600 mr-2 text-xl">I</span> <strong>Introduce</strong>
          </div>
          <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100">
            <span className="font-black text-indigo-600 mr-2 text-xl">S</span> <strong>Say Topic</strong>
          </div>
          <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100">
            <span className="font-black text-indigo-600 mr-2 text-xl">E</span> <strong>Explain Why</strong>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'hooks',
    title: 'Grab Attention',
    image: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&q=80&w=1000',
    content: (
      <div className="space-y-4">
        <p>Don't just start talking. Hook your audience in the first 30 seconds using these methods:</p>
        <ul className="list-none p-0 space-y-3">
          <li className="flex items-start gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
            <div className="w-6 h-6 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-bold text-xs mt-1 flex-shrink-0">?</div>
            <span><strong>Rhetorical Question:</strong> "Do we really need quality assurance?"</span>
          </li>
          <li className="flex items-start gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
            <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xs mt-1 flex-shrink-0">%</div>
            <span><strong>Surprising Fact:</strong> "Statistics show that 70% of..."</span>
          </li>
          <li className="flex items-start gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
            <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs mt-1 flex-shrink-0">★</div>
            <span><strong>Brief Story:</strong> "I remember when I first started..."</span>
          </li>
        </ul>
      </div>
    )
  },
  {
    id: 'nerves',
    title: 'Taming Nerves',
    image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=1000',
    content: (
      <div className="space-y-4">
        <p>Nervousness is energy. Channel it correctly with these professional tips:</p>
        <div className="space-y-3">
          <div className="flex gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
            <div className="text-2xl">🧠</div>
            <div>
              <p className="font-bold text-slate-900 mb-1">Prepare Well</p>
              <p className="text-sm">"Failing to prepare is preparing to fail."</p>
            </div>
          </div>
          <div className="flex gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
            <div className="text-2xl">🌬️</div>
            <div>
              <p className="font-bold text-slate-900 mb-1">Deep Breathing</p>
              <p className="text-sm">Oxygen calms the brain. Take three deep breaths before you walk up.</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'practice-hook',
    title: 'Practice Your Hook',
    content: (
      <InteractiveHook 
        title="Your Turn"
        description="Write an attention-grabbing opener for 'The Future of Remote Work'."
        placeholder="e.g., 'Did you know that 70% of employees...'"
      />
    )
  },
  {
    id: 'exercise-wise',
    title: 'Exercise: WISE Order',
    content: (
      <DragAndDrop 
        title="Order the Opening"
        description="Drag the steps into the correct WISE order."
        items={wiseItems}
      />
    )
  },
  {
    id: 'record-wise',
    title: 'Record Your Opening',
    content: (
      <AudioRecorder 
        prompt="Record yourself opening a presentation using the WISE flow."
      />
    )
  }
];

export default function Module1() {
  const { setQuizScore } = useProgressStore();
  return (
    <ModuleLayout
      id="module1"
      title="1. Let's get started"
      description="Learn how to open a presentation confidently and grab your audience's attention."
      prevModule="/module/0"
      nextModule="/module/2"
    >
      <ModuleAudio moduleId="module1" narration={MODULE_1_NARRATION} />
      
      <SlideDeck slides={module1Slides} />

      <Quiz 
        id="module1"
        title="Check Your Knowledge: Section 1"
        description="Test your understanding of the WISE flow and opening techniques."
        onComplete={(score) => setQuizScore('module1', score)}
        questions={[
          {
            id: 'm1-q1',
            question: "What does the 'S' in the WISE flow stand for?",
            options: ['Summary', 'Say Topic', 'Start Strong', 'Solution'],
            correctAnswer: 1
          },
          {
            id: 'm1-q2',
            question: "True or False: In a formal presentation, you should wait until the end for questions.",
            options: ['True', 'False'],
            correctAnswer: 0
          },
          {
            id: 'm1-q3',
            question: "Complete the phrase: 'My talk is particularly ___ to those of you who work in sales.'",
            options: ['interesting', 'relevant', 'important', 'useful'],
            correctAnswer: 1
          }
        ]}
      />
    </ModuleLayout>
  );
}

