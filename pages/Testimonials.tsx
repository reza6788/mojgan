import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useStore } from '../store/useStore';
import { translations } from '../i18n/translations';

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Custom Evening Gown",
    text: "The handcrafted embroidery on my evening gown was nothing short of a masterpiece. Mojgan's attention to detail turned a simple dress into a work of art.",
    image: "https://picsum.photos/100/100?random=10"
  },
  {
    id: 2,
    name: "David Alistair",
    role: "Bespoke Suit Embroidery",
    text: "Finding a tailor who understands the nuance of traditional Persian patterns while keeping the silhouette modern is rare. Exceeded all my expectations.",
    image: "https://picsum.photos/100/100?random=11"
  },
  {
    id: 3,
    name: "Eleanor Rigby",
    role: "Heirloom Restoration",
    text: "I commissioned a vintage restoration and was amazed by the delicate craftsmanship. The team treated my grandmother's heirloom with such respect.",
    image: "https://picsum.photos/100/100?random=12"
  }
];

export const Testimonials: React.FC = () => {
  const { language } = useStore();
  const t = translations[language].nav; // Reusing nav title for simplicity context

  return (
    <div className="pt-24 min-h-screen bg-surface-light dark:bg-background-dark relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center mb-16 pt-10">
          <span className="font-script text-3xl text-primary block mb-2">Voices of Elegance</span>
          <h1 className="font-display text-5xl md:text-6xl text-gray-900 dark:text-white">Client Stories</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="bg-background-light dark:bg-surface-dark p-8 rounded-sm shadow-xl border border-gray-100 dark:border-gray-800 relative group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="absolute top-6 right-6 text-primary/10 group-hover:text-primary/20 transition-colors">
                <Quote size={60} />
              </div>

              <div className="flex gap-1 text-primary mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>

              <p className="font-display italic text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed relative z-10">
                "{item.text}"
              </p>

              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-200 dark:border-gray-700">
                <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full object-cover border border-primary" />
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white font-display text-lg">{item.name}</h4>
                  <p className="text-xs text-primary uppercase tracking-wider">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};