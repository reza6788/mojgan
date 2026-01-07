import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '../../store/useStore';
import { ChatMessage, Language } from '../../types';
import { chatWithConsultant } from '../../services/ai';
import { Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const AIConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { language } = useStore();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Initial greeting based on language
  useEffect(() => {
    const isFarsi = language === Language.FA;
    const initialText = isFarsi 
      ? "سلام. من مشاور هنری مزون مژگان هستم. چطور می‌توانم در انتخاب طرح گلدوزی یا پارچه مناسب به شما کمک کنم؟"
      : "Bonjour. I am your personal embroidery consultant. I can assist you in selecting the finest fabrics or visualizing your bespoke commission.";
    
    setMessages([{
      role: 'model',
      text: initialText,
      timestamp: new Date()
    }]);
  }, [language]);

  // Auto-scroll to bottom
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const handleSend = async (text: string) => {
    if (!text.trim() || isLoading) return;

    // Add user message
    const userMsg: ChatMessage = { role: 'user', text: text, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    // Call AI
    const responseText = await chatWithConsultant(messages, text, language);

    // Add AI response
    setMessages(prev => [...prev, {
      role: 'model',
      text: responseText,
      timestamp: new Date()
    }]);
    setIsLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend(input);
    }
  };

  const getSuggestions = () => {
    if (language === Language.FA) {
      return ["بررسی سبک‌ها", "شروع سفارش", "راهنمای پارچه"];
    }
    return ["Explore Styles", "Start Commission", "Fabric Care Guide"];
  };

  const handleSuggestionClick = (suggestion: string) => {
    if (suggestion === "Start Commission" || suggestion === "شروع سفارش") {
        navigate('/order');
        return;
    }
    if (suggestion === "Explore Styles" || suggestion === "بررسی سبک‌ها") {
        navigate('/gallery');
        return;
    }
    handleSend(suggestion);
  };

  return (
    <div className={`fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4 pointer-events-none font-sans ${language === Language.FA ? 'rtl' : 'ltr'}`}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="pointer-events-auto w-full max-w-[380px] overflow-hidden rounded-2xl border border-[#e5e5e0] bg-white shadow-[0_20px_40px_-12px_rgba(0,0,0,0.15)] dark:border-[#3a3628] dark:bg-[#1f1d13] dark:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.5)] mx-4 mb-2 md:mx-0 md:mb-0 flex flex-col max-h-[600px]"
          >
            {/* Modal Header Image */}
            <div 
              className="relative h-32 w-full bg-cover bg-center shrink-0" 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBXn8ylJcddi7exiBWSDMPqQ_F2YYrOLZ2Fk7DPxsDm39dvLMHuz2pb7Wi1neQFA8czSz-v5iwmadPnbNx2HfYRsAZ283EM3XQ5gOQUCLRCpMS2OLxEhgK_hRWV3LV-C4Yp28iCW8iv2hWsaxE-E_CnlkjO605QXMzZ5nw63gwmg_-pygA8IAVgFBLlasPheORWpitAlA2gcAtfdVzs57H1vBWxP1DaCym3UyhPDWs9FkC2eaQ-mNVzK_R2dfxxs-9OhwOGK_75qag')" }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md hover:bg-white/30 transition-colors z-10"
              >
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
              <div className="absolute bottom-3 left-4 right-4">
                <h4 className="text-lg font-bold text-white shadow-sm">Digital Atelier</h4>
                <p className="text-xs font-medium text-white/80 font-sans tracking-wide">AI CONSULTANT</p>
              </div>
            </div>

            {/* Modal Body - Scrollable Area */}
            <div className="flex flex-col gap-4 p-5 overflow-y-auto h-[350px] scroll-smooth">
              
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                   {msg.role === 'model' && (
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/20">
                      <span className="material-symbols-outlined text-xl">smart_toy</span>
                    </div>
                   )}
                   <div className={`flex flex-col gap-2 max-w-[80%] ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                      <div className={`rounded-2xl p-4 text-sm leading-relaxed ${
                        msg.role === 'model' 
                          ? 'rounded-tl-none bg-[#f5f4f0] dark:bg-[#2c2818] text-gray-800 dark:text-gray-100' 
                          : 'rounded-tr-none bg-primary text-white shadow-md'
                      }`}>
                         {msg.text}
                      </div>
                      <span className="mx-2 text-[10px] font-medium text-[#8a8360] uppercase tracking-wider opacity-60">
                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                   </div>
                </div>
              ))}

              {isLoading && (
                 <div className="flex gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/20">
                      <span className="material-symbols-outlined text-xl">smart_toy</span>
                    </div>
                    <div className="flex items-center">
                       <Loader2 className="animate-spin text-primary" size={20} />
                    </div>
                 </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Conversation Starters (Chips) - Only show if few messages to save space */}
            {messages.length < 3 && (
              <div className="flex flex-col gap-2 px-5 pb-2">
                {getSuggestions().map((text) => (
                  <button 
                    key={text} 
                    onClick={() => handleSuggestionClick(text)}
                    className="group flex w-full items-center justify-between rounded-xl border border-[#e5e5e0] bg-white px-4 py-2 text-left transition-all hover:border-primary/50 hover:bg-[#fafaf8] hover:shadow-sm dark:border-[#3a3628] dark:bg-[#2c2818] dark:hover:border-primary/50"
                  >
                    <span className="text-xs font-bold text-gray-800 dark:text-gray-100">{text}</span>
                    <span className="material-symbols-outlined text-sm text-[#8a8360] transition-transform group-hover:translate-x-1 group-hover:text-primary rtl:rotate-180 rtl:group-hover:-translate-x-1">arrow_forward</span>
                  </button>
                ))}
              </div>
            )}

            {/* Input Area */}
            <div className="p-4 border-t border-[#e5e5e0] dark:border-[#3a3628] bg-white dark:bg-[#1f1d13]">
              <div className="flex items-center gap-2 rounded-xl border border-[#e5e5e0] bg-[#fafaf8] px-3 py-2 dark:border-[#3a3628] dark:bg-[#1a180e]">
                <input 
                  className="w-full border-none bg-transparent p-0 text-sm placeholder-[#8a8360] focus:ring-0 dark:text-white outline-none text-gray-800" 
                  placeholder={language === Language.FA ? "پیام خود را بنویسید..." : "Type a message..."} 
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  disabled={isLoading}
                />
                <button 
                  onClick={() => handleSend(input)}
                  disabled={isLoading}
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-background-dark hover:bg-[#fce055] transition-colors disabled:opacity-50"
                >
                  <span className="material-symbols-outlined text-lg rtl:rotate-180">send</span>
                </button>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="pointer-events-auto group flex h-14 items-center gap-3 rounded-full bg-primary px-6 shadow-lg shadow-primary/20 transition-all hover:bg-[#fce055] hover:shadow-xl hover:shadow-primary/30 active:scale-95 mx-4 md:mx-0"
      >
        <span className="material-symbols-outlined text-2xl text-background-dark">
          {isOpen ? 'close' : 'auto_awesome'}
        </span>
        <span className="font-bold text-background-dark">
          {isOpen ? (language === Language.FA ? 'بستن' : 'Close') : (language === Language.FA ? 'مشاوره با آتلیه' : 'Consult the Atelier')}
        </span>
      </button>
    </div>
  );
};