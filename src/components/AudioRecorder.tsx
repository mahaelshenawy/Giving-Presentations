import React, { useState, useRef } from 'react';
import { Mic, Square, Play, RotateCcw, Sparkles, CheckCircle2 } from 'lucide-react';

export default function AudioRecorder({ prompt }: { prompt: string }) {
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState<string | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
        const url = URL.createObjectURL(audioBlob);
        setAudioURL(url);
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch (error) {
      console.error('Error accessing microphone:', error);
      alert('Could not access microphone. Please ensure permissions are granted.');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
    }
  };

  const resetRecording = () => {
    setAudioURL(null);
    audioChunksRef.current = [];
  };

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-900 mb-2">Role-play Exercise</h3>
      <p className="text-slate-600 mb-6">{prompt}</p>

      <div className="flex flex-col items-center justify-center p-8 bg-slate-50 rounded-xl border border-slate-100">
        {!audioURL ? (
          <div className="flex flex-col items-center">
            <button
              onClick={isRecording ? stopRecording : startRecording}
              className={`w-16 h-16 rounded-full flex items-center justify-center transition-all ${
                isRecording 
                  ? 'bg-red-100 text-red-600 hover:bg-red-200 animate-pulse' 
                  : 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200'
              }`}
            >
              {isRecording ? <Square className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
            </button>
            <p className="mt-4 text-sm font-medium text-slate-500">
              {isRecording ? 'Recording... Click to stop' : 'Click to start recording'}
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center w-full max-w-md">
            <audio src={audioURL} controls className="w-full mb-6" />
            <div className="flex gap-4">
              <button
                onClick={resetRecording}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <RotateCcw className="w-4 h-4" /> Try Again
              </button>
            </div>
            
            <div className="mt-6 w-full p-6 bg-indigo-50 border border-indigo-100 rounded-xl text-sm">
              <div className="flex items-center gap-2 text-indigo-700 font-bold mb-3">
                <Sparkles className="w-4 h-4" />
                <span>AI Coaching Analysis</span>
              </div>
              <p className="text-indigo-900 mb-4">
                Great job on completing the exercise! While I can't "hear" you, here is what a professional coach would look for in your recording:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-indigo-800"><strong>Pacing:</strong> Did you speak about 20% slower than usual? This helps non-native speakers follow you easily.</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-indigo-800"><strong>Energy:</strong> Does your voice sound enthusiastic? High energy at the start builds immediate rapport.</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-indigo-800"><strong>Structure:</strong> Did you hit all 4 WISE points (Welcome, Introduce, Say Topic, Explain)?</span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-indigo-100 flex items-center justify-between">
                <span className="text-xs font-medium text-indigo-500 uppercase tracking-wider">Self-Assessment Score:</span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <button key={s} className="w-6 h-6 rounded-md bg-white border border-indigo-200 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors text-xs font-bold">
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
