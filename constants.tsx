
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
  // Residencial
  { id: 8, title: 'Fachada Moderna', category: 'Residencial', imageUrl: 'https://i.postimg.cc/LsLkGQP0/Casa.jpg' },
  { id: 10, title: 'Interior Sofisticado', category: 'Residencial', imageUrl: 'https://i.postimg.cc/QtkrqqtP/2.jpg' },
  { id: 11, title: 'Interior Sofisticado', category: 'Residencial', imageUrl: 'https://i.postimg.cc/MTb8YYTD/6.jpg' },
  { id: 12, title: 'Interior Sofisticado', category: 'Residencial', imageUrl: 'https://i.postimg.cc/k4Fdyy4y/5.jpg' },
  { id: 13, title: 'Interior Sofisticado', category: 'Residencial', imageUrl: 'https://i.postimg.cc/63LNhh3j/3.jpg' },
  { id: 14, title: 'Interior Sofisticado', category: 'Residencial', imageUrl: 'https://i.postimg.cc/DZdKccZd/7.jpg' },
  { id: 3, title: 'Revitalização Predial', category: 'Residencial', imageUrl: 'https://cdn.sindiconet.com.br/Conteudos/8157/pintura_fachada_956_667.jpg' },
  
  // Comercial
  { id: 20, title: 'Espaços Comerciais', category: 'Comercial', imageUrl: 'https://i.postimg.cc/SQvxCgwg/gp10.jpg' },
  { id: 21, title: 'Espaços Comerciais', category: 'Comercial', imageUrl: 'https://i.postimg.cc/3rcxmtPF/gp9.jpg' },
];

export const LOGO_URL = "https://i.postimg.cc/tJdgyb4N/GP-PINTURA-removebg-preview.png";
export const INSTAGRAM_URL = "https://www.instagram.com/pintura.gp/";
export const INSTAGRAM_POST_URL = "https://www.instagram.com/p/ClGtCxCuCzy/";
