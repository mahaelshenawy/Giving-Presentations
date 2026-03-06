import React from 'react';
import ModuleLayout from '../components/ModuleLayout';
import Quiz from '../components/Quiz';
import { useProgressStore } from '../store/useProgress';

export default function Module0() {
  const { setQuizScore } = useProgressStore();
  return (
    <ModuleLayout
      id="module0"
      title="0. Give a Killer Presentation"
      description="Watch this introductory video to learn the 5 essential steps for mastering any presentation."
      nextModule="/module/1"
    >
      <section className="prose prose-slate max-w-none mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">5 Steps to Mastery</h2>
        <p className="text-slate-600 mb-6">
          Before we dive into the specific language and phrases you'll need, watch this video to get a high-level overview of what makes a presentation truly successful. 
        </p>
        
        <div className="aspect-video bg-slate-900 rounded-2xl overflow-hidden relative mb-8 shadow-md">
          <video 
            controls 
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1540317580384-e5d43867caa6?auto=format&fit=crop&q=80&w=1000"
          >
            <source src="./presentation.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="text-xl font-bold text-indigo-900 mb-4">Video Summary: The 5 Key Stages</h3>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold flex-shrink-0">1</div>
              <div>
                <h4 className="font-bold text-slate-900 m-0">Start Strong</h4>
                <p className="text-sm text-slate-600 mt-1">Hook your audience from the very first word. Use the WISE flow (Welcome, Introduce, Say, Explain) and grab their attention with a question, statistic, story, or problem.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div>
                <h4 className="font-bold text-slate-900 m-0">Guide Them</h4>
                <p className="text-sm text-slate-600 mt-1">Use clear signposting to structure your talk. Phrases like "Moving on to my next point" act like road signs so nobody gets lost.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold flex-shrink-0">3</div>
              <div>
                <h4 className="font-bold text-slate-900 m-0">Use Visuals</h4>
                <p className="text-sm text-slate-600 mt-1">Show, don't just tell. Use the right visual for the job (e.g., bar charts for comparing, flowcharts for processes) and keep them clean and easy to read.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold flex-shrink-0">4</div>
              <div>
                <h4 className="font-bold text-slate-900 m-0">Finish Strong</h4>
                <p className="text-sm text-slate-600 mt-1">Leave a lasting impression with a powerful conclusion. Summarize, use a quote, ask a question, or use the 'sandwich' technique to tie back to your intro.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold flex-shrink-0">5</div>
              <div>
                <h4 className="font-bold text-slate-900 m-0">Master Q&A</h4>
                <p className="text-sm text-slate-600 mt-1">Handle any questions with confidence. If you get a tough question: ask them to repeat it, say it back, answer it, or be honest if you don't know.</p>
              </div>
            </div>
          </div>
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
            options: [
              'Welcome, Introduce, Say, Explain',
              'Write, Inform, Speak, Engage',
              'Welcome, Inspire, Summarize, End',
              'Watch, Introduce, Speak, Explain'
            ],
            correctAnswer: 0
          },
          {
            id: 'm0-q2',
            question: "Which of the following is NOT mentioned as a way to hook your audience at the start?",
            options: [
              'Ask a question',
              'Share a statistic',
              'Read directly from your slides',
              'Tell a story'
            ],
            correctAnswer: 2
          },
          {
            id: 'm0-q3',
            question: "What is the purpose of 'signposting' in a presentation?",
            options: [
              'To decorate your slides with visual signs',
              'To guide the audience through the structure of your talk',
              'To signal that the presentation is over',
              'To point at the screen during your talk'
            ],
            correctAnswer: 1
          },
          {
            id: 'm0-q4',
            question: "According to the video, which type of visual is best for comparing data?",
            options: [
              'Flowcharts',
              'Photographs',
              'Bar charts',
              'Word clouds'
            ],
            correctAnswer: 2
          },
          {
            id: 'm0-q5',
            question: "What is the 'sandwich' technique for concluding a presentation?",
            options: [
              'Serving food during the conclusion to keep the audience engaged',
              'Placing the most important data between two less important points',
              'Tying the conclusion back to something from the introduction',
              'Breaking the conclusion into three equal layers'
            ],
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
            options: [
              'Apologize for taking too long',
              'Introduce new data that wasn\'t covered',
              'End with a memorable quote or question',
              'Simply stop talking and sit down'
            ],
            correctAnswer: 2
          }
        ]}
      />
    </ModuleLayout>
  );
}