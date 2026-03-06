import React from 'react';
import ModuleLayout from '../components/ModuleLayout';
import ModuleAudio from '../components/ModuleAudio';
import SlideDeck from '../components/SlideDeck';
import Flashcards from '../components/Flashcards';
import GraphDescription from '../components/GraphDescription';
import Quiz from '../components/Quiz';
import { useProgressStore } from '../store/useProgress';

const MODULE_4_NARRATION = `In this section, you'll learn how to describe graphs, charts, and trends using professional English. When introducing a visual, always tell your audience what they're looking at. Use phrases like "Let's look at this bar chart which shows our quarterly sales." Explain the axes: "The vertical axis represents revenue, while the horizontal axis shows the time period." To describe trends, you have two grammar patterns. First, Verb plus Adverb — for example, "Sales increased sharply" or "Profits declined steadily." Second, Adjective plus Noun — "There was a sharp increase in sales" or "We saw a steady decline in profits." Here's the key vocabulary you need. For upward trends, use: increase, rise, go up, grow, or peak. For downward trends: decrease, fall, decline, go down, or hit a low. For changing trends: fluctuate, which means to go up and down. And for no change: remain stable or stay the same. You also need adverbs to describe the speed or degree of change. "Sharply" means quickly and suddenly. "Steadily" means gradually and continuously. "Slightly" means by a small amount. And "dramatically" means by a very large amount. When highlighting key information on a graph, say "I'd like to draw your attention to this sharp increase here" or "As you can see, the overall trend is positive."`;

const trendCards = [
  { id: '1', front: 'to increase', back: 'to go up / to rise', category: 'Upward Trend' },
  { id: '2', front: 'to decrease', back: 'to go down / to fall / to decline', category: 'Downward Trend' },
  { id: '3', front: 'to fluctuate', back: 'to go up and down', category: 'Changing Trend' },
  { id: '4', front: 'to remain stable', back: 'to stay the same', category: 'No Change' },
  { id: '5', front: 'to peak', back: 'to reach a high point', category: 'Upward Trend' },
  { id: '6', front: 'to hit a low', back: 'to reach the lowest point', category: 'Downward Trend' },
];

const module4Slides = [
  {
    id: 'trends',
    title: 'Describing Trends',
    image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=1000',
    content: (
      <div className="space-y-4">
        <p>Use two powerful grammar patterns to describe change:</p>
        <div className="space-y-3">
          <div className="bg-white p-4 rounded-xl border border-indigo-100 shadow-sm">
            <p className="text-xs font-bold text-indigo-600 uppercase">Pattern 1: Verb + Adverb</p>
            <p className="text-lg">"Sales <strong className="text-indigo-900">increased sharply</strong>."</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-indigo-100 shadow-sm">
            <p className="text-xs font-bold text-indigo-600 uppercase">Pattern 2: Adj + Noun</p>
            <p className="text-lg">"There was a <strong className="text-indigo-900">sharp increase</strong>."</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'axes',
    title: 'Introducing Visuals',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
    content: (
      <div className="space-y-4">
        <p>Never assume the audience understands your chart. Explain it:</p>
        <div className="space-y-2 text-sm italic border-l-4 border-indigo-200 pl-4 bg-slate-50 p-4 rounded-r-xl">
          <p>"The <strong className="text-indigo-600">vertical axis</strong> represents revenue..."</p>
          <p>"The <strong className="text-indigo-600">horizontal axis</strong> shows time..."</p>
          <p>"I'd like to draw your <strong className="text-indigo-600">attention</strong> to..."</p>
        </div>
      </div>
    )
  }
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
      <ModuleAudio moduleId="module4" narration={MODULE_4_NARRATION} />
      
      <SlideDeck slides={module4Slides} />

      <Flashcards 
        title="Exercise 4a: Trend Vocabulary"
        description="Review common verbs and adverbs for describing trends."
        cards={trendCards}
      />

      <GraphDescription 
        title="Exercise 4b: Describe the Graph"
        description="Write a short description of the trend shown below."
        keywords={['increase', 'rise', 'steadily', 'gradually', 'trend', 'sales']}
      />

      <Quiz 
        id="module4"
        title="Check Your Knowledge: Section 4"
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
          }
        ]}
      />
    </ModuleLayout>
  );
}
