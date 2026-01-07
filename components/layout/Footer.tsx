import React from 'react';
import { Link } from 'react-router-dom';
import { AtSign, Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react';
import { useStore } from '../../store/useStore';
import { translations } from '../../i18n/translations';

export const Footer: React.FC = () => {
  const { language } = useStore();
  const t = translations[language].footer;

  return (
    <footer className="bg-[#F9F6F0] dark:bg-[#0F1621] text-gray-600 dark:text-gray-400 pt-16 pb-8 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300 font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="space-y-6">
            <h2 className="font-display font-bold text-2xl tracking-widest text-primary uppercase">
              Meson Mojgan
            </h2>
            <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400 max-w-xs">
              {t.description}
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <AtSign size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-gray-900 dark:text-white text-xs font-bold uppercase tracking-widest mb-6">{t.headers.quickLinks}</h3>
            <ul className="space-y-4">
              <li><Link to="/maison" className="text-sm hover:text-primary transition-colors">{t.links.about}</Link></li>
              <li><Link to="/order" className="text-sm hover:text-primary transition-colors">{t.links.placeOrder}</Link></li>
              <li><Link to="/services" className="text-sm hover:text-primary transition-colors">{t.links.services}</Link></li>
              <li><Link to="/gallery" className="text-sm hover:text-primary transition-colors">{t.links.gallery}</Link></li>
              <li><Link to="/testimonials" className="text-sm hover:text-primary transition-colors">{t.links.testimonials}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 dark:text-white text-xs font-bold uppercase tracking-widest mb-6">{t.headers.services}</h3>
            <ul className="space-y-4">
              <li><Link to="/services/bridal-ceremonial" className="text-sm hover:text-primary transition-colors">{t.links.bridal}</Link></li>
              <li><Link to="/services/custom-garment" className="text-sm hover:text-primary transition-colors">{t.links.custom}</Link></li>
              <li><Link to="/services/repair-restoration" className="text-sm hover:text-primary transition-colors">{t.links.restoration}</Link></li>
              <li><Link to="/services/fabric-personalization" className="text-sm hover:text-primary transition-colors">{t.links.monogram}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 dark:text-white text-xs font-bold uppercase tracking-widest mb-6">{t.headers.contact}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPin size={16} className="text-primary mt-1 shrink-0" />
                <span>123 Artisan Ave, Design District</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone size={16} className="text-primary shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail size={16} className="text-primary shrink-0" />
                <span>info@mesonmojgan.com</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Clock size={16} className="text-primary shrink-0" />
                <span>Mon - Sat: 9:00 - 18:00</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 text-center">
          <p className="text-xs text-gray-400 dark:text-gray-500 font-light tracking-wide">
            {t.copyright}
          </p>
        </div>

      </div>
    </footer>
  );
};