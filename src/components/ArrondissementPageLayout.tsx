import React, { useMemo } from 'react';
import { ArrowLeft, Camera } from 'lucide-react';
import Footer from './Footer';
import NavigationMenu, { NavigationCallbacks } from './NavigationMenu';

interface ArrondissementLink {
  label: string;
  onClick: () => void;
}

interface ArrondissementPageLayoutProps {
  arrondissement: number;
  onBack: () => void;
  onQuoteRequest?: () => void;
  onPhotoboothDetails?: () => void;
  onAIAnimations?: () => void;
  onSEOPage?: () => void;
  arrondissementLinks: ArrondissementLink[];
  children: React.ReactNode;
}

const ArrondissementPageLayout: React.FC<ArrondissementPageLayoutProps> = ({
  arrondissement,
  onBack,
  onQuoteRequest,
  onPhotoboothDetails,
  onAIAnimations,
  onSEOPage,
  arrondissementLinks,
  children,
}) => {
  const arrondissementLabel = arrondissement === 1 ? '1er' : `${arrondissement}ème`;

  const navigationCallbacks = useMemo<NavigationCallbacks>(
    () => ({
      '/': onBack,
      ...(onPhotoboothDetails ? { '/location-photobooth-paris': onPhotoboothDetails } : {}),
      ...(onAIAnimations ? { '/animations-photobooth-ia': onAIAnimations } : {}),
      ...(onQuoteRequest ? { '/devis-photobooth-gratuit': onQuoteRequest } : {}),
    }),
    [onAIAnimations, onBack, onPhotoboothDetails, onQuoteRequest],
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                <Camera className="w-6 h-6 text-black" />
              </div>
              <span className="text-2xl font-bold text-black">BoostPix</span>
            </div>

            <NavigationMenu className="hidden lg:flex" onNavigate={navigationCallbacks} />

            <button
              onClick={onBack}
              className="lg:hidden flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Retour</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gray-50 mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-black mb-6 leading-tight">
              Louer un photobooth dans le
              <span className="text-yellow-400 relative"> {`${arrondissementLabel} arrondissement de Paris`}<div className="absolute -bottom-2 left-0 w-full h-3 bg-yellow-400 -z-10"></div></span>
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <article className="prose prose-lg max-w-none">{children}</article>
      </div>

      {/* Footer */}
      <Footer
        onSEOPage={onSEOPage}
        onPhotoboothDetails={onPhotoboothDetails}
        arrondissementLinks={arrondissementLinks}
      />
    </div>
  );
};

export default ArrondissementPageLayout;

