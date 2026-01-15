
import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

interface MediaItem {
  url: string;
  type: 'image' | 'video';
  label?: string;
}

const media: MediaItem[] = [
  { url: 'https://i.postimg.cc/tgzD1Zvw/ali_mkumbwa_1iho4gv_I4_g_unsplash.jpg', type: 'image', label: 'Projeto Residencial' },
  { url: 'https://ik.imagekit.io/marioigor82/Color_Splash.mp4', type: 'video', label: 'Color Splash' },
  { url: 'https://i.postimg.cc/SQvxCgwg/gp10.jpg', type: 'image', label: 'Acabamento Premium' },
  { url: 'https://ik.imagekit.io/marioigor82/pintura_interiores_01.mp4', type: 'video', label: 'Pintura Interiores' },
  { url: 'https://i.postimg.cc/dQxVr5zk/gp1.jpg', type: 'image', label: 'Renovação Total' },
];

const Hero: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const isVideo = media[currentIdx].type === 'video';
    
    if (isVideo) {
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
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
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
            {/* Consistent Overlay for better text rendering */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/70 lg:bg-gradient-to-r lg:from-slate-900/80 lg:to-transparent"></div>
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0 w-full mt-10 lg:mt-0">
        <div className="max-w-4xl mx-auto lg:mx-0 transition-all duration-700 ease-in-out transform text-center lg:text-left">
          {isBudgetText ? (
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-8xl font-black text-white mb-4 md:mb-8 tracking-tighter uppercase drop-shadow-xl">
                FAÇA UM <span className="text-orange-500">ORÇAMENTO</span>
              </h1>
              <p className="text-sm xs:text-base md:text-2xl text-slate-100 mb-6 md:mb-10 max-w-2xl mx-auto lg:mx-0 font-medium drop-shadow-lg">
                Qualidade superior e atendimento personalizado para o seu projeto de pintura.
              </p>
              <a 
                href="https://wa.me/5562981264726"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 md:gap-4 bg-orange-500 text-white px-6 xs:px-10 py-4 md:py-5 rounded-xl md:rounded-2xl font-black text-base xs:text-lg md:text-xl hover:bg-orange-600 transition-all shadow-2xl shadow-orange-500/40 group hover:scale-105 active:scale-95"
              >
                SOLICITAR AGORA
                <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          ) : (
            <div className="animate-in fade-in duration-1000">
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 md:mb-8 leading-tight drop-shadow-2xl">
                Transformando seu espaço <br className="hidden md:block" />
                <span className="text-orange-500 italic">com arte</span> em cada detalhe.
              </h1>
              
              <p className="text-sm xs:text-base md:text-xl text-slate-100 mb-6 md:mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed drop-shadow-lg font-medium">
                A GP Pintura oferece serviços premium residenciais e comerciais que transformam ambientes comuns em verdadeiras obras de arte.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a 
                  href="#portfolio"
                  className="group bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3.5 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-white hover:text-slate-900 transition-all text-center flex items-center justify-center gap-2"
                >
                  Nosso Portfólio
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#contact"
                  className="group bg-orange-500 text-white px-6 py-3.5 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-orange-600 transition-all text-center flex items-center justify-center gap-2"
                >
                  Contato Direto
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Indicators optimized for touch and visibility */}
      <div className="absolute bottom-6 right-4 md:bottom-10 md:right-8 flex flex-col gap-2 md:gap-3 z-20">
        {media.map((item, i) => (
          <div 
            key={i}
            className="transition-all duration-500 cursor-pointer flex items-center justify-end gap-3 group p-1"
            onClick={() => setCurrentIdx(i)}
          >
            <span className={`text-[10px] font-bold uppercase tracking-widest text-white opacity-0 group-hover:opacity-100 transition-opacity hidden md:block ${i === currentIdx ? 'opacity-100 text-orange-500' : ''}`}>
              {item.label || `Projeto 0${i + 1}`}
            </span>
            <div className={`h-1.5 rounded-full transition-all duration-500 ${
              i === currentIdx ? 'w-10 md:w-12 bg-orange-500' : 'w-4 md:w-6 bg-white/40 hover:bg-white/60'
            }`} />
          </div>
        ))}
      </div>

      {/* Scroll Indicator - Hidden on very small screens to save space */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white animate-bounce hidden sm:block z-20 opacity-60">
        <ChevronDown size={28} />
      </div>
    </section>
  );
};

export default Hero;
