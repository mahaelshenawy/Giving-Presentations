import React from 'react';
import ModuleLayout from '../components/ModuleLayout';
import ModuleAudio from '../components/ModuleAudio';
import SlideDeck from '../components/SlideDeck';
import Quiz from '../components/Quiz';
import { useProgressStore } from '../store/useProgress';

const MODULE_0_NARRATION = `Welcome to Presentations Mastery! This is your introductory module. Before we begin learning the specific language and techniques you'll need, please take a moment to watch the video below. It covers the five essential steps for mastering any presentation. I recommend taking notes as you watch, because you'll be answering questions about the content afterwards. The five stages are: starting strong, guiding your audience, using visuals effectively, finishing strong, and mastering the question and answer session. Take your time with the video, and when you're ready, scroll down to complete the quiz. Good luck!`;

const module0Slides = [
  {
    id: 'intro',
    title: 'Welcome to Mastery',
    image: 'https://images.unsplash.com/photo-1540317580384-e5d43867caa6?auto=format&fit=crop&q=80&w=1000',
    content: (
      <div className="space-y-4">
        <p>Welcome to your journey in professional presentation mastery. In this lesson, we break down the art of public speaking into manageable, powerful steps.</p>
        <p>Watch the introductory video to see the big picture before we dive into the details.</p>
      </div>
    )
  },
  {
    id: 'stages',
    title: 'The 5 Key Stages',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=1000',
    content: (
      <div className="space-y-3">
        {[
          { n: 1, t: 'Start Strong', d: 'Hook your audience from the first word.' },
          { n: 2, t: 'Guide Them', d: 'Use clear signposting for structure.' },
          { n: 3, t: 'Use Visuals', d: "Show, don't just tell. Keep it clean." },
          { n: 4, t: 'Finish Strong', d: 'Leave a lasting, powerful impression.' },
          { n: 5, t: 'Master Q&A', d: 'Handle any question with confidence.' }
        ].map(s => (
          <div key={s.n} className="flex gap-3 items-center bg-white p-2 rounded-lg border border-slate-100 shadow-sm">
            <div className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-bold">{s.n}</div>
            <div>
              <p className="font-bold text-sm leading-none">{s.t}</p>
              <p className="text-xs text-slate-500">{s.d}</p>
            </div>
          </div>
        ))}
      </div>
    )
  }
];

export default function Module0() {
  const { setQuizScore } = useProgressStore();
  return (
    <ModuleLayout
      id="module0"
      title="0. Give a Killer Presentation"
      description="Watch this introductory video to learn the 5 essential steps for mastering any presentation."
      nextModule="/module/1"
    >
      <ModuleAudio moduleId="module0" narration={MODULE_0_NARRATION} />
      
      <SlideDeck slides={module0Slides} />

      <section className="mt-12 mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 text-center">Watch the Overview</h2>
        <div className="aspect-video bg-slate-900 rounded-3xl overflow-hidden relative shadow-2xl">
          <video 
            controls 
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1540317580384-e5d43867caa6?auto=format&fit=crop&q=80&w=1000"
          >
            <source src="./presentation.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <Quiz
        id="module0"
        title="Check Your Knowledge: Introduction"
        description="Test your understanding of the 5 key stages covered in the video."
        onComplete={(score) => setQuizScore('module0', score)}
        questions={[
          {
            id: 'm0-q1',
            question: "What does the WISE flow stand for?",
            options: ['Welcome, Introduce, Say, Explain', 'Write, Inform, Speak, Engage', 'Welcome, Inspire, Summarize, End', 'Watch, Introduce, Speak, Explain'],
            correctAnswer: 0
          },
          {
            id: 'm0-q2',
            question: "Which of the following is NOT mentioned as a way to hook your audience at the start?",
            options: ['Ask a question', 'Share a statistic', 'Read directly from your slides', 'Tell a story'],
            correctAnswer: 2
          },
          {
            id: 'm0-q3',
            question: "What is the purpose of 'signposting' in a presentation?",
            options: ['To decorate your slides with visual signs', 'To guide the audience through the structure of your talk', 'To signal that the presentation is over', 'To point at the screen during your talk'],
            correctAnswer: 1
          },
          {
            id: 'm0-q4',
            question: "According to the video, which type of visual is best for comparing data?",
            options: ['Flowcharts', 'Photographs', 'Bar charts', 'Word clouds'],
            correctAnswer: 2
          },
          {
            id: 'm0-q5',
            question: "What is the 'sandwich' technique for concluding a presentation?",
            options: ['Serving food during the conclusion to keep the audience engaged', 'Placing the most important data between two less important points', 'Tying the conclusion back to something from the introduction', 'Breaking the conclusion into three equal layers'],
            correctAnswer: 2
          },
          {
            id: 'm0-q6',
            question: "True or False: If you receive a tough question and don't know the answer, you should make up a response to maintain credibility.",
            options: ['True', 'False'],
            correctAnswer: 1
          },
          {
            id: 'm0-q7',
            question: "How many key stages for mastering a presentation are covered in the video?",
            options: ['3', '4', '5', '6'],
            correctAnswer: 2
          },
          {
            id: 'm0-q8',
            question: "Which of the following is a recommended way to finish a presentation strongly?",
            options: ['Apologize for taking too long', 'Introduce new data that wasn\'t covered', 'End with a memorable quote or question', 'Simply stop talking and sit down'],
            correctAnswer: 2
          }
        ]}
      />
    </ModuleLayout>
  );
}
