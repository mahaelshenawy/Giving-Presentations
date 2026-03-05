import React from 'react';
import ModuleLayout from '../components/ModuleLayout';
import QASimulation from '../components/QASimulation';

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
  return (
    <ModuleLayout
      id="module6"
      title="6. Any questions?"
      description="Learn strategies for handling the Q&A session, dealing with difficult questions, and maintaining control."
      prevModule="/module/5"
    >
      <section className="prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Handling Questions</h2>
        <p className="text-slate-600 mb-6">
          The Q&A session can be the most unpredictable part of a presentation. Preparation and knowing how to handle different types of questions will give you confidence.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h4 className="font-bold text-slate-900 mb-2">Clarifying & Admitting</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><strong>Clarifying:</strong> "If I understood you correctly, you would like to know..."</li>
              <li><strong>Admitting you don't know:</strong> "I'm afraid I don't know that off the top of my head, but I'll try to find out for you."</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h4 className="font-bold text-slate-900 mb-2">Postponing & Reformulating</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><strong>Postponing:</strong> "Perhaps we could go over this after the presentation."</li>
              <li><strong>Reformulating (Hostile):</strong> Change "Isn't there a better solution?" to "What would be a better solution?"</li>
            </ul>
          </div>
        </div>
      </section>

      <QASimulation 
        title="Exercise 6: Q&A Simulator"
        description="Choose the best response for each audience question or interruption."
        scenarios={qaScenarios}
      />
    </ModuleLayout>
  );
}
