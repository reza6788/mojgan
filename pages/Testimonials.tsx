import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { translations } from '../i18n/translations';

export const Testimonials: React.FC = () => {
  const { language } = useStore();
  const t = translations[language].testimonialsPage;

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen pt-24 pb-12 transition-colors duration-300">
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
        
        {/* Header */}
        <div className="relative max-w-7xl mx-auto text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-script text-3xl md:text-4xl text-primary mb-2 block"
          >
            {t.subtitle}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-secondary dark:text-white mb-6 uppercase tracking-wider relative inline-block"
          >
            {t.title}
            <div className="h-1 w-24 bg-primary mx-auto mt-4 rounded-full"></div>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300 font-light leading-relaxed"
          >
            {t.description}
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.items.map((item, idx) => {
            // Check if it's the center/featured item
            const isFeatured = item.featured; 
            
            if (isFeatured) {
              return (
                 <motion.div 
                   key={item.id}
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ delay: idx * 0.1 }}
                   className="group relative bg-secondary dark:bg-black p-10 rounded-xl shadow-2xl hover:shadow-2xl transition-all duration-500 border border-primary/30 flex flex-col items-center text-center transform hover:-translate-y-2 lg:-mt-4 lg:mb-4"
                 >
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')] opacity-20 pointer-events-none rounded-xl"></div>
                    <div className="absolute top-4 right-6 text-primary/30">
                       <span className="material-symbols-outlined text-7xl">format_quote</span>
                    </div>
                    <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white/20 p-1 mb-6 z-10 bg-secondary shadow-lg">
                       <img alt={`Portrait of ${item.name}`} class="w-full h-full object-cover rounded-full" src={item.image} />
                    </div>
                    <div className="relative z-10 flex-grow">
                        <div className="flex justify-center mb-4 text-primary text-sm gap-1">
                          {[...Array(5)].map((_, i) => <span key={i} className="material-symbols-outlined fill-current">star</span>)}
                        </div>
                        <p className="font-display italic text-gray-200 text-xl mb-8 leading-relaxed font-light">
                            "{item.text}"
                        </p>
                    </div>
                    <div className="mt-auto w-full">
                        <h4 className="gold-gradient-text font-display font-bold text-2xl mb-1">{item.name}</h4>
                        <p className="text-xs uppercase tracking-widest text-primary/60">{item.role}</p>
                    </div>
                    <div className="absolute inset-2 border border-primary/20 rounded-lg pointer-events-none"></div>
                 </motion.div>
              );
            }

            return (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-surface-light dark:bg-surface-dark p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-800 flex flex-col items-center text-center transform hover:-translate-y-2"
              >
                <div className="absolute top-6 left-6 text-primary/20 group-hover:text-primary/40 transition-colors">
                   <span className="material-symbols-outlined text-6xl">format_quote</span>
                </div>
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary p-1 mb-6 z-10 bg-white dark:bg-gray-800 shadow-md">
                   <img alt={`Portrait of ${item.name}`} className="w-full h-full object-cover rounded-full filter grayscale group-hover:grayscale-0 transition-all duration-500" src={item.image} />
                </div>
                <div className="relative z-10 flex-grow">
                    <div className="flex justify-center mb-4 text-primary text-sm gap-1">
                      {[...Array(5)].map((_, i) => <span key={i} className="material-symbols-outlined fill-current">star</span>)}
                    </div>
                    <p className="font-display italic text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                        "{item.text}"
                    </p>
                </div>
                <div className="mt-auto border-t border-gray-200 dark:border-gray-700 pt-6 w-full">
                    <h4 className="font-display font-bold text-xl text-secondary dark:text-primary mb-1">{item.name}</h4>
                    <p className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400">{item.role}</p>
                </div>
                {/* Decorative corner */}
                <div className={`absolute w-16 h-16 border-b-2 ${idx === 0 ? 'border-r-2 bottom-0 right-0 rounded-br-xl' : 'border-l-2 bottom-0 left-0 rounded-bl-xl'} border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-20 text-center"
        >
            <div className="inline-flex items-center justify-center p-1 rounded-full border border-primary/30 bg-surface-light dark:bg-surface-dark shadow-sm hover:shadow-md transition-shadow">
                <div className="flex -space-x-3 mr-4 pl-2">
                    <img alt="Client 1" className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiJvLnavNulGhbB2bTCN9FTDyjWUi8vmTYnV625gv7uj4oqnlNqRNLLZk3a5d-HZnydskxx35wvMDZiGYTplUn5k5wP8uJzhL_KASGjNifuH6blGPmJAJ3uqEQ5sZ2CNcwYru85SXQGkQEj4l2jXbG4G7QXap92FueTT5CWsU4aIvQEVPs6QGsHCmK0DWavO3u6nEj7sO_RA07kruOYQnC7bRTPeQQrMb3x3vpUna6-FNQDGHUPvPT91vQ41iQYU4zVDXEW9n67G0"/>
                    <img alt="Client 2" className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCc0QJ0sTFK0esTxHWQhajT48H3sMKhP3SILL9PEX4g58E6xxdiQYGQzzi7j3flUJ0x-iB-95thyXXXZIsJTpFc0uB4IcREnEeuHnkEf8iHNtCnpMST2H3CGT3KFVSf8x1R3sPNeW-3Prll4Wlt40e6R1AJ2AjR1ALrXBSaEitX1bwyo2qpPVTl_Iud_QRen-zZxm947YIaEu6qcHwI_a6wQ-qNh41fC5fmeSUHvVk-nvtsOmD9lBN5bc2DMdeqxKC9A8RX1WL4YF0"/>
                    <img alt="Client 3" className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUp0vpZlkXSNaxzCnVnoat0yOsP55ZhaANNr6KJwBrn-itTUP_4xcK2C0i5K8DUNqCDjg5CX_6P7cM-5QWt5TjX_7ZmovlMMiBCo86TlBex_cG2yDsYRUS8BJwRo2ut0n0vd-mt4l8DzF4_N_kgg2huig0xdbGPehkaJLSU1VXDYqrmDn9sxNu5xDsRtVKk0mYWwiE3Sx4hxu82fpxF4ii_rHEFYYtf5yWdObDvlHRWdNAQA4RRn2Cgxq81jOi34rW43SluD5y1PY"/>
                </div>
                <div className="text-left pr-4 rtl:pr-0 rtl:pl-4">
                    <p className="text-xs font-bold text-secondary dark:text-white uppercase tracking-wider">{t.cta.title}</p>
                    <p className="text-[10px] text-gray-500 dark:text-gray-400">{t.cta.subtitle}</p>
                </div>
                <Link to="/order" className="bg-secondary hover:bg-secondary/90 dark:bg-primary dark:hover:bg-primary/90 text-white dark:text-secondary px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-2">
                    {t.cta.button} <span className="material-symbols-outlined text-sm rtl:rotate-180">arrow_forward</span>
                </Link>
            </div>
            
            <div className="mt-12 flex items-center justify-center gap-4 opacity-50">
                <div className="h-px w-12 bg-primary"></div>
                <span className="font-display italic text-primary text-sm">Since 1990</span>
                <div className="h-px w-12 bg-primary"></div>
            </div>
        </motion.div>
      </section>
    </div>
  );
};
