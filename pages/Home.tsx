import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { submitOrder } from '../services/api';
import { useStore } from '../store/useStore';
import { translations } from '../i18n/translations';
import { AIConsultant } from '../components/ui/AIConsultant';

// Schema for the Quick Order form on home page
const quickOrderSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  serviceInterest: z.string(),
  designVision: z.string().optional()
});

type QuickOrderSchema = z.infer<typeof quickOrderSchema>;

import heroBg from '../src/images/hero-bg.jpg';
import logo from '../src/images/logo.png';
import legacyEmbroidery from '../src/images/legacy-embroidery.jpg';
import legacyDesigner from '../src/images/legacy-designer.jpg';

export const Home: React.FC = () => {
  const { language } = useStore();
  const t = translations[language];
  const homeT = t.home; // Shortcut for home translations

  // Get the first 3 services to display on the home page
  const featuredServices = t.servicesPage.items.slice(0, 3);

  const { register, handleSubmit, reset } = useForm<QuickOrderSchema>({
    resolver: zodResolver(quickOrderSchema)
  });

  const onSubmit = async (data: QuickOrderSchema) => {
    // Map to the full order format expected by API
    const orderData = {
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      garmentType: data.serviceInterest,
      embroideryStyle: "Consultation",
      fabricType: "TBD",
      deliveryDate: "Flexible",
      notes: data.designVision || ""
    };
    await submitOrder(orderData as any);
    alert("Request received. We will contact you shortly.");
    reset();
  };

  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-100 transition-colors duration-300">

      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex flex-col justify-center items-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <img alt="Luxury embroidered fabric texture detail close up" className="w-full h-full object-cover object-center" src={heroBg} />
          <div className="absolute inset-0 bg-gradient-to-b from-background-dark/80 via-background-dark/50 to-background-dark/95 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center flex flex-col items-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 flex flex-col items-center"
          >
            <div className="relative p-2 mb-6">
              <div className="absolute inset-0 bg-primary opacity-20 blur-xl rounded-full"></div>
              <img
                alt="Meson Mojgan Esnaashary Crest Logo"
                className="relative h-48 md:h-64 w-auto object-contain drop-shadow-2xl mx-auto"
                src={logo}
              />
            </div>

            {/* Brand Name */}
            <span className="font-display tracking-[0.2em] text-primary/90 text-sm md:text-lg uppercase font-medium drop-shadow-lg">
              {homeT.hero.brand}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-3xl md:text-5xl lg:text-6xl text-gray-100 font-medium tracking-wide leading-tight mb-6"
          >
            {homeT.hero.line1}<br className="hidden md:block" /> {homeT.hero.line2} <span className="italic text-primary/90 font-light">{homeT.hero.accent}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-body text-gray-300 text-sm md:text-lg font-light tracking-wide max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {homeT.hero.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-6 w-full justify-center"
          >
            <Link to="/order" className="group relative px-8 py-4 bg-primary text-background-dark font-body font-semibold tracking-widest text-xs md:text-sm uppercase transition-all duration-300 hover:bg-white hover:shadow-[0_0_20px_rgba(197,160,89,0.5)] border border-primary">
              <span className="relative z-10 flex items-center gap-2">
                {homeT.hero.btnOrder}
                <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1 rtl:rotate-180">arrow_forward</span>
              </span>
            </Link>
            <Link to="/gallery" className="group relative px-8 py-4 bg-transparent text-white border border-white/30 font-body font-medium tracking-widest text-xs md:text-sm uppercase transition-all duration-300 hover:border-primary hover:text-primary backdrop-blur-sm">
              <span className="relative z-10">{homeT.hero.btnGallery}</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-24 px-4 bg-background-light dark:bg-background-dark relative border-b border-primary/10" id="legacy">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="absolute -left-10 -top-10 text-9xl font-display text-primary/5 dark:text-primary/5 select-none z-0">{homeT.legacy.year}</div>
            <div className="w-16 h-1 bg-primary mb-6 relative z-10"></div>
            <h2 className="font-display text-4xl md:text-5xl text-gray-900 dark:text-white mb-6 relative z-10">
              {homeT.legacy.title} <span className="text-primary italic">{homeT.legacy.accent}</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-6 text-justify">
              {homeT.legacy.p1}
            </p>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-8 text-justify">
              {homeT.legacy.p2}
            </p>
            <div className="flex gap-4">
              <div className="flex flex-col">
                <span className="font-display text-3xl text-primary">{homeT.legacy.stat1}</span>
                <span className="text-xs uppercase tracking-wider text-gray-500">{homeT.legacy.stat1Label}</span>
              </div>
              <div className="w-px bg-gray-300 dark:bg-gray-700 h-12"></div>
              <div className="flex flex-col">
                <span className="font-display text-3xl text-primary">{homeT.legacy.stat2}</span>
                <span className="text-xs uppercase tracking-wider text-gray-500">{homeT.legacy.stat2Label}</span>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
            <img alt="Embroidery detail" className="w-full h-80 object-cover rounded-sm shadow-xl transform translate-y-8 hover:scale-[1.02] transition-transform duration-500" src={legacyEmbroidery} />
            <img alt="Fashion designer working" className="w-full h-80 object-cover rounded-sm shadow-xl -translate-y-8 hover:scale-[1.02] transition-transform duration-500" src={legacyDesigner} />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-surface-light dark:bg-surface-dark relative overflow-hidden" id="services">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase block mb-3">{homeT.services.subtitle}</span>
            <h2 className="font-display text-4xl md:text-5xl text-gray-900 dark:text-white">
              {homeT.services.title} <span className="italic text-primary">{homeT.services.accent}</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredServices.map((item, index) => (
              <div
                key={item.id}
                className="group relative flex flex-col h-full bg-background-light dark:bg-background-dark p-8 border border-gray-100 dark:border-gray-800 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 rounded-sm"
              >
                <Link to={`/services/${item.id}`} className="block flex-grow">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                  </div>
                  <h3 className="font-display text-2xl text-gray-900 dark:text-white mb-4 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 font-light text-sm leading-relaxed mb-12">
                    {item.desc}
                  </p>
                </Link>
                <div className="mt-auto">
                  <Link
                    to={`/services/${item.id}`}
                    className="inline-flex items-center text-xs font-bold tracking-widest text-primary uppercase border-b border-transparent group-hover:border-primary pb-1 transition-all"
                  >
                    {homeT.services.viewDetails}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section (UPDATED) */}
      <section className="py-24 bg-background-dark relative overflow-hidden" id="testimonials">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/dark-embroidery.png')]"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#1C2532] to-transparent z-10"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-20">
          <div className="flex flex-col lg:flex-row gap-16 items-start">

            {/* Left Column */}
            <div className="lg:w-1/3 lg:sticky lg:top-32 pt-8">
              <div className="w-16 h-1 bg-primary mb-8"></div>
              <h2 className="text-white font-display text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
                {homeT.testimonials.title} <span className="italic text-primary block mt-2">{homeT.testimonials.accent}</span>
              </h2>
              <p className="text-gray-400 font-light leading-relaxed mb-10 text-lg">
                {homeT.testimonials.description}
              </p>
              {/* Removed scroll indicator as requested previously */}
            </div>

            {/* Right Column */}
            <div className="lg:w-2/3 w-full">
              <div
                className="h-[650px] overflow-y-auto pr-4 space-y-8 custom-scrollbar pb-10"
                style={{
                  WebkitMaskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
                  maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)"
                }}
              >

                {t.testimonialsPage.items.map((item) => (
                  <div key={item.id} className="group bg-surface-dark border border-white/5 p-8 md:p-12 rounded relative overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-700"></div>
                    <div className="relative z-10">
                      <div className="mb-8"></div>
                      <p className="text-gray-200 font-display text-xl md:text-2xl italic leading-relaxed mb-10">
                        "{item.text}"
                      </p>
                      <div className="flex items-center gap-5">
                        <div className="w-14 h-14 bg-gradient-to-br from-primary to-[#7a602c] rounded-full p-[2px]">
                          <div className="w-full h-full bg-surface-dark rounded-full flex items-center justify-center">
                            <span className="font-display font-bold text-xl text-primary">{item.name.charAt(0)}</span>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-white font-display text-lg tracking-wide">{item.name}</h4>
                          <p className="text-primary/70 text-xs uppercase tracking-widest mt-1">{item.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Order / Contact Section */}
      <section className="py-24 bg-background-light dark:bg-background-dark" id="order">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12 bg-white dark:bg-surface-dark shadow-2xl rounded-lg overflow-hidden border border-gray-100 dark:border-gray-800">
            <div className="lg:col-span-3 p-8 md:p-12">
              <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase block mb-2">{homeT.orderSection.subtitle}</span>
              <h2 className="font-display text-3xl md:text-4xl text-gray-900 dark:text-white mb-8">
                {homeT.orderSection.title} <span className="italic text-primary">{homeT.orderSection.accent}</span>
              </h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">{t.order.fields.name}</label>
                    <input {...register("fullName")} className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 focus:border-primary dark:focus:border-primary outline-none py-2 transition-colors text-gray-800 dark:text-gray-200" placeholder="Jane Doe" type="text" />
                  </div>
                  <div className="relative">
                    <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">{t.order.fields.phone}</label>
                    <input {...register("phone")} className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 focus:border-primary dark:focus:border-primary outline-none py-2 transition-colors text-gray-800 dark:text-gray-200" placeholder="+1 (555) 000-0000" type="tel" />
                  </div>
                </div>
                <div className="relative">
                  <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">{t.order.fields.email}</label>
                  <input {...register("email")} className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 focus:border-primary dark:focus:border-primary outline-none py-2 transition-colors text-gray-800 dark:text-gray-200" placeholder="jane@example.com" type="email" />
                </div>
                <div className="relative">
                  <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">{t.order.fields.garment}</label>
                  <select {...register("serviceInterest")} className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 focus:border-primary dark:focus:border-primary outline-none py-2 transition-colors text-gray-800 dark:text-gray-200">
                    <option className="dark:bg-surface-dark" value="Custom Embroidery">{t.footer.links.custom}</option>
                    <option className="dark:bg-surface-dark" value="Bridal Couture">{t.footer.links.bridal}</option>
                    <option className="dark:bg-surface-dark" value="Fabric Personalization">{t.footer.links.monogram}</option>
                    <option className="dark:bg-surface-dark" value="Consultation Only">Consultation</option>
                  </select>
                </div>
                <div className="relative">
                  <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">{t.order.fields.notes}</label>
                  <textarea {...register("designVision")} className="w-full bg-transparent border border-gray-300 dark:border-gray-700 focus:border-primary dark:focus:border-primary outline-none p-3 transition-colors text-gray-800 dark:text-gray-200 rounded-sm" placeholder="Describe your vision, colors, and occasion..." rows={4}></textarea>
                </div>
                <div className="pt-4">
                  <button className="w-full md:w-auto px-10 py-4 bg-primary text-white font-semibold uppercase tracking-widest hover:bg-primary-hover transition-colors shadow-lg shadow-primary/30" type="submit">
                    {t.order.fields.submit}
                  </button>
                </div>
              </form>
            </div>
            <div className="lg:col-span-2 relative hidden lg:block">
              <img alt="Embroidery texture" className="absolute inset-0 w-full h-full object-cover" src={heroBg} />
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-10 text-white">
                <span className="material-symbols-outlined text-4xl mb-4 text-primary">verified</span>
                <h3 className="font-display text-2xl mb-2">{homeT.orderSection.guaranteeTitle}</h3>
                <p className="text-sm font-light text-gray-300">{homeT.orderSection.guaranteeText}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating AI Helper - Replaced with new component */}
      <AIConsultant />
    </div>
  );
};