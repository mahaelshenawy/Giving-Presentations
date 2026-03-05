import React from 'react';
import ModuleLayout from '../components/ModuleLayout';
import DragAndDrop from '../components/DragAndDrop';
import AudioRecorder from '../components/AudioRecorder';

const wiseItems = [
  { id: 'w', content: 'Welcome the audience (e.g., "Good morning, ladies and gentlemen.")', correctIndex: 0 },
  { id: 'i', content: 'Introduce yourself (e.g., "My name is...")', correctIndex: 1 },
  { id: 's', content: 'Say what the topic is (e.g., "Today I\'d like to talk about...")', correctIndex: 2 },
  { id: 'e', content: 'Explain why the audience will be interested (e.g., "This is relevant to you because...")', correctIndex: 3 },
];

export default function Module1() {
  return (
    <ModuleLayout
      id="module1"
      title="1. Let's get started"
      description="Learn how to open a presentation confidently, introduce yourself, and state your topic clearly."
      prevModule="/module/0"
      nextModule="/module/2"
    >
      <section className="prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">The WISE Flow</h2>
        <p className="text-slate-600 mb-6">
          A successful presentation starts with a strong opening. The <strong>WISE</strong> flow is a simple and effective structure to get your presentation off to a great start.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="bg-indigo-50 p-5 rounded-xl border border-indigo-100">
            <h4 className="font-bold text-indigo-900 mb-2">W - Welcome</h4>
            <p className="text-sm text-indigo-800">"Good morning, ladies and gentlemen. First of all, let me thank you all for coming here today."</p>
          </div>
          <div className="bg-indigo-50 p-5 rounded-xl border border-indigo-100">
            <h4 className="font-bold text-indigo-900 mb-2">I - Introduce</h4>
            <p className="text-sm text-indigo-800">"Let me introduce myself. I'm Jane Doe, the new Marketing Manager."</p>
          </div>
          <div className="bg-indigo-50 p-5 rounded-xl border border-indigo-100">
            <h4 className="font-bold text-indigo-900 mb-2">S - Say Topic</h4>
            <p className="text-sm text-indigo-800">"What I'd like to present to you today is our new product line."</p>
          </div>
          <div className="bg-indigo-50 p-5 rounded-xl border border-indigo-100">
            <h4 className="font-bold text-indigo-900 mb-2">E - Explain Relevance</h4>
            <p className="text-sm text-indigo-800">"My talk is particularly relevant to those of you who work in sales."</p>
          </div>
        </div>
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
    </ModuleLayout>
  );
}
