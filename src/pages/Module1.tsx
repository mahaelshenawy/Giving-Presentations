import React from 'react';
import ModuleLayout from '../components/ModuleLayout';
import DragAndDrop from '../components/DragAndDrop';
import AudioRecorder from '../components/AudioRecorder';
import InteractiveHook from '../components/InteractiveHook';
import Quiz from '../components/Quiz';
import { useProgressStore } from '../store/useProgress';

const wiseItems = [
  { id: 'w', content: 'Welcome the audience (e.g., "Good morning, ladies and gentlemen.")', correctIndex: 0 },
  { id: 'i', content: 'Introduce yourself (e.g., "My name is...")', correctIndex: 1 },
  { id: 's', content: 'Say what the topic is (e.g., "Today I\'d like to talk about...")', correctIndex: 2 },
  { id: 'e', content: 'Explain why the audience will be interested (e.g., "This is relevant to you because...")', correctIndex: 3 },
];

export default function Module1() {
  const { setQuizScore } = useProgressStore();
  return (
    <ModuleLayout
      id="module1"
      title="1. Let's get started"
      description="Learn how to open a presentation confidently, introduce yourself, and state your topic clearly."
      prevModule="/module/0"
      nextModule="/module/2"
    >
      <div className="relative rounded-3xl overflow-hidden mb-12 h-64 group">
        <img 
          src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=1000" 
          alt="Public speaking" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8">
          <p className="text-white font-medium text-lg">Confidence starts with a strong opening.</p>
        </div>
      </div>

      <section className="prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">The WISE Flow</h2>
        <p className="text-slate-600 mb-6">
          A successful presentation starts with a strong opening. The <strong>WISE</strong> flow is a simple and effective structure to get your presentation off to a great start.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100 shadow-sm hover:shadow-md transition-shadow">
            <h4 className="font-bold text-indigo-900 mb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-indigo-200 text-indigo-700 flex items-center justify-center text-xs">W</span>
              Welcome
            </h4>
            <p className="text-sm text-indigo-800 italic">"Good morning, ladies and gentlemen. First of all, let me thank you all for coming here today."</p>
          </div>
          <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100 shadow-sm hover:shadow-md transition-shadow">
            <h4 className="font-bold text-indigo-900 mb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-indigo-200 text-indigo-700 flex items-center justify-center text-xs">I</span>
              Introduce
            </h4>
            <p className="text-sm text-indigo-800 italic">"Let me introduce myself. I'm Jane Doe, the new Marketing Manager."</p>
          </div>
          <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100 shadow-sm hover:shadow-md transition-shadow">
            <h4 className="font-bold text-indigo-900 mb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-indigo-200 text-indigo-700 flex items-center justify-center text-xs">S</span>
              Say Topic
            </h4>
            <p className="text-sm text-indigo-800 italic">"What I'd like to present to you today is our new product line."</p>
          </div>
          <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100 shadow-sm hover:shadow-md transition-shadow">
            <h4 className="font-bold text-indigo-900 mb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-indigo-200 text-indigo-700 flex items-center justify-center text-xs">E</span>
              Explain Relevance
            </h4>
            <p className="text-sm text-indigo-800 italic">"My talk is particularly relevant to those of you who work in sales."</p>
          </div>
        </div>
      </section>

      <section className="prose prose-slate max-w-none mt-12 mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Speaker Script Examples</h2>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <div>
            <h4 className="font-bold text-slate-900 mb-2">Welcoming and Introducing (W & I)</h4>
            <p className="text-sm text-slate-600 mb-2"><strong>Formal:</strong> Good morning, ladies and gentlemen. First of all, let me thank you all for being here today. Let me introduce myself. My name is [Name] and I am the [Position] at [Company].</p>
            <p className="text-sm text-slate-600"><strong>Less Formal:</strong> Hi, everyone. It's good to see you all here. I'm [Name], and I'm in charge of [Department/Function].</p>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-2">The Topic and Relevance (S & E)</h4>
            <p className="text-sm text-slate-600">Today I'd like to talk to you about [Topic]. As you can see on the screen, our topic today is of particular interest to those of you who work in [Industry/Department]. This is extremely important for all of us because, by the end of this talk, you will be familiar with our new strategy.</p>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-2">Structural Overview and Logistics</h4>
            <p className="text-sm text-slate-600 mb-3">I've divided my presentation into three main parts. First, I'll be looking at Point 1. Second, I'll focus on Point 2, and finally, I'll offer some solutions regarding Point 3.</p>
            <p className="text-sm text-slate-600 italic">Regarding logistics: my presentation will take about 20 minutes. There is no need to take notes; I'll be handing out copies of the PowerPoint slides at the end of my talk. Finally, there will be time for questions after my presentation. (OR: Please feel free to interrupt me at any time during my talk if you have questions.)</p>
          </div>
        </div>
      </section>

      <section className="prose prose-slate max-w-none mt-12 mb-8">
        <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100">
          <h2 className="text-2xl font-bold text-amber-900 mb-4">Coaching Notes: Attention-Grabbing Openers</h2>
          <p className="text-amber-800 mb-4 text-sm">To ensure you capture interest within the first few minutes, try these techniques:</p>
          <ol className="list-decimal pl-5 space-y-3 text-sm text-amber-800">
            <li><strong>Ask a rhetorical question:</strong> "Do we really need quality assurance?"</li>
            <li><strong>Start with an interesting fact:</strong> "Did you know that fast food consumption has increased by 600% in Europe since 2002?"</li>
            <li><strong>Tell a story or anecdote:</strong> "I remember a meeting I attended in Paris where..."</li>
            <li><strong>Give them a problem to think about:</strong> "Imagine you had to reorganize the sales department. What would be your first step?"</li>
          </ol>
        </div>

        <InteractiveHook 
          title="Practice Your Hook"
          description="Based on the techniques above, write your own attention-grabbing opener for a presentation about 'The Future of Remote Work'."
          placeholder="e.g., 'Did you know that 70% of employees would trade their office snacks for one more day of working from home?'"
        />
      </section>

      <DragAndDrop 
        title="Exercise 1: Order the Opening"
        description="Drag and drop the steps into the correct WISE order for opening a presentation."
        items={wiseItems}
      />

      <section className="prose prose-slate max-w-none mt-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Dealing with Nervousness</h2>
        <ul className="space-y-2 text-slate-600 list-disc pl-5">
          <li><strong>Prepare well:</strong> "Failing to prepare is preparing to fail." Know exactly what you want to say.</li>
          <li><strong>Learn to relax:</strong> Do stretching or breathing exercises before your talk.</li>
          <li><strong>Check out the room:</strong> Arrive early, walk around, and make sure equipment works.</li>
          <li><strong>Know your audience:</strong> Greet people as they arrive to build rapport.</li>
          <li><strong>Visualize success:</strong> Imagine yourself speaking in a loud, clear voice.</li>
        </ul>
      </section>

      <AudioRecorder 
        prompt="Record yourself opening a presentation using the WISE flow. Imagine you are introducing a new software tool to your colleagues."
      />

      <Quiz 
        id="module1"
        title="Check Your Knowledge: Module 1"
        description="Test your understanding of the WISE flow and opening techniques."
        onComplete={(score) => setQuizScore('module1', score)}
        questions={[
          {
            id: 'm1-q1',
            question: "What does the 'S' in the WISE flow stand for?",
            options: ['Summary', 'Say Topic', 'Start Strong', 'Solution'],
            correctAnswer: 1
          },
          {
            id: 'm1-q2',
            question: "True or False: In a formal presentation, you should wait until the end for questions.",
            options: ['True', 'False'],
            correctAnswer: 0
          },
          {
            id: 'm1-q3',
            question: "Complete the phrase: 'My talk is particularly ___ to those of you who work in sales.'",
            options: ['interesting', 'relevant', 'important', 'useful'],
            correctAnswer: 1
          }
        ]}
      />
    </ModuleLayout>
  );
}
