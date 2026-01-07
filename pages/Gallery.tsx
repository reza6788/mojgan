import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '../store/useStore';
import { translations } from '../i18n/translations';
import { GalleryItem } from '../types';
import { X } from 'lucide-react';

import galleryHeader from '../src/images/gallery/header-texture.jpg';
import gallery1 from '../src/images/gallery/gallery-1.jpg';
import gallery2 from '../src/images/gallery/gallery-2.jpg';
import gallery3 from '../src/images/gallery/gallery-3.jpg';
import gallery4 from '../src/images/gallery/gallery-4.jpg';
import gallery5 from '../src/images/gallery/gallery-5.jpg';
import gallery6 from '../src/images/gallery/gallery-6.jpg';
import gallery7 from '../src/images/gallery/gallery-7.jpg';
import gallery8 from '../src/images/gallery/gallery-8.jpg';

const galleryData: GalleryItem[] = [
  {
    id: 1,
    title: "Pearls & Lace Veil",
    subtitle: "Royal Collection",
    category: "bridal",
    image: gallery1,
    description: "Intricate white embroidery on bridal gown, part of the Royal Collection."
  },
  {
    id: 2,
    title: "Midnight Velvet",
    subtitle: "Evening Elegance",
    category: "evening",
    image: gallery2,
    description: "Dark velvet evening gown embellished with delicate gold thread."
  },
  {
    id: 3,
    title: "Qajar Floral Motif",
    subtitle: "Heritage",
    category: "traditional",
    image: gallery3,
    description: "A tribute to traditional Persian patterns featuring intricate floral motifs."
  },
  {
    id: 4,
    title: "Geometric Silk",
    subtitle: "Contemporary",
    category: "modern",
    image: gallery4,
    description: "Modern abstract embroidery art on fine silk."
  },
  {
    id: 5,
    title: "Crystal Beading",
    subtitle: "Bridal Couture",
    category: "bridal",
    image: gallery5,
    description: "Closeup of exquisite crystal beading on a luxury wedding dress."
  },
  {
    id: 6,
    title: "Gold Paisley",
    subtitle: "Classic",
    category: "traditional",
    image: gallery6,
    description: "Timeless gold thread paisley patterns on dark fabric."
  },
  {
    id: 7,
    title: "Scarlet Needlework",
    subtitle: "Soirée",
    category: "evening",
    image: gallery7,
    description: "Vibrant red silk dress featuring detailed hand needlework."
  },
  {
    id: 8,
    title: "Organic Lines",
    subtitle: "New Wave",
    category: "modern",
    image: gallery8,
    description: "Minimalist linen embroidery focusing on organic shapes and lines."
  }
];

export const Gallery: React.FC = () => {
  const { language } = useStore();
  const t = translations[language].gallery;
  const [filter, setFilter] = useState<'all' | 'bridal' | 'evening' | 'traditional' | 'modern'>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = filter === 'all'
    ? galleryData
    : galleryData.filter(item => item.category === filter);

  return (
    <div className="pt-24 min-h-screen bg-background-light dark:bg-background-dark pb-24 transition-colors duration-300">

      {/* Header with Texture */}
      <header className="pt-32 pb-12 px-4 text-center relative overflow-hidden mb-12">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full opacity-5 pointer-events-none">
          <img
            alt="texture"
            className="w-full h-full object-cover grayscale"
            src={galleryHeader}
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-script text-3xl md:text-5xl text-primary mb-4"
          >
            {t.subtitle}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6"
          >
            {t.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 dark:text-gray-300 text-lg font-light leading-relaxed max-w-2xl mx-auto"
          >
            {t.description}
          </motion.p>
        </div>
      </header>

      {/* Sticky Filter Bar */}
      <div className="sticky top-24 z-30 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm py-4 mb-12 transition-colors duration-300">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 px-4">
          {Object.entries(t.filters).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setFilter(key as any)}
              className={`text-sm md:text-base uppercase tracking-wider transition-all pb-1 border-b-2 ${filter === key
                  ? 'text-primary border-primary font-semibold'
                  : 'text-gray-500 dark:text-gray-400 border-transparent hover:text-primary dark:hover:text-primary hover:border-primary/50 font-light'
                }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          layout
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="group relative overflow-hidden rounded shadow-lg cursor-pointer break-inside-avoid"
                onClick={() => setSelectedItem(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <p className="text-primary font-script text-2xl mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {item.subtitle}
                  </p>
                  <h3 className="text-white font-display text-xl tracking-wide translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </main>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-primary transition-colors p-2"
              onClick={() => setSelectedItem(null)}
            >
              <X size={32} />
            </button>
            <div
              className="relative max-w-5xl max-h-[90vh] flex flex-col items-center"
              onClick={e => e.stopPropagation()}
            >
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="max-h-[80vh] w-auto object-contain shadow-2xl border border-gray-800"
              />
              <div className="mt-4 text-center">
                <h3 className="text-primary font-display text-2xl italic">
                  {selectedItem.title}
                </h3>
                <p className="text-gray-300 font-light text-sm mt-1">
                  {selectedItem.description}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
