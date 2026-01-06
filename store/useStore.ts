import { create } from 'zustand';
import { Language } from '../types';

interface AppState {
  theme: 'light' | 'dark';
  language: Language;
  toggleTheme: () => void;
  setLanguage: (lang: Language) => void;
}

export const useStore = create<AppState>((set) => ({
  theme: 'dark', // Default to dark as per luxe aesthetic
  language: Language.EN,
  toggleTheme: () => set((state) => {
    const newTheme = state.theme === 'light' ? 'dark' : 'light';
    if (typeof window !== 'undefined') {
      if (newTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
    return { theme: newTheme };
  }),
  setLanguage: (lang) => set({ language: lang }),
}));