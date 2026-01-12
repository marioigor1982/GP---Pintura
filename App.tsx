
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import WhatsAppButton from './components/WhatsAppButton';
import { Award, ShieldCheck, Clock, ThumbsUp, Instagram, MapPin, Mail } from 'lucide-react';
import { LOGO_URL } from './constants';

const App: React.FC = () => {
  return (
    <div className="relative overflow-x-hidden bg-gp-light">
      <Navbar />
      <Hero />

      {/* Trust Badges */}
      <div className="bg-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-14 h-14 bg-orange-500/10 rounded-full flex items-center justify-center border border-orange-500/20">
                <Award className="text-orange-500" size={28} />
              </div>
              <div>
                <h5 className="text-white font-bold">Excelência Premiada</h5>
                <p className="text-slate-400 text-sm">Qualidade em cada detalhe</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-14 h-14 bg-orange-500/10 rounded-full flex items-center justify-center border border-orange-500/20">
                <ShieldCheck className="text-orange-500" size={28} />
              </div>
              <div>
                <h5 className="text-white font-bold">Totalmente Seguro</h5>
                <p className="text-slate-400 text-sm">Profissionais Licenciados</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-14 h-14 bg-orange-500/10 rounded-full flex items-center justify-center border border-orange-500/20">
                <Clock className="text-orange-500" size={28} />
              </div>
              <div>
                <h5 className="text-white font-bold">Entrega no Prazo</h5>
                <p className="text-slate-400 text-sm">Cronogramas Rigorosos</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-14 h-14 bg-orange-500/10 rounded-full flex items-center justify-center border border-orange-500/20">
                <ThumbsUp className="text-orange-500" size={28} />
              </div>
              <div>
                <h5 className="text-white font-bold">100% Satisfação</h5>
                <p className="text-slate-400 text-sm">Foco Total no Cliente</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Services />

      <section id="about" className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://i.postimg.cc/C1xQ4HWf/premium_photo_1664300519719_fc40ef9122d2.avif" 
                  alt="GP Pintura Team"
                  className="w-full object-cover min-h-[500px]"
                />
              </div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-500 rounded-3xl -z-0 hidden md:block opacity-20"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-slate-900 rounded-3xl -z-0 hidden md:block opacity-20"></div>
              
              <div className="absolute bottom-10 left-10 bg-white p-8 rounded-3xl shadow-xl z-20 border border-slate-100 max-w-[280px]">
                <p className="text-orange-500 text-4xl font-bold mb-1">25+</p>
                <p className="text-slate-900 font-bold text-lg">anos de experiência, qualidade e confiança</p>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-2">Sobre Nós</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Construído com Qualidade, <br />Movido pela Integridade.</h3>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                A GP Pintura nasceu com uma visão simples: trazer a arte de volta à indústria da pintura. Acreditamos que cada parede é uma tela em branco e cada cliente merece uma obra-prima.
              </p>
              <ul className="space-y-4 mb-10">
                {['Tintas Premium e Atóxicas', 'Preparação e Limpeza Meticulosa', 'Combinação Especialista de Cores', 'Artesanato de Veteranos'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <div className="w-6 h-6 bg-orange-500/10 rounded-full flex items-center justify-center text-orange-500">
                      <ShieldCheck size={16} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all"
              >
                Saiba Mais Sobre Nós
              </a>
            </div>
          </div>
        </div>
      </section>

      <Portfolio />

      <WhatsAppButton />

      <footer id="contact" className="bg-slate-900 text-slate-300 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-4 mb-8">
                <img 
                  src={LOGO_URL} 
                  alt="GP Pintura" 
                  className="h-16 md:h-20 w-auto object-contain drop-shadow-xl"
                />
                <div className="flex flex-col">
                  <span className="text-2xl md:text-3xl font-black tracking-tighter uppercase leading-none text-white">
                    GP PINTURA
                  </span>
                  <span className="text-[10px] md:text-[12px] font-black tracking-[0.3em] uppercase mt-1 text-orange-500">
                    Reforma e Construção
                  </span>
                </div>
              </div>
              <p className="max-w-sm text-slate-400 mb-8">
                Oferecendo serviços profissionais de pintura residencial e comercial em toda a região. Acabamentos de qualidade que resistem ao teste do tempo.
              </p>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/gppintura/" target="_blank" rel="noreferrer" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all" aria-label="Instagram"><Instagram size={20} /></a>
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all" aria-label="Localização"><MapPin size={20} /></a>
                <a href="mailto:contato@gppintura.com" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all" aria-label="E-mail"><Mail size={20} /></a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Links Rápidos</h4>
              <ul className="space-y-4">
                <li><a href="#services" className="hover:text-orange-500 transition-colors">Serviços</a></li>
                <li><a href="#portfolio" className="hover:text-orange-500 transition-colors">Portfólio</a></li>
                <li><a href="#about" className="hover:text-orange-500 transition-colors">Sobre</a></li>
                <li><a href="#contact" className="hover:text-orange-500 transition-colors">Contato</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Nossos Serviços</h4>
              <ul className="space-y-4">
                <li><a href="#services" className="hover:text-orange-500 transition-colors">Residencial</a></li>
                <li><a href="#services" className="hover:text-orange-500 transition-colors">Comercial</a></li>
                <li><a href="#services" className="hover:text-orange-500 transition-colors">Revestimentos Especiais</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>© {new Date().getFullYear()} GP Pintura. Todos os direitos reservados.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos de Serviço</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
