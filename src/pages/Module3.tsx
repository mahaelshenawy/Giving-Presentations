import React from 'react';
import ModuleLayout from '../components/ModuleLayout';
import ModuleAudio from '../components/ModuleAudio';
import SlideDeck from '../components/SlideDeck';
import VisualDesignChallenge from '../components/VisualDesignChallenge';
import Quiz from '../components/Quiz';
import { useProgressStore } from '../store/useProgress';

const MODULE_3_NARRATION = `This section teaches you how to use presentation tools effectively and present numbers clearly. First, let's learn the Rule of Six. This rule helps you avoid overloading your slides with too much information. It means: a maximum of six lines per slide, and a maximum of six words per line. If you follow this rule, your slides will be clean and easy to read. Next, let's talk about saying numbers correctly. Numbers can be tricky for your audience, so here are some important rules. For decimals, use the word "point" — seven point two, not seven comma two. For currency, say "one hundred and fifty thousand euros." And remember the No S Rule: never add an S to hundred, million, or billion when a specific number comes before them. Say "two million dollars," not "two millions dollars." It's also better to use approximate numbers in presentations because they're easier for the audience to remember. Use phrases like "just under" or "nearly" for slightly less, "about," "approximately," or "roughly" for about the same, and "just over" or "well over" for slightly more. Finally, when presenting visuals, use emphasis phrases like "I'd like to stress the following point" or "I'd like to draw your attention to" to highlight key data.`;

const module3Slides = [
  {
    id: 'rule-of-six',
    title: 'The Rule of Six',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
    content: (
      <div className="space-y-4">
        <p>Keep your slides clean and readable with this simple formula:</p>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100 text-center">
            <span className="text-4xl font-black text-amber-600">6</span>
            <p className="font-bold">Lines Max</p>
          </div>
          <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100 text-center">
            <span className="text-4xl font-black text-amber-600">6</span>
            <p className="font-bold">Words/Line</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'design-challenge',
    title: 'Visual Design Challenge',
    content: (
      <VisualDesignChallenge />
    )
  },
  {
    id: 'numbers',
    title: 'Speaking Numbers',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=1000',
    content: (
      <div className="space-y-4 text-sm">
        <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-100">
          <strong>Decimals:</strong> 7.2 = "Seven <span className="text-indigo-600 font-bold">point</span> two"
        </div>
        <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-100">
          <strong>Currency:</strong> €150k = "...and fifty thousand euros"
        </div>
        <div className="p-3 bg-indigo-600 text-white rounded-xl shadow-sm">
          <strong>The "No S" Rule:</strong> Two <span className="underline decoration-2">million</span> dollars (never "millions")
        </div>
      </div>
    )
  },
  {
    id: 'approx',
    title: 'Power of Approximation',
    image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=1000',
    content: (
      <div className="space-y-4">
        <p>Make data memorable. Don't say "90,083". Say:</p>
        <div className="grid grid-cols-3 gap-2 text-xs">
          <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">
            <strong>Less:</strong> "Just under", "Nearly"
          </div>
          <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">
            <strong>Same:</strong> "Roughly", "Around"
          </div>
          <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">
            <strong>More:</strong> "Just over", "Well over"
          </div>
        </div>
      </div>
    )
  }
];

export default function Module3() {
  const { setQuizScore } = useProgressStore();
  return (
    <ModuleLayout
      id="module3"
      title="3. My next slide shows..."
      description="Learn how to use presentation tools effectively and present numbers clearly."
      prevModule="/module/2"
      nextModule="/module/4"
    >
      <ModuleAudio moduleId="module3" narration={MODULE_3_NARRATION} />
      
      <SlideDeck slides={module3Slides} />

      <Quiz 
        id="module3"
        title="Exercise 3: Numbers and Approximations"
        description="Test your knowledge on numbers and approximations."
        onComplete={(score) => setQuizScore('module3', score)}
        questions={[
          {
            id: 'q1',
            question: 'How do you say "1.6bn" in a presentation?',
            options: ['One point six billion', 'One thousand six hundred million', 'One comma six billion', 'Sixteen hundred million'],
            correctAnswer: 0
          },
          {
            id: 'q2',
            question: 'How do you say "€150,000"?',
            options: ['One hundred fifty thousand euros', 'One hundred and fifty thousand euros', 'A hundred fifty thousand euro', 'One fifty thousand euros'],
            correctAnswer: 1
          },
          {
            id: 'q3',
            question: 'Instead of saying "90,083 mobile phones", what is a better approximate phrase?',
            options: ['Exactly ninety thousand and eighty-three', 'Just over 90,000 mobile phones', 'Around 100,000 mobile phones', 'Nearly 90,000 mobile phones'],
            correctAnswer: 1
          }
        ]}
      />
    </ModuleLayout>
  );
}
