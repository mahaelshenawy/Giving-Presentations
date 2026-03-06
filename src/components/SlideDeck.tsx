import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, CheckCircle2, PlayCircle } from 'lucide-react';

interface Slide {
  id: string;
  title: string;
  content: React.ReactNode;
  image?: string;
  accent?: string;
}

interface SlideDeckProps {
  slides: Slide[];
  onComplete?: () => void;
}

export default function SlideDeck({ slides, onComplete }: SlideDeckProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(prev => prev + 1);
    } else if (onComplete) {
      onComplete();
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden flex flex-col min-h-[500px]">
      {/* Progress Bar */}
      <div className="h-1.5 w-full bg-slate-100 flex">
        {slides.map((_, index) => (
          <div 
            key={index}
            className={`h-full transition-all duration-500 ${
              index <= currentSlide ? 'bg-indigo-600' : 'bg-transparent'
            }`}
            style={{ width: `${100 / slides.length}%` }}
          />
        ))}
      </div>

      <div className="flex-1 relative flex flex-col md:flex-row">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="flex-1 p-8 md:p-12 flex flex-col justify-center"
          >
            <div className="mb-6">
              <span className="inline-block px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-4">
                Slide {currentSlide + 1} of {slides.length}
              </span>
              <h3 className="text-3xl font-black text-slate-900 leading-tight">
                {slides[currentSlide].title}
              </h3>
            </div>
            
            <div className="prose prose-slate max-w-none text-slate-600 text-lg leading-relaxed">
              {slides[currentSlide].content}
            </div>
          </motion.div>
        </AnimatePresence>

        {slides[currentSlide].image && (
          <div className="hidden md:block w-1/3 relative overflow-hidden bg-slate-100 border-l border-slate-100">
            <img 
              src={slides[currentSlide].image} 
              alt={slides[currentSlide].title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/10" />
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`flex items-center gap-2 font-bold py-2 px-4 rounded-xl transition-all ${
            currentSlide === 0 
              ? 'text-slate-300 cursor-not-allowed' 
              : 'text-slate-600 hover:bg-white hover:shadow-sm'
          }`}
        >
          <ChevronLeft className="w-5 h-5" /> Previous
        </button>

        <button
          onClick={nextSlide}
          className="flex items-center gap-2 bg-indigo-600 text-white font-bold py-3 px-8 rounded-2xl hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-200 transition-all active:scale-95"
        >
          {currentSlide === slides.length - 1 ? (
            <>Finish Section <CheckCircle2 className="w-5 h-5" /></>
          ) : (
            <>Next Slide <ChevronRight className="w-5 h-5" /></>
          )}
        </button>
      </div>
    </div>
  );
}
