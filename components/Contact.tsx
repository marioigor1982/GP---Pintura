
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Send, ArrowRight, Loader2, CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react';
import { INSTAGRAM_URL } from '../constants';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Pintura Residencial',
    details: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.phone || !formData.details) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    setStatus('submitting');

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setStatus('success');
      // Reset form
      setFormData({
        name: '',
        phone: '',
        service: 'Pintura Residencial',
        details: ''
      });
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="animate-in fade-in slide-in-from-left-8 duration-700">
            <h2 className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-2">Entre em contato</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">Vamos discutir o seu projeto</h3>
            <p className="text-slate-600 text-lg mb-12">
              Pronto para dar uma nova cara ao seu espaço? Entre em contato hoje mesmo para uma consulta e orçamento gratuito. Estamos aqui para ajudar você a fazer a escolha certa.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 bg-slate-50 text-orange-500 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Ligue para nós</h4>
                  <p className="text-slate-600">+55 (62) 98126-4726</p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 bg-slate-50 text-orange-500 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                  <Mail size={24} className="group-hover:text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">E-mail</h4>
                  <p className="text-slate-600">contato@gppintura.com</p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 bg-slate-50 text-orange-500 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Localização</h4>
                  <p className="text-slate-600">Anápolis, Goiás, Brasil</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-slate-900 rounded-3xl text-white flex items-center justify-between border border-slate-800">
              <div>
                <h4 className="font-bold text-xl mb-1 text-orange-500">Siga nossa jornada</h4>
                <p className="text-slate-400 text-sm">Acompanhe nossas obras no Instagram</p>
              </div>
              <a 
                href={INSTAGRAM_URL} 
                target="_blank" 
                rel="noreferrer"
                className="w-14 h-14 bg-gradient-to-tr from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-orange-500/20"
                aria-label="Instagram"
              >
                <Instagram size={28} className="text-white" />
              </a>
            </div>
          </div>

          {/* Form Area */}
          <div className="relative">
            {status === 'success' ? (
              <div className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-xl h-full flex flex-col items-center justify-center text-center animate-in zoom-in-95 fade-in duration-500">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 shadow-inner">
                  <CheckCircle2 size={44} />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">Mensagem Enviada!</h3>
                <p className="text-slate-600 text-lg mb-8">
                  Obrigado por entrar em contato, <span className="text-orange-500 font-bold">estamos ansiosos para transformar seu espaço</span>. Nossa equipe retornará em breve.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg"
                >
                  <RefreshCw size={18} />
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <div className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-xl transition-all duration-300">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Nome Completo</label>
                      <input 
                        required
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Seu nome aqui"
                        className={`w-full bg-white border ${status === 'error' && !formData.name ? 'border-red-400' : 'border-slate-200'} rounded-xl px-5 py-4 focus:outline-none focus:border-orange-500 transition-colors shadow-sm`}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Telefone / WhatsApp</label>
                      <input 
                        required
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(00) 00000-0000"
                        className={`w-full bg-white border ${status === 'error' && !formData.phone ? 'border-red-400' : 'border-slate-200'} rounded-xl px-5 py-4 focus:outline-none focus:border-orange-500 transition-colors shadow-sm`}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Tipo de Serviço</label>
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:border-orange-500 transition-colors appearance-none shadow-sm cursor-pointer"
                    >
                      <option value="Pintura Residencial">Pintura Residencial</option>
                      <option value="Pintura Comercial">Pintura Comercial</option>
                      <option value="Revestimentos Especiais">Revestimentos Especiais</option>
                      <option value="Reforma de Armários">Reforma de Armários</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Detalhes do Projeto</label>
                    <textarea 
                      required
                      rows={4}
                      name="details"
                      value={formData.details}
                      onChange={handleChange}
                      placeholder="Conte-nos um pouco sobre o que você precisa..."
                      className={`w-full bg-white border ${status === 'error' && !formData.details ? 'border-red-400' : 'border-slate-200'} rounded-xl px-5 py-4 focus:outline-none focus:border-orange-500 transition-colors resize-none shadow-sm`}
                    ></textarea>
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-2 text-red-500 text-sm font-bold animate-in fade-in slide-in-from-top-2">
                      <AlertCircle size={16} />
                      <span>Por favor, preencha todos os campos obrigatórios.</span>
                    </div>
                  )}

                  <button 
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full group bg-orange-500 text-white font-bold py-5 rounded-xl text-lg hover:bg-orange-600 transition-all flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 size={24} className="animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Solicitar Orçamento
                        <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                  
                  <p className="text-center text-slate-500 text-sm">
                    Tempo médio de resposta: <span className="text-orange-500 font-semibold">Menos de 2 horas</span>
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
