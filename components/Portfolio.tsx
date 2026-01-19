
import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Instagram, Maximize2, X } from 'lucide-react';
import { PORTFOLIO, INSTAGRAM_URL } from '../constants';
import { PortfolioItem } from '../types';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<'Todos' | 'Residencial' | 'Comercial'>('Todos');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const filteredItems = filter === 'Todos' 
    ? PORTFOLIO 
    : PORTFOLIO.filter(item => item.category === filter);

  const categories: ('Todos' | 'Residencial' | 'Comercial')[] = ['Todos', 'Residencial', 'Comercial'];

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 20);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 20);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);
      checkScroll();
    }
    return () => {
      el?.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, [filter]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="text-center lg:text-left">
            <h2 className="text-orange-500 font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-4">Portfólio de Elite</h2>
            <h3 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase leading-none">
              Projetos em <span className="text-orange-500">Destaque</span>
            </h3>
            <div className="h-1.5 w-24 bg-orange-500 mt-6 mx-auto lg:ml-0 rounded-full"></div>
          </div>
          
          {/* Custom Tabs */}
          <div className="flex bg-white p-1.5 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 self-center lg:self-end">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => {
                  setFilter(cat);
                  if (scrollRef.current) scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                }}
                className={`px-6 md:px-8 py-3 rounded-xl text-sm font-black uppercase tracking-widest transition-all duration-300 ${
                  filter === cat 
                  ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30 scale-105' 
                  : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          {/* Navigation Arrows */}
          {showLeftArrow && (
            <button 
              onClick={() => scroll('left')}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-16 md:h-16 bg-white/90 backdrop-blur-md text-slate-900 rounded-full flex items-center justify-center shadow-2xl border border-slate-100 hover:bg-orange-500 hover:text-white transition-all duration-300 -translate-x-4 group-hover:translate-x-0 opacity-0 group-hover:opacity-100"
              aria-label="Anterior"
            >
              <ChevronLeft size={32} />
            </button>
          )}
          {showRightArrow && (
            <button 
              onClick={() => scroll('right')}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-16 md:h-16 bg-white/90 backdrop-blur-md text-slate-900 rounded-full flex items-center justify-center shadow-2xl border border-slate-100 hover:bg-orange-500 hover:text-white transition-all duration-300 translate-x-4 group-hover:translate-x-0 opacity-0 group-hover:opacity-100"
              aria-label="Próximo"
            >
              <ChevronRight size={32} />
            </button>
          )}

          {/* Scrolling Track */}
          <div 
            ref={scrollRef}
            className="flex gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-12 pt-4 px-2"
          >
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className="flex-shrink-0 w-[85vw] sm:w-[45vw] lg:w-[30vw] snap-center"
              >
                <div 
                  onClick={() => setSelectedImage(item.imageUrl)}
                  className="group/card relative overflow-hidden rounded-[2.5rem] bg-white shadow-xl border border-slate-100 aspect-[4/5] cursor-pointer"
                >
                  {/* Image */}
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover/card:scale-110"
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-6 left-6 z-10">
                    <span className="bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full border border-white/20">
                      {item.category}
                    </span>
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60 group-hover/card:opacity-80 transition-opacity duration-500"></div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10 transform translate-y-4 group-hover/card:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-white text-2xl md:text-3xl font-black uppercase tracking-tighter leading-none">
                        {item.title}
                      </h4>
                      <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white opacity-0 group-hover/card:opacity-100 transition-opacity transform group-hover/card:scale-110">
                        <Maximize2 size={18} />
                      </div>
                    </div>
                    
                    <p className="text-slate-300 text-xs font-bold uppercase tracking-widest opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 delay-100">
                      Clique para ampliar
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Instagram Iframe Card */}
            <div className="flex-shrink-0 w-[85vw] sm:w-[45vw] lg:w-[30vw] snap-center">
              <div className="h-full rounded-[2.5rem] bg-white overflow-hidden flex flex-col border border-slate-200 shadow-xl group/insta-card">
                <div className="flex-1 relative bg-slate-100 min-h-[350px]">
                   <iframe 
                    src="https://www.instagram.com/pintura.gp/embed/" 
                    className="absolute inset-0 w-full h-full border-none"
                    scrolling="no"
                    allowTransparency={true}
                    frameBorder="0"
                    title="GP Pintura Instagram Feed"
                   ></iframe>
                   {/* Capture layer to prevent carousel scrolling issues while providing a link area */}
                   <div className="absolute inset-0 z-10 bg-transparent cursor-pointer group-hover/insta-card:bg-slate-900/5 transition-colors"></div>
                </div>
                
                <div className="p-8 bg-slate-900 text-center">
                  <h4 className="text-white text-xl font-black uppercase tracking-widest mb-2">Ver Tudo no Instagram</h4>
                  <p className="text-slate-400 text-xs mb-6 uppercase tracking-widest font-bold">Acompanhe nosso dia a dia</p>
                  <a 
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-xl font-black uppercase tracking-widest hover:bg-orange-600 transition-all shadow-lg text-sm"
                  >
                    Seguir @pintura.gp
                    <Instagram size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Bar for Carousel */}
        <div className="max-w-xs mx-auto mt-12 h-1 bg-slate-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-orange-500 transition-all duration-300"
            style={{ 
              width: scrollRef.current 
                ? `${((scrollRef.current.scrollLeft + scrollRef.current.clientWidth) / scrollRef.current.scrollWidth) * 100}%` 
                : '0%' 
            }}
          ></div>
        </div>
      </div>

      {/* Lightbox / Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[60] bg-slate-900/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-orange-500 transition-colors z-[70] p-2"
            onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
          >
            <X size={40} />
          </button>
          
          <img 
            src={selectedImage} 
            alt="Expanded Portfolio" 
            className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          />

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <a 
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener"
              className="bg-orange-500 text-white px-8 py-3 rounded-full font-black uppercase tracking-widest flex items-center gap-3 hover:bg-orange-600 transition-all shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Instagram size={20} />
              Ver no Instagram
            </a>
          </div>
        </div>
      )}

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Portfolio;
