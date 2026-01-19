
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  imageUrl: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: 'Residencial' | 'Comercial';
  imageUrl: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
