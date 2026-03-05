import React, { useState, useRef } from 'react';
import { Mic, Square, Play, RotateCcw } from 'lucide-react';

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
            
            <div className="mt-6 w-full p-4 bg-emerald-50 border border-emerald-100 rounded-xl text-sm text-emerald-800">
              <p className="font-semibold mb-1">Self-Assessment Checklist:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Did you speak clearly and at a moderate pace?</li>
                <li>Did you use appropriate formal/informal language?</li>
                <li>Did you follow the structure provided?</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
