
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import { Award, ShieldCheck, Clock, ThumbsUp, Instagram, MapPin, Mail, Briefcase, Phone, Calendar } from 'lucide-react';
import { LOGO_URL, INSTAGRAM_URL } from './constants';

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

      <footer className="w-full">
        {/* Top Section - Orange Bar */}
        <div className="bg-[#F2865E] py-10 md:py-12 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 items-start text-center">
              <div className="flex flex-col items-center px-4 border-r-0 lg:border-r border-white/20 last:border-0">
                <h4 className="text-white font-black text-xs md:text-sm uppercase tracking-widest mb-4">Endereço</h4>
                <p className="text-white/90 text-sm md:text-base font-medium max-w-[200px]">Goiânia e Região Metropolitana</p>
              </div>
              
              <div className="flex flex-col items-center px-4 border-r-0 lg:border-r border-white/20 last:border-0">
                <h4 className="text-white font-black text-xs md:text-sm uppercase tracking-widest mb-4">Contato</h4>
                <div className="flex flex-col gap-1 text-sm md:text-base font-medium text-white/90">
                  <a href="tel:5562981264726" className="hover:text-white transition-colors">(62) 98126-4726</a>
                  <a href="mailto:contato@gppintura.com" className="hover:text-white transition-colors">contato@gppintura.com</a>
                </div>
              </div>

              <div className="flex flex-col items-center px-4 border-r-0 lg:border-r border-white/20 last:border-0">
                <h4 className="text-white font-black text-xs md:text-sm uppercase tracking-widest mb-4">Horários</h4>
                <p className="text-white/90 text-sm md:text-base font-medium">Segunda a Sexta<br/>das 8h às 12h e 13h às 18h</p>
              </div>

              <div className="flex flex-col items-center px-4">
                <h4 className="text-white font-black text-xs md:text-sm uppercase tracking-widest mb-4">Formulário</h4>
                <a 
                  href="#contact" 
                  className="inline-block border-2 border-white text-white px-8 py-2.5 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-[#F2865E] transition-all duration-300 active:scale-95"
                >
                  Contato
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Grey Area */}
        <div className="bg-[#565759] pt-16 pb-8 md:pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
              
              {/* Logo Column */}
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center gap-3 mb-6">
                  <img src={LOGO_URL} alt="GP Pintura" className="h-16 w-auto drop-shadow-md object-contain" />
                  <div className="flex flex-col">
                    <span className="text-2xl font-black text-white leading-none tracking-tighter">GP PINTURA</span>
                    <span className="text-[9px] font-bold text-[#F2865E] tracking-[0.2em] uppercase mt-1">REFORMA E CONSTRUÇÃO</span>
                  </div>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed text-center lg:text-left max-w-xs mb-8">
                  Especialistas em acabamentos de alto padrão e transformações de ambientes.
                </p>
                <div className="flex gap-4">
                  <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#F2865E] transition-all">
                    <Instagram size={20} className="text-white" />
                  </a>
                  <a href="mailto:contato@gppintura.com" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#F2865E] transition-all">
                    <Mail size={20} className="text-white" />
                  </a>
                </div>
              </div>

              {/* Navigation Column */}
              <div className="flex flex-col items-center lg:items-start">
                <h4 className="flex items-center gap-2 text-white font-bold mb-8 uppercase tracking-widest text-sm">
                  <span className="w-2 h-4 bg-[#F2865E] rounded-sm"></span> Navegação
                </h4>
                <ul className="space-y-4 text-slate-300 text-sm font-medium text-center lg:text-left">
                  <li><a href="#services" className="hover:text-white transition-colors">Nossos Serviços</a></li>
                  <li><a href="#about" className="hover:text-white transition-colors">Quem Somos</a></li>
                  <li><a href="#portfolio" className="hover:text-white transition-colors">Projetos Realizados</a></li>
                  <li><a href="#contact" className="hover:text-white transition-colors">Falar com Consultor</a></li>
                </ul>
              </div>

              {/* Products/Services Column */}
              <div className="flex flex-col items-center lg:items-start">
                <h4 className="flex items-center gap-2 text-white font-bold mb-8 uppercase tracking-widest text-sm">
                  <span className="w-2 h-4 bg-[#F2865E] rounded-sm"></span> Serviços
                </h4>
                <ul className="space-y-4 text-slate-300 text-sm font-medium text-center lg:text-left">
                  <li>Pintura Residencial</li>
                  <li>Pintura Comercial</li>
                  <li>Revestimentos Especiais</li>
                  <li>Reforma de Armários</li>
                </ul>
              </div>

              {/* Quality/Feed Column */}
              <div className="flex flex-col items-center lg:items-start">
                <h4 className="flex items-center gap-2 text-white font-bold mb-8 uppercase tracking-widest text-sm">
                  <span className="w-2 h-4 bg-[#F2865E] rounded-sm"></span> Qualidade
                </h4>
                <div className="w-full flex flex-col items-center lg:items-start">
                  <div className="p-6 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-center lg:items-start text-center lg:text-left group hover:border-[#F2865E]/50 transition-colors">
                    <ShieldCheck size={40} className="text-[#F2865E] mb-4 group-hover:scale-110 transition-transform" />
                    <h5 className="text-white font-bold mb-2">Selo de Garantia</h5>
                    <p className="text-slate-400 text-xs leading-relaxed">Garantimos a excelência de cada pincelada em seu projeto.</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Copyright */}
            <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] md:text-xs text-slate-500 uppercase tracking-widest font-bold">
              <p>Copyright © 2019 - {new Date().getFullYear()} GP Pintura. Todos os direitos reservados.</p>
              <p>Criado com <span className="text-[#F2865E]">Excelência</span> para você</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
