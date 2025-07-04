'use client';

import { useState, useEffect } from 'react';
import { useDeepgram } from '../lib/contexts/DeepgramContext';
// Firebase removed - transcript can be saved to localStorage or sent via form
import { motion } from 'framer-motion';

export default function VoiceRecorder() {
  const [isRecording, setIsRecording] = useState(false);
  const { connectToDeepgram, disconnectFromDeepgram, connectionState, realtimeTranscript } = useDeepgram();

  const handleStartRecording = async () => {
    await connectToDeepgram();
    setIsRecording(true);
  };

  const handleStopRecording = async () => {
    disconnectFromDeepgram();
    setIsRecording(false);
    
    // Save the note to localStorage for now
    if (realtimeTranscript) {
      const notes = JSON.parse(localStorage.getItem('voiceNotes') || '[]');
      notes.push({
        text: realtimeTranscript,
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem('voiceNotes', JSON.stringify(notes));
    }
  };

  return (
    <div className="w-full max-w-md">
      <button
        onClick={isRecording ? handleStopRecording : handleStartRecording}
        className={`w-full py-2 px-4 rounded-full ${
          isRecording ? 'bg-primary-red hover:bg-primary-red/80' : 'bg-primary-black border-2 border-primary-white hover:bg-primary-white/10'
        } text-primary-white font-mono`}
      >
        {isRecording ? 'Stop Recording' : 'Start Recording'}
      </button>
      {isRecording && (
        <div className="mt-4 p-4 bg-primary-black border border-primary-white">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-8 h-8 bg-primary-red mx-auto mb-4"
          />
          <p className="text-sm text-primary-white/80 font-mono">{realtimeTranscript}</p>
        </div>
      )}
    </div>
  );
}