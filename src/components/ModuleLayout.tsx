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
  const { modulesCompleted, markModuleCompleted, quizScores } = useProgressStore();
  const navigate = useNavigate();
  const isCompleted = modulesCompleted[id as keyof typeof modulesCompleted];
  
  const requiresQuiz = true;
  const lastScore = quizScores[id];
  const hasAttemptedQuiz = lastScore !== undefined;
  
  // Calculate if they met the 80% threshold
  // We need to know the total questions. For now, we'll assume the quiz component handles the logic
  // but since we only have the score here, we'll check against the requirement.
  // To be precise, I should probably pass the "pass" status from Quiz to store.
  const isPass = hasAttemptedQuiz && lastScore >= 0.8; 
  const canComplete = !requiresQuiz || isPass;

  const handleComplete = () => {
    if (!canComplete) return;
    
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
      className="max-w-none mx-auto pb-20 px-4 sm:px-6 md:px-12"
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

      <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col items-center gap-6">
        {!canComplete && (
          <div className="bg-amber-50 border border-amber-200 text-amber-800 px-4 py-3 rounded-xl text-sm font-medium flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            {hasAttemptedQuiz 
              ? `You scored ${Math.round(lastScore * 100)}%. You need at least 80% on the final assessment slide to complete this module.`
              : "Please complete the assessment on the final slide (score 80%+) to unlock completion."}
          </div>
        )}
        
        <div className="w-full flex items-center justify-between">
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
            disabled={!canComplete && !isCompleted}
            className={`flex items-center gap-2 font-medium py-3 px-6 rounded-xl transition-colors shadow-sm ${
              isCompleted 
                ? 'bg-slate-100 text-slate-700 hover:bg-slate-200' 
                : !canComplete
                ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                : 'bg-indigo-600 text-white hover:bg-indigo-700'
            }`}
          >
            {isCompleted ? 'Continue' : 'Mark as Completed'} 
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
