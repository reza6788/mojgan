import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '../store/useStore';
import { translations } from '../i18n/translations';
import { GalleryItem } from '../types';
import { X, Search, Maximize2 } from 'lucide-react';

const m = motion as any;

const galleryData: GalleryItem[] = [
  { id: 1, title: "Pearls & Lace Veil", subtitle: "Royal Collection", category: "bridal", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAS3TCT9HOLInPL2TmDuBuiCvJPntolOi2AK9TjUZ4wu4cbbLPVlN6PX4MqVDSmel42H21uH_xjqGGl6SstKS5X_McPxgDOF_LTOgaTzjRbGCaoJ9NaD3D7ZnQ-K_00A-KlCBmFFl53sSD0I-Kyu27IkeHc_FhoKnM15H53H-BLGvfHdjwna6xiDBRjgHzMlEfgweEvNdIfZf4D1K7fruhcwHmjWyqs-ChSb1BOsxfBD7UrjBW_pENqqPrBw-zg6He9FU5PBIHlGDY", description: "Intricate white embroidery on bridal gown, part of the Royal Collection." },
  { id: 2, title: "Midnight Velvet", subtitle: "Evening Elegance", category: "evening", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUlAUDnJW-kY0OejT74xmcWhbfVjgR4oF--UxT_JROWTUtAue3XCtc0gdM3Qqiy32issL205dzNqskDf6cnrKmDUoSxXQwbNJ4is48ZmRGsNymGuGEZw3g_vHKSKgGSoejWorsPguAfL1KfJV1uOxHDCdLjzij4Dsb4T_hGwo1iTwjPOTgk52egh3hjtSH-N6tWu0FwkK3Q-7u793j3Ji3xA2clV5zw8Xh0tWz3DYyTMLB0uXXeA-hHpbqC7arCGq7unrOxq4e1-c", description: "Dark velvet evening gown embellished with delicate gold thread." },
  { id: 3, title: "Qajar Floral Motif", subtitle: "Heritage", category: "traditional", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1wkS2YYaMdR4ZPGVlivTamp5Q8k-xhU0rMXWM5vwBx-eVkDE5A2cZPXCpIbZG8BSgbIHvqPYNRS6TAtI601pysAw4KpyWN5QWmYEVv1p87kv1guP0YOjg4WeLq7HnJQy1XCUSaWk7oN_RWbJBcI8x56Gmv1J88xsHT4Wn_wLW8PERArbP2kmwlDwlYmIdN6ehAqNse2LseQ9WkqEu_BJ7ZF0XBbRWHttR9iCVab6T0B5gesKX9cdI4tqZYSklL-nlxq19V43a5yU", description: "A tribute to traditional Persian patterns featuring intricate floral motifs." },
  { id: 4, title: "Geometric Silk", subtitle: "Contemporary", category: "modern", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGiAR8p13FdimkRSZAaqjDjA3XHEcN4NbNZWPqCIfCzQOkpe1uh3xvnXyfUFxlm77mnLAe-szHa_4qC64Fan-Sl4oZ_MeVRFcI2TVPMPELhMvlQZeSNvVSwXm90Lo6TAPlX-gwxmi52pIy09DacsVZ-Aar1oXxSETiDbiuLkunvkIIa9kOpFG5FZHDub0suTBObUgQDvifouo0ZKaXB8-EurBeCvvN3Yqcsl048kzH7B6Rq7gwXAjxhSZZWfZ-Y52yzEx07XjQqH4", description: "Modern abstract embroidery art on fine silk." },
  { id: 5, title: "Crystal Beading", subtitle: "Bridal Couture", category: "bridal", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1aZ1_jXLvB3IrvdxcTDKvaCW6rBSkK36JRovvPf7EB1c3xCcn_qnikdpXFy0yrEU8zY6KLJStmPQYOGBdVvyFBPY-t-Oo10IISYI8OR45mKzqo9wr9vqrX78riuY1UldD_vBnrr7MolRZxOmcZkKjvI7bF3_wanqo-W4mgD8foBdicxJyPKnOy_s9VPaGmSMtelKaFLOMu9RpkXBO-6DzVwhbbwT5d7cgftlC04A5YPV112vvG6eDPKiw_Eq-RysvbCfX0ApHTwA", description: "Closeup of exquisite crystal beading on a luxury wedding dress." },
  { id: 6, title: "Gold Paisley", subtitle: "Classic", category: "traditional", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuADF1hNc8io28U4e7j2aRbY0wpYuZyUfNN-PkCXDEFCyYvWoxt5X5jPtDqpAeJ9QVgVPlwzt1othySS_kTB30_d8cjNcQsWYczQAJD88FGDy1b0220erJXBB9AQg0f3IQyt5B1R6Q6UfoVniVPABZQhTyj_RH3uFScoMRO3b305UUU0MMUOEGzQm6ah3n9nYl7DrwwAbTS4pzjsd_CBInjzxn0rwlFBGX3WE_PmYRmTjB9QYRyPFWlJIZg-WxBwPWjEeAWoeyLDWYw", description: "Timeless gold thread paisley patterns on dark fabric." }
];

export const Gallery: React.FC = () => {
  const { language } = useStore();
  const t = translations[language].gallery;
  const [filter, setFilter] = useState<'all' | 'bridal' | 'evening' | 'traditional' | 'modern'>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 0, y: 0 });

  const filteredItems = filter === 'all' ? galleryData : galleryData.filter(item => item.category === filter);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed) return;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.pageX - left - window.scrollX) / width) * 100;
    const y = ((e.pageY - top - window.scrollY) / height) * 100;
    setZoomPos({ x, y });
  };

  return (
    <div className="pt-24 min-h-screen bg-background-light dark:bg-background-dark pb-24 transition-colors duration-300">
      
      <header className="pt-32 pb-12 px-4 text-center relative overflow-hidden mb-12">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full opacity-5 pointer-events-none">
          <img alt="texture" className="w-full h-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiSBF0-MVzp5AIShP6oOmDFPXHEmhYAZehCk_WKq1qNJqdNzxY3bCRzOW08MRyzaX8OgFjiYLlpws51eX_LOGFNXFc-Ul6cN_Fp-Eicm70GLEpdM1gf2Tk3IABaI_RO9_E9qNWb5qZI1C7x7ZgnvAMLVjHTnTxR7M5KAZdhZOqQSs5wTymoo16ozoGXQ8ZjCWRa07nW1fBQEYnv5t1Qu2C3jRmo_TUkQ7BsEda_sP1PCaq-KzZr1q-B-uM_C56bNIkWXHcq8-Okl8" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <m.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="font-script text-4xl md:text-5xl text-primary mb-4">{t.subtitle}</m.p>
          <m.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 uppercase tracking-widest">{t.title}</m.h1>
          <m.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-gray-600 dark:text-gray-300 text-lg font-light leading-relaxed max-w-2xl mx-auto">{t.description}</m.p>
        </div>
      </header>

      <div className="sticky top-24 z-30 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm py-4 mb-12 border-y border-primary/10">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 px-4">
          {Object.entries(t.filters).map(([key, label]) => (
            <button key={key} onClick={() => setFilter(key as any)} className={`text-sm md:text-base uppercase tracking-[0.2em] transition-all pb-1 border-b-2 ${filter === key ? 'text-primary border-primary font-bold' : 'text-gray-500 dark:text-gray-400 border-transparent hover:text-primary hover:border-primary/50'}`}>{label as string}</button>
          ))}
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <m.div layout className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <m.div layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.3 }} key={item.id} className="group relative overflow-hidden rounded couture-shadow cursor-pointer break-inside-avoid" onClick={() => setSelectedItem(item)}>
                <img src={item.image} alt={item.title} className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <p className="text-primary font-script text-3xl mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{item.subtitle}</p>
                  <h3 className="text-white font-display text-xl tracking-widest uppercase translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{item.title}</h3>
                </div>
              </m.div>
            ))}
          </AnimatePresence>
        </m.div>
      </main>

      <AnimatePresence>
        {selectedItem && (
          <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 md:p-12 overflow-hidden" onClick={() => { setSelectedItem(null); setIsZoomed(false); }}>
            <button className="absolute top-6 right-6 text-white hover:text-primary transition-colors p-2 z-[70] bg-white/5 rounded-full backdrop-blur-md" onClick={() => setSelectedItem(null)}>
              <X size={32} />
            </button>
            
            <div className="relative w-full h-full flex flex-col lg:flex-row gap-12 items-center justify-center" onClick={e => e.stopPropagation()}>
              
              {/* Image with Zoom capability */}
              <div className={`relative overflow-hidden cursor-crosshair border border-white/10 couture-shadow bg-surface-dark transition-all duration-500 ${isZoomed ? 'w-full h-full lg:w-3/4' : 'w-auto max-h-[70vh] lg:max-h-[85vh]'} rounded-lg group`}
                   onMouseMove={handleMouseMove}
                   onClick={() => setIsZoomed(!isZoomed)}>
                <img src={selectedItem.image} alt={selectedItem.title} 
                     className={`w-full h-full object-contain transition-transform duration-200 pointer-events-none ${isZoomed ? 'scale-[2.5]' : 'scale-100'}`}
                     style={isZoomed ? { transformOrigin: `${zoomPos.x}% ${zoomPos.y}%` } : {}} />
                
                <div className={`absolute bottom-6 left-6 flex items-center gap-2 text-white/50 text-xs uppercase tracking-widest transition-opacity duration-300 ${isZoomed ? 'opacity-0' : 'opacity-100'}`}>
                  <Search size={14} />
                  <span>Click to examine stitch detail</span>
                </div>
              </div>

              {/* Sidebar Info */}
              {!isZoomed && (
                <m.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="lg:w-1/4 max-w-md text-center lg:text-left">
                  <span className="text-primary font-script text-4xl mb-4 block">{selectedItem.subtitle}</span>
                  <h3 className="text-white font-display text-3xl md:text-4xl mb-6 tracking-widest uppercase">{selectedItem.title}</h3>
                  <div className="h-1 w-12 bg-primary mb-8 mx-auto lg:mx-0"></div>
                  <p className="text-gray-400 font-light text-lg leading-relaxed mb-10">{selectedItem.description}</p>
                  <button className="px-8 py-3 bg-primary text-secondary font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-primary transition-all rounded shadow-lg">Inquire About This Piece</button>
                </m.div>
              )}
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
};