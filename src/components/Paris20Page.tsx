import React from 'react';
import { ArrowLeft, Camera } from 'lucide-react';
import HomeSectionLink from './HomeSectionLink';
import Footer from './Footer';

interface Paris20PageProps {
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
  onParis14Page?: () => void;
  onParis15Page?: () => void;
  onParis16Page?: () => void;
  onParis17Page?: () => void;
  onParis18Page?: () => void;
  onParis19Page?: () => void;
}

const Paris20Page: React.FC<Paris20PageProps> = ({
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
  onParis14Page,
  onParis15Page,
  onParis16Page,
  onParis17Page,
  onParis18Page,
  onParis19Page,
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
              <button onClick={onBack} className="text-gray-700 hover:text-yellow-500 transition-colors font-medium">
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
              Réservez un photobooth à
              <span className="text-yellow-400 relative"> Paris 20<div className="absolute -bottom-2 left-0 w-full h-3 bg-yellow-400 -z-10"></div></span>
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <article className="prose prose-lg max-w-none">
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">Louer un photobooth Paris 20e avec The Pix</h2>
            <p className="text-gray-700 mb-4">
              Organiser un séminaire d'entreprise dans le dynamique 20e arrondissement de Paris peut s’avérer être un défi stimulant.
              Le quartier, connu pour ses contrastes culturels allant des vivants quartiers de Belleville au calme du cimetière du Père Lachaise,
              offre un cadre propice à la créativité et à l'innovation.
            </p>
            <p className="text-gray-700">
              Pour rehausser l'expérience de votre événement et favoriser la cohésion d'équipe, envisagez de louer un photobooth avec The Pix.
              Cette activité ludique et interactive s'avère être un catalyseur efficace pour renforcer l'esprit d'équipe et dynamiser vos séminaires.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">L'importance d'un Photobooth dans les Séminaires</h2>
            <p className="text-gray-700 mb-4">
              Un photobooth n'est pas simplement un gadget amusant; c'est un outil stratégique pour encourager l'interaction entre collègues.
              Dans le contexte d’un séminaire, il sert de point de rassemblement, incitant les participants à se mélanger et à s'engager dans des activités collectives.
            </p>
            <p className="text-gray-700">
              La location d’un photobooth dans le 20e arrondissement de Paris, avec sa riche diversité, peut transformer un événement banal en une expérience mémorable.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">Pourquoi Choisir The Pix?</h2>
            <p className="text-gray-700 mb-4">
              The Pix se distingue par son approche innovante et son équipement de haute qualité.
              Leurs photobooths sont conçus pour s'intégrer parfaitement dans le cadre d'un événement corporate,
              offrant des fonctionnalités avancées telles que l'impression instantanée, la personnalisation de l'arrière-plan et le partage sur les réseaux sociaux.
            </p>
            <p className="text-gray-700">
              En choisissant The Pix, vous optez pour une solution clé en main qui contribue activement à l’animation et à l’engagement des participants.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">Un Cadre Idéal dans le 20e Arrondissement</h2>
            <p className="text-gray-700 mb-4">
              Le choix du 20e arrondissement comme lieu de votre séminaire n’est pas anodin.
              Ce quartier, avec ses rues animées et ses lieux emblématiques, offre un décor unique pour des événements d’entreprise.
            </p>
            <p className="text-gray-700">
              Que vous organisiez votre séminaire à proximité du cimetière du Père Lachaise ou au cœur des quartiers multiculturels de Belleville,
              l’ambiance du 20e arrondissement enrichira l’expérience de vos participants.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">Maximiser l'Impact de Votre Séminaire</h2>
            <p className="text-gray-700 mb-4">
              Pour maximiser l'impact de votre photobooth, intégrez-le dans le programme global de votre événement.
              Encouragez les participants à utiliser le photobooth dès leur arrivée pour briser la glace.
            </p>
            <p className="text-gray-700 mb-4">
              Proposez des concours de la meilleure photo ou offrez des récompenses pour les clichés les plus créatifs.
              Ces activités non seulement stimulent l'esprit d'équipe, mais elles laissent également aux participants des souvenirs tangibles de l'événement.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-black mb-4">En conclusion</h2>
            <p className="text-gray-700 mb-4">
              En somme, louer un photobooth avec The Pix dans le 20e arrondissement de Paris est une démarche à la fois innovante et efficace pour dynamiser vos séminaires d'entreprise.
            </p>
            <p className="text-gray-700 mb-4">
              Cette activité, bien plus qu'un simple divertissement, s'inscrit dans une stratégie globale visant à renforcer la cohésion d'équipe et à stimuler la motivation au sein de votre entreprise.
            </p>
            <p className="text-gray-700">
              Pour les organisateurs de séminaires et les responsables RH, c'est une opportunité à ne pas manquer pour insuffler une nouvelle dynamique à vos événements d'entreprise.
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
          { label: 'Location photobooth Paris 14', onClick: onParis14Page || (() => {}) },
          { label: 'Location photobooth Paris 15', onClick: onParis15Page || (() => {}) },
          { label: 'Location photobooth Paris 16', onClick: onParis16Page || (() => {}) },
          { label: 'Location photobooth Paris 17', onClick: onParis17Page || (() => {}) },
          { label: 'Location photobooth Paris 18', onClick: onParis18Page || (() => {}) },
          { label: 'Location photobooth Paris 19', onClick: onParis19Page || (() => {}) },
          { label: 'Location photobooth Paris 20', onClick: onBack },
        ]}
      />
    </div>
  );
};

export default Paris20Page;

