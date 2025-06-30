
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Bot, Send, Mic, MicOff, Zap, Brain, MapPin } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
  suggestions?: string[];
}

const NeuralTransitAssistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm your Neural Transit Assistant. I can help you find the perfect autonomous vehicle, plan routes, predict arrival times, and even suggest sustainable transport options. How can I assist you today?",
      sender: "ai",
      timestamp: new Date(),
      suggestions: [
        "Find me a Tesla Model S for tomorrow",
        "Plan route to downtown Chicago",
        "Show eco-friendly options",
        "What's traffic like right now?"
      ]
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText("");
    setIsTyping(true);

    // Simulate AI processing
    setTimeout(() => {
      const aiResponse = generateAIResponse(text);
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponse.text,
        sender: "ai",
        timestamp: new Date(),
        suggestions: aiResponse.suggestions
      };
      
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const generateAIResponse = (userInput: string) => {
    const input = userInput.toLowerCase();
    
    if (input.includes("tesla") || input.includes("model")) {
      return {
        text: "I found several Tesla options for you! Based on your location and preferences, I recommend the Model S Plaid - it's available tomorrow with 405 miles of range. The neural routing system shows optimal charging stops for longer trips. Would you like me to book this for you?",
        suggestions: ["Book Model S Plaid", "Compare with Model 3", "Check charging stations", "See sustainability impact"]
      };
    } else if (input.includes("route") || input.includes("plan")) {
      return {
        text: "I'm analyzing real-time traffic patterns and autonomous vehicle corridors. The optimal route uses dedicated AV lanes and includes 2 fast-charging stops. Estimated arrival: 2:47 PM with 99.3% reliability. The route also passes 3 local businesses offering discounts to Unity Fleet members!",
        suggestions: ["View 3D route preview", "Alternative routes", "Book now", "Share with friends"]
      };
    } else if (input.includes("eco") || input.includes("sustainable")) {
      return {
        text: "Great choice! Our eco-optimized selection includes vehicles powered by 100% renewable energy. The Model 3 you're considering will save 847 kg of CO₂ compared to traditional transport. Plus, you'll earn carbon credits that can be traded in our community marketplace!",
        suggestions: ["View carbon savings", "See renewable energy sources", "Join sustainability challenge", "Trade carbon credits"]
      };
    } else if (input.includes("traffic")) {
      return {
        text: "Current traffic analysis: AI-optimized routing shows light congestion on I-94. Autonomous vehicle lanes are flowing at 98% efficiency. Predicted travel time reduction: 23% compared to traditional traffic. Real-time neural network is adjusting all fleet routes for maximum efficiency.",
        suggestions: ["View traffic heatmap", "Get arrival predictions", "Alert me of delays", "Book priority lane access"]
      };
    } else {
      return {
        text: "I understand you're looking for transportation solutions. Let me help you with our advanced AI-powered options. I can assist with vehicle selection, route optimization, sustainability goals, or community features. What interests you most?",
        suggestions: ["Find perfect vehicle", "Plan smart route", "Sustainability options", "Community features"]
      };
    }
  };

  const handleVoiceToggle = () => {
    setIsListening(!isListening);
    // In a real app, this would integrate with Web Speech API
  };

  return (
    <Card className="h-96 neo-blur border-white/10 flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-white/10 flex items-center space-x-3">
        <div className="relative">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
            <Brain className="w-5 h-5 text-white" />
          </div>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
        </div>
        <div>
          <h3 className="text-white font-medium">Neural Transit Assistant</h3>
          <p className="text-white/60 text-sm">AI-Powered • Always Learning</p>
        </div>
        <div className="ml-auto flex items-center space-x-2">
          <Zap className="w-4 h-4 text-yellow-400" />
          <span className="text-xs text-white/60">Neural Active</span>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div className={`max-w-[80%] ${message.sender === "user" ? "order-2" : "order-1"}`}>
                <div
                  className={`p-3 rounded-2xl ${
                    message.sender === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-white/5 text-white border border-white/10"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
                
                {message.suggestions && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {message.suggestions.map((suggestion, index) => (
                      <Button
                        key={index}
                        variant="ghost"
                        size="sm"
                        onClick={() => handleSendMessage(suggestion)}
                        className="text-xs bg-white/5 hover:bg-white/10 text-white/80 border border-white/10"
                      >
                        {suggestion}
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {isTyping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-start"
          >
            <div className="bg-white/5 border border-white/10 p-3 rounded-2xl">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }} />
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
              </div>
            </div>
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-white/10">
        <div className="flex space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleVoiceToggle}
            className={`${isListening ? "bg-red-500/20 text-red-400" : "bg-white/5 text-white/60"} hover:bg-white/10`}
          >
            {isListening ? <MicOff size={16} /> : <Mic size={16} />}
          </Button>
          <Input
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage(inputText)}
            placeholder="Ask about vehicles, routes, or sustainability..."
            className="flex-1 bg-white/5 border-white/10 text-white placeholder:text-white/40"
          />
          <Button
            onClick={() => handleSendMessage(inputText)}
            disabled={!inputText.trim()}
            className="bg-blue-600 hover:bg-blue-700"
          >
            <Send size={16} />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default NeuralTransitAssistant;
