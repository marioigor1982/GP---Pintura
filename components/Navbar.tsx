
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { LOGO_URL } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-bold text-base uppercase tracking-widest transition-all hover:text-orange-500 relative group/link ${scrolled ? 'text-slate-800' : 'text-white'}`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover/link:w-full"></span>
              </a>
            ))}
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
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-800 text-xl font-bold hover:text-orange-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
