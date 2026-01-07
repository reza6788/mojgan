export enum Language {
  EN = 'en',
  DE = 'de',
  FA = 'fa'
}

export interface Translation {
  nav: {
    home: string;
    collections: string;
    maison: string;
    services: string;
    testimonials: string;
    contact: string;
  };
  home: {
    hero: {
      brand: string;
      line1: string;
      line2: string;
      accent: string;
      description: string;
      btnOrder: string;
      btnGallery: string;
    };
    legacy: {
      year: string;
      title: string;
      accent: string;
      p1: string;
      p2: string;
      stat1: string;
      stat1Label: string;
      stat2: string;
      stat2Label: string;
    };
    services: {
      subtitle: string;
      title: string;
      accent: string;
      viewDetails: string;
    };
    testimonials: {
      title: string;
      accent: string;
      description: string;
      scroll: string;
    };
    orderSection: {
      subtitle: string;
      title: string;
      accent: string;
      guaranteeTitle: string;
      guaranteeText: string;
    };
  };
  maisonPage: {
    hero: {
      year: string;
      title: string;
      accent: string;
      subtitle: string;
    };
    tradition: {
      title: string;
      accent: string;
      p1: string;
      p2: string;
      feature1Title: string;
      feature1Desc: string;
      feature2Title: string;
      feature2Desc: string;
      signature: string;
    };
    quote: string;
    process: {
      title: string;
      steps: {
        title: string;
        desc: string;
      }[];
    };
    timeline: {
      title: string;
      milestones: {
        year: string;
        title: string;
        desc: string;
      }[];
    };
  };
  footer: {
    description: string;
    headers: {
      quickLinks: string;
      services: string;
      contact: string;
    };
    links: {
      about: string;
      placeOrder: string;
      services: string;
      gallery: string;
      testimonials: string;
      bridal: string;
      custom: string;
      restoration: string;
      monogram: string;
    };
    copyright: string;
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
      garmentType: string;
      embroideryStyle: string;
      fabricType: string;
      deliveryDate: string;
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
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}