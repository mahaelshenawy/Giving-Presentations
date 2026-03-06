import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useProgressStore } from '../store/useProgress';
import { CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';

interface ModuleLayoutProps {
  id: string;
  title: string;
  description: string;
  children: React.ReactNode;
  prevModule?: string;
  nextModule?: string;
}

export default function ModuleLayout({ 
  id, 
  title, 
  description, 
  children, 
  prevModule, 
  nextModule 
}: ModuleLayoutProps) {
  const { modulesCompleted, markModuleCompleted } = useProgressStore();
  const navigate = useNavigate();
  const isCompleted = modulesCompleted[id as keyof typeof modulesCompleted];

  const handleComplete = () => {
    markModuleCompleted(id);
    if (nextModule) {
      navigate(nextModule);
    } else {
      navigate('/certificate');
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto pb-20 px-4 sm:px-6"
    >
      <header className="mb-12 pt-8">
        <div className="flex items-center gap-4 mb-3">
          <div className="h-10 w-1 bg-indigo-600 rounded-full"></div>
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">{title}</h1>
          {isCompleted && <CheckCircle className="w-8 h-8 text-emerald-500 fill-emerald-50" />}
        </div>
        <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-2xl">{description}</p>
      </header>

      <div className="space-y-12">
        {children}
      </div>

      <div className="mt-16 pt-8 border-t border-slate-200 flex items-center justify-between">
        {prevModule ? (
          <button
            onClick={() => navigate(prevModule)}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 font-medium py-2 px-4 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Previous Module
          </button>
        ) : (
          <div></div>
        )}

        <button
          onClick={handleComplete}
          className={`flex items-center gap-2 font-medium py-3 px-6 rounded-xl transition-colors shadow-sm ${
            isCompleted 
              ? 'bg-slate-100 text-slate-700 hover:bg-slate-200' 
              : 'bg-indigo-600 text-white hover:bg-indigo-700'
          }`}
        >
          {isCompleted ? 'Continue' : 'Mark as Completed'} 
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
}
