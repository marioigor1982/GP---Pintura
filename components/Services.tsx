
import React from 'react';
import { SERVICES } from '../constants';
import { Home, Building2, PaintBucket, ArrowUpRight } from 'lucide-react';

const iconMap = {
  home: <Home className="w-6 h-6" />,
  building: <Building2 className="w-6 h-6" />,
  paint: <PaintBucket className="w-6 h-6" />
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-2">Nossos Serviços</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Precisão em cada pincelada</h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Seja seu refúgio particular ou um espaço profissional, nossas equipes especializadas entregam qualidade e durabilidade incomparáveis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id}
              className="group relative bg-slate-50 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={service.imageUrl} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              
              <div className="p-8">
                <div className="w-14 h-14 bg-orange-500 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-orange-500/20 transform -translate-y-12 group-hover:-translate-y-14 transition-transform border-4 border-white">
                  {iconMap[service.icon as keyof typeof iconMap]}
                </div>
                
                <h4 className="text-2xl font-bold text-slate-900 mb-3 -mt-6">{service.title}</h4>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 text-orange-500 font-bold group-hover:gap-3 transition-all"
                >
                  Saiba Mais
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
