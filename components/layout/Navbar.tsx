import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Moon, Sun } from 'lucide-react';
import { useStore } from '../../store/useStore';
import { translations } from '../../i18n/translations';
import { Language } from '../../types';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme, language, setLanguage } = useStore();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const t = translations[language].nav;
  
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.home, path: '/' },
    { name: t.collections, path: '/gallery' },
    { name: t.services, path: '/services' }, 
    { name: t.testimonials, path: '/testimonials' },
    { name: t.contact, path: '/order' },
  ];

  // Determine text colors based on context
  // Case 1: Transparent Navbar on Home Page (Dark Background) -> Force Light Text
  // Case 2: Scrolled Navbar OR Other Pages (Background matches Theme) -> Theme Text
  const isTransparentOnDark = isHome && !scrolled;
  
  const textColorClass = isTransparentOnDark 
    ? 'text-gray-300 hover:text-white' 
    : 'text-gray-700 dark:text-gray-300 hover:text-primary';

  const iconColorClass = isTransparentOnDark
    ? 'text-gray-300 hover:text-white'
    : 'text-gray-600 dark:text-gray-300 hover:text-primary';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-primary/20 dark:border-primary/10 py-3 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex flex-col items-center group">
             <span className="font-display font-bold text-2xl tracking-widest text-primary">MOJGAN</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-serif text-sm uppercase tracking-widest transition-colors duration-300 ${location.pathname === link.path ? 'text-primary font-semibold' : textColorClass}`}
              >
                {link.name}
              </Link>
            ))}
            
            <div className={`h-6 w-px mx-4 ${isTransparentOnDark ? 'bg-white/20' : 'bg-gray-300 dark:bg-gray-700'}`}></div>

            <button onClick={toggleTheme} className={`p-2 rounded-full transition-colors ${iconColorClass}`}>
               <span className="material-icons text-xl leading-none">{theme === 'dark' ? 'light_mode' : 'dark_mode'}</span>
            </button>
            
            <div className="relative group">
               <button className={`flex items-center transition-colors gap-1 uppercase text-xs font-bold ${iconColorClass}`}>
                 <Globe size={16} />
                 <span>{language}</span>
               </button>
               {/* Dropdown remains styled for the theme background */}
               <div className="absolute right-0 mt-2 w-24 bg-white dark:bg-surface-dark shadow-xl rounded-sm border border-gray-100 dark:border-gray-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right z-50">
                 {Object.values(Language).map((lang) => (
                   <button
                     key={lang}
                     onClick={() => setLanguage(lang)}
                     className={`block w-full text-left px-4 py-2 text-xs uppercase hover:bg-primary/10 hover:text-primary ${language === lang ? 'text-primary font-bold' : 'text-gray-600 dark:text-gray-400'}`}
                   >
                     {lang}
                   </button>
                 ))}
               </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
             <button onClick={toggleTheme} className={iconColorClass}>
              <span className="material-icons">{theme === 'dark' ? 'light_mode' : 'dark_mode'}</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={iconColorClass}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-background-light dark:bg-background-dark border-t border-gray-200 dark:border-gray-800 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100 shadow-xl' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 py-6 space-y-4 flex flex-col items-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`font-serif text-sm uppercase tracking-widest hover:text-primary ${location.pathname === link.path ? 'text-primary' : 'text-gray-800 dark:text-gray-200'}`}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-gray-800 w-full justify-center">
             {Object.values(Language).map((lang) => (
               <button
                 key={lang}
                 onClick={() => { setLanguage(lang); setIsOpen(false); }}
                 className={`text-xs uppercase ${language === lang ? 'text-primary font-bold' : 'text-gray-500'}`}
               >
                 {lang}
               </button>
             ))}
          </div>
        </div>
      </div>
    </nav>
  );
};