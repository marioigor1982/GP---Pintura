
import React, { useState } from 'react';
import { PORTFOLIO, INSTAGRAM_POST_URL } from '../constants';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('Todos');
  const categories = ['Todos', 'Residencial', 'Comercial', 'Especial'];

  const filteredItems = filter === 'Todos' 
    ? PORTFOLIO 
    : PORTFOLIO.filter(item => item.category === filter);

  return (
    <section id="portfolio" className="py-20 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 md:mb-16 gap-8 text-center lg:text-left">
          <div>
            <h2 className="text-orange-500 font-bold tracking-widest uppercase text-xs md:text-sm mb-2">Nosso Portfólio</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900">Projetos em Destaque</h3>
          </div>
          
          <div className="flex flex-wrap justify-center lg:justify-start gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 md:px-6 py-2 md:py-2.5 rounded-full text-sm font-semibold transition-all active:scale-95 ${
                  filter === cat 
                  ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25' 
                  : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-100 shadow-sm'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="group relative overflow-hidden rounded-[2rem] bg-white shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6 md:p-8">
                <p className="text-orange-400 font-bold text-xs uppercase tracking-wider mb-2">{item.category}</p>
                <h4 className="text-white text-xl md:text-2xl font-bold leading-tight">{item.title}</h4>
                {item.id === 7 ? (
                  <a 
                    href={INSTAGRAM_POST_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-white/80 text-sm font-medium hover:text-white transition-colors"
                  >
                    Ver no Instagram →
                  </a>
                ) : (
                  <button className="mt-4 text-white/80 text-sm font-medium hover:text-white transition-colors text-left flex items-center gap-2">
                    Ver detalhes do projeto →
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
