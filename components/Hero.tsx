
import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

interface MediaItem {
  url: string;
  type: 'image' | 'video';
}

const media: MediaItem[] = [
  { url: 'https://i.postimg.cc/tgzD1Zvw/ali_mkumbwa_1iho4gv_I4_g_unsplash.jpg', type: 'image' },
  { url: 'https://ik.imagekit.io/marioigor82/Color_Splash.mp4', type: 'video' },
  { url: 'https://i.postimg.cc/SQvxCgwg/gp10.jpg', type: 'image' },
  { url: 'https://i.postimg.cc/dQxVr5zk/gp1.jpg', type: 'image' },
];

const Hero: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const isVideo = media[currentIdx].type === 'video';
    
    if (isVideo) {
      // Se for vídeo, damos um tempo maior para a exibição (ou duração do vídeo)
      const timer = setTimeout(() => {
        setCurrentIdx((prev) => (prev + 1) % media.length);
      }, 12000); 
      return () => clearTimeout(timer);
    } else {
      const timer = setInterval(() => {
        setCurrentIdx((prev) => (prev + 1) % media.length);
      }, 6000);
      return () => clearInterval(timer);
    }
  }, [currentIdx]);

  const currentMedia = media[currentIdx];
  const isBudgetText = currentMedia.type === 'video';

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0 bg-slate-900">
        {media.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
              index === currentIdx ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {item.type === 'image' ? (
              <div 
                className={`absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] ease-linear ${index === currentIdx ? 'scale-110' : 'scale-100'}`}
                style={{ backgroundImage: `url('${item.url}')` }}
              />
            ) : (
              <video
                ref={index === currentIdx ? videoRef : null}
                src={item.url}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent"></div>
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-44 md:pt-52 w-full">
        <div className="max-w-4xl transition-all duration-700 ease-in-out transform">
          {isBudgetText ? (
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase drop-shadow-[0_10px_10px_rgba(0,0,0,0.4)]">
                FAÇA UM <span className="text-orange-500">ORÇAMENTO</span>
              </h1>
              <p className="text-lg md:text-2xl text-slate-200 mb-10 max-w-2xl font-medium drop-shadow-md">
                Qualidade superior e atendimento personalizado para o seu projeto.
              </p>
              <a 
                href="https://wa.me/5562981264726"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-4 bg-orange-500 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-orange-600 transition-all shadow-2xl shadow-orange-500/40 group hover:scale-105"
              >
                SOLICITAR AGORA
                <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          ) : (
            <div className="animate-in fade-in duration-1000">
              <h2 className="text-orange-500 font-bold tracking-[0.3em] uppercase text-sm mb-4 drop-shadow-md">GP Pintura • Excelência</h2>
              <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 leading-[1.2] drop-shadow-2xl">
                Transformando seu espaço <br className="hidden md:block" />
                <span className="text-orange-500 italic">com arte</span> em cada detalhe.
              </h1>
              
              <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl leading-relaxed drop-shadow-md font-medium">
                A GP Pintura oferece serviços premium residenciais e comerciais que transformam ambientes comuns em verdadeiras obras de arte.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#portfolio"
                  className="group bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-slate-900 transition-all text-center flex items-center justify-center gap-2 shadow-xl"
                >
                  Ver Nosso Portfólio
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#contact"
                  className="group bg-orange-500 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-all text-center flex items-center justify-center gap-2 shadow-xl shadow-orange-500/25"
                >
                  Contato Direto
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 right-8 flex flex-col gap-3 z-20">
        {media.map((item, i) => (
          <div 
            key={i}
            className={`transition-all duration-500 cursor-pointer flex items-center justify-end gap-3 group`}
            onClick={() => setCurrentIdx(i)}
          >
            <span className={`text-[10px] font-bold uppercase tracking-widest text-white opacity-0 group-hover:opacity-100 transition-opacity ${i === currentIdx ? 'opacity-100 text-orange-500' : ''}`}>
              {item.type === 'video' ? 'Vídeo Destaque' : `Projeto 0${i + 1}`}
            </span>
            <div className={`h-1 rounded-full transition-all duration-500 ${
              i === currentIdx ? 'w-12 bg-orange-500' : 'w-6 bg-white/30 hover:bg-white/50'
            }`} />
          </div>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce hidden md:block">
        <ChevronDown size={32} className="opacity-50" />
      </div>
    </section>
  );
};

// Adicionando export default para corrigir erro no App.tsx
export default Hero;
