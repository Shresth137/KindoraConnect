import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: LucideIcon;
  image?: string;
  color: string;
}

export interface CompanyInfo {
  name: string;
  description: string;
  phone: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    postcode: string;
    country: string;
  };
  social: {
    facebook: string;
    instagram: string;
    linkedin: string;
  };
  services: {
    featured: Service[];
    all: Service[];
  };
  features: string[];
}

export interface ThemeConfig {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
  };
  gradients: {
    primary: string;
    secondary: string;
  };
  spacing: {
    section: string;
    container: string;
  };
  shadows: {
    sm: string;
    md: string;
    lg: string;
  };
}