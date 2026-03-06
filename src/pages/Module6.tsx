import React from 'react';
import ModuleLayout from '../components/ModuleLayout';
import ModuleAudio from '../components/ModuleAudio';
import SlideDeck from '../components/SlideDeck';
import QASimulation from '../components/QASimulation';
import Quiz from '../components/Quiz';
import { useProgressStore } from '../store/useProgress';

const MODULE_6_NARRATION = `Welcome to the final section of this lesson! Here you'll learn how to handle the question and answer session — often the most unpredictable part of any presentation. The key to a successful Q and A is following the four-step process. Step one: Listen carefully to the question. Don't interrupt the person asking. Step two: Understand the question fully. If needed, paraphrase it back by saying "If I understood you correctly, you would like to know..." Step three: Communicate your answer clearly and concisely. Address the whole audience, not just the person who asked. Step four: Check that you've answered satisfactorily. Now let's talk about handling difficult situations. For clarifying questions, you can say "Could you repeat your question, please?" or paraphrase it to confirm understanding. If you don't know the answer, be honest. Say "I'm afraid I don't know that off the top of my head, but I'll find out for you." Never guess — if you're wrong, you lose credibility. For postponing questions that come too early, say "If you don't mind, I'll deal with this question later in my presentation." And for hostile or aggressive questions, the best technique is to reformulate them into neutral terms. For example, if someone asks "Isn't there a better solution?", rephrase it as "You're asking whether our current approach is the most effective option. Yes, because..." This takes the emotion out of the question and lets you answer professionally.`;

const qaScenarios = [
  {
    id: 's1',
    question: 'I didn\'t quite catch that last point. Could you explain the new timeline again?',
    options: [
      { text: 'You should have listened better. I said it\'s next month.', isCorrect: false, feedback: 'Too aggressive. Always be polite, even if you just said it.' },
      { text: 'I\'m sorry, could you repeat your question, please?', isCorrect: false, feedback: 'They just asked the question clearly, no need to ask them to repeat.' },
      { text: 'Yes, of course. Let me just go back to that slide. The new timeline is...', isCorrect: true, feedback: 'Perfect. Polite, accommodating, and directly answers the question.' }
    ]
  },
  {
    id: 's2',
    question: 'Do you honestly believe we can get this contract with such high prices?',
    options: [
      { text: 'Yes, I do. Next question?', isCorrect: false, feedback: 'Too dismissive. You need to address the concern.' },
      { text: 'You\'re asking whether our pricing strategy is competitive enough to win the contract. Yes, because...', isCorrect: true, feedback: 'Excellent. You reformulated an aggressive question into a neutral one before answering.' },
      { text: 'I don\'t know, that\'s not my department.', isCorrect: false, feedback: 'While honest, it\'s better to offer to find out or direct them to the right person.' }
    ]
  },
  {
    id: 's3',
    question: 'What exactly are the technical specifications of the new server architecture?',
    options: [
      { text: 'I\'m afraid I don\'t know that off the top of my head, but I can find out for you and email you later.', isCorrect: true, feedback: 'Great response. It is perfectly acceptable to admit you don\'t know, as long as you offer to follow up.' },
      { text: 'Let me guess... it\'s probably around 16GB RAM?', isCorrect: false, feedback: 'Never guess. If you are wrong, you lose credibility.' },
      { text: 'That\'s a stupid question, we are talking about marketing today.', isCorrect: false, feedback: 'Never insult the audience. If it\'s off-topic, politely suggest discussing it later.' }
    ]
  },
  {
    id: 's4',
    question: '(Interrupting in the middle of your talk) But what about the budget cuts?!',
    options: [
      { text: 'Please be quiet until the end.', isCorrect: false, feedback: 'Too rude.' },
      { text: 'If you don\'t mind, I\'ll deal with this question later in my presentation.', isCorrect: true, feedback: 'Good way to postpone a question politely and maintain control of the flow.' },
      { text: 'Oh, right, the budget cuts. Well, let\'s talk about that for the next 20 minutes...', isCorrect: false, feedback: 'You just lost control of your presentation structure.' }
    ]
  }
];

export default function Module6() {
  const { setQuizScore } = useProgressStore();

  const module6Slides = [
    {
      id: 'process',
      title: 'The Q&A Process',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1000',
      content: (
        <div className="grid grid-cols-2 gap-4 text-xs">
          <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
            <strong className="text-indigo-600">1. Listen</strong>
            <p>Pay close attention. Don't interrupt.</p>
          </div>
          <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
            <strong className="text-indigo-600">2. Understand</strong>
            <p>Paraphrase if the question is unclear.</p>
          </div>
          <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
            <strong className="text-indigo-600">3. Communicate</strong>
            <p>Address the entire audience.</p>
          </div>
          <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
            <strong className="text-indigo-600">4. Check</strong>
            <p>"Does that answer your question?"</p>
          </div>
        </div>
      )
    },
    {
      id: 'simulator-exercise',
      title: 'Exercise: Q&A Simulator',
      content: (
        <QASimulation 
          title="Handle the Audience"
          description="Choose the most professional response for each scenario."
          scenarios={qaScenarios}
        />
      )
    },
    {
      id: 'difficult',
      title: 'Difficult Situations',
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1000',
      content: (
        <div className="space-y-3">
          <div className="p-3 bg-red-50 text-red-900 rounded-xl border border-red-100 text-sm">
            <strong>Hostile Question?</strong> Reformulate into neutral terms before answering.
          </div>
          <div className="p-3 bg-amber-50 text-amber-900 rounded-xl border border-amber-100 text-sm">
            <strong>Don't know the answer?</strong> Be honest. "I'll find out and get back to you."
          </div>
          <div className="p-3 bg-blue-50 text-blue-900 rounded-xl border border-blue-100 text-sm">
            <strong>Question too early?</strong> Postpone politely. "I'll deal with that later."
          </div>
        </div>
      )
    },
    {
      id: 'quiz-slide',
      title: 'Check Your Knowledge',
      content: (
        <Quiz 
          id="module6"
          title="Module Assessment"
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
            },
            {
              id: 'm6-q3',
              question: "What is the final step in the Q&A Process?",
              options: ['Listen', 'Understand', 'Communicate', 'Check'],
              correctAnswer: 3
            }
          ]}
        />
      )
    }
  ];

  return (
    <ModuleLayout
      id="module6"
      title="6. Any questions?"
      description="Learn strategies for handling the Q&A session and dealing with difficult questions."
      prevModule="/module/5"
    >
      <ModuleAudio moduleId="module6" narration={MODULE_6_NARRATION} />
      <SlideDeck slides={module6Slides} />
    </ModuleLayout>
  );
}
