
import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { MessageCircle, Send, X, Mic, Sparkles, Settings, ChevronDown, MinusCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AIAssistant() {
  const [isMinimized, setIsMinimized] = useState(true);
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; content: string }[]>([
    { role: "assistant", content: "Hello! I'm your EonRides AI assistant powered by Apple Intelligence. How can I help with your Tesla booking experience today?" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

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
        "I'd be happy to help you find the perfect Tesla for your needs. Are you looking for a specific model? I can provide details on range, performance, and features for each model.",
        "You can book a Tesla for as little as $149 per day with unlimited supercharging included. Would you like to see our subscription plans with special discounts for weekly and monthly options?",
        "Our most popular model is the Model 3, which offers great range and performance. The Long Range variant provides up to 358 miles on a single charge, perfect for road trips.",
        "All of our Tesla rentals include premium features like autopilot, unlimited supercharging access, and comprehensive insurance coverage at no additional cost.",
        "Yes, premium subscribers can switch between different Tesla models twice per month at no extra charge. Would you like me to explain how our vehicle swapping works?"
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setMessages(prev => [...prev, { role: "assistant", content: randomResponse }]);
      setIsTyping(false);
    }, 1500);
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  const pulsingRing = (size: number, delay: number) => (
    <div 
      className={`absolute rounded-full bg-blue-500/30`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        animation: `pulseRing 3s infinite`,
        animationDelay: `${delay}s`
      }}
    />
  );

  return (
    <>
      {/* Minimized Chat Bubble */}
      {isMinimized ? (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <Button
            onClick={() => setIsMinimized(false)}
            className="relative w-16 h-16 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg flex items-center justify-center"
          >
            {pulsingRing(70, 0)}
            {pulsingRing(85, 0.6)}
            {pulsingRing(100, 1.2)}
            <Sparkles className="h-7 w-7 text-white" />
          </Button>
        </motion.div>
      ) : (
        <AnimatePresence>
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className={`fixed ${isExpanded ? 'bottom-0 right-0 w-full sm:w-[450px] h-screen sm:h-[80vh]' : 'bottom-6 right-6 w-[350px] sm:w-[400px] h-[500px]'} neo-blur rounded-lg border border-white/10 shadow-2xl flex flex-col z-50 overflow-hidden`}
          >
            {/* Chat Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-medium text-white">Apple Intelligence</h3>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-green-500 mr-1"></div>
                    <p className="text-xs text-white/70">Online</p>
                  </div>
                </div>
              </div>
              <div className="flex space-x-1">
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-8 h-8 text-white/70 hover:text-white hover:bg-white/10 rounded-full"
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  {isExpanded ? <MinusCircle className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-8 h-8 text-white/70 hover:text-white hover:bg-white/10 rounded-full"
                  onClick={() => setIsMinimized(true)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>
            
            {/* Chat Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 scrollbar-none">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl ${
                      message.role === "user"
                        ? "bg-blue-600 text-white"
                        : "bg-white/10 backdrop-blur-md text-white border border-white/10"
                    }`}
                  >
                    {message.content}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="max-w-[85%] p-4 rounded-2xl bg-white/10 backdrop-blur-md text-white border border-white/10">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 rounded-full bg-white/40 animate-bounce"></div>
                      <div className="w-2 h-2 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                      <div className="w-2 h-2 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: "0.3s" }}></div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>
            
            {/* Chat Input */}
            <form onSubmit={handleSendMessage} className="p-4 border-t border-white/10">
              <div className="relative">
                <Input
                  placeholder="Message Apple Intelligence..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="pr-20 pl-4 py-3 bg-white/5 border-white/10 rounded-full text-white focus:ring-1 focus:ring-blue-500"
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex space-x-1">
                  <Button type="button" size="icon" variant="ghost" className="w-8 h-8 rounded-full text-white/70 hover:text-white hover:bg-white/10">
                    <Mic className="w-4 h-4" />
                  </Button>
                  <Button type="submit" size="icon" disabled={!input.trim()} className="w-8 h-8 rounded-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <div className="mt-2 flex justify-center">
                <div className="text-xs text-white/40 flex items-center">
                  <Settings className="w-3 h-3 mr-1" />
                  <span>Powered by Apple Intelligence</span>
                </div>
              </div>
            </form>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
}
