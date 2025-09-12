import React from 'react';
import { ArrowLeft, Camera } from 'lucide-react';
import HomeSectionLink from './HomeSectionLink';
import Footer from './Footer';

interface Paris17PageProps {
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
}

const Paris17Page: React.FC<Paris17PageProps> = ({
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
              <span className="text-yellow-400 relative">{' '}Paris 17<div className="absolute -bottom-2 left-0 w-full h-3 bg-yellow-400 -z-10"></div></span>
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <article className="prose prose-lg max-w-none">
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">Réservez un photobooth à Paris 17 avec The Pix</h2>
            <p className="text-gray-700 mb-4">
              Dans le cœur animé du 17ème arrondissement de Paris, les événements d’entreprise prennent une tournure innovante. Le secret de cette transformation ? Les photobooths.
            </p>
            <p className="text-gray-700 mb-4">
              Et pas n’importe quel photobooth, mais ceux de The Pix. Ce n’est pas juste un ajout à votre événement, c’est un outil pour renforcer l’esprit d’équipe, motiver vos employés et créer des souvenirs inoubliables.
            </p>
            <p className="text-gray-700">
              Dans cet article, nous allons explorer l’importance stratégique des photobooths dans les événements d’entreprise. Nous verrons comment The Pix, un service de location de photobooths de premier plan dans le 17ème arrondissement de Paris, peut rehausser votre prochain séminaire d’entreprise.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">L’importance stratégique des photobooths dans les événements d’entreprise</h2>
            <p className="text-gray-700 mb-4">
              Dans le cadre des événements d’entreprise, l’innovation est essentielle. Il s’agit de créer un environnement qui favorise la cohésion d’équipe et stimule la motivation des employés. Les photobooths jouent un rôle clé en offrant une expérience interactive unique qui encourage les employés à interagir entre eux.
            </p>
            <p className="text-gray-700">
              Ils peuvent être adaptés à n’importe quel thème d’événement, ce qui en fait un ajout flexible à votre planification. En résumé, un photobooth est bien plus qu’un divertissement, c’est un outil stratégique qui améliore le succès de votre événement d’entreprise.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">The Pix : votre service de location de photobooths dans le 17ème arrondissement</h2>
            <p className="text-gray-700">
              En matière de location de photobooths dans le 17ème arrondissement de Paris, The Pix se distingue. Reconnu pour son service professionnel et ses équipements de haute qualité, The Pix propose de nombreuses options de personnalisation, adaptées à la marque et au thème de votre événement. Faciles à utiliser et dotés des dernières technologies, nos photobooths permettent à vos invités de partager instantanément leurs photos sur les réseaux sociaux. Avec un système de réservation en ligne simple et une installation rapide, The Pix garantit une expérience fluide et sans tracas.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">Renforcer la cohésion d’équipe avec un photobooth lors de votre séminaire</h2>
            <p className="text-gray-700">
              Un photobooth peut être un ajout unique et engageant à votre séminaire d’entreprise, encourageant l’interaction et le réseautage entre les employés. En tant que brise-glace, il aide à casser les barrières hiérarchiques et favorise un environnement inclusif et collaboratif. De plus, il est possible de personnaliser les photos avec votre logo, renforçant ainsi l’identité de votre marque tout en créant des souvenirs inoubliables.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">Les monuments emblématiques du 17ème comme toile de fond</h2>
            <p className="text-gray-700">
              Le 17ème arrondissement de Paris regorge de lieux emblématiques, parfaits pour servir de toile de fond à votre événement d’entreprise. Que ce soit le Square des Batignolles, le Parc Monceau, ou l’Arc de Triomphe, ces lieux ajoutent une touche de prestige à votre événement et subliment vos séances de photobooth.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">Personnalisation et branding avec The Pix</h2>
            <p className="text-gray-700">
              The Pix propose une large gamme d’options de personnalisation pour adapter l’expérience photobooth à votre marque et au thème de votre événement. Du fond aux accessoires, tout peut être personnalisé, garantissant que votre photobooth reflète l’unicité de votre entreprise. Les photos imprimées peuvent également être marquées avec votre logo, créant ainsi un rappel constant de votre marque.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">Les aspects pratiques de la location d’un photobooth avec The Pix</h2>
            <p className="text-gray-700">
              Louer un photobooth avec The Pix est un processus sans tracas. L’équipe assure une livraison et une installation ponctuelles, et les photobooths sont dotés d’interfaces intuitives pour garantir une utilisation facile. The Pix fournit également un support technique pendant toute la durée de l’événement pour assurer un bon déroulement.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">Capturer l’esprit de la culture d’entreprise grâce aux souvenirs photo instantanés</h2>
            <p className="text-gray-700">
              Les photobooths ne sont pas seulement amusants, ils capturent l’essence de votre culture d’entreprise. Les souvenirs photo instantanés rappellent les expériences partagées, renforçant la cohésion d’équipe. Ces photos peuvent également être personnalisées avec votre logo, permettant à vos employés de ramener un morceau de votre événement chez eux.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">Maximiser l’engagement des employés grâce aux fonctionnalités interactives</h2>
            <p className="text-gray-700">
              Les photobooths de The Pix incluent des fonctionnalités interactives conçues pour maximiser la participation des employés. Grâce à une interface intuitive et des accessoires amusants, ils encouragent les participants à se lâcher et à profiter de l’expérience. De plus, l’intégration aux réseaux sociaux permet de partager instantanément les photos, augmentant la visibilité de votre événement.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-black mb-4">Pourquoi la location d’un photobooth avec The Pix est un atout pour vos événements d’entreprise</h2>
            <p className="text-gray-700">
              Louer un photobooth avec The Pix pour vos événements d’entreprise dans le 17ème arrondissement de Paris est une décision stratégique. Cela favorise la cohésion d’équipe, crée des souvenirs durables et ajoute une touche de fun à votre événement. Contactez The Pix dès aujourd’hui pour découvrir comment nous pouvons transformer votre prochain événement en une expérience mémorable.
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
          { label: 'Location photobooth Paris 17', onClick: onBack },
        ]}
      />
    </div>
  );
};

export default Paris17Page;

