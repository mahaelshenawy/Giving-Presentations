import React from 'react';
import ModuleLayout from '../components/ModuleLayout';
import Quiz from '../components/Quiz';
import VisualDesignChallenge from '../components/VisualDesignChallenge';

const numberQuestions = [
  {
    id: 'q1',
    question: 'How do you say "1.6bn" in a presentation?',
    options: [
      'One point six billion',
      'One thousand six hundred million',
      'One comma six billion',
      'Sixteen hundred million'
    ],
    correctAnswer: 0
  },
  {
    id: 'q2',
    question: 'How do you say "€150,000"?',
    options: [
      'One hundred fifty thousand euros',
      'One hundred and fifty thousand euros',
      'A hundred fifty thousand euro',
      'One fifty thousand euros'
    ],
    correctAnswer: 1
  },
  {
    id: 'q3',
    question: 'Instead of saying "90,083 mobile phones", what is a better approximate phrase?',
    options: [
      'Exactly ninety thousand and eighty-three',
      'Just over 90,000 mobile phones',
      'Around 100,000 mobile phones',
      'Nearly 90,000 mobile phones'
    ],
    correctAnswer: 1
  }
];

export default function Module3() {
  return (
    <ModuleLayout
      id="module3"
      title="3. My next slide shows..."
      description="Learn how to use presentation tools effectively, present numbers clearly, and design impactful slides."
      prevModule="/module/2"
      nextModule="/module/4"
    >
      <section className="prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">The Rule of Six</h2>
        <p className="text-slate-600 mb-6">
          When presenting text on slides, it is a good idea to use the <strong>Rule of Six</strong> which means:
        </p>
        <ul className="space-y-2 text-slate-600 list-disc pl-5 mb-8">
          <li>A maximum of six lines per slide.</li>
          <li>A maximum of six words per line.</li>
        </ul>
        <p className="text-slate-600">
          If you stick to this rule, you won't risk overloading your bullet charts with too much information.
        </p>
      </section>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6 mb-8 mt-8">
          <h4 className="font-bold text-slate-900 mb-3">Speaker Script Examples</h4>
          <div>
            <h5 className="font-bold text-sm text-slate-700 mb-1">Introducing and Highlighting Visuals</h5>
            <p className="text-sm text-slate-600 italic">Let's now look at the next slide which shows our turnover. I'd like to <strong>stress</strong> the following point: our turnover last year was excellent. What is really <strong>important</strong> is how much we are prepared to invest. I'd like to draw your <strong>attention</strong> to the latest figures in the right-hand column.</p>
          </div>
          <div>
            <h5 className="font-bold text-sm text-slate-700 mb-1">Emphasis Techniques</h5>
            <p className="text-sm text-slate-600 italic">Just how good are these results? I think you'll agree that the results are <strong>extremely important</strong>. We compared the two offers and found the first one <strong>totally unacceptable</strong>. It would be <strong>completely wrong</strong> to change our strategy now.</p>
          </div>
        </div>

        <VisualDesignChallenge />

        <section className="prose prose-slate max-w-none mt-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Saying Numbers</h2>
          <p className="text-slate-600 mb-6">
            Numbers, especially long ones, are often difficult for the audience to understand. Try to say numbers slowly and clearly, and point at them while speaking. It is often better to use approximate numbers in presentations as they are easier for the audience to understand and remember.
          </p>
          
          <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100 mb-8">
            <h4 className="font-bold text-amber-900 mb-4">Quick Reference: Articulating Numbers</h4>
            <ul className="list-disc pl-5 space-y-2 text-sm text-amber-800">
              <li><strong>Fractions:</strong> 2/3 = "two-thirds"; 3/4 = "three-quarters".</li>
              <li><strong>Decimals:</strong> 7.2 = "seven point two".</li>
              <li><strong>Currency:</strong> €150,000 = "one hundred and fifty thousand euro(s)".</li>
              <li><strong>Measurements:</strong> 175 m² = "one hundred and seventy-five square metres".</li>
              <li><strong>The "No S" Rule:</strong> Do NOT add an 's' to hundred, million, or billion when a specific number precedes them. Say "<strong>two million</strong> dollars," NOT "two millions dollars."</li>
            </ul>
          </div>
          
          <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100 mb-8">
            <h4 className="font-bold text-indigo-900 mb-4">Approximation Phrases</h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-indigo-800">
            <div>
              <strong className="block mb-1">- (less)</strong>
              <ul className="list-disc pl-4">
                <li>a little less than</li>
                <li>just under</li>
                <li>nearly</li>
              </ul>
            </div>
            <div>
              <strong className="block mb-1">+/- (about the same)</strong>
              <ul className="list-disc pl-4">
                <li>about</li>
                <li>approximately</li>
                <li>around</li>
                <li>roughly</li>
              </ul>
            </div>
            <div>
              <strong className="block mb-1">+ (more)</strong>
              <ul className="list-disc pl-4">
                <li>just over</li>
                <li>well over</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Quiz 
        title="Exercise 3: Numbers and Approximations"
        description="Test your knowledge on how to say numbers and use approximations correctly in English."
        questions={numberQuestions}
      />
    </ModuleLayout>
  );
}
