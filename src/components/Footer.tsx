import React from 'react';
import { Camera, Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

interface FooterProps {
  onSEOPage?: () => void;
  onPhotoboothDetails?: () => void;
  arrondissementLinks: { label: string; onClick: () => void }[];
}

const Footer: React.FC<FooterProps> = ({ onSEOPage, onPhotoboothDetails, arrondissementLinks }) => {
  return (
    <footer className="bg-white py-16 border-t border-gray-100" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                <Camera className="w-6 h-6 text-black" />
              </div>
              <span className="text-2xl font-bold text-black">BoostPix</span>
            </div>
            <p className="text-gray-600 mb-6 max-w-md leading-relaxed">
              Spécialiste des expériences visuelles premium pour vos événements d'exception.
              Photobooths sur mesure, technologie connectée et décors immersifs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors">
                <Instagram className="w-5 h-5 text-gray-600" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors">
                <Facebook className="w-5 h-5 text-gray-600" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors">
                <Linkedin className="w-5 h-5 text-gray-600" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-black mb-6 text-lg">Services</h3>
            <div className="space-y-3">
              {onPhotoboothDetails ? (
                <button
                  onClick={onPhotoboothDetails}
                  className="block text-gray-600 hover:text-yellow-500 transition-colors text-left"
                >
                  Photobooths sur mesure
                </button>
              ) : (
                <a href="#" className="block text-gray-600 hover:text-yellow-500 transition-colors">
                  Photobooths sur mesure
                </a>
              )}
              <a href="#" className="block text-gray-600 hover:text-yellow-500 transition-colors">Technologie connectée</a>
              <a href="#" className="block text-gray-600 hover:text-yellow-500 transition-colors">Décors immersifs</a>
              <a href="#" className="block text-gray-600 hover:text-yellow-500 transition-colors">Animation événementielle</a>
              {onSEOPage && (
                <button
                  onClick={onSEOPage}
                  className="block text-gray-600 hover:text-yellow-500 transition-colors text-left"
                >
                  Location photobooth Paris
                </button>
              )}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {arrondissementLinks.map((link, idx) => (
                  <button
                    key={idx}
                    onClick={link.onClick}
                    className="text-gray-600 hover:text-yellow-500 transition-colors text-left"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-black mb-6 text-lg">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-500" />
                <a href="tel:+33123456789" className="text-gray-600 hover:text-yellow-500 transition-colors">
                  +33 1 23 45 67 89
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-500" />
                <a href="mailto:contact@boostpix.fr" className="text-gray-600 hover:text-yellow-500 transition-colors">
                  contact@boostpix.fr
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-yellow-500" />
                <span className="text-gray-600">Paris - Lyon - Marseille</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 mb-4 md:mb-0">&copy; 2024 BoostPix. Tous droits réservés.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-yellow-500 transition-colors">Mentions légales</a>
            <a href="#" className="text-gray-500 hover:text-yellow-500 transition-colors">Politique de confidentialité</a>
            <a href="#" className="text-gray-500 hover:text-yellow-500 transition-colors">CGV</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

