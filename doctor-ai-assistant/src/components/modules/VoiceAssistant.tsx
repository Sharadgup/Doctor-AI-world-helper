import React, { useState } from 'react';
import { Mic, MicOff, Send } from 'lucide-react';
import Button from '../ui/Button';
import Card from '../ui/Card';

const VoiceAssistant: React.FC = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [response, setResponse] = useState('');

  const toggleListening = () => {
    setIsListening(!isListening);
    // TODO: Implement actual voice recognition
  };

  const handleSend = () => {
    // TODO: Send transcript to AI for processing
    setResponse("I'm sorry, I'm still learning how to respond to that.");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Voice Assistant</h1>
      <Card className="mb-4 p-4">
        <div className="flex items-center justify-between mb-4">
          <Button
            onClick={toggleListening}
            className={`flex items-center ${isListening ? 'bg-red-500 hover:bg-red-600' : ''}`}
          >
            {isListening ? <MicOff className="mr-2" /> : <Mic className="mr-2" />}
            {isListening ? 'Stop Listening' : 'Start Listening'}
          </Button>
          <Button onClick={handleSend} disabled={!transcript} className="flex items-center">
            <Send className="mr-2" /> Send
          </Button>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Your Input:</h2>
          <p className="bg-gray-100 p-3 rounded">{transcript || 'No input yet...'}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">AI Response:</h2>
          <p className="bg-blue-100 p-3 rounded">{response || 'Waiting for your input...'}</p>
        </div>
      </Card>
    </div>
  );
};

export default VoiceAssistant;

