export enum Language {
  EN = 'en',
  DE = 'de',
  FA = 'fa'
}

export interface Translation {
  nav: {
    collections: string;
    maison: string;
    services: string;
    testimonials: string;
    contact: string;
  };
  hero: {
    est: string;
    title: string;
    titleAccent: string;
    description: string;
  };
  about: {
    title: string;
    titleAccent: string;
    p1: string;
    p2: string;
    feature1Title: string;
    feature1Desc: string;
    feature2Title: string;
    feature2Desc: string;
    role: string;
  };
  quote: {
    text: string;
    label: string;
  };
  process: {
    title: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
  };
  servicesPage: {
    heroTag: string;
    heroTitle: string;
    heroTitleAccent: string;
    heroDesc: string;
    items: {
      id: string;
      title: string;
      desc: string;
      fullDescription: string;
      features: string[];
      tag: string;
      icon: string;
      image: string;
    }[];
    cta: {
      title: string;
      desc: string;
      btn1: string;
      btn2: string;
    };
  };
  gallery: {
    title: string;
    subtitle: string;
    description: string;
    filters: {
      all: string;
      bridal: string;
      evening: string;
      traditional: string;
      modern: string;
    };
  };
  testimonialsPage: {
    subtitle: string;
    title: string;
    description: string;
    cta: {
      title: string;
      subtitle: string;
      button: string;
    };
    items: {
      id: number;
      name: string;
      role: string;
      text: string;
      image: string;
      featured?: boolean;
    }[];
  };
  order: {
    title: string;
    subtitle: string;
    steps: {
      contact: string;
      details: string;
      review: string;
    };
    fields: {
      name: string;
      email: string;
      phone: string;
      garment: string;
      style: string;
      fabric: string;
      date: string;
      notes: string;
      submit: string;
    };
    success: string;
  };
}

export interface GalleryItem {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  category: 'bridal' | 'evening' | 'traditional' | 'modern';
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  text: string;
  rating: number;
}

export interface OrderFormData {
  fullName: string;
  email: string;
  phone: string;
  garmentType: string;
  embroideryStyle: string;
  fabricType: string;
  deliveryDate: string;
  notes: string;
  referenceImage?: FileList;
}