import React from 'react';
import { ArrowLeft, Camera } from 'lucide-react';
import HomeSectionLink from './HomeSectionLink';
import Footer from './Footer';

interface Paris15PageProps {
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
}

const Paris15Page: React.FC<Paris15PageProps> = ({
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
              <span className="text-yellow-400 relative">{' '}15ème arrondissement de Paris<div className="absolute -bottom-2 left-0 w-full h-3 bg-yellow-400 -z-10"></div></span>
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
              <h2 className="text-3xl font-bold text-black mb-4">Louer un photobooth Paris 15eme arrondissement avec The Pix</h2>
              <p className="text-gray-700 mb-4">
                Organiser un événement d’entreprise mémorable et engageant est une tâche complexe, nécessitant créativité et expertise. Que vous soyez un planificateur d’événements ou un responsable des ressources humaines, vous recherchez constamment des activités innovantes pour renforcer la cohésion d’équipe et motiver vos employés.
              </p>
              <p className="text-gray-700 mb-4">location photobooth paris 15</p>
              <p className="text-gray-700">
                Louer un photobooth à Paris 15ème arrondissement avec The Pix peut être la solution parfaite. Ce guide vous aidera à comprendre pourquoi cette activité est un excellent choix pour vos événements corporatifs.
              </p>
            </div>
          </section>

          {/* Pourquoi choisir */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-black mb-6">Pourquoi choisir un photobooth ?</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-black mb-2">Créer des souvenirs inoubliables</h3>
                <p className="text-gray-700">
                  Un photobooth permet aux participants de capturer des moments joyeux et de repartir avec des souvenirs tangibles. Ces photos peuvent être partagées sur les réseaux sociaux, augmentant ainsi la visibilité de votre événement. En outre, elles servent de rappel constant de l’expérience positive vécue, renforçant la cohésion d’équipe.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-black mb-2">Encourager l’interaction</h3>
                <p className="text-gray-700">
                  Le photobooth est une excellente activité de brise-glace. Les employés de différentes équipes ou départements peuvent interagir de manière informelle, favorisant ainsi des relations professionnelles plus solides. La dynamique ludique d’un photobooth encourage la collaboration et l’engagement, essentiels pour un environnement de travail harmonieux.
                </p>
              </div>
            </div>
          </section>

          {/* Pourquoi Paris 15 */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-black mb-6">Pourquoi Paris 15ème arrondissement ?</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-black mb-2">Proximité des lieux emblématiques</h3>
                <p className="text-gray-700">
                  Le 15ème arrondissement est proche de nombreux sites emblématiques tels que la Tour Montparnasse et le Pont de Bir-Hakeim. Ces lieux offrent des opportunités uniques pour des activités en extérieur et des séances photo mémorables, ajoutant une dimension supplémentaire à votre événement.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-black mb-2">Accessibilité et commodité</h3>
                <p className="text-gray-700">
                  Ce quartier est bien desservi par les transports en commun, facilitant ainsi l’accès pour tous les participants. De plus, il offre une variété d’espaces événementiels adaptés à différents types de séminaires et de réunions d’entreprise.
                </p>
              </div>
            </div>
          </section>

          {/* The Pix */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-black mb-6">The Pix : Votre partenaire idéal</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-black mb-2">Expertise et personnalisation</h3>
                <p className="text-gray-700">
                  The Pix se distingue par son expertise dans la location de photobooths et son service personnalisé. Chaque photobooth est équipé des dernières technologies, garantissant des photos de haute qualité. De plus, The Pix offre des options de personnalisation, telles que des cadres et des accessoires thématiques, alignés avec les objectifs de votre événement.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-black mb-2">Installation et support</h3>
                <p className="text-gray-700">
                  L’équipe de The Pix s’occupe de l’installation du photobooth, vous permettant de vous concentrer sur d’autres aspects de votre événement. Un technicien est également disponible sur place pour assurer le bon fonctionnement de l’équipement, garantissant une expérience sans tracas pour vos invités.
                </p>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-16">
            <p className="text-gray-700 mb-4">
              Louer un photobooth à Paris 15ème arrondissement avec The Pix est une stratégie efficace pour dynamiser vos événements corporatifs. En créant une atmosphère détendue et interactive, vous pouvez renforcer la cohésion d’équipe et laisser une impression durable sur vos employés.
            </p>
            <p className="text-gray-700">
              Ne laissez pas passer l’opportunité d’ajouter une touche de créativité et de fun à votre prochain événement. Contactez The Pix dès aujourd’hui pour discuter de vos besoins spécifiques et découvrir comment un photobooth peut transformer votre événement en une expérience mémorable.
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
          { label: 'Location photobooth Paris 15', onClick: onBack },
        ]}
      />
    </div>
  );
};

export default Paris15Page;

