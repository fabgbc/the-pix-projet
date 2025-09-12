import React from 'react';
import { ArrowLeft, Camera } from 'lucide-react';
import HomeSectionLink from './HomeSectionLink';
import Footer from './Footer';

interface Paris19PageProps {
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
}

const Paris19Page: React.FC<Paris19PageProps> = ({
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
              Louer un photobooth dans le
              <span className="text-yellow-400 relative">{' '}19ème arrondissement de Paris<div className="absolute -bottom-2 left-0 w-full h-3 bg-yellow-400 -z-10"></div></span>
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <article className="prose prose-lg max-w-none">
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">Louer un photobooth Paris 19eme arrondissement avec The Pix</h2>
            <p className="text-gray-700 mb-4">
              Dans le cadre de la planification d'événements corporatifs, l'intégration d'activités novatrices et engageantes est essentielle pour renforcer la cohésion d'équipe et stimuler la motivation des employés. Louer un photobooth à Paris 19e, notamment avec The Pix, se révèle être une solution créative pour agrémenter vos séminaires et événements d'entreprise.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">L'importance des activités photographiques dans un séminaire d'entreprise</h2>
            <p className="text-gray-700 mb-4">
              Les activités photographiques, telles que les photobooths, offrent une occasion unique de capturer des moments mémorables tout en facilitant l'interaction entre les participants. Au-delà de leur aspect ludique, ces dispositifs encouragent la collaboration et l'engagement, éléments cruciaux dans la création d'un environnement de travail harmonieux.
            </p>
            <p className="text-gray-700">
              Intégrer un photobooth lors de vos séminaires à la Place Stalingrad ou à la Grande Halle de la Villette peut transformer l'expérience des participants, en les incitant à se détendre et à interagir de manière plus informelle.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">Pourquoi choisir The Pix pour la location de photobooth</h2>
            <p className="text-gray-700">
              La location d'un photobooth avec The Pix à Paris 19e offre plusieurs avantages distinctifs pour les planificateurs d'événements. The Pix se distingue par sa capacité à personnaliser ses offres pour répondre aux besoins spécifiques de chaque événement. Grâce à une technologie de pointe et à un design élégant, leurs photobooths s'intègrent parfaitement à l'ambiance de votre séminaire, tout en offrant une expérience utilisateur exceptionnelle.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">Avantages des photobooths The Pix</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Personnalisation :</strong> The Pix permet une personnalisation complète de l'expérience photobooth, incluant des options de marquage avec le logo de l'entreprise et des thèmes adaptés à votre événement.</li>
              <li><strong>Technologie avancée :</strong> Équipés de caméras haute résolution et d'écrans tactiles intuitifs, les photobooths assurent une qualité d'image impeccable et une simplicité d'utilisation inégalée.</li>
              <li><strong>Flexibilité de location :</strong> Que ce soit pour une heure ou pour toute la durée de votre événement, The Pix propose des options flexibles qui s'ajustent à vos besoins logistiques et budgétaires.</li>
            </ul>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">Impact sur la cohésion d'équipe et la motivation</h2>
            <p className="text-gray-700">
              En intégrant un photobooth à votre événement d'entreprise, vous stimulez non seulement l'engagement des participants, mais vous favorisez également la création de souvenirs partagés qui renforcent les liens entre collègues. Cette approche contribue à une atmosphère positive et collaborative, essentielle pour améliorer la satisfaction et la productivité au sein de l'équipe.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-black mb-4">En conclusion</h2>
            <p className="text-gray-700">
              Louer un photobooth avec The Pix à Paris 19e est une stratégie efficace pour dynamiser vos séminaires et événements d'entreprise. En choisissant cette solution innovante, vous offrez à vos participants une expérience mémorable qui promeut la cohésion et la motivation, tout en renforçant l'impact global de votre événement. Pour les organisateurs d'événements et les responsables des ressources humaines, intégrer cette activité dans vos stratégies de team building est une démarche judicieuse pour atteindre vos objectifs de développement organisationnel.
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
          { label: 'Location photobooth Paris 19', onClick: onBack },
        ]}
      />
    </div>
  );
};

export default Paris19Page;
