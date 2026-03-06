import React from 'react';
import ModuleLayout from '../components/ModuleLayout';
import Flashcards from '../components/Flashcards';
import GraphDescription from '../components/GraphDescription';
import Quiz from '../components/Quiz';
import { useProgressStore } from '../store/useProgress';

const trendCards = [
  { id: '1', front: 'to increase', back: 'to go up / to rise', category: 'Upward Trend' },
  { id: '2', front: 'to decrease', back: 'to go down / to fall / to decline', category: 'Downward Trend' },
  { id: '3', front: 'to fluctuate', back: 'to go up and down', category: 'Changing Trend' },
  { id: '4', front: 'to remain stable', back: 'to stay the same', category: 'No Change' },
  { id: '5', front: 'to peak', back: 'to reach a high point', category: 'Upward Trend' },
  { id: '6', front: 'to hit a low', back: 'to reach the lowest point', category: 'Downward Trend' },
  { id: '7', front: 'sharply', back: 'quickly and suddenly (adverb)', category: 'Speed/Degree' },
  { id: '8', front: 'steadily', back: 'gradually and continuously (adverb)', category: 'Speed/Degree' },
];

export default function Module4() {
  const { setQuizScore } = useProgressStore();
  return (
    <ModuleLayout
      id="module4"
      title="4. As you can see from this graph..."
      description="Learn how to describe different types of visuals and explain trends using appropriate vocabulary."
      prevModule="/module/3"
      nextModule="/module/5"
    >
      <div className="relative rounded-3xl overflow-hidden mb-12 h-64 group">
        <img 
          src="https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=1000" 
          alt="Business trends" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8">
          <p className="text-white font-medium text-lg">Mastering the language of trends leads to clearer insights.</p>
        </div>
      </div>

      <section className="prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Talking About Visuals</h2>
        <p className="text-slate-600 mb-6">
          When introducing a visual, it's important to tell the audience what they are looking at and highlight the key information.
        </p>
        
        <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100 mb-8">
          <h4 className="font-bold text-indigo-900 mb-4">Useful Phrases</h4>
          <ul className="space-y-2 text-indigo-800">
            <li><strong>Introducing:</strong> "Let's look at this bar chart which shows..."</li>
            <li><strong>Explaining:</strong> "The vertical axis represents... while the horizontal axis shows..."</li>
            <li><strong>Highlighting:</strong> "I'd like to draw your attention to this sharp increase here."</li>
            <li><strong>Concluding:</strong> "As you can see, the overall trend is positive."</li>
          </ul>
        </div>
      </section>

      <Flashcards 
        title="Exercise 4a: Trend Vocabulary"
        description="Review these common verbs and adverbs used to describe trends in graphs and charts."
        cards={trendCards}
      />

      <section className="prose prose-slate max-w-none mt-12 mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Describing Trends</h2>
        <p className="text-slate-600">
          You can describe trends using a <strong>Verb + Adverb</strong> (e.g., "Sales increased sharply") or an <strong>Adjective + Noun</strong> (e.g., "There was a sharp increase in sales").
        </p>
      </section>

      <GraphDescription 
        title="Exercise 4b: Describe the Graph"
        description="Look at the bar chart below and write a short description of the trend it shows. Try to use words like 'increase', 'steadily', or 'rise'."
        graphUrl=""
        keywords={['increase', 'increased', 'rise', 'rose', 'steadily', 'gradually', 'upward', 'trend', 'quarters', 'sales']}
      />

      <Quiz 
        id="module4"
        title="Check Your Knowledge: Section 4"
        description="Test your vocabulary for describing trends and visuals."
        onComplete={(score) => setQuizScore('module4', score)}
        questions={[
          {
            id: 'm4-q1',
            question: "Which word describes a trend that goes up and down?",
            options: ['Stable', 'Peak', 'Fluctuate', 'Sharp'],
            correctAnswer: 2
          },
          {
            id: 'm4-q2',
            question: "True or False: 'Sharply' means the same as 'Gradually'.",
            options: ['True', 'False'],
            correctAnswer: 1
          },
          {
            id: 'm4-q3',
            question: "Complete the sentence: 'There was a ___ increase in sales.'",
            options: ['steady', 'steadily', 'rose', 'increased'],
            correctAnswer: 0
          }
        ]}
      />
    </ModuleLayout>
  );
}
