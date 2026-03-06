import React from 'react';
import ModuleLayout from '../components/ModuleLayout';
import ModuleAudio from '../components/ModuleAudio';
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
  return (
    <ModuleLayout
      id="module6"
      title="6. Any questions?"
      description="Learn strategies for handling the Q&A session, dealing with difficult questions, and maintaining control."
      prevModule="/module/5"
    >
      <ModuleAudio moduleId="module6" narration={MODULE_6_NARRATION} />
      <div className="relative rounded-3xl overflow-hidden mb-12 h-64 group">
        <img 
          src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1000" 
          alt="Q&A Session" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8">
          <p className="text-white font-medium text-lg">Confidence in Q&A turns questions into opportunities.</p>
        </div>
      </div>

      <section className="prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Handling Questions</h2>
        <p className="text-slate-600 mb-6">
          The Q&A session can be the most unpredictable part of a presentation. Preparation and knowing how to handle different types of questions will give you confidence.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h4 className="font-bold text-slate-900 mb-2">Clarifying & Admitting</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><strong>Clarifying:</strong> "If I understood you correctly, you would like to know..." or "Could you repeat your question, please?"</li>
              <li><strong>Admitting you don't know:</strong> "I'm afraid I don't know that off the top of my head, but I'll try to find out for you." or "I'm afraid I'm not the right person to answer that."</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h4 className="font-bold text-slate-900 mb-2">Postponing & Reformulating</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><strong>Postponing:</strong> "Perhaps we could go over this after the presentation." or "If you don't mind, I'll deal with this question later in my presentation."</li>
              <li><strong>Reformulating (Hostile):</strong> Change "Isn't there a better solution?" to "What would be a better solution?" or "You're asking whether..."</li>
            </ul>
          </div>
        </div>

        <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100 mb-8">
          <h4 className="font-bold text-amber-900 mb-4">Coaching Notes: The Q&A Process</h4>
          <ol className="list-decimal pl-5 space-y-2 text-sm text-amber-800 mb-4">
            <li><strong>Listen:</strong> Pay close attention to the questioner. Don't interrupt.</li>
            <li><strong>Understand:</strong> Ensure you understand the question before answering. Paraphrase if necessary.</li>
            <li><strong>Communicate:</strong> Answer clearly and concisely. Address the whole audience, not just the questioner.</li>
            <li><strong>Check:</strong> Briefly confirm that you have answered the question satisfactorily.</li>
          </ol>
          <h5 className="font-bold text-sm text-amber-900 mb-2">Handling Difficult Questions</h5>
          <ul className="list-disc pl-5 space-y-1 text-sm text-amber-800">
            <li><strong>Hostile questions:</strong> Reformulate them into neutral terms before answering.</li>
            <li><strong>Questions you can't answer:</strong> Be honest. Offer to find out or direct them to someone who knows.</li>
            <li><strong>Off-topic questions:</strong> Politely suggest discussing them after the presentation.</li>
          </ul>
        </div>
      </section>

      <QASimulation 
        title="Exercise 6: Q&A Simulator"
        description="Choose the best response for each audience question or interruption."
        scenarios={qaScenarios}
      />

      <Quiz 
        id="module6"
        title="Check Your Knowledge: Section 6"
        description="Test your strategies for handling the Q&A session."
        onComplete={(score) => setQuizScore('module6', score)}
        questions={[
          {
            id: 'm6-q1',
            question: "What is the best way to handle a hostile question?",
            options: [
              'Ignore it',
              'Tell them it is a bad question',
              'Reformulate it into neutral terms',
              'Ask them to leave'
            ],
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
            question: "What is the final step in the Q&A Process coaching notes?",
            options: ['Listen', 'Understand', 'Communicate', 'Check'],
            correctAnswer: 3
          }
        ]}
      />
    </ModuleLayout>
  );
}
