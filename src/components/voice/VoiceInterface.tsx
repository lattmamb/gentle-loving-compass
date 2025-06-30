
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mic, MicOff, Volume2, VolumeX, Headphones, Radio, Zap } from "lucide-react";

interface VoiceCommand {
  command: string;
  response: string;
  action?: () => void;
}

const VoiceInterface: React.FC = () => {
  const [isListening, setIsListening] = useState(false);
  const [isResponding, setIsResponding] = useState(false);
  const [currentCommand, setCurrentCommand] = useState<string>("");
  const [voiceLevel, setVoiceLevel] = useState(0);
  const [conversationHistory, setConversationHistory] = useState<{ user: string; ai: string }[]>([]);
  const [isMuted, setIsMuted] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);

  const voiceCommands: VoiceCommand[] = [
    {
      command: "find me a tesla",
      response: "I found several Tesla models available. The Model S Plaid offers exceptional performance with 405 miles of range.",
      action: () => console.log("Navigate to Tesla vehicles")
    },
    {
      command: "book the fastest car",
      response: "Booking the Tesla Model S Plaid for you. It accelerates 0-60 mph in just 1.99 seconds.",
      action: () => console.log("Book fastest vehicle")
    },
    {
      command: "show me eco friendly options",
      response: "Here are the most sustainable vehicles with the highest carbon savings and renewable energy integration.",
      action: () => console.log("Filter eco-friendly vehicles")
    },
    {
      command: "what's my carbon footprint",
      response: "Based on your recent trips, you've saved 847 kg of CO₂ compared to traditional vehicles. Excellent environmental impact!",
      action: () => console.log("Show carbon footprint")
    },
    {
      command: "plan my route",
      response: "Analyzing traffic patterns and charging stations. I've optimized your route with 2 fast-charging stops for maximum efficiency.",
      action: () => console.log("Open route planner")
    }
  ];

  useEffect(() => {
    // Simulate audio level monitoring
    if (isListening) {
      const interval = setInterval(() => {
        setVoiceLevel(Math.random() * 100);
      }, 100);
      return () => clearInterval(interval);
    } else {
      setVoiceLevel(0);
    }
  }, [isListening]);

  const startListening = async () => {
    setIsListening(true);
    setCurrentCommand("");
    
    // Simulate voice recognition
    setTimeout(() => {
      const randomCommand = voiceCommands[Math.floor(Math.random() * voiceCommands.length)];
      setCurrentCommand(randomCommand.command);
      
      setTimeout(() => {
        processVoiceCommand(randomCommand);
      }, 1000);
    }, 2000);
  };

  const processVoiceCommand = (command: VoiceCommand) => {
    setIsListening(false);
    setIsResponding(true);
    
    // Add to conversation history
    setConversationHistory(prev => [...prev, { user: command.command, ai: command.response }]);
    
    // Simulate AI response
    setTimeout(() => {
      setIsResponding(false);
      if (command.action) command.action();
      
      // Speak response (simulated)
      if (!isMuted) {
        console.log("AI Speaking:", command.response);
      }
    }, 2000);
  };

  const stopListening = () => {
    setIsListening(false);
    setCurrentCommand("");
  };

  return (
    <div className="space-y-6">
      {/* Main Voice Control Interface */}
      <Card className="neo-blur border-white/10 p-6">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
              <Headphones className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">Neural Voice Interface</h3>
              <p className="text-white/60">Advanced AI speech recognition</p>
            </div>
          </div>

          {/* Voice Visualization */}
          <div className="relative mb-6">
            <div className="w-32 h-32 rounded-full border-4 border-white/10 flex items-center justify-center mx-auto relative overflow-hidden">
              {/* Audio Waves */}
              {isListening && (
                <div className="absolute inset-0 flex items-center justify-center">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1 bg-gradient-to-t from-blue-500 to-purple-500 mx-1 rounded-full"
                      animate={{
                        height: [10, voiceLevel * 0.8 + 20, 10],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 0.5,
                        repeat: Infinity,
                        delay: i * 0.1
                      }}
                    />
                  ))}
                </div>
              )}
              
              {/* Microphone Icon */}
              <div className={`relative z-10 ${isListening ? 'animate-pulse' : ''}`}>
                {isListening ? (
                  <Mic className="w-8 h-8 text-blue-400" />
                ) : (
                  <MicOff className="w-8 h-8 text-white/40" />
                )}
              </div>

              {/* Ripple Effect */}
              {isListening && (
                <motion.div
                  className="absolute inset-0 border-2 border-blue-400 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity
                  }}
                />
              )}
            </div>

            {/* Status Display */}
            <div className="mt-4">
              <AnimatePresence mode="wait">
                {isListening && (
                  <motion.div
                    key="listening"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <Badge className="bg-blue-600/20 text-blue-400 border-blue-500/30 mb-2">
                      <Radio className="w-3 h-3 mr-1" />
                      Listening...
                    </Badge>
                    {currentCommand && (
                      <p className="text-white/80 text-sm italic">"{currentCommand}"</p>
                    )}
                  </motion.div>
                )}

                {isResponding && (
                  <motion.div
                    key="responding"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <Badge className="bg-purple-600/20 text-purple-400 border-purple-500/30 mb-2">
                      <Zap className="w-3 h-3 mr-1" />
                      Processing...
                    </Badge>
                    <div className="flex justify-center space-x-1">
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-2 h-2 bg-purple-400 rounded-full"
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}

                {!isListening && !isResponding && (
                  <motion.div
                    key="idle"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <Badge className="bg-white/10 text-white/60 border-white/20">
                      Ready to listen
                    </Badge>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Control Buttons */}
          <div className="flex justify-center space-x-4">
            <Button
              variant={isListening ? "destructive" : "default"}
              onClick={isListening ? stopListening : startListening}
              disabled={isResponding}
              className={`${
                isListening ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-600 hover:bg-blue-700'
              } px-6 py-3`}
            >
              {isListening ? (
                <>
                  <MicOff className="w-5 h-5 mr-2" />
                  Stop Listening
                </>
              ) : (
                <>
                  <Mic className="w-5 h-5 mr-2" />
                  Start Voice Command
                </>
              )}
            </Button>

            <Button
              variant="outline"
              onClick={() => setIsMuted(!isMuted)}
              className="border-white/10 text-white hover:bg-white/5"
            >
              {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </Card>

      {/* Conversation History */}
      {conversationHistory.length > 0 && (
        <Card className="neo-blur border-white/10 p-6">
          <h4 className="text-lg font-semibold text-white mb-4">Recent Conversations</h4>
          <div className="space-y-4 max-h-64 overflow-y-auto">
            {conversationHistory.slice(-3).map((conversation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-2"
              >
                <div className="bg-blue-600/10 border border-blue-500/20 rounded-lg p-3">
                  <div className="flex items-center space-x-2 mb-1">
                    <Mic className="w-4 h-4 text-blue-400" />
                    <span className="text-xs text-blue-400 font-medium">You said:</span>
                  </div>
                  <p className="text-white/80 text-sm">"{conversation.user}"</p>
                </div>
                
                <div className="bg-purple-600/10 border border-purple-500/20 rounded-lg p-3">
                  <div className="flex items-center space-x-2 mb-1">
                    <Headphones className="w-4 h-4 text-purple-400" />
                    <span className="text-xs text-purple-400 font-medium">Assistant:</span>
                  </div>
                  <p className="text-white/80 text-sm">{conversation.ai}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Card>
      )}

      {/* Quick Voice Commands */}
      <Card className="neo-blur border-white/10 p-6">
        <h4 className="text-lg font-semibold text-white mb-4">Quick Voice Commands</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {voiceCommands.map((command, index) => (
            <Button
              key={index}
              variant="outline"
              onClick={() => processVoiceCommand(command)}
              disabled={isListening || isResponding}
              className="justify-start text-left border-white/10 text-white hover:bg-white/5 p-3 h-auto"
            >
              <div>
                <div className="font-medium text-sm">"{command.command}"</div>
                <div className="text-xs text-white/60 mt-1">{command.response.slice(0, 50)}...</div>
              </div>
            </Button>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default VoiceInterface;
