
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useStore } from '../store/useStore';
import { translations } from '../i18n/translations';

// Fix for framer-motion type errors
const m = motion as any;

export const Services: React.FC = () => {
  const { language } = useStore();
  const t = translations[language].servicesPage;

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen">
      
      {/* Hero Section */}
      <div className="relative py-24 bg-background-light dark:bg-background-dark overflow-hidden pt-32">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Fix for framer-motion type error */}
          <m.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="block text-primary uppercase tracking-[0.3em] text-sm mb-4 font-bold"
          >
            {t.heroTag}
          </m.span>
          {/* Fix for framer-motion type error */}
          <m.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-display font-bold text-gray-900 dark:text-white mb-6"
          >
            {t.heroTitle} <span className="italic text-primary">{t.heroTitleAccent}</span>
          </m.h1>
          
          <div className="flex items-center justify-center my-8 text-primary">
             <div className="h-px w-24 bg-primary mx-4"></div>
             <span className="material-icons text-2xl">diamond</span>
             <div className="h-px w-24 bg-primary mx-4"></div>
          </div>

          {/* Fix for framer-motion type error */}
          <m.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300 font-light leading-relaxed font-sans"
          >
            {t.heroDesc}
          </m.p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-12 pb-24 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.items.map((item, index) => (
              /* Fix for framer-motion type error */
              <m.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white dark:bg-surface-dark rounded-xl shadow-lg dark:shadow-none overflow-hidden border border-gray-100 dark:border-gray-800 hover:-translate-y-2 transition-transform duration-300"
              >
                <Link to={`/services/${item.id}`} className="block h-full">
                  <div className="h-64 overflow-hidden relative">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute bottom-4 left-4 z-20">
                      <span className="bg-primary/90 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                        {item.tag}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl font-serif font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <span className="material-icons text-primary/60 text-3xl">{item.icon}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 font-sans">
                      {item.desc}
                    </p>
                    <span className="inline-flex items-center text-primary font-bold hover:text-primary-hover transition-colors uppercase text-sm tracking-widest group">
                       Explore Details
                       <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </m.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-20 bg-secondary dark:bg-[#1A222E] overflow-hidden">
        {/* Simplified background pattern to avoid complex nested quotes issues */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none" 
          style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/black-linen.png')" }}
        ></div>
        
        <div className="relative max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            {t.cta.title}
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto font-light font-sans">
            {t.cta.desc}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/order" 
              className="bg-primary text-white hover:bg-white hover:text-primary transition-all duration-300 px-8 py-4 rounded-lg font-bold uppercase tracking-widest text-sm shadow-lg border border-transparent hover:border-primary"
            >
              {t.cta.btn1}
            </Link>
            <Link 
              to="/gallery" 
              className="bg-transparent border border-white text-white hover:bg-white hover:text-primary transition-all duration-300 px-8 py-4 rounded-lg font-bold uppercase tracking-widest text-sm"
            >
              {t.cta.btn2}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
