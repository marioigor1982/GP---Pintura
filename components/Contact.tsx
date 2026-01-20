
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Send, Loader2, CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react';
import { INSTAGRAM_URL } from '../constants';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Pintura interna e externa',
    details: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.name.trim() || !formData.phone.trim() || !formData.details.trim()) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    setStatus('submitting');

    // Preparação da mensagem para o WhatsApp
    const phoneNumber = "5562981264726";
    const message = `*Solicitação de Orçamento - GP Pintura*%0A%0A` +
                    `*Nome:* ${formData.name}%0A` +
                    `*WhatsApp:* ${formData.phone}%0A` +
                    `*Serviço:* ${formData.service}%0A` +
                    `*Detalhes:* ${formData.details}`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    // Simular um pequeno delay para feedback visual de carregamento antes de abrir o link
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setStatus('success');
      
      // Resetar formulário após envio bem-sucedido
      setFormData({
        name: '',
        phone: '',
        service: 'Pintura interna e externa',
        details: ''
      });
    }, 800);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Informações de Contato */}
          <div className="animate-in fade-in slide-in-from-left-8 duration-700">
            <h2 className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-2">Entre em contato</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">Vamos discutir o seu projeto</h3>
            <p className="text-slate-600 text-lg mb-12">
              Pronto para dar uma nova cara ao seu espaço? Entre em contato hoje mesmo para uma consulta e orçamento gratuito via WhatsApp. Estamos aqui para ajudar você a fazer a escolha certa.
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

            <div className="mt-12 p-8 bg-slate-900 rounded-3xl text-white flex items-center justify-between border border-slate-800 shadow-xl">
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

          {/* Área do Formulário */}
          <div className="relative">
            {status === 'success' ? (
              <div className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-2xl h-full flex flex-col items-center justify-center text-center animate-in zoom-in-95 fade-in duration-500">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 shadow-inner">
                  <CheckCircle2 size={44} />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">Redirecionando...</h3>
                <p className="text-slate-600 text-lg mb-8">
                  Sua mensagem foi preparada! Se o WhatsApp não abriu automaticamente, <span className="text-orange-500 font-bold">clique no botão abaixo</span> para finalizar o contato.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg"
                >
                  <RefreshCw size={18} />
                  Novo Orçamento
                </button>
              </div>
            ) : (
              <div className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-2xl transition-all duration-300">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Nome Completo</label>
                      <input 
                        required
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Seu nome aqui"
                        className={`w-full bg-white border ${status === 'error' && !formData.name ? 'border-red-400' : 'border-slate-200'} rounded-xl px-5 py-4 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all shadow-sm`}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Telefone / WhatsApp</label>
                      <input 
                        required
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(00) 00000-0000"
                        className={`w-full bg-white border ${status === 'error' && !formData.phone ? 'border-red-400' : 'border-slate-200'} rounded-xl px-5 py-4 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all shadow-sm`}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Tipo de Serviço</label>
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all appearance-none shadow-sm cursor-pointer font-medium text-slate-700"
                    >
                      <optgroup label="Paredes e Tetos">
                        <option value="Pintura interna e externa">Pintura interna e externa</option>
                        <option value="Aplicação de massa corrida ou acrílica">Massa corrida ou acrílica</option>
                        <option value="Aplicação de selador e fundo">Selador e fundo preparatório</option>
                        <option value="Lixamento e correção">Lixamento e correção de imperfeições</option>
                        <option value="Texturas e grafiato">Aplicação de texturas e grafiato</option>
                      </optgroup>
                      <optgroup label="Portões e Metais">
                        <option value="Pintura de Portões e Metais">Lixamento e Pintura de Portões/Metais</option>
                        <option value="Fundo anticorrosivo">Aplicação de fundo anticorrosivo</option>
                      </optgroup>
                      <optgroup label="Madeiras">
                        <option value="Verniz e Seladora em Madeiras">Verniz e Seladora em portas/beirais</option>
                        <option value="Pintura de portas com esmalte">Pintura de portas com tinta esmalte</option>
                      </optgroup>
                      <optgroup label="Extras e Reparos">
                        <option value="Pintura de grades e corrimãos">Pintura de grades e corrimãos</option>
                        <option value="Pequenos reparos em trincas">Pequenos reparos em trincas</option>
                        <option value="Outros Serviços">Outros / Manutenção Geral</option>
                      </optgroup>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Detalhes do Projeto</label>
                    <textarea 
                      required
                      rows={4}
                      name="details"
                      value={formData.details}
                      onChange={handleChange}
                      placeholder="Conte-nos um pouco sobre o que você precisa: metragem, cores, urgência..."
                      className={`w-full bg-white border ${status === 'error' && !formData.details ? 'border-red-400' : 'border-slate-200'} rounded-xl px-5 py-4 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all resize-none shadow-sm h-32 md:h-40`}
                    ></textarea>
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-2 text-red-500 text-sm font-bold animate-in fade-in slide-in-from-top-2 bg-red-50 p-3 rounded-lg border border-red-100">
                      <AlertCircle size={18} />
                      <span>Por favor, preencha todos os campos obrigatórios.</span>
                    </div>
                  )}

                  <button 
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full group bg-orange-500 text-white font-black uppercase tracking-widest py-5 rounded-xl text-lg hover:bg-orange-600 transition-all flex items-center justify-center gap-2 shadow-xl shadow-orange-500/30 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 size={24} className="animate-spin" />
                        Processando...
                      </>
                    ) : (
                      <>
                        Solicitar Orçamento
                        <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                  
                  <div className="flex flex-col items-center gap-1 mt-4">
                    <p className="text-center text-slate-500 text-[11px] font-bold uppercase tracking-widest">
                      Tempo médio de resposta: <span className="text-orange-500">Imediato</span>
                    </p>
                    <p className="text-[10px] text-slate-400 text-center px-4 leading-tight italic">
                      Ao clicar em "Solicitar Orçamento", uma janela do WhatsApp será aberta com os dados do formulário formatados profissionalmente.
                    </p>
                  </div>
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
