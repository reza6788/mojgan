import React from 'react';
import { motion } from 'framer-motion';
import { useStore } from '../store/useStore';
import { translations } from '../i18n/translations';

const m = motion as any;

export const Maison: React.FC = () => {
  const { language } = useStore();
  const t = translations[language].maisonPage;

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen text-text-light dark:text-text-dark transition-colors duration-300">
      
      {/* Header */}
      <header className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-5 dark:opacity-10 pointer-events-none">
          <img 
            alt="Abstract Embroidery Texture" 
            className="w-full h-full object-cover grayscale" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcXM74dNmeWLQT5SrKhBlUo-VR2OMBu4rv-QGKaFrkeYte8yJxrcSSmw8J6bIpiiOLrDzS-Z3C9kI81_PRqN61EVY32eW04ZK0StIZ40rh_5oFVpQtLRpVtzaiyU_LfJb7hbMlXwij-WOE8QFJb4L9VZz9L02yQXAqd5TYY4-9qXjTVumDyqzN8grXsE8d7kA9pCMXfaSaiN43cMZkrX9b8_pefjSq0Fb-yqMh324B2GHqx75Z2crovZYsB2sqL8q4y_96__60Xmg"
          />
        </div>
        <m.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <span className="block font-serif italic text-primary text-xl mb-4 tracking-wider">{t.hero.year}</span>
          <h1 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-widest mb-6 text-secondary dark:text-white">
            {t.hero.title} <br/><span className="gold-gradient-text">{t.hero.accent}</span>
          </h1>
          <div className="h-1 w-24 bg-primary mx-auto mb-8"></div>
          <p className="font-serif text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>
        </m.div>
      </header>

      {/* Heritage Timeline Section */}
      <section className="py-24 relative bg-surface-light dark:bg-black/20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
             <h2 className="font-display text-4xl text-secondary dark:text-white mb-4 uppercase tracking-widest">{t.timeline.title}</h2>
             <div className="w-16 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-primary/20 hidden md:block"></div>
            
            <div className="space-y-24">
              {t.timeline.milestones.map((item, idx) => (
                <m.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="w-full md:w-1/2 px-8 text-center md:text-left rtl:md:text-right">
                    <span className="font-display text-5xl text-primary/20 font-bold mb-2 block">{item.year}</span>
                    <h3 className="font-serif text-2xl text-secondary dark:text-white mb-4">{item.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400 font-light leading-relaxed max-w-md mx-auto md:mx-0">
                      {item.desc}
                    </p>
                  </div>
                  
                  {/* Dot */}
                  <div className="relative z-10 w-12 h-12 flex items-center justify-center my-6 md:my-0">
                    <div className="w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_rgba(197,160,89,0.5)]"></div>
                  </div>
                  
                  <div className="w-full md:w-1/2 px-8 flex justify-center">
                    <div className="w-64 h-64 rounded-full border border-primary/20 p-2 overflow-hidden shadow-elegant bg-white dark:bg-surface-dark group">
                      <img 
                        src={`https://images.unsplash.com/photo-${idx === 0 ? '1582213782179-e0d53f98f2ca' : idx === 1 ? '1610030469915-99d632128ae3' : idx === 2 ? '1528459801416-a9e53bbf4e17' : '1551488831-00ddcb6c6bd3'}?auto=format&fit=crop&q=80&w=400`} 
                        alt={item.title}
                        className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-700"
                      />
                    </div>
                  </div>
                </m.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tradition Section */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            <m.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1 rtl:lg:order-2"
            >
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary rounded opacity-30"></div>
              <div className="relative rounded overflow-hidden couture-shadow">
                <img 
                  alt="Intricate gold embroidery" 
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIXGjW8aa_udttF78yDFclII5SsT51GDrq9Gaxy1m2lYd9DfDNIdMkpcZasd3s155O05_-M3kYxz694723bzcw_8kWN_JaASawZI2ee_-dcd0q9NX5fpCVeDKkb-wZFXq6NAeh5dKeeS08P2nzcehyfh3cewWtkGkEFsWHTRnAAfef_MFTqyQRctv2tb_KxLfARsr7Vkojj-LNKHJecswm0IaKy8IrLBbxUbru8JQjP_cL4ncgekkyLlhubbVQnvnrLNQ-FavTKqQ"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-2/3 shadow-2xl border-4 border-background-light dark:border-background-dark rounded hidden md:block rtl:right-auto rtl:-left-10">
                <img 
                  alt="Artisan hands working" 
                  className="w-full h-auto object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA22QPM8bpRLXkPhCZ7tx55Tx9e1IiGEMQx75urq28c2mz6v5kepqVjlNerMsZDFKCiIxuChPxgfVOwDXsHHe6nqLyl81iVbbLS7yhZu0NE7GpOFzVguz4fYW6DIwUSmEFynk-2A4jL5Y_-531NtvhT1u7yheelmxG_5VifXysV4ag9bKcfyHYfaWCyka_FUC-WTweivVgCs5m6Rc-vQSKJOLZp0HHfLZpKtK60KspkWlx2RPu4P5dl99DvF5mb_OxXTmc4v7dgjQw"
                />
              </div>
            </m.div>

            <m.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 rtl:lg:order-1 space-y-8"
            >
              <div>
                <h2 className="font-display text-3xl md:text-4xl text-secondary dark:text-white mb-6">
                  {t.tradition.title} <span className="text-primary">{t.tradition.accent}</span>
                </h2>
                <p className="font-sans font-light text-lg leading-loose text-gray-600 dark:text-gray-300 mb-6">
                  {t.tradition.p1}
                </p>
                <p className="font-sans font-light text-lg leading-loose text-gray-600 dark:text-gray-300">
                  {t.tradition.p2}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="flex-shrink-0">
                    <span className="material-icons text-primary text-3xl">diamond</span>
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-secondary dark:text-white mb-2">{t.tradition.feature1Title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{t.tradition.feature1Desc}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="flex-shrink-0">
                    <span className="material-icons text-primary text-3xl">palette</span>
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-secondary dark:text-white mb-2">{t.tradition.feature2Title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{t.tradition.feature2Desc}</p>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-primary/20">
                <p className="font-script text-3xl text-primary">{t.tradition.signature}</p>
              </div>
            </m.div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="relative py-32 bg-secondary dark:bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <img src="https://www.transparenttextures.com/patterns/black-linen.png" className="w-full h-full object-repeat" alt="" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <span className="material-icons text-primary text-5xl mb-6">format_quote</span>
          <h2 className="font-serif text-3xl md:text-5xl text-white leading-tight italic mb-8">
            "{t.quote}"
          </h2>
          <div className="flex items-center justify-center space-x-4">
            <div className="h-px w-12 bg-primary"></div>
            <span className="font-display tracking-widest text-primary text-sm uppercase">Philosophy</span>
            <div className="h-px w-12 bg-primary"></div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white dark:bg-surface-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl text-secondary dark:text-white uppercase tracking-widest mb-4">{t.process.title}</h2>
            <div className="w-16 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {t.process.steps.map((step, idx) => (
              <m.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="group text-center"
              >
                <div className="relative w-full h-80 mb-6 overflow-hidden rounded-t-full border border-gray-100 dark:border-gray-800 couture-shadow">
                  <img 
                    alt={step.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                    src={idx === 0 ? "https://lh3.googleusercontent.com/aida-public/AB6AXuBF1b8nPL0K3iJOLzB_aFuObYnUYnksoNs_Fmv7Dx_WWGWhl8XLj5aVlwaTMhBAkd4bzq0gTieViPL0YOOwemZs3Yy3WYjNfsvO2YI7LAqfcVYmPBkzJohz1isGHPvMSSdNoOu87aW4z-zSYACwlH1V6gMVnmALE3NFSEAxO60PZRK30L_FHUQqtRk_A7DqCO2F5h5Tz_jYedSKYnbQ-IH7gMcLO6Yr4B6tQKkEV5hyfi5TzSzBrX0v0aN5IL5mbjhOI38BoBlcy6Q" : idx === 1 ? "https://lh3.googleusercontent.com/aida-public/AB6AXuDA6ULgz7JLGcl-LdXSmax1bTC0aQNk_jzNlwJKF7mPanMgOc1ap6tWMuxnx6yJsf4E_DjijbNeibY6om4eg8hZNHHktEv7By7mC7uXnbdneWTcfokUjB61QKbGp7DazrNx9XFkm3Tdr4VxO3za3H6yawQYJ-VbpizmaUFhe_mdKynp4lOUPf534iD_LKaeQlWtD3qv30ikNnd_T3b1TthgpYj-KWrtbMfE6yWwoLKaAaM0S8TCcBq8pV1F_Xlz4T_lgrsmACslcm0" : "https://lh3.googleusercontent.com/aida-public/AB6AXuC-Ssxws_SjLYDB__TND0JWwvPee4xbPBi1JKEvZHPCyM6ruC1TjyhxdTzrs4CpXXLsZgPwoQEEBCaHTNvLnzz4mVhthUxDBioY8wxIaR2C7r8ZQBYmudv-7sH1XqKITmMkSmlI8KQN6wnH_ZnONpNNavc3nBxTQ3GSIAjoMUkvyK-msdU3Mvyx-t8fJXNfPWXq8La4DYVTLn2tMSyDVmbfz-DVq-7y9Ul5XYnPgyVPdFdjxuWKr10_GKZ9Ijz_Ali4vAJRdNXe3Ck"}
                  />
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white dark:bg-secondary px-4 py-1 border border-primary text-primary font-display text-xl">0{idx + 1}</div>
                </div>
                <h3 className="font-serif text-2xl text-secondary dark:text-white mb-3">{step.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 font-light px-4">{step.desc}</p>
              </m.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};