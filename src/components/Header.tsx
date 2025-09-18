import React, { useCallback, useState } from 'react';
import { Camera, Menu, X } from 'lucide-react';
import { useRouter } from '../router';

const navigationItems = [
  { label: 'Accueil', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Photobooth sur mesure', path: '/location-photobooth-paris' },
  { label: 'Événements Privés', path: '/photobooth-evenement-paris' },
  { label: 'Animations IA', path: '/animations-photobooth-ia' },
  { label: 'Galerie', path: '/galerie-photobooth-paris' },
];

const Header: React.FC = () => {
  const { navigate, path } = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigate = useCallback(
    (target: string) => {
      setIsMenuOpen(false);
      navigate(target);
    },
    [navigate],
  );

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100"
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
              <Camera className="w-6 h-6 text-black" />
            </div>
            <span className="text-2xl font-bold text-black">BoostPix</span>
          </div>

          <nav
            className="hidden lg:flex items-center space-x-8"
            role="navigation"
            aria-label="Navigation principale"
          >
            {navigationItems.map(item => {
              const isActive = path === item.path;
              return (
                <button
                  key={item.path}
                  onClick={() => handleNavigate(item.path)}
                  className={`transition-colors font-medium ${
                    isActive ? 'text-yellow-500' : 'text-gray-700 hover:text-yellow-500'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </button>
              );
            })}
            <button
              onClick={() => handleNavigate('/devis-photobooth-gratuit')}
              className="bg-yellow-400 text-black px-6 py-3 rounded-full hover:bg-yellow-500 transition-colors font-semibold"
            >
              Devis Gratuit
            </button>
          </nav>

          <button className="lg:hidden" onClick={toggleMenu} aria-label="Ouvrir le menu">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4 pt-4">
              {navigationItems.map(item => {
                const isActive = path === item.path;
                return (
                  <button
                    key={item.path}
                    onClick={() => handleNavigate(item.path)}
                    className={`text-left transition-colors font-medium ${
                      isActive ? 'text-yellow-500' : 'text-gray-700 hover:text-yellow-500'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                  </button>
                );
              })}
              <button
                onClick={() => handleNavigate('/devis-photobooth-gratuit')}
                className="bg-yellow-400 text-black px-6 py-3 rounded-full hover:bg-yellow-500 transition-colors font-semibold text-center"
              >
                Devis Gratuit
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
