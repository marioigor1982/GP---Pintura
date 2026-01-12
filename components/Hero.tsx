
import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const images = [
  'https://i.postimg.cc/tgzD1Zvw/ali_mkumbwa_1iho4gv_I4_g_unsplash.jpg',
  'https://i.postimg.cc/SQvxCgwg/gp10.jpg',
  'https://i.postimg.cc/dQxVr5zk/gp1.jpg',
  'https://i.postimg.cc/dQxVr5zk/gp1.jpg'
];

const Hero: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0 bg-slate-900">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[2000ms] ease-in-out ${
              index === currentIdx ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
            }`}
            style={{ 
              backgroundImage: `url('${img}')`,
              transitionProperty: 'opacity, transform',
              transitionDuration: '2000ms, 10000ms'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent"></div>
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-44 md:pt-52">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-[1.4] md:leading-[1.5] drop-shadow-2xl">
            Transformando seu espaço <br className="hidden md:block" />
            <span className="text-[#A66D58] italic">com arte</span> em cada detalhe.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed drop-shadow-md">
            A GP Pintura oferece serviços premium residenciais e comerciais que transformam ambientes comuns em verdadeiras obras de arte.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#portfolio"
              className="group bg-orange-500 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-all text-center flex items-center justify-center gap-2 shadow-xl shadow-orange-500/25"
            >
              Ver Nosso Portfólio
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 right-8 flex gap-2 z-20">
        {images.map((_, i) => (
          <div 
            key={i}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === currentIdx ? 'w-8 bg-orange-500' : 'w-2 bg-white/30 hover:bg-white/50 cursor-pointer'
            }`}
            onClick={() => setCurrentIdx(i)}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce hidden md:block">
        <ChevronDown size={32} className="opacity-50" />
      </div>
    </section>
  );
};

export default Hero;
