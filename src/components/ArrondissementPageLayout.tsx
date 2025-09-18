import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface ArrondissementLink {
  label: string;
  onClick: () => void;
}

interface ArrondissementPageLayoutProps {
  arrondissement: number;
  onQuoteRequest?: () => void;
  onPhotoboothDetails?: () => void;
  onAIAnimations?: () => void;
  onSEOPage?: () => void;
  arrondissementLinks: ArrondissementLink[];
  children: React.ReactNode;
}

const ArrondissementPageLayout: React.FC<ArrondissementPageLayoutProps> = ({
  arrondissement,
  onQuoteRequest,
  onPhotoboothDetails,
  onAIAnimations,
  onSEOPage,
  arrondissementLinks,
  children,
}) => {
  const arrondissementLabel = arrondissement === 1 ? '1er' : `${arrondissement}ème`;

  return (
    <div className="min-h-screen bg-white">
      <Header />

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

