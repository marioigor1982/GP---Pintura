
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { LOGO_URL } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Serviços', href: '#services' },
    { name: 'Sobre', href: '#about' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Contato', href: '#contact' },
  ];

  // SVG de Splash de Tinta Grunge
  const PaintSplash = () => (
    <div className="absolute inset-0 -z-10 flex items-center justify-center animate-in fade-in zoom-in duration-300 fill-orange-500">
      <svg 
        viewBox="0 0 200 100" 
        className="w-[140%] h-[180%] opacity-90 scale-125 md:scale-150 rotate-3"
        preserveAspectRatio="none"
      >
        <path d="M10,50 Q25,10 50,20 T90,15 T130,25 T170,10 T190,50 Q180,90 150,85 T110,95 T70,80 T30,95 T10,50" />
        <circle cx="20" cy="20" r="3" />
        <circle cx="180" cy="80" r="4" />
        <circle cx="160" cy="15" r="2" />
        <circle cx="40" cy="85" r="5" />
        <path d="M40,20 Q45,25 42,30" strokeWidth="2" stroke="currentColor" fill="none" />
        <path d="M160,70 Q165,75 162,80" strokeWidth="2" stroke="currentColor" fill="none" />
      </svg>
    </div>
  );

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'glass-effect py-2 shadow-lg' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 relative group">
            <a href="#" className={`flex flex-col items-center transition-all duration-500 transform ${scrolled ? 'scale-90' : 'scale-105'}`}>
              <div className="flex items-center gap-3">
                <img 
                  src={LOGO_URL} 
                  alt="GP Pintura" 
                  className="h-16 md:h-20 w-auto object-contain drop-shadow-2xl"
                />
                <div className="flex flex-col">
                  <span className={`text-2xl md:text-3xl font-black tracking-tighter uppercase leading-none drop-shadow-lg ${scrolled ? 'text-slate-900' : 'text-white'}`}>
                    GP <span className="text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">PINTURA</span>
                  </span>
                  <span className="text-[10px] md:text-[12px] font-black tracking-[0.3em] uppercase mt-1 text-orange-500 drop-shadow-sm">
                    Reforma e Construção
                  </span>
                </div>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-12">
            {navLinks.map((link) => {
              const isActive = activeLink === link.name;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveLink(link.name)}
                  className={`relative px-4 py-2 font-black text-base uppercase tracking-widest transition-all duration-300 flex items-center justify-center group/link
                    ${isActive 
                      ? 'text-[#F2F2F2] scale-110' 
                      : scrolled ? 'text-slate-800' : 'text-white'
                    }
                    hover:text-orange-500 hover:scale-105
                  `}
                >
                  <span className="relative z-10">{link.name}</span>
                  {isActive && <PaintSplash />}
                  {!isActive && (
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover/link:w-full"></span>
                  )}
                </a>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-xl transition-colors ${scrolled ? 'text-slate-900 bg-slate-100' : 'text-white bg-white/10'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden glass-effect absolute top-full left-0 w-full border-t border-gray-100 py-8 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-6 px-8">
            {navLinks.map((link) => {
              const isActive = activeLink === link.name;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative w-fit px-6 py-3 text-xl font-black uppercase tracking-widest transition-all 
                    ${isActive ? 'text-[#F2F2F2]' : 'text-slate-800'}
                  `}
                  onClick={() => {
                    setActiveLink(link.name);
                    setIsOpen(false);
                  }}
                >
                  <span className="relative z-10">{link.name}</span>
                  {isActive && <PaintSplash />}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
