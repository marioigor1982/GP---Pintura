
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Sparkles } from 'lucide-react';
import { getColorAdvice } from '../services/gemini';
import { Message } from '../types';

const AIConsultant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Olá! Eu sou o Consultor de Cores da GP Pintura. Precisa de ajuda para escolher o tom perfeito para sua sala ou escritório? Pergunte-me qualquer coisa!' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    const response = await getColorAdvice(userMessage, history);
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <section id="ai-consultant" className="py-20 md:py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-orange-500/10 rounded-full blur-[80px] md:blur-[120px] -z-0"></div>
      <div className="absolute bottom-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-blue-500/10 rounded-full blur-[80px] md:blur-[120px] -z-0"></div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 px-4 py-1.5 rounded-full mb-4">
            <Sparkles size={16} />
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest">Inteligência Artificial</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Consultor de Cores IA</h2>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">Não tem certeza de qual cor escolher? Obtenha conselhos de especialistas em IA personalizados para o seu espaço em segundos.</p>
        </div>

        <div className="bg-slate-800 rounded-[2rem] border border-slate-700 shadow-2xl overflow-hidden flex flex-col h-[500px] md:h-[600px] lg:h-[650px]">
          {/* Header */}
          <div className="bg-slate-800/50 p-4 border-b border-slate-700 flex justify-between items-center shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center shadow-lg shadow-orange-500/20">
                <Bot size={22} className="text-white" />
              </div>
              <div>
                <p className="font-bold leading-none text-sm md:text-base">Assistente GP</p>
                <p className="text-[10px] md:text-xs text-orange-400 mt-1 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> Online agora
                </p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent"
          >
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex gap-3 max-w-[90%] md:max-w-[85%] ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${m.role === 'user' ? 'bg-slate-600' : 'bg-orange-500 shadow-sm'}`}>
                    {m.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                  </div>
                  <div className={`p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${m.role === 'user' ? 'bg-orange-500 text-white rounded-tr-none' : 'bg-slate-700 text-slate-100 rounded-tl-none'}`}>
                    {m.text}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex gap-3 max-w-[85%] flex-row">
                  <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center bg-orange-500">
                    <Bot size={16} />
                  </div>
                  <div className="bg-slate-700 p-4 rounded-2xl rounded-tl-none flex items-center gap-2 shadow-sm">
                    <Loader2 size={18} className="animate-spin text-orange-500" />
                    <span className="text-slate-400 text-sm italic">Analisando tendências...</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-slate-800/80 border-t border-slate-700 shrink-0">
            <div className="relative flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ex: Sugira cores para sala de estar moderna"
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 transition-colors pr-12 placeholder:text-slate-600"
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="absolute right-2 p-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors disabled:opacity-30 disabled:grayscale"
                aria-label="Enviar mensagem"
              >
                <Send size={18} />
              </button>
            </div>
            <p className="text-[9px] md:text-[10px] text-center text-slate-500 mt-2 font-medium">As sugestões da IA são orientações profissionais baseadas em tendências.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIConsultant;
