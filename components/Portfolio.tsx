
import React, { useState } from 'react';
import { PORTFOLIO, INSTAGRAM_POST_URL } from '../constants';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Residential', 'Commercial', 'Special'];

  const filteredItems = filter === 'All' 
    ? PORTFOLIO 
    : PORTFOLIO.filter(item => item.category === filter);

  return (
    <section id="portfolio" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-2">Nosso Portfólio</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900">Projetos em Destaque</h3>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-full font-semibold transition-all ${
                  filter === cat 
                  ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25' 
                  : 'bg-white text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat === 'All' ? 'Todos' : cat === 'Residential' ? 'Residencial' : cat === 'Commercial' ? 'Comercial' : 'Especial'}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="group relative overflow-hidden rounded-3xl bg-white shadow-sm hover:shadow-xl transition-all"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                <p className="text-orange-400 font-bold text-sm uppercase tracking-wider mb-2">{item.category}</p>
                <h4 className="text-white text-2xl font-bold">{item.title}</h4>
                {item.id === 7 ? (
                  <a 
                    href={INSTAGRAM_POST_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-white/80 text-sm font-medium hover:text-white transition-colors text-left"
                  >
                    Ver no Instagram →
                  </a>
                ) : (
                  <button className="mt-4 text-white/80 text-sm font-medium hover:text-white transition-colors text-left">
                    Ver Detalhes →
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
