import React from 'react';
import ModuleLayout from '../components/ModuleLayout';
import Flashcards from '../components/Flashcards';
import GraphDescription from '../components/GraphDescription';

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
  return (
    <ModuleLayout
      id="module4"
      title="4. As you can see from this graph..."
      description="Learn how to describe different types of visuals and explain trends using appropriate vocabulary."
      prevModule="/module/3"
      nextModule="/module/5"
    >
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
    </ModuleLayout>
  );
}
