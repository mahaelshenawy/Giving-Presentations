import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Volume2, VolumeX, Pause, Play, Square } from 'lucide-react';

interface ModuleAudioProps {
  moduleId: string;
  narration: string;
}

const PLAYED_KEY = 'module-audio-played';

function getPlayedModules(): string[] {
  try {
    const stored = localStorage.getItem(PLAYED_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

function markAsPlayed(moduleId: string) {
  const played = getPlayedModules();
  if (!played.includes(moduleId)) {
    played.push(moduleId);
    localStorage.setItem(PLAYED_KEY, JSON.stringify(played));
  }
}

function selectBestVoice(): SpeechSynthesisVoice | null {
  const voices = window.speechSynthesis.getVoices();
  if (voices.length === 0) return null;

  const englishVoices = voices.filter(v => v.lang.startsWith('en'));

  const premiumPatterns = [
    'Kore',
    'Karen',
    'Samantha',
    'Google UK English Female',
    'Google UK English Male',
    'Google US English',
    'Microsoft Aria',
    'Microsoft Jenny',
    'Microsoft Guy',
    'Microsoft Zira',
    'Daniel',
    'Moira',
    'Tessa',
    'Fiona',
  ];

  for (const pattern of premiumPatterns) {
    const match = englishVoices.find(v => v.name.toLowerCase().includes(pattern.toLowerCase()));
    if (match) return match;
  }

  const googleVoice = englishVoices.find(v => v.name.includes('Google'));
  if (googleVoice) return googleVoice;

  const naturalVoice = englishVoices.find(v =>
    v.name.toLowerCase().includes('natural') ||
    v.name.toLowerCase().includes('neural') ||
    v.name.toLowerCase().includes('premium') ||
    v.name.toLowerCase().includes('enhanced')
  );
  if (naturalVoice) return naturalVoice;

  const femaleVoice = englishVoices.find(v =>
    v.name.includes('Female') || v.name.includes('Samantha') || v.name.includes('Karen')
  );
  if (femaleVoice) return femaleVoice;

  if (englishVoices.length > 0) return englishVoices[0];

  return voices[0] || null;
}

export default function ModuleAudio({ moduleId, narration }: ModuleAudioProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [supported, setSupported] = useState(true);
  const [voiceName, setVoiceName] = useState('');
  const keepAliveRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const stopSpeech = useCallback(() => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
    setIsPaused(false);
    if (keepAliveRef.current) {
      clearInterval(keepAliveRef.current);
      keepAliveRef.current = null;
    }
  }, []);

  const speak = useCallback(() => {
    if (!window.speechSynthesis) {
      setSupported(false);
      return;
    }

    window.speechSynthesis.cancel();
    if (keepAliveRef.current) {
      clearInterval(keepAliveRef.current);
    }

    const sentences = narration.match(/[^.!?]+[.!?]+/g) || [narration];
    
    let currentIndex = 0;

    const speakNext = () => {
      if (currentIndex >= sentences.length) {
        setIsPlaying(false);
        setIsPaused(false);
        if (keepAliveRef.current) {
          clearInterval(keepAliveRef.current);
          keepAliveRef.current = null;
        }
        return;
      }

      const utterance = new SpeechSynthesisUtterance(sentences[currentIndex].trim());
      utterance.rate = 0.92;
      utterance.pitch = 1.05;
      utterance.volume = 1;

      const bestVoice = selectBestVoice();
      if (bestVoice) {
        utterance.voice = bestVoice;
        if (!voiceName) setVoiceName(bestVoice.name);
      }

      utterance.onend = () => {
        currentIndex++;
        speakNext();
      };

      utterance.onerror = (e) => {
        if (e.error === 'interrupted' || e.error === 'cancelled') return;
        currentIndex++;
        speakNext();
      };

      window.speechSynthesis.speak(utterance);
    };

    keepAliveRef.current = setInterval(() => {
      if (window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
        window.speechSynthesis.pause();
        window.speechSynthesis.resume();
      }
    }, 10000);

    setIsPlaying(true);
    setIsPaused(false);
    speakNext();
  }, [narration, voiceName]);

  useEffect(() => {
    if (!window.speechSynthesis) {
      setSupported(false);
      return;
    }

    const played = getPlayedModules();
    if (played.includes(moduleId)) {
      return;
    }

    const startAutoPlay = () => {
      markAsPlayed(moduleId);
      speak();
    };

    const voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) {
      const timer = setTimeout(startAutoPlay, 1500);
      return () => clearTimeout(timer);
    } else {
      let cleaned = false;
      const handleVoicesChanged = () => {
        if (cleaned) return;
        cleaned = true;
        window.speechSynthesis.removeEventListener('voiceschanged', handleVoicesChanged);
        const timer = setTimeout(startAutoPlay, 1500);
        return () => clearTimeout(timer);
      };
      window.speechSynthesis.addEventListener('voiceschanged', handleVoicesChanged);
      return () => {
        cleaned = true;
        window.speechSynthesis.removeEventListener('voiceschanged', handleVoicesChanged);
      };
    }
  }, [moduleId]);

  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
      if (keepAliveRef.current) {
        clearInterval(keepAliveRef.current);
      }
    };
  }, []);

  if (!supported) return null;

  const handlePlayPause = () => {
    if (isPlaying && !isPaused) {
      window.speechSynthesis.pause();
      setIsPaused(true);
    } else if (isPlaying && isPaused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
    } else {
      speak();
    }
  };

  return (
    <div className="flex items-center gap-3 bg-gradient-to-r from-indigo-50 to-violet-50 border border-indigo-100 rounded-2xl px-5 py-3 mb-8 shadow-sm">
      <button
        onClick={handlePlayPause}
        className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center hover:bg-indigo-700 transition-all active:scale-95 flex-shrink-0 shadow-md"
        title={isPlaying && !isPaused ? 'Pause narration' : 'Play narration'}
      >
        {isPlaying && !isPaused ? (
          <Pause className="w-4 h-4" />
        ) : (
          <Play className="w-4 h-4 ml-0.5" />
        )}
      </button>

      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-indigo-900 truncate">
          {isPlaying && !isPaused
            ? 'Narration playing...'
            : isPlaying && isPaused
            ? 'Paused'
            : 'Listen to this section'}
        </p>
        <p className="text-xs text-indigo-500">
          {isPlaying ? 'Click pause to stop, or play to resume' : 'Audio explanation of this module'}
        </p>
      </div>

      {isPlaying && (
        <button
          onClick={stopSpeech}
          className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center hover:bg-red-200 transition-colors flex-shrink-0"
          title="Stop"
        >
          <Square className="w-3.5 h-3.5 fill-current" />
        </button>
      )}

      {!isPlaying && (
        <Volume2 className="w-5 h-5 text-indigo-300 flex-shrink-0" />
      )}
    </div>
  );
}