import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { submitOrder } from '../services/api';
import { useStore } from '../store/useStore';
import { translations } from '../i18n/translations';

// Schema for the Quick Order form on home page
const quickOrderSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  serviceInterest: z.string(),
  designVision: z.string().optional()
});

type QuickOrderSchema = z.infer<typeof quickOrderSchema>;

export const Home: React.FC = () => {
  const { language } = useStore();
  const t = translations[language];
  
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
            <img alt="Luxury embroidered fabric texture detail close up" className="w-full h-full object-cover object-center" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIpBFgGkd4oTxdfcmtgISX7uxKO8MpgvhZr0FgbvEjzw_1pqMH0lBaI_u2Oah5meTVBJjVUp3PNpqiBCIP8uOGTrEqQMQJTsvAGMmrS3UbY99_Y6dzLZIRC2HNIAwwwFZcgHZhqajJh-Uw0C8qEMKBIQ9KIzr6AmlgqMqdwJTOX93Uy7CVsii2Yl008nzlAErGRZ2e7N9clQC1LhbAoQ0cs9vLyoDi-Cul28B87ZYzCC0PLqhhXUznfMHEgHgCkuM6IOwHBeDfwtI"/>
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
                      src="Gemini_Generated_Image_bjklzdbjklzdbjkl.png" 
                      onError={(e) => {
                        e.currentTarget.src = "https://lh3.googleusercontent.com/aida-public/AB6AXuBjtpTdZPnicE-RM-lj4EOV243YJqQTZqzlNB6p1N7OXIhXCiuW_IQR_OlaeXcjmjCOtwXY3JZ3sjOIEv6UDYhWjj8Q30YDAwCtlNwgLUgBWPLpflORzmhFhmpKt6-m7JO-7tXhFa584rW12Dq-hWR0Vt4qb2o3ZHSpXbAxkSCG9r3UaC4UUL132P0RpIjGMHzp4OcjDOErxNRjgc8r9aEgIT1AnL6JDXvFubQrCxhvADr1TxTYV3_h3c_vxUYcUZkS8oF-eCHyJGA"
                      }}
                    />
                </div>
                
                {/* Brand Name Added Here */}
                <span className="font-display tracking-[0.2em] text-primary/90 text-sm md:text-lg uppercase font-medium drop-shadow-lg">
                    Meson Mojgan Esnaashary
                </span>
            </motion.div>
            
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-display text-3xl md:text-5xl lg:text-6xl text-gray-100 font-medium tracking-wide leading-tight mb-6"
            >
                Timeless Handcrafted Embroidery for <span className="italic text-primary/90 font-light">Elegant Fashion</span>
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="font-body text-gray-300 text-sm md:text-lg font-light tracking-wide max-w-2xl mx-auto mb-10 leading-relaxed"
            >
                Where tradition meets modern luxury. Bespoke textile art and custom-designed garments for the distinguished individual.
            </motion.p>
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row items-center gap-6 w-full justify-center"
            >
                <Link to="/order" className="group relative px-8 py-4 bg-primary text-background-dark font-body font-semibold tracking-widest text-xs md:text-sm uppercase transition-all duration-300 hover:bg-white hover:shadow-[0_0_20px_rgba(197,160,89,0.5)] border border-primary">
                    <span className="relative z-10 flex items-center gap-2">
                        Order Custom Design
                        <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
                    </span>
                </Link>
                <Link to="/gallery" className="group relative px-8 py-4 bg-transparent text-white border border-white/30 font-body font-medium tracking-widest text-xs md:text-sm uppercase transition-all duration-300 hover:border-primary hover:text-primary backdrop-blur-sm">
                    <span className="relative z-10">View Gallery</span>
                </Link>
            </motion.div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-24 px-4 bg-background-light dark:bg-background-dark relative border-b border-primary/10" id="legacy">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative">
                <div className="absolute -left-10 -top-10 text-9xl font-display text-primary/5 dark:text-primary/5 select-none z-0">1990</div>
                <div className="w-16 h-1 bg-primary mb-6 relative z-10"></div>
                <h2 className="font-display text-4xl md:text-5xl text-gray-900 dark:text-white mb-6 relative z-10">
                    A Legacy of <span className="text-primary italic">Detail</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-6 text-justify">
                    At Meson Mojgan Esnaashary, every stitch tells a story. Established in 1990, we have dedicated over three decades to the mastery of traditional Persian embroidery techniques, fusing them with contemporary silhouettes to create wearable art.
                </p>
                <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-8 text-justify">
                    Our atelier creates more than just clothing; we create heirlooms. From bridal trousseaus to evening gowns, each piece is a unique canvas of golden threads, silk, and passion, meticulously crafted by master artisans.
                </p>
                <div className="flex gap-4">
                    <div className="flex flex-col">
                        <span className="font-display text-3xl text-primary">30+</span>
                        <span className="text-xs uppercase tracking-wider text-gray-500">Years Experience</span>
                    </div>
                    <div className="w-px bg-gray-300 dark:bg-gray-700 h-12"></div>
                    <div className="flex flex-col">
                        <span className="font-display text-3xl text-primary">5k+</span>
                        <span className="text-xs uppercase tracking-wider text-gray-500">Custom Pieces</span>
                    </div>
                </div>
            </div>
            <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
                <img alt="Embroidery detail" className="w-full h-80 object-cover rounded-sm shadow-xl transform translate-y-8 hover:scale-[1.02] transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhj8jHiEnM__I5RikFYVuhuuYdWQb-_Syv76Lrg1Pk1d8enudyBmGTEpbmaPkh3qX0etGruPZbFcKfuDyVlr-gwVsmotVArULus9XsGYWMggGwMIBG2rhL53LZdUMww3eW_qygph2bT-HKOER22jDiQhhf1gfMO8sAOaSfM-eLG5KYp0NIBNSbBAMNHiA0izGA_C0P_ynZllYToAB8vgI3VASNZ4JHFydbfikS_Z76S2jzWOC65If6Mmh9Wvj6UHKKAZz8K3Q-RrU"/>
                <img alt="Fashion designer working" className="w-full h-80 object-cover rounded-sm shadow-xl -translate-y-8 hover:scale-[1.02] transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_dOdUDCtd7W2rX41DuM8C0qZPMzDoUFjRbjmCqdmUUfhros8xIQNg9jE2VIR2caQew-BLxaWLGs5y0QfgtBLtBYEXQCjxY_lA1Jb6-XuNubUaWzDw_69r1Uem28jOcLXWxlVhJ6ur1oFAiDsRpR0l8HF7fi9GhpYuQLA2v-oYCZllZZeI67g1oUdQTYItQqkHJGeYhpi0LDukV264OytTH3qAa0SuITDDdT-0hdDesD4HoKNNV_Kik5iEkO7LjXAXMOwB9_u_Vok"/>
            </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-surface-light dark:bg-surface-dark relative overflow-hidden" id="services">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
                <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase block mb-3">Our Expertise</span>
                <h2 className="font-display text-4xl md:text-5xl text-gray-900 dark:text-white">
                    Atelier <span className="italic text-primary">Services</span>
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
                                View Details
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
                Voices of <span className="italic text-primary block mt-2">Elegance</span>
              </h2>
              <p className="text-gray-400 font-light leading-relaxed mb-10 text-lg">
                Our creations are more than garments; they are cherished experiences. Read the stories of those who have adorned our art.
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
                
                {/* Item 1 */}
                <div className="group bg-surface-dark border border-white/5 p-8 md:p-12 rounded relative overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-700"></div>
                  <div className="relative z-10">
                    <div className="mb-8"></div>
                    <p className="text-gray-200 font-display text-xl md:text-2xl italic leading-relaxed mb-10">
                      "The custom embroidery on my evening gown was breathtaking. Mojgan's team captured the essence of the Persian motif I wanted perfectly. A true masterpiece that felt alive."
                    </p>
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary to-[#7a602c] rounded-full p-[2px]">
                        <div className="w-full h-full bg-surface-dark rounded-full flex items-center justify-center">
                          <span className="font-display font-bold text-xl text-primary">S</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-white font-display text-lg tracking-wide">Sarah Thompson</h4>
                        <p className="text-primary/70 text-xs uppercase tracking-widest mt-1">Art Collector, London</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="group bg-surface-dark border border-white/5 p-8 md:p-12 rounded relative overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-700"></div>
                  <div className="relative z-10">
                    <div className="mb-8"></div>
                    <p className="text-gray-200 font-display text-xl md:text-2xl italic leading-relaxed mb-10">
                      "I trusted Meson Mojgan for my bridal veil, and the result brought tears to my eyes. The delicacy and precision of the gold thread work is unmatched. It is now a family heirloom."
                    </p>
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary to-[#7a602c] rounded-full p-[2px]">
                        <div className="w-full h-full bg-surface-dark rounded-full flex items-center justify-center">
                          <span className="font-display font-bold text-xl text-primary">E</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-white font-display text-lg tracking-wide">Elnaz R.</h4>
                        <p className="text-primary/70 text-xs uppercase tracking-widest mt-1">Bride, Toronto</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="group bg-surface-dark border border-white/5 p-8 md:p-12 rounded relative overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-700"></div>
                  <div className="relative z-10">
                    <div className="mb-8"></div>
                    <p className="text-gray-200 font-display text-xl md:text-2xl italic leading-relaxed mb-10">
                      "The fusion of ancient technique with modern silhouette is what drew me to this maison. The jacket I commissioned is not just clothing; it is a conversation piece of the highest caliber."
                    </p>
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary to-[#7a602c] rounded-full p-[2px]">
                        <div className="w-full h-full bg-surface-dark rounded-full flex items-center justify-center">
                          <span className="font-display font-bold text-xl text-primary">I</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-white font-display text-lg tracking-wide">Isabella M.</h4>
                        <p className="text-primary/70 text-xs uppercase tracking-widest mt-1">Fashion Curator, Milan</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="group bg-surface-dark border border-white/5 p-8 md:p-12 rounded relative overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-700"></div>
                  <div className="relative z-10">
                    <div className="mb-8"></div>
                    <p className="text-gray-200 font-display text-xl md:text-2xl italic leading-relaxed mb-10">
                      "Exceptional service from start to finish. The way they integrated my grandmother's lace into a new modern kaftan was respectful, artistic, and utterly beautiful."
                    </p>
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary to-[#7a602c] rounded-full p-[2px]">
                        <div className="w-full h-full bg-surface-dark rounded-full flex items-center justify-center">
                          <span className="font-display font-bold text-xl text-primary">N</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-white font-display text-lg tracking-wide">Nazanin K.</h4>
                        <p className="text-primary/70 text-xs uppercase tracking-widest mt-1">Client, Tehran</p>
                      </div>
                    </div>
                  </div>
                </div>

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
                    <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase block mb-2">Bespoke Service</span>
                    <h2 className="font-display text-3xl md:text-4xl text-gray-900 dark:text-white mb-8">
                        Start Your <span className="italic text-primary">Creation</span>
                    </h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="relative">
                                <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Full Name</label>
                                <input {...register("fullName")} className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 focus:border-primary dark:focus:border-primary outline-none py-2 transition-colors text-gray-800 dark:text-gray-200" placeholder="Jane Doe" type="text"/>
                            </div>
                            <div className="relative">
                                <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Phone Number</label>
                                <input {...register("phone")} className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 focus:border-primary dark:focus:border-primary outline-none py-2 transition-colors text-gray-800 dark:text-gray-200" placeholder="+1 (555) 000-0000" type="tel"/>
                            </div>
                        </div>
                        <div className="relative">
                            <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Email Address</label>
                            <input {...register("email")} className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 focus:border-primary dark:focus:border-primary outline-none py-2 transition-colors text-gray-800 dark:text-gray-200" placeholder="jane@example.com" type="email"/>
                        </div>
                        <div className="relative">
                            <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Service Interest</label>
                            <select {...register("serviceInterest")} className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 focus:border-primary dark:focus:border-primary outline-none py-2 transition-colors text-gray-800 dark:text-gray-200">
                                <option className="dark:bg-surface-dark" value="Custom Embroidery">Custom Embroidery</option>
                                <option className="dark:bg-surface-dark" value="Bridal Couture">Bridal Couture</option>
                                <option className="dark:bg-surface-dark" value="Fabric Personalization">Fabric Personalization</option>
                                <option className="dark:bg-surface-dark" value="Consultation Only">Consultation Only</option>
                            </select>
                        </div>
                        <div className="relative">
                            <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Design Vision / Details</label>
                            <textarea {...register("designVision")} className="w-full bg-transparent border border-gray-300 dark:border-gray-700 focus:border-primary dark:focus:border-primary outline-none p-3 transition-colors text-gray-800 dark:text-gray-200 rounded-sm" placeholder="Describe your vision, colors, and occasion..." rows={4}></textarea>
                        </div>
                        <div className="pt-4">
                            <button className="w-full md:w-auto px-10 py-4 bg-primary text-white font-semibold uppercase tracking-widest hover:bg-primary-hover transition-colors shadow-lg shadow-primary/30" type="submit">
                                Submit Request
                            </button>
                        </div>
                    </form>
                </div>
                <div className="lg:col-span-2 relative hidden lg:block">
                    <img alt="Embroidery texture" className="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIpBFgGkd4oTxdfcmtgISX7uxKO8MpgvhZr0FgbvEjzw_1pqMH0lBaI_u2Oah5meTVBJjVUp3PNpqiBCIP8uOGTrEqQMQJTsvAGMmrS3UbY99_Y6dzLZIRC2HNIAwwwFZcgHZhqajJh-Uw0C8qEMKBIQ9KIzr6AmlgqMqdwJTOX93Uy7CVsii2Yl008nzlAErGRZ2e7N9clQC1LhbAoQ0cs9vLyoDi-Cul28B87ZYzCC0PLqhhXUznfMHEgHgCkuM6IOwHBeDfwtI"/>
                    <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-10 text-white">
                        <span className="material-symbols-outlined text-4xl mb-4 text-primary">verified</span>
                        <h3 className="font-display text-2xl mb-2">Guaranteed Excellence</h3>
                        <p className="text-sm font-light text-gray-300">Each commission is treated with the utmost care, ensuring a personalized experience from sketch to stitch.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Floating AI Helper */}
      <div className="fixed bottom-6 right-6 z-40">
        <button className="group flex items-center gap-3 bg-surface-dark text-white p-2 pr-6 rounded-full shadow-2xl border border-primary/30 hover:border-primary transition-all duration-300">
            <div className="relative">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white relative z-10 shadow-lg group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-2xl">smart_toy</span>
                </div>
                <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-20"></div>
            </div>
            <div className="text-left hidden md:block">
                <p className="text-[10px] uppercase text-gray-400 tracking-wider font-bold">Need Help?</p>
                <p className="text-xs font-medium text-white">AI Embroidery Consultant</p>
            </div>
        </button>
      </div>
    </div>
  );
};