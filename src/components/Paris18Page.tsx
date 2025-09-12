import React from 'react';
import { ArrowLeft, Camera } from 'lucide-react';
import HomeSectionLink from './HomeSectionLink';
import Footer from './Footer';

interface Paris18PageProps {
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
}

const Paris18Page: React.FC<Paris18PageProps> = ({
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
              <span className="text-yellow-400 relative"> Paris 18<div className="absolute -bottom-2 left-0 w-full h-3 bg-yellow-400 -z-10"></div></span>
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <article className="prose prose-lg max-w-none">
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">Réservez un photobooth dans le 18ème arrondissement de Paris avec The Pix</h2>
            <p className="text-gray-700 mb-4">
              Au cœur vibrant de Paris, le 18ème arrondissement incarne à la fois la culture et l’histoire, symbolisées par des lieux emblématiques tels que Montmartre et le Moulin Rouge. Ce riche décor artistique et divertissant offre un cadre unique pour les événements d'entreprise.
            </p>
            <p className="text-gray-700">
              Dans ce contexte, la location d’un photobooth, notamment le Photobooth 360 innovant, se présente comme une stratégie idéale pour enrichir les rassemblements professionnels.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">L'importance des photobooths dans les événements d'entreprise</h2>
            <p className="text-gray-700">
              Dans l’organisation d’événements d’entreprise, renforcer la cohésion d’équipe et stimuler la motivation des employés sont des objectifs clés. Les photobooths, de par leur nature interactive, favorisent intrinsèquement l’engagement des participants. Ils ne se contentent pas d’être une source de divertissement, mais offrent aussi un moyen de créer des souvenirs durables. Le Photobooth 360, en particulier, propose une expérience dynamique, capturant des moments sous tous les angles et laissant aux participants un souvenir unique de l’événement.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">Pourquoi choisir le 18ème arrondissement de Paris ?</h2>
            <p className="text-gray-700 mb-4">
              Le 18ème arrondissement, avec son mélange éclectique de charme historique et de modernité, offre un cadre incomparable pour des événements d’entreprise. La juxtaposition entre l’architecture parisienne traditionnelle et les lieux culturels contemporains crée un environnement stimulant, propice à l’inspiration et au développement d’un esprit de communauté parmi les participants.
            </p>
            <p className="text-gray-700 mb-4"><strong>Louer photobooth Paris 18</strong></p>
            <p className="text-gray-700">
              En situant votre événement dans ce quartier, vous profitez de l'attrait de Montmartre et du légendaire Moulin Rouge, qui peuvent servir de thématiques ou de points d'intérêt pour votre événement.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">The Pix : une solution complète</h2>
            <p className="text-gray-700">
              Pour la location de photobooths à Paris, The Pix se positionne comme un leader dans l’industrie, offrant du matériel de pointe et des services sur mesure, adaptés aux besoins spécifiques des clients d’entreprise. Leur expertise dans l’installation du Photobooth 360 garantit que votre événement sera unique, en offrant une plateforme interactive qui incite à la participation et à l’interaction entre les participants.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">Personnalisation et sur-mesure</h2>
            <p className="text-gray-700">
              The Pix comprend que chaque événement d’entreprise est unique et nécessite une approche sur mesure pour l’intégration du photobooth. Ils proposent une large gamme d’options de personnalisation, vous permettant d’adapter l’expérience photobooth en fonction du thème de votre événement ou de votre identité d’entreprise. Des modèles de photos personnalisés aux arrière-plans sur mesure mettant en avant les monuments emblématiques parisiens, The Pix veille à ce que votre événement soit non seulement mémorable, mais aussi représentatif de votre image de marque.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">Renforcer la cohésion d’équipe grâce à des expériences partagées</h2>
            <p className="text-gray-700">
              L'ajout d’un photobooth à votre événement d’entreprise peut grandement renforcer la cohésion d’équipe. En s’engageant dans l’expérience du photobooth, les employés partagent la création de souvenirs communs, favorisant un esprit de camaraderie et d’unité. Cette expérience partagée peut agir comme un catalyseur pour améliorer les relations interpersonnelles au sein de l’entreprise, contribuant ainsi à un environnement de travail plus harmonieux et productif.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-black mb-4">En conclusion</h2>
            <p className="text-gray-700">
              Louer un photobooth auprès de The Pix pour votre événement d’entreprise dans le 18ème arrondissement de Paris n’est pas simplement un ajout, mais un véritable atout. C’est une approche innovante qui s’aligne sur les objectifs de cohésion d’équipe et de motivation des employés. En exploitant la richesse culturelle de Montmartre et la technologie innovante du Photobooth 360, vous pouvez créer un événement à la fois marquant et inoubliable.
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
          { label: 'Location photobooth Paris 18', onClick: onBack },
        ]}
      />
    </div>
  );
};

export default Paris18Page;

