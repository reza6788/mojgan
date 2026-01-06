import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-white py-12 border-t-4 border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <h2 className="font-display text-3xl mb-4 tracking-widest text-primary">MOJGAN</h2>
            <p className="text-gray-400 font-serif italic max-w-sm">"Since 1990, defining elegance through the art of embroidery."</p>
            <div className="mt-6 flex space-x-4">
              <a className="text-gray-400 hover:text-primary transition-colors" href="#"><span className="sr-only">Instagram</span>📷</a>
              <a className="text-gray-400 hover:text-primary transition-colors" href="#"><span className="sr-only">Facebook</span>📘</a>
              <a className="text-gray-400 hover:text-primary transition-colors" href="#"><span className="sr-only">Pinterest</span>📌</a>
            </div>
          </div>
          <div>
            <h3 className="font-display text-lg mb-4 text-primary">Explore</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a className="hover:text-white transition-colors" href="#">Our History</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Haute Couture</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Bridal</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Appointments</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-display text-lg mb-4 text-primary">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center"><span className="material-icons text-xs mr-2">location_on</span> Tehran, Iran</li>
              <li className="flex items-center"><span className="material-icons text-xs mr-2">phone</span> +98 21 8888 8888</li>
              <li className="flex items-center"><span className="material-icons text-xs mr-2">email</span> maison@mojgan.com</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-xs text-gray-500 font-sans tracking-wide">
          © {new Date().getFullYear()} Meson Mojgan Esnaashary. All rights reserved.
        </div>
      </div>
    </footer>
  );
};