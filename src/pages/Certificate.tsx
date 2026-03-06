import React, { useRef } from 'react';
import { useProgressStore } from '../store/useProgress';
import { Navigate } from 'react-router-dom';
import { Download, Award, ShieldCheck, Globe } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { motion } from 'motion/react';

export default function Certificate() {
  const { userName, modulesCompleted, completionDate } = useProgressStore();
  const certificateRef = useRef<HTMLDivElement>(null);

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
    if (!certificateRef.current) return;
    
    try {
      // Small delay to ensure all DOM elements and icons (Lucide) are fully rendered
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const element = document.querySelector('[data-certificate="true"]') as HTMLElement;
      if (!element) {
        console.error('Certificate element not found');
        return;
      }

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        logging: true, // Enable logging for debugging if it fails
        width: 1000,
        height: 700,
        windowWidth: 1200,
        x: 0,
        y: 0,
        scrollX: 0,
        scrollY: 0
      });
      
      const imgData = canvas.toDataURL('image/jpeg', 1.0);
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'px',
        format: [1000, 700]
      });
      
      pdf.addImage(imgData, 'JPEG', 0, 0, 1000, 700);
      pdf.save(`${userName.replace(/\s+/g, '_')}_Presentations_Mastery_Certificate.pdf`);
    } catch (error) {
      console.error('Error generating PDF', error);
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
          className="bg-indigo-600 text-white font-semibold py-3 px-8 rounded-xl hover:bg-indigo-700 transition-all flex items-center gap-2 shadow-lg hover:shadow-indigo-200 active:scale-95"
        >
          <Download className="w-5 h-5" /> Download High-Res PDF
        </button>
      </div>

      {/* Certificate Container for PDF generation */}
      <div className="overflow-x-auto pb-12">
        <div 
          ref={certificateRef}
          className="relative bg-white w-[1000px] h-[700px] mx-auto border-[24px] border-double border-indigo-900 p-16 flex flex-col items-center justify-between text-center shadow-2xl overflow-hidden"
          data-certificate="true"
          style={{
            backgroundImage: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
            boxSizing: 'border-box'
          }}
        >
          {/* Elegant background watermark pattern */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none pointer-events-none select-none flex flex-wrap justify-center content-center gap-20 rotate-[-15deg]">
             {Array.from({length: 20}).map((_, i) => (
               <Award key={i} size={120} />
             ))}
          </div>

          {/* Decorative Corner Borders */}
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
