
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { MessageCircle, Send, X } from "lucide-react";

export default function AIAssistant() {
  const [isMinimized, setIsMinimized] = useState(true);
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; content: string }[]>([
    { role: "assistant", content: "Hello! I'm your EonRides AI assistant. How can I help you with your Tesla booking experience today?" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // Add user message
    const userMessage = { role: "user" as const, content: input };
    setMessages([...messages, userMessage]);
    setInput("");
    setIsTyping(true);
    
    // Simulate AI response after delay
    setTimeout(() => {
      const responses = [
        "I'd be happy to help you find the perfect Tesla for your needs. Are you looking for a specific model?",
        "You can book a Tesla for as little as $149 per day. Would you like to see our subscription plans?",
        "Our most popular model is the Model 3, which offers great range and performance at a competitive price.",
        "All of our vehicles come with unlimited supercharging access included in the rental price.",
        "Yes, you can switch between different Tesla models during your subscription period. Premium subscribers can swap twice per month."
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setMessages(prev => [...prev, { role: "assistant", content: randomResponse }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      {/* Minimized Chat Bubble */}
      {isMinimized ? (
        <Button
          onClick={() => setIsMinimized(false)}
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg flex items-center justify-center"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      ) : (
        <div className="fixed bottom-6 right-6 w-80 sm:w-96 h-[400px] bg-black/80 backdrop-blur-xl rounded-lg border border-white/10 shadow-xl flex flex-col z-50">
          {/* Chat Header */}
          <div className="flex items-center justify-between p-3 border-b border-white/10">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <h3 className="font-medium text-white">AI Assistant</h3>
            </div>
            <div className="flex space-x-1">
              <Button
                variant="ghost"
                size="icon"
                className="w-8 h-8 text-white/70 hover:text-white hover:bg-white/10"
                onClick={() => setIsMinimized(true)}
              >
                <svg width="14" height="2" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 1H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="w-8 h-8 text-white/70 hover:text-white hover:bg-white/10"
                onClick={() => setIsMinimized(true)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          {/* Chat Messages */}
          <div className="flex-1 p-3 overflow-y-auto space-y-3">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.role === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-white/10 text-white"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="max-w-[80%] p-3 rounded-lg bg-white/10 text-white">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-white/40 animate-bounce"></div>
                    <div className="w-2 h-2 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                    <div className="w-2 h-2 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: "0.3s" }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Chat Input */}
          <form onSubmit={handleSendMessage} className="p-3 border-t border-white/10">
            <div className="flex space-x-2">
              <Input
                placeholder="Ask me anything..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="bg-white/5 border-white/10 text-white"
              />
              <Button type="submit" size="icon" disabled={!input.trim()} className="bg-blue-600 hover:bg-blue-700">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
