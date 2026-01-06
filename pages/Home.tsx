import React from 'react';
import { motion } from 'framer-motion';
import { useStore } from '../store/useStore';
import { translations } from '../i18n/translations';

export const Home: React.FC = () => {
  const { language } = useStore();
  const t = translations[language];

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <header className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 flex flex-col items-center justify-center text-center px-4 overflow-hidden min-h-screen">
        <div className="absolute inset-0 z-0 opacity-5 dark:opacity-10 pointer-events-none">
          <img 
            alt="Abstract Embroidery Texture" 
            class="w-full h-full object-cover grayscale" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcXM74dNmeWLQT5SrKhBlUo-VR2OMBu4rv-QGKaFrkeYte8yJxrcSSmw8J6bIpiiOLrDzS-Z3C9kI81_PRqN61EVY32eW04ZK0StIZ40rh_5oFVpQtLRpVtzaiyU_LfJb7hbMlXwij-WOE8QFJb4L9VZz9L02yQXAqd5TYY4-9qXjTVumDyqzN8grXsE8d7kA9pCMXfaSaiN43cMZkrX9b8_pefjSq0Fb-yqMh324B2GHqx75Z2crovZYsB2sqL8q4y_96__60Xmg"
          />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <span className="block font-serif italic text-primary text-xl mb-4 tracking-wider">{t.hero.est}</span>
          <h1 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-widest mb-6 text-secondary dark:text-white leading-tight">
            {t.hero.title} <br/>
            <span className="gold-gradient-text">{t.hero.titleAccent}</span>
          </h1>
          <div className="h-1 w-24 bg-primary mx-auto mb-8"></div>
          <p className="font-serif text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {t.hero.description}
          </p>
        </motion.div>
      </header>

      {/* About Section */}
      <section className="py-16 lg:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary rounded opacity-30"></div>
              <div className="relative rounded overflow-hidden shadow-2xl">
                <img 
                  alt="Close up of intricate gold embroidery on dark fabric" 
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIXGjW8aa_udttF78yDFclII5SsT51GDrq9Gaxy1m2lYd9DfDNIdMkpcZasd3s155O05_-M3kYxz694723bzcw_8kWN_JaASawZI2ee_-dcd0q9NX5fpCVeDKkb-wZFXq6NAeh5dKeeS08P2nzcehyfh3cewWtkGkEFsWHTRnAAfef_MFTqyQRctv2tb_KxLfARsr7Vkojj-LNKHJecswm0IaKy8IrLBbxUbru8JQjP_cL4ncgekkyLlhubbVQnvnrLNQ-FavTKqQ"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-2/3 shadow-2xl border-4 border-background-light dark:border-background-dark rounded hidden md:block">
                <img 
                  alt="Artisan hands working on embroidery frame" 
                  className="w-full h-auto object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA22QPM8bpRLXkPhCZ7tx55Tx9e1IiGEMQx75urq28c2mz6v5kepqVjlNerMsZDFKCiIxuChPxgfVOwDXsHHe6nqLyl81iVbbLS7yhZu0NE7GpOFzVguz4fYW6DIwUSmEFynk-2A4jL5Y_-531NtvhT1u7yheelmxG_5VifXysV4ag9bKcfyHYfaWCyka_FUC-WTweivVgCs5m6Rc-vQSKJOLZp0HHfLZpKtK60KspkWlx2RPu4P5dl99DvF5mb_OxXTmc4v7dgjQw"
                />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2 space-y-8"
            >
              <div>
                <h2 className="font-display text-3xl md:text-4xl text-secondary dark:text-white mb-6">
                  {t.about.title} <span className="text-primary">{t.about.titleAccent}</span>
                </h2>
                <p className="font-sans font-light text-lg leading-loose text-gray-600 dark:text-gray-300 mb-6">
                  {t.about.p1}
                </p>
                <p className="font-sans font-light text-lg leading-loose text-gray-600 dark:text-gray-300">
                  {t.about.p2}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <span className="material-icons text-primary text-3xl">diamond</span>
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-secondary dark:text-white mb-2">{t.about.feature1Title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{t.about.feature1Desc}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <span className="material-icons text-primary text-3xl">palette</span>
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-secondary dark:text-white mb-2">{t.about.feature2Title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{t.about.feature2Desc}</p>
                  </div>
                </div>
              </div>
              <div className="pt-8">
                <img 
                  alt="Mojgan Esnaashary Signature" 
                  className="h-16 opacity-60 dark:invert" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxgroqNKmOnwCxFpWqg0Uv3_GHrk-72sPud8NhydeX7fZgRJ7yyvt3WgJBY58XFyEwGelqc2gVnf72Nv7GvWt83T97rxRnBYGf4FU7Gl6wvzivQoFtBusw3V6XGXSYeblA4wddIfw2wfJozNnI8fiRl8O_37QFjlAqIzhOrAH7b5SqZ5ttLgd9Uwnbf43mURVVqIj-W0hgXxinF2m79H4c1Y9ptlEFPZNjuvi2dvB8bvhkNfhIEO0dyoRgwxC0b3Rl7PEohl1T1qI"
                />
                <p className="font-serif italic text-sm text-primary mt-2">{t.about.role}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section 
        className="relative py-24 bg-fixed bg-cover bg-center" 
        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAoa6BpA9CXqVeaGQ0fS4IviQ_sX0Lig5GH2pn0jQQe1dDSs_n5gJC9dSbVff_PhXveulwh4lYilitqq7Og-hpbP1uuvSRCKyHw6y4FyWy0q0dVgtvGhKFzU0tCvS4N74tkyldAW_SBSTn7OBoLOChI7SAQY4V2tusvvHnA2YFeiKavWVUhs5pKukkIGrz5xjC_0_vZg8DWuxZpXKC2nm_31kTnrzwKuGEJyZ3FR3WYgKnwd0GrLCY1kyoj7oO0mUQWJwWjWEbErlI')" }}
      >
        <div className="absolute inset-0 bg-secondary/80 dark:bg-black/80"></div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto px-4 text-center"
        >
          <span className="material-icons text-primary text-5xl mb-6">format_quote</span>
          <h2 className="font-serif text-3xl md:text-5xl text-white leading-tight italic mb-8">
            {t.quote.text}
          </h2>
          <div className="flex items-center justify-center space-x-4">
            <div className="h-px w-12 bg-primary"></div>
            <span className="font-display tracking-widest text-primary text-sm uppercase">{t.quote.label}</span>
            <div className="h-px w-12 bg-primary"></div>
          </div>
        </motion.div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white dark:bg-[#151a23]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl text-secondary dark:text-white uppercase tracking-widest mb-4">{t.process.title}</h2>
            <div className="w-16 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.1 }}
               className="group text-center"
            >
              <div className="relative w-full h-80 mb-6 overflow-hidden rounded-t-full border border-gray-200 dark:border-gray-800">
                <img 
                  alt="Sketching fashion designs" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBF1b8nPL0K3iJOLzB_aFuObYnUYnksoNs_Fmv7Dx_WWGWhl8XLj5aVlwaTMhBAkd4bzq0gTieViPL0YOOwemZs3Yy3WYjNfsvO2YI7LAqfcVYmPBkzJohz1isGHPvMSSdNoOu87aW4z-zSYACwlH1V6gMVnmALE3NFSEAxO60PZRK30L_FHUQqtRk_A7DqCO2F5h5Tz_jYedSKYnbQ-IH7gMcLO6Yr4B6tQKkEV5hyfi5TzSzBrX0v0aN5IL5mbjhOI38BoBlcy6Q"
                />
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white dark:bg-secondary px-4 py-1 border border-primary text-primary font-display text-xl">01</div>
              </div>
              <h3 className="font-serif text-2xl text-secondary dark:text-white mb-3">{t.process.step1Title}</h3>
              <p className="text-gray-500 dark:text-gray-400 font-light px-4">{t.process.step1Desc}</p>
            </motion.div>
            
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="group text-center"
            >
              <div className="relative w-full h-80 mb-6 overflow-hidden rounded-t-full border border-gray-200 dark:border-gray-800">
                <img 
                  alt="Detailed embroidery work in progress" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDA6ULgz7JLGcl-LdXSmax1bTC0aQNk_jzNlwJKF7mPanMgOc1ap6tWMuxnx6yJsf4E_DjijbNeibY6om4eg8hZNHHktEv7By7mC7uXnbdneWTcfokUjB61QKbGp7DazrNx9XFkm3Tdr4VxO3za3H6yawQYJ-VbpizmaUFhe_mdKynp4lOUPf534iD_LKaeQlWtD3qv30ikNnd_T3b1TthgpYj-KWrtbMfE6yWwoLKaAaM0S8TCcBq8pV1F_Xlz4T_lgrsmACslcm0"
                />
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white dark:bg-secondary px-4 py-1 border border-primary text-primary font-display text-xl">02</div>
              </div>
              <h3 className="font-serif text-2xl text-secondary dark:text-white mb-3">{t.process.step2Title}</h3>
              <p className="text-gray-500 dark:text-gray-400 font-light px-4">{t.process.step2Desc}</p>
            </motion.div>
            
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.3 }}
               className="group text-center"
            >
              <div className="relative w-full h-80 mb-6 overflow-hidden rounded-t-full border border-gray-200 dark:border-gray-800">
                <img 
                  alt="Final fitting of a luxury dress" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-Ssxws_SjLYDB__TND0JWwvPee4xbPBi1JKEvZHPCyM6ruC1TjyhxdTzrs4CpXXLsZgPwoQEEBCaHTNvLnzz4mVhthUxDBioY8wxIaR2C7r8ZQBYmudv-7sH1XqKITmMkSmlI8KQN6wnH_ZnONpNNavc3nBxTQ3GSIAjoMUkvyK-msdU3Mvyx-t8fJXNfPWXq8La4DYVTLn2tMSyDVmbfz-DVq-7y9Ul5XYnPgyVPdFdjxuWKr10_GKZ9Ijz_Ali4vAJRdNXe3Ck"
                />
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white dark:bg-secondary px-4 py-1 border border-primary text-primary font-display text-xl">03</div>
              </div>
              <h3 className="font-serif text-2xl text-secondary dark:text-white mb-3">{t.process.step3Title}</h3>
              <p className="text-gray-500 dark:text-gray-400 font-light px-4">{t.process.step3Desc}</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};