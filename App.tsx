
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import { Award, ShieldCheck, Clock, ThumbsUp, Instagram, MapPin, Mail } from 'lucide-react';
import { LOGO_URL } from './constants';

const App: React.FC = () => {
  return (
    <div className="relative overflow-x-hidden bg-gp-light">
      <Navbar />
      <Hero />

      {/* Trust Badges - Improved Grid Responsiveness */}
      <div className="bg-slate-900 py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
            {[
              { icon: <Award size={24} />, title: "Excelência", desc: "Qualidade Premium" },
              { icon: <ShieldCheck size={24} />, title: "Segurança", desc: "Profissionais Licenciados" },
              { icon: <Clock size={24} />, title: "No Prazo", desc: "Cronogramas Reais" },
              { icon: <ThumbsUp size={24} />, title: "Satisfação", desc: "Foco no Cliente" }
            ].map((badge, idx) => (
              <div key={idx} className="flex flex-col items-center text-center space-y-2 group">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-orange-500/10 rounded-full flex items-center justify-center border border-orange-500/20 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                  {badge.icon}
                </div>
                <div className="space-y-0.5">
                  <h5 className="text-white font-bold text-xs md:text-base">{badge.title}</h5>
                  <p className="text-slate-500 text-[10px] md:text-sm leading-tight">{badge.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Services />

      <section id="about" className="py-16 md:py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16">
            <div className="w-full lg:w-1/2 relative">
              <div className="relative z-10 rounded-[1.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/3] md:aspect-auto">
                <img 
                  src="https://i.postimg.cc/C1xQ4HWf/premium_photo_1664300519719_fc40ef9122d2.avif" 
                  alt="GP Pintura Equipe"
                  className="w-full h-full object-cover min-h-[300px] md:min-h-[500px]"
                />
              </div>
              <div className="absolute -top-4 -left-4 w-20 h-20 md:w-32 md:h-32 bg-orange-500 rounded-2xl md:rounded-3xl -z-0 opacity-10 hidden xs:block"></div>
              
              <div className="absolute bottom-4 left-4 md:bottom-10 md:left-10 bg-white p-4 md:p-8 rounded-xl md:rounded-3xl shadow-xl z-20 border border-slate-100 max-w-[180px] md:max-w-[280px]">
                <p className="text-orange-500 text-2xl md:text-4xl font-black mb-0.5">25+</p>
                <p className="text-slate-900 font-bold text-xs md:text-lg leading-snug">anos de experiência e confiança</p>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h2 className="text-orange-500 font-bold tracking-widest uppercase text-xs md:text-sm mb-2">Sobre Nós</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">Qualidade que transforma, Integridade que constrói.</h3>
              <p className="text-slate-600 text-base md:text-lg mb-8 leading-relaxed">
                A GP Pintura nasceu com uma visão simples: trazer a arte de volta à indústria da pintura. Acreditamos que cada parede é uma tela e cada cliente merece uma obra-prima.
              </p>
              
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 mb-10 text-left">
                {['Tintas Premium', 'Preparação Meticulosa', 'Cores Exclusivas', 'Equipe Especialista'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 md:gap-3 text-slate-700 font-bold text-xs md:text-base">
                    <div className="w-5 h-5 bg-orange-500/10 rounded-full flex items-center justify-center text-orange-500 shrink-0">
                      <ShieldCheck size={14} />
                    </div>
                    {item}
                  </div>
                ))}
              </div>

              <div className="flex flex-col xs:flex-row gap-4 justify-center lg:justify-start">
                <a 
                  href="#contact" 
                  className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg active:scale-95 text-sm md:text-base"
                >
                  Falar com Especialista
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Portfolio />
      <Contact />

      <WhatsAppButton />

      <footer className="bg-slate-900 text-slate-300 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-12">
            <div className="col-span-1 sm:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <img 
                  src={LOGO_URL} 
                  alt="GP Pintura" 
                  className="h-12 w-auto object-contain"
                />
                <div className="flex flex-col">
                  <span className="text-xl font-black text-white leading-none">GP PINTURA</span>
                  <span className="text-[10px] font-bold text-orange-500 tracking-widest mt-1">REFORMA E CONSTRUÇÃO</span>
                </div>
              </div>
              <p className="max-w-md text-slate-400 text-sm md:text-base mb-8 leading-relaxed">
                Serviços profissionais de pintura residencial e comercial com acabamentos de alto padrão.
              </p>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/gppintura/" target="_blank" rel="noreferrer" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all"><Instagram size={20} /></a>
                <a href="mailto:contato@gppintura.com" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all"><Mail size={20} /></a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Navegação</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#services" className="hover:text-orange-500 transition-colors">Serviços</a></li>
                <li><a href="#about" className="hover:text-orange-500 transition-colors">Sobre</a></li>
                <li><a href="#portfolio" className="hover:text-orange-500 transition-colors">Portfólio</a></li>
                <li><a href="#contact" className="hover:text-orange-500 transition-colors">Contato</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Atendimento</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2"><MapPin size={16} className="text-orange-500 shrink-0 mt-0.5" /> Goiânia e Região</li>
                <li className="flex items-center gap-2 text-orange-500 font-bold underline decoration-2 underline-offset-4">
                  (62) 98126-4726
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] md:text-xs text-slate-500">
            <p>© {new Date().getFullYear()} GP Pintura. Todos os direitos reservados.</p>
            <p>Criado com Excelência para você.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
