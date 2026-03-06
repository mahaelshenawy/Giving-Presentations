import React from 'react';
import ModuleLayout from '../components/ModuleLayout';
import ModuleAudio from '../components/ModuleAudio';
import SlideDeck from '../components/SlideDeck';
import QASimulation from '../components/QASimulation';
import Quiz from '../components/Quiz';
import { useProgressStore } from '../store/useProgress';

const MODULE_6_NARRATION = `Welcome to the final section of this lesson! Here you'll learn how to handle the question and answer session — often the most unpredictable part of any presentation. The key to a successful Q and A is following the four-step process. Step one: Listen carefully to the question. Don't interrupt the person asking. Step two: Understand the question fully. If needed, paraphrase it back by saying "If I understood you correctly, you would like to know..." Step three: Communicate your answer clearly and concisely. Address the whole audience, not just the person who asked. Step four: Check that you've answered satisfactorily. Now let's talk about handling difficult situations. For clarifying questions, you can say "Could you repeat your question, please?" or paraphrase it to confirm understanding. If you don't know the answer, be honest. Say "I'm afraid I don't know that off the top of my head, but I'll find out for you." Never guess — if you're wrong, you lose credibility. For postponing questions that come too early, say "If you don't mind, I'll deal with this question later in my presentation." And for hostile or aggressive questions, the best technique is to reformulate them into neutral terms. For example, if someone asks "Isn't there a better solution?", rephrase it as "You're asking whether our current approach is the most effective option. Yes, because..." This takes the emotion out of the question and lets you answer professionally.`;

const module6Slides = [
  {
    id: 'process',
    title: 'The Q&A Process',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1000',
    content: (
      <div className="grid grid-cols-2 gap-4 text-xs">
        <div className="bg-white p-3 rounded-xl border border-slate-100">
          <strong>1. Listen</strong>
          <p>Don't interrupt.</p>
        </div>
        <div className="bg-white p-3 rounded-xl border border-slate-100">
          <strong>2. Understand</strong>
          <p>Paraphrase if needed.</p>
        </div>
        <div className="bg-white p-3 rounded-xl border border-slate-100">
          <strong>3. Communicate</strong>
          <p>Address everyone.</p>
        </div>
        <div className="bg-white p-3 rounded-xl border border-slate-100">
          <strong>4. Check</strong>
          <p>"Does that answer you?"</p>
        </div>
      </div>
    )
  },
  {
    id: 'difficult',
    title: 'Difficult Questions',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1000',
    content: (
      <div className="space-y-3">
        <div className="p-3 bg-red-50 text-red-900 rounded-xl border border-red-100 text-sm">
          <strong>Hostile?</strong> Reformulate into neutral terms.
        </div>
        <div className="p-3 bg-amber-50 text-amber-900 rounded-xl border border-amber-100 text-sm">
          <strong>Don't know?</strong> Be honest. "I'll find out for you."
        </div>
        <div className="p-3 bg-blue-50 text-blue-900 rounded-xl border border-blue-100 text-sm">
          <strong>Too early?</strong> Postpone politely. "I'll deal with that later."
        </div>
      </div>
    )
  }
];

export default function Module6() {
  const { setQuizScore } = useProgressStore();
  return (
    <ModuleLayout
      id="module6"
      title="6. Any questions?"
      description="Learn strategies for handling the Q&A session and dealing with difficult questions."
      prevModule="/module/5"
    >
      <ModuleAudio moduleId="module6" narration={MODULE_6_NARRATION} />
      
      <SlideDeck slides={module6Slides} />

      <QASimulation 
        title="Exercise 6: Q&A Simulator"
        description="Choose the best response for audience questions."
      />

      <Quiz 
        id="module6"
        title="Check Your Knowledge: Section 6"
        onComplete={(score) => setQuizScore('module6', score)}
        questions={[
          {
            id: 'm6-q1',
            question: "What is the best way to handle a hostile question?",
            options: ['Ignore it', 'Tell them it is a bad question', 'Reformulate it into neutral terms', 'Ask them to leave'],
            correctAnswer: 2
          },
          {
            id: 'm6-q2',
            question: "True or False: If you don't know the answer, you should always try to guess.",
            options: ['True', 'False'],
            correctAnswer: 1
          }
        ]}
      />
    </ModuleLayout>
  );
}
