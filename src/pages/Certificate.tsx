import React, { useRef, useState } from 'react';
import { useProgressStore } from '../store/useProgress';
import { Download, Award, ShieldCheck, Globe, Loader2 } from 'lucide-react';
import { toPng } from 'html-to-image';
import jsPDF from 'jspdf';
import { motion } from 'motion/react';

export default function Certificate() {
  const { userName, modulesCompleted, completionDate } = useProgressStore();
  const certificateRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const isFullyCompleted = Object.values(modulesCompleted).every(Boolean);

  if (!isFullyCompleted) {
    return (
      <div className="text-center py-20">
        <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Award className="w-10 h-10 text-slate-400" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Certificate Not Yet Available</h2>
        <p className="text-slate-600 max-w-md mx-auto">You need to complete all 7 sections to unlock your certificate. Keep going, you can do it!</p>
      </div>
    );
  }

  const handleDownload = async () => {
    if (!certificateRef.current || isDownloading) return;
    setIsDownloading(true);
    
    try {
      const element = certificateRef.current;
      
      // Use html-to-image for better reliability than html2canvas
      const dataUrl = await toPng(element, {
        quality: 1.0,
        pixelRatio: 2,
        backgroundColor: '#ffffff',
        width: 1000,
        height: 700,
        cacheBust: true,
      });
      
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'px',
        format: [1000, 700]
      });
      
      pdf.addImage(dataUrl, 'PNG', 0, 0, 1000, 700);
      pdf.save(`${userName.replace(/\s+/g, '_')}_Presentations_Mastery_Certificate.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Could not generate PDF. Please try again or take a screenshot of this page.');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-5xl mx-auto"
    >
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Your Official Certificate</h1>
          <p className="text-slate-600 mt-1">A testament to your mastery of professional English presentations.</p>
        </div>
        <button
          onClick={handleDownload}
          disabled={isDownloading}
          className="bg-indigo-600 text-white font-semibold py-3 px-8 rounded-xl hover:bg-indigo-700 transition-all flex items-center gap-2 shadow-lg hover:shadow-indigo-200 active:scale-95 disabled:opacity-70 disabled:cursor-wait"
        >
          {isDownloading ? (
            <><Loader2 className="w-5 h-5 animate-spin" /> Generating...</>
          ) : (
            <><Download className="w-5 h-5" /> Download High-Res PDF</>
          )}
        </button>
      </div>

      <div className="overflow-x-auto pb-12">
        <div 
          ref={certificateRef}
          className="relative bg-white w-[1000px] h-[700px] mx-auto p-16 flex flex-col items-center justify-between text-center shadow-2xl overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
            border: '24px double #312e81'
          }}
        >
          <div className="absolute top-4 left-4 w-40 h-40 border-t-4 border-l-4 border-indigo-200"></div>
          <div className="absolute top-4 right-4 w-40 h-40 border-t-4 border-r-4 border-indigo-200"></div>
          <div className="absolute bottom-4 left-4 w-40 h-40 border-b-4 border-l-4 border-indigo-200"></div>
          <div className="absolute bottom-4 right-4 w-40 h-40 border-b-4 border-r-4 border-indigo-200"></div>
          
          <div className="z-10 w-full">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-20 bg-indigo-200"></div>
              <Award className="w-16 h-16 text-indigo-600" />
              <div className="h-px w-20 bg-indigo-200"></div>
            </div>
            
            <h1 className="text-6xl font-serif font-black text-indigo-950 mb-4 tracking-tight">CERTIFICATE</h1>
            <p className="text-xl text-indigo-600 font-bold uppercase tracking-[0.3em] mb-12">OF COMPLETION</p>
            
            <p className="text-2xl text-slate-500 font-serif italic mb-8">This honors and certifies that</p>
            
            <h2 className="text-6xl font-black text-slate-900 mb-10 border-b-4 border-indigo-600 pb-6 px-16 inline-block min-w-[60%]">
              {userName}
            </h2>
            
            <p className="text-xl text-slate-600 mb-4 max-w-2xl mx-auto leading-relaxed">
              has demonstrated exceptional proficiency and successfully mastered the curriculum of the professional
            </p>
            <h3 className="text-3xl font-black text-indigo-900 mb-12 tracking-tight">
              English for Presentations Mastery Lesson
            </h3>
          </div>
          
          <div className="z-10 flex justify-between w-full max-w-3xl mt-auto pt-12 border-t border-slate-100">
            <div className="text-center flex flex-col items-center">
              <div className="mb-2 text-indigo-600">
                <ShieldCheck className="w-8 h-8 mb-1" />
              </div>
              <p className="font-bold text-slate-900 text-lg">{completionDate || new Date().toLocaleString()}</p>
              <p className="text-xs text-slate-400 uppercase tracking-widest font-bold mt-1">Completion Date & Time</p>
            </div>

            <div className="flex flex-col items-center justify-center">
               <div className="w-24 h-24 rounded-full border-4 border-indigo-100 flex items-center justify-center bg-indigo-50/50 mb-2">
                  <Globe className="w-10 h-10 text-indigo-300" />
               </div>
               <p className="text-[10px] text-slate-400 uppercase tracking-tighter">Verified Achievement</p>
            </div>

            <div className="text-center flex flex-col items-center">
              <div className="mb-4 h-12 flex items-end">
                <p className="font-serif italic text-3xl text-indigo-900">Presentations</p>
              </div>
              <p className="font-bold text-slate-900 text-lg border-t border-slate-900 pt-1 px-4">Mastery Academy</p>
              <p className="text-xs text-slate-400 uppercase tracking-widest font-bold mt-1">Lesson Provider</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}