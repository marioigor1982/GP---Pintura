
import { Service, PortfolioItem } from './types';

export const COLORS = {
  grey: '#565759',
  orange: '#F2955E',
  highlight: '#F2865E',
  terracotta: '#A66D58',
  light: '#F2F2F2'
};

export const SERVICES: Service[] = [
  {
    id: 'res',
    title: 'Pintura Residencial',
    description: 'Transformamos seu lar com serviços especializados de pintura interna e externa. Cuidamos de tudo, da preparação ao acabamento final.',
    icon: 'home',
    imageUrl: 'https://i.postimg.cc/tgzD1Zvw/ali_mkumbwa_1iho4gv_I4_g_unsplash.jpg'
  },
  {
    id: 'com',
    title: 'Pintura Comercial',
    description: 'Pintura profissional para empresas, escritórios e espaços industriais. Minimizamos o tempo de inatividade e entregamos acabamentos de alta qualidade.',
    icon: 'building',
    imageUrl: 'https://i.postimg.cc/HWhkX6f0/gp7.jpg'
  },
  {
    id: 'spc',
    title: 'Revestimentos Especiais',
    description: 'Texturas personalizadas, reforma de armários e revestimentos protetores projetados para durabilidade e apelo estético.',
    icon: 'paint',
    imageUrl: 'https://i.postimg.cc/nVPhB36m/gp2.jpg'
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  { id: 8, title: 'Fachada Moderna', category: 'Residencial', imageUrl: 'https://i.postimg.cc/LsLkGQP0/Casa.jpg' },
  { id: 3, title: 'Revitalização Predial', category: 'Residencial', imageUrl: 'https://cdn.sindiconet.com.br/Conteudos/8157/pintura_fachada_956_667.jpg' },
  { id: 1, title: 'Interior Sofisticado', category: 'Residencial', imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800' },
  { id: 2, title: 'Escritório Corporativo', category: 'Comercial', imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800' },
  { id: 4, title: 'Ambiente de Varejo', category: 'Comercial', imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800' },
  { id: 6, title: 'Galpão Industrial', category: 'Comercial', imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800' },
];

export const LOGO_URL = "https://i.postimg.cc/tJdgyb4N/GP-PINTURA-removebg-preview.png";
export const INSTAGRAM_URL = "https://www.instagram.com/pintura.gp/";
export const INSTAGRAM_POST_URL = "https://www.instagram.com/p/ClGtCxCuCzy/";
