
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Calendar } from 'lucide-react';
import { useStore } from '../store/useStore';
import { translations } from '../i18n/translations';

// Fix for framer-motion type errors
const m = motion as any;

export const ServiceDetail: React.FC = () => {
  const { id } = useParams();
  const { language } = useStore();
  const t = translations[language];
  
  const service = t.servicesPage.items.find(item => item.id === id);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen">
      {/* Scroll Progress Bar (Optional Visual Flair) */}
      {/* Fix for framer-motion type error */}
      <m.div 
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50" 
        initial={{ scaleX: 0 }} 
        animate={{ scaleX: 1 }} 
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      {/* Hero Section - Split View */}
      <div className="relative min-h-[60vh] flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 h-[50vh] md:h-auto relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20 z-10"></div>
          {/* Fix for framer-motion type error */}
          <m.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "linear" }}
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-24 left-8 md:left-12 z-20">
             <Link to="/services" className="inline-flex items-center text-white/90 hover:text-white transition-colors uppercase text-xs tracking-widest bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 hover:border-white/50">
               <ArrowLeft size={14} className="mr-2 rtl:rotate-180" /> Back to Services
             </Link>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 bg-surface-light dark:bg-surface-dark p-8 md:p-16 lg:p-24 flex flex-col justify-center relative">
          <div 
             className="absolute top-0 right-0 opacity-5 pointer-events-none" 
             style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}
          ></div>

          {/* Fix for framer-motion type error */}
          <m.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4 block">
              {service.tag} Service
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-gray-900 dark:text-white mb-8 leading-tight">
              {service.title}
            </h1>
            <div className="w-20 h-1 bg-primary mb-8"></div>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed font-light mb-10">
              {service.fullDescription}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/order" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-bold uppercase tracking-widest text-sm hover:bg-primary-hover shadow-lg transition-all hover:-translate-y-1">
                Commission This <span className="material-icons ml-2 text-sm">arrow_forward</span>
              </Link>
            </div>
          </m.div>
        </div>
      </div>

      {/* Details & Features Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
           {/* Features List */}
           {/* Fix for framer-motion type error */}
           <m.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="bg-white dark:bg-card-dark p-10 rounded-xl shadow-elegant dark:shadow-none border border-gray-100 dark:border-gray-800"
           >
             <h3 className="font-display text-2xl text-gray-900 dark:text-white mb-8">Service Highlights</h3>
             <ul className="space-y-6">
               {service.features.map((feature, idx) => (
                 /* Fix for framer-motion type error */
                 <m.li 
                   key={idx}
                   initial={{ opacity: 0, x: -10 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   transition={{ delay: idx * 0.1 }}
                   className="flex items-center text-gray-600 dark:text-gray-300"
                 >
                   <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                     <Check size={14} className="text-primary" />
                   </span>
                   <span className="text-lg font-light">{feature}</span>
                 </m.li>
               ))}
             </ul>
           </m.div>

           {/* Process / Info */}
           <div className="space-y-10">
             <div>
               <span className="material-icons text-4xl text-primary/80 mb-4">{service.icon}</span>
               <h3 className="font-display text-3xl text-gray-900 dark:text-white mb-4">Why Choose Meson Mojgan?</h3>
               <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg font-light">
                 Our commitment to the craft is unwavering. When you choose our {service.title.toLowerCase()}, you are not just purchasing a service; you are investing in centuries of textile heritage, reimagined for the modern era. Every stitch is placed with intention, every material selected for its quality.
               </p>
             </div>

             <div className="p-6 border-l-4 border-primary bg-primary/5">
                <div className="flex items-start gap-4">
                  <Calendar className="text-primary mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white uppercase tracking-wider text-sm mb-2">Timeline</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Standard turnaround for this service ranges from 2-6 weeks depending on complexity. Expedited options are available upon request.
                    </p>
                  </div>
                </div>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};
