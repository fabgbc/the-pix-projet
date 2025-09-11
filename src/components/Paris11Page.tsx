import React from 'react';
import { ArrowLeft, Camera } from 'lucide-react';
import HomeSectionLink from './HomeSectionLink';
import Footer from './Footer';

interface Paris11PageProps {
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
}

const Paris11Page: React.FC<Paris11PageProps> = ({
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
              <span className="text-yellow-400 relative">{' '}11ème arrondissement de Paris<div className="absolute -bottom-2 left-0 w-full h-3 bg-yellow-400 -z-10"></div></span>
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <article className="prose prose-lg max-w-none">
          <section className="mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                L’organisation d’une fête d’entreprise ou d’un événement à Paris peut souvent s’avérer être un défi, surtout lorsqu’il s’agit de trouver des activités innovantes et engageantes pour maintenir l’intérêt des participants. Les photobooths se sont révélés être une solution créative et efficace pour animer vos événements, et The Pix offre une option idéale pour louer un photobooth dans le 11ème arrondissement de Paris.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <div className="bg-gradient-to-br from-pink-50 to-yellow-50 p-8 rounded-2xl">
              <h2 className="text-3xl font-bold text-black mb-6">Pourquoi choisir un photobooth pour votre événement d’entreprise ?</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Les photobooths sont devenus un incontournable des événements d’entreprise modernes. Non seulement ils offrent une source de divertissement interactif, mais ils encouragent également la participation et l’interaction entre les collègues, favorisant ainsi la cohésion d’équipe.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold text-black mb-6">Interaction et Cohésion d’Équipe</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Les photobooths encouragent les participants à interagir de manière ludique et détendue. Dans un cadre professionnel, cela peut aider à briser la glace entre les employés qui ne se connaissent pas bien et renforcer les liens entre ceux qui travaillent ensemble au quotidien. Cette interaction renforcée peut conduire à une meilleure coopération et un esprit d’équipe plus fort.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <div className="bg-gradient-to-br from-pink-50 to-yellow-50 p-8 rounded-2xl">
              <h2 className="text-3xl font-bold text-black mb-6">Souvenirs Personnalisés</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Les photos imprimées sur place servent de souvenirs tangibles que les participants peuvent emporter avec eux. Ces souvenirs personnalisés rappellent non seulement les bons moments passés ensemble, mais ils renforcent également le sentiment d’appartenance à l’entreprise. Un photobooth bien intégré dans votre événement peut donc avoir un impact durable sur la motivation des employés.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold text-black mb-6">Amélioration de l’Image de Marque</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Un photobooth bien conçu peut également servir de puissant outil de branding. En personnalisant les arrière-plans et les accessoires avec le logo de votre entreprise, vous pouvez renforcer la reconnaissance de la marque. De plus, lorsque les participants partagent leurs photos sur les réseaux sociaux, ils augmentent la visibilité de votre marque, contribuant ainsi à une meilleure notoriété.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <div className="bg-gradient-to-br from-pink-50 to-yellow-50 p-8 rounded-2xl">
              <h2 className="text-3xl font-bold text-black mb-6">Pourquoi choisir The Pix pour louer un photobooth dans le 11ème arrondissement de Paris ?</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                The Pix est une entreprise reconnue pour la qualité et la fiabilité de ses services. Voici quelques avantages spécifiques à choisir The Pix pour votre photobooth :
              </p>
            </div>
          </section>

          <section className="mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold text-black mb-6">Options Personnalisables</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                The Pix offre une gamme d’options personnalisables pour s’adapter parfaitement à l’ambiance et au thème de votre événement. Que vous souhaitiez des arrière-plans spécifiques, des accessoires uniques ou des cadres photo personnalisés, The Pix peut répondre à vos besoins spécifiques.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <div className="bg-gradient-to-br from-pink-50 to-yellow-50 p-8 rounded-2xl">
              <h2 className="text-3xl font-bold text-black mb-6">Installation et Support Technique</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                L’équipe de The Pix assure une installation rapide et sans tracas de votre photobooth, ainsi qu’un support technique tout au long de votre événement. Cela garantit que vous pouvez vous concentrer sur l’animation de votre événement sans vous soucier des aspects techniques.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold text-black mb-6">Qualité Supérieure</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Les photobooths de The Pix sont équipés de la dernière technologie en matière de photographie, garantissant des images de haute qualité. Cette attention à la qualité fait toute la différence pour des souvenirs durables et mémorables.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <div className="bg-gradient-to-br from-pink-50 to-yellow-50 p-8 rounded-2xl">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Louer un photobooth avec The Pix pour votre fête d’entreprise ou événement à Paris 11ème arrondissement est une décision judicieuse pour dynamiser vos événements. En favorisant l’interaction, en créant des souvenirs personnalisés et en améliorant l’image de marque, un photobooth peut transformer une simple réunion en une expérience mémorable et engageante. Avec les services personnalisés et de haute qualité de The Pix, vous êtes assuré de réussir votre événement et de laisser une impression durable sur vos employés.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Pour plus d’informations ou pour réserver votre photobooth, contactez The Pix dès aujourd’hui et découvrez comment ils peuvent contribuer à la réussite de votre prochain événement.
              </p>
            </div>
          </section>
        </article>
      </div>

      {/* Footer */}
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
          { label: 'Location photobooth Paris 11', onClick: onBack },
        ]}
      />
    </div>
  );
};

export default Paris11Page;

