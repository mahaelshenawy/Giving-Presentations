import React, { useState, useRef } from 'react';
import { Upload, Image as ImageIcon, CheckCircle } from 'lucide-react';

export default function VisualDesignChallenge() {
  const [image, setImage] = useState<string | null>(null);
  const [feedback, setFeedback] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        setIsSubmitted(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (feedback.trim().length > 10) {
      setIsSubmitted(true);
    } else {
      alert('Please provide a more detailed evaluation (at least 10 characters).');
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-900 mb-2">Visual Design Challenge</h3>
      <p className="text-slate-600 mb-6">
        Upload an image of a presentation slide (or use a sample one). Then, evaluate it based on the "Rule of Six" and general readability.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div 
            className={`aspect-video rounded-xl border-2 border-dashed flex flex-col items-center justify-center overflow-hidden relative ${
              image ? 'border-slate-200' : 'border-indigo-200 bg-indigo-50 hover:bg-indigo-100 cursor-pointer transition-colors'
            }`}
            onClick={() => !image && fileInputRef.current?.click()}
          >
            {image ? (
              <>
                <img src={image} alt="Uploaded slide" className="w-full h-full object-contain" />
                <button 
                  onClick={(e) => { e.stopPropagation(); setImage(null); setIsSubmitted(false); }}
                  className="absolute top-2 right-2 bg-white/90 text-slate-700 p-1.5 rounded-lg text-xs font-medium shadow-sm hover:bg-white"
                >
                  Change Image
                </button>
              </>
            ) : (
              <>
                <Upload className="w-8 h-8 text-indigo-400 mb-2" />
                <span className="text-sm font-medium text-indigo-600">Click to upload a slide image</span>
                <span className="text-xs text-indigo-400 mt-1">PNG, JPG up to 5MB</span>
              </>
            )}
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleImageUpload} 
              accept="image/*" 
              className="hidden" 
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Evaluate this slide based on:
            <ul className="list-disc pl-5 mt-1 font-normal text-slate-500">
              <li>Rule of Six (max 6 lines, max 6 words per line)</li>
              <li>Font size and readability</li>
              <li>Use of colors and contrast</li>
            </ul>
          </label>
          
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            disabled={!image || isSubmitted}
            className="flex-1 w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all resize-none min-h-[150px]"
            placeholder={image ? "Type your evaluation here..." : "Upload an image first to begin evaluation."}
          />
          
          <div className="mt-4 flex justify-end">
            {!isSubmitted ? (
              <button
                onClick={handleSubmit}
                disabled={!image || feedback.trim().length === 0}
                className={`px-6 py-2.5 font-medium rounded-xl transition-colors ${
                  !image || feedback.trim().length === 0
                    ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                    : 'bg-indigo-600 text-white hover:bg-indigo-700'
                }`}
              >
                Submit Evaluation
              </button>
            ) : (
              <div className="flex items-center gap-2 text-emerald-600 font-medium bg-emerald-50 px-4 py-2 rounded-xl border border-emerald-100">
                <CheckCircle className="w-5 h-5" /> Evaluation saved successfully!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
