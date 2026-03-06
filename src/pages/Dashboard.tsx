import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProgressStore } from '../store/useProgress';
import { PlayCircle, CheckCircle, Award, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Dashboard() {
  const { userName, setUserName, modulesCompleted } = useProgressStore();
  const [nameInput, setNameInput] = useState(userName);
  const navigate = useNavigate();

  const handleSaveName = (e: React.FormEvent) => {
    e.preventDefault();
    if (nameInput.trim()) {
      setUserName(nameInput.trim());
    }
  };

  const completedCount = Object.values(modulesCompleted).filter(Boolean).length;
  const totalModules = 7;
  const progressPercentage = Math.round((completedCount / totalModules) * 100);

  if (!userName) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md mx-auto mt-20 p-8 bg-white rounded-2xl shadow-sm border border-slate-100"
      >
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Award className="w-8 h-8 text-indigo-600" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Welcome to Presentations Mastery</h1>
          <p className="text-slate-600">Please enter your name to begin. <strong>Note:</strong> This name will appear exactly as typed on your official certificate of completion of this lesson.</p>
        </div>
        
        <form onSubmit={handleSaveName} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
            <input
              type="text"
              id="name"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              placeholder="e.g. Jane Doe"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-medium py-3 px-4 rounded-xl hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
          >
            Start Learning <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      <header className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight mb-2">Welcome back, {userName}!</h1>
          <p className="text-slate-600 max-w-2xl">Continue your journey to mastering English presentations. You've completed {completedCount} out of {totalModules} sections of this lesson.</p>
        </div>
        
        <div className="w-full md:w-64 bg-slate-50 p-4 rounded-2xl border border-slate-100">
          <div className="flex justify-between text-sm font-medium mb-2">
            <span className="text-slate-700">Lesson Progress</span>
            <span className="text-indigo-600">{progressPercentage}%</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
            <div 
              className="bg-indigo-600 h-2.5 rounded-full transition-all duration-1000 ease-out" 
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { id: 'module0', title: '0. Give a Killer Presentation', desc: 'Watch the introductory video on the 5 steps to mastery.' },
          { id: 'module1', title: '1. Let\'s get started', desc: 'Welcoming, introducing, and dealing with nerves.' },
          { id: 'module2', title: '2. Today\'s topic is...', desc: 'Body language and signposting your talk.' },
          { id: 'module3', title: '3. My next slide shows...', desc: 'Presentation tools and using numbers.' },
          { id: 'module4', title: '4. As you can see...', desc: 'Describing graphs, charts, and trends.' },
          { id: 'module5', title: '5. To sum up...', desc: 'Concluding and summarizing effectively.' },
          { id: 'module6', title: '6. Any questions?', desc: 'Handling the Q&A session with confidence.' },
        ].map((mod, index) => {
          const isCompleted = modulesCompleted[mod.id as keyof typeof modulesCompleted];
          const isNext = !isCompleted && (index === 0 || modulesCompleted[`module${index - 1}` as keyof typeof modulesCompleted]);
          
          return (
            <div 
              key={mod.id} 
              className={`relative bg-white p-6 rounded-2xl border transition-all ${
                isCompleted ? 'border-emerald-200 shadow-sm' : 
                isNext ? 'border-indigo-300 shadow-md ring-1 ring-indigo-100' : 
                'border-slate-100 opacity-75'
              }`}
            >
              {isCompleted && (
                <div className="absolute top-4 right-4">
                  <CheckCircle className="w-6 h-6 text-emerald-500" />
                </div>
              )}
              
              <h3 className="text-lg font-bold text-slate-900 mb-2 pr-8">{mod.title}</h3>
              <p className="text-sm text-slate-600 mb-6 h-10">{mod.desc}</p>
              
              <button
                onClick={() => navigate(`/module/${index}`)}
                className={`w-full py-2.5 px-4 rounded-xl font-medium flex items-center justify-center gap-2 transition-colors ${
                  isCompleted 
                    ? 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100' 
                    : isNext 
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {isCompleted ? 'Review Topic' : isNext ? 'Start Topic' : 'View Topic'}
                {!isCompleted && <PlayCircle className="w-4 h-4" />}
              </button>
            </div>
          );
        })}
      </div>

      {completedCount === totalModules && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-br from-indigo-600 to-violet-700 p-8 rounded-3xl text-white text-center shadow-lg"
        >
          <Award className="w-16 h-16 mx-auto mb-4 text-indigo-200" />
          <h2 className="text-2xl font-bold mb-2">Congratulations!</h2>
          <p className="text-indigo-100 mb-6 max-w-lg mx-auto">You have successfully completed all modules in the English for Presentations Mastery lesson.</p>
          <button
            onClick={() => navigate('/certificate')}
            className="bg-white text-indigo-700 font-bold py-3 px-8 rounded-xl hover:bg-indigo-50 transition-colors shadow-sm"
          >
            Get Your Certificate
          </button>
        </motion.div>
      )}
    </motion.div>
  );
}
