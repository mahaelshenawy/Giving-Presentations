import React, { useRef } from 'react';
import { useProgressStore } from '../store/useProgress';
import { Navigate } from 'react-router-dom';
import { Download, Award } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { motion } from 'motion/react';

export default function Certificate() {
  const { userName, modulesCompleted } = useProgressStore();
  const certificateRef = useRef<HTMLDivElement>(null);

  const isFullyCompleted = Object.values(modulesCompleted).every(Boolean);

  if (!isFullyCompleted) {
    return (
      <div className="text-center py-20">
        <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Award className="w-10 h-10 text-slate-400" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Certificate Not Yet Available</h2>
        <p className="text-slate-600 max-w-md mx-auto">You need to complete all 6 modules to unlock your certificate. Keep going, you can do it!</p>
      </div>
    );
  }

  const handleDownload = async () => {
    if (!certificateRef.current) return;
    
    try {
      const canvas = await html2canvas(certificateRef.current, {
        scale: 2,
        useCORS: true,
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'px',
        format: [canvas.width, canvas.height]
      });
      
      pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
      pdf.save(`${userName.replace(/\s+/g, '_')}_Presentations_Certificate.pdf`);
    } catch (error) {
      console.error('Error generating PDF', error);
    }
  };

  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto"
    >
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Your Certificate</h1>
          <p className="text-slate-600 mt-1">Download and share your achievement.</p>
        </div>
        <button
          onClick={handleDownload}
          className="bg-indigo-600 text-white font-medium py-2.5 px-6 rounded-xl hover:bg-indigo-700 transition-colors flex items-center gap-2 shadow-sm"
        >
          <Download className="w-5 h-5" /> Download PDF
        </button>
      </div>

      {/* Certificate Container for PDF generation */}
      <div className="overflow-x-auto pb-8">
        <div 
          ref={certificateRef}
          className="relative bg-white w-[800px] h-[600px] mx-auto border-[16px] border-indigo-900 p-12 flex flex-col items-center justify-center text-center shadow-2xl"
          style={{
            backgroundImage: 'radial-gradient(circle at center, #f8fafc 0%, #ffffff 100%)'
          }}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-32 h-32 border-b-4 border-r-4 border-indigo-200"></div>
          <div className="absolute top-0 right-0 w-32 h-32 border-b-4 border-l-4 border-indigo-200"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 border-t-4 border-r-4 border-indigo-200"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 border-t-4 border-l-4 border-indigo-200"></div>
          
          <Award className="w-20 h-20 text-indigo-600 mb-6" />
          
          <h1 className="text-5xl font-serif font-bold text-slate-900 mb-2 tracking-tight">Certificate of Completion</h1>
          <p className="text-xl text-slate-500 mb-10 uppercase tracking-widest">This is to certify that</p>
          
          <h2 className="text-4xl font-bold text-indigo-700 mb-10 border-b-2 border-indigo-100 pb-4 px-12 inline-block">
            {userName}
          </h2>
          
          <p className="text-lg text-slate-600 mb-4 max-w-lg">
            has successfully completed the comprehensive course
          </p>
          <h3 className="text-2xl font-bold text-slate-900 mb-12">
            English for Presentations Mastery
          </h3>
          
          <div className="flex justify-between w-full max-w-2xl mt-auto pt-8 border-t border-slate-200">
            <div className="text-center">
              <p className="font-bold text-slate-900">{currentDate}</p>
              <p className="text-sm text-slate-500 uppercase tracking-wider mt-1">Date</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-slate-900 font-serif italic text-xl">Oxford Business English</p>
              <p className="text-sm text-slate-500 uppercase tracking-wider mt-1">Provider</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
