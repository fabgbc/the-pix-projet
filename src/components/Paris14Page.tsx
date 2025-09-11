import React from 'react';
import { ArrowLeft, Camera } from 'lucide-react';
import HomeSectionLink from './HomeSectionLink';
import Footer from './Footer';

interface Paris14PageProps {
  onBack: () => void;
  onQuoteRequest?: () => void;
  onPhotoboothDetails?: () => void;
  onAIAnimations?: () => void;
  onSEOPage?: () => void;
  onParis1Page?: () => void;
  onParis2Page?: () => void;
  onParis3Page?: () => void;
  onParis4Page?: () => void;
  onParis5Page?: () => void;
  onParis6Page?: () => void;
  onParis7Page?: () => void;
  onParis8Page?: () => void;
  onParis9Page?: () => void;
  onParis10Page?: () => void;
  onParis11Page?: () => void;
  onParis12Page?: () => void;
  onParis13Page?: () => void;
}

const Paris14Page: React.FC<Paris14PageProps> = ({
  onBack,
  onQuoteRequest,
  onPhotoboothDetails,
  onAIAnimations,
  onSEOPage,
  onParis1Page,
  onParis2Page,
  onParis3Page,
  onParis4Page,
  onParis5Page,
  onParis6Page,
  onParis7Page,
  onParis8Page,
  onParis9Page,
  onParis10Page,
  onParis11Page,
  onParis12Page,
  onParis13Page,
}) => {
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

            <nav className="hidden lg:flex items-center space-x-8">
              <button
                onClick={onBack}
                className="text-gray-700 hover:text-yellow-500 transition-colors font-medium"
              >
                Accueil
              </button>
              <button
                onClick={onPhotoboothDetails}
                className="text-gray-700 hover:text-yellow-500 transition-colors font-medium"
              >
                Photobooth sur mesure
              </button>
              <HomeSectionLink label="Événements Privés" targetId="mariages" onBack={onBack} />
              <button
                onClick={onAIAnimations}
                className="text-gray-700 hover:text-yellow-500 transition-colors font-medium"
              >
                Animations IA
              </button>
              <HomeSectionLink label="Galerie" targetId="galerie" onBack={onBack} />
              <button
                onClick={onQuoteRequest}
                className="bg-yellow-400 text-black px-6 py-3 rounded-full hover:bg-yellow-500 transition-colors font-semibold"
              >
                Devis Gratuit
              </button>
            </nav>

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
              <span className="text-yellow-400 relative">{' '}14ème arrondissement de Paris<div className="absolute -bottom-2 left-0 w-full h-3 bg-yellow-400 -z-10"></div></span>
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <article className="prose prose-lg max-w-none">
          {/* Introduction */}
          <section className="mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold text-black mb-4">Louer un photobooth Paris 14eme arrondissement avec The Pix</h2>
              <p className="text-gray-700 mb-4">
                L’organisation d’un événement d’entreprise à Paris peut être un défi, surtout lorsqu’il s’agit de trouver des activités engageantes qui renforcent la cohésion d’équipe et motivent les employés.
              </p>
              <p className="text-gray-700">
                Dans cet article, nous explorons comment louer un photobooth à Paris 14ème arrondissement avec The Pix peut transformer votre événement en une expérience inoubliable.
              </p>
            </div>
          </section>

          {/* Pourquoi choisir */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-black mb-6">Pourquoi choisir un photobooth pour votre événement ?</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-black mb-2">Créer des souvenirs durables</h3>
                <p className="text-gray-700">
                  Un photobooth permet de capturer des moments de manière créative et amusante. Vos employés peuvent prendre des photos ensemble, essayer des accessoires variés et repartir avec des souvenirs tangibles de l’événement.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-black mb-2">Encourager l’interaction et la cohésion d’équipe</h3>
                <p className="text-gray-700">
                  Un photobooth n’est pas seulement un appareil photo. Il s’agit d’un outil interactif qui encourage les participants à interagir les uns avec les autres.
                </p>
              </div>
            </div>
          </section>

          {/* Pourquoi Paris 14 */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-black mb-6">Pourquoi Paris 14ème arrondissement ?</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-black mb-2">Accessibilité et commodité</h3>
                <p className="text-gray-700">
                  Situé au cœur de Paris, le 14ème arrondissement est facilement accessible par les transports en commun, ce qui en fait un choix pratique pour les événements d’entreprise.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-black mb-2">Ambiance locale</h3>
                <p className="text-gray-700">
                  Paris 14ème est connu pour son ambiance vibrante et sa diversité culturelle, offrant un cadre idéal pour capturer l’essence de Paris.
                </p>
              </div>
            </div>
          </section>

          {/* Comment louer */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-black mb-6">Comment louer un photobooth avec The Pix ?</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-black mb-2">Options de personnalisation</h3>
                <p className="text-gray-700">
                  The Pix offre une gamme variée d’options de personnalisation pour répondre aux besoins spécifiques de votre événement.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-black mb-2">Installation et support technique</h3>
                <p className="text-gray-700">
                  Louer un photobooth avec The Pix signifie également bénéficier d’un service complet incluant installation, maintenance et support technique.
                </p>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-16">
            <p className="text-gray-700 mb-4">
              Intégrer un photobooth à votre prochain événement dans le 14ème arrondissement de Paris est une stratégie innovante pour améliorer l’expérience des participants.
            </p>
            <p className="text-gray-700">
              N’hésitez pas à nous contacter pour discuter de vos besoins spécifiques et découvrir comment The Pix peut transformer votre événement.
            </p>
          </section>
        </article>
      </div>

      <Footer
        onSEOPage={onSEOPage}
        onPhotoboothDetails={onPhotoboothDetails}
        arrondissementLinks={[
          { label: 'Location photobooth Paris 1', onClick: onParis1Page || (() => {}) },
          { label: 'Location photobooth Paris 2', onClick: onParis2Page || (() => {}) },
          { label: 'Location photobooth Paris 3', onClick: onParis3Page || (() => {}) },
          { label: 'Location photobooth Paris 4', onClick: onParis4Page || (() => {}) },
          { label: 'Location photobooth Paris 5', onClick: onParis5Page || (() => {}) },
          { label: 'Location photobooth Paris 6', onClick: onParis6Page || (() => {}) },
          { label: 'Location photobooth Paris 7', onClick: onParis7Page || (() => {}) },
          { label: 'Location photobooth Paris 8', onClick: onParis8Page || (() => {}) },
          { label: 'Location photobooth Paris 9', onClick: onParis9Page || (() => {}) },
          { label: 'Location photobooth Paris 10', onClick: onParis10Page || (() => {}) },
          { label: 'Location photobooth Paris 11', onClick: onParis11Page || (() => {}) },
          { label: 'Location photobooth Paris 12', onClick: onParis12Page || (() => {}) },
          { label: 'Location photobooth Paris 13', onClick: onParis13Page || (() => {}) },
          { label: 'Location photobooth Paris 14', onClick: onBack },
        ]}
      />
    </div>
  );
};

export default Paris14Page;
