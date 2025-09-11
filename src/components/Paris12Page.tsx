import React from 'react';
import {
  ArrowLeft,
  Camera,
  Heart,
  Users,
  MapPin,
  Award,
  Palette,
} from 'lucide-react';
import HomeSectionLink from './HomeSectionLink';
import Footer from './Footer';

interface Paris12PageProps {
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
}

const Paris12Page: React.FC<Paris12PageProps> = ({
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
              <span className="text-yellow-400 relative">{' '}12ème arrondissement de Paris<div className="absolute -bottom-2 left-0 w-full h-3 bg-yellow-400 -z-10"></div></span>
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
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-black" />
                </div>
                <h2 className="text-3xl font-bold text-black">Louer un photobooth Paris 12ème arrondissement avec The Pix</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Organiser un événement d’entreprise mémorable et engageant à Paris nécessite une attention particulière aux détails et une volonté d’innover. Un photobooth, par exemple, peut transformer un simple rassemblement en une expérience inoubliable. The Pix, avec ses services de location de photobooth dans le 12ème arrondissement de Paris, est une solution idéale pour ceux qui souhaitent dynamiser leurs événements d’entreprise.
              </p>
            </div>
          </section>

          {/* Pourquoi choisir un photobooth */}
          <section className="mb-16">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black">Pourquoi choisir un photobooth ?</h2>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Camera className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-black mb-2">Créer des souvenirs durables</h3>
                    <p className="text-gray-600">
                      Les participants peuvent emporter des photos imprimées, ce qui permet de prolonger l’expérience de l’événement bien après sa fin. Ces souvenirs photographiques sont souvent partagés sur les réseaux sociaux, augmentant ainsi la visibilité de l’événement.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-black mb-2">Favoriser la cohésion d’équipe</h3>
                    <p className="text-gray-600">
                      Prendre des photos ensemble peut briser la glace et renforcer les liens entre les membres de l’équipe. C’est une activité qui s’intègre parfaitement dans des événements de team building ou des séminaires d’entreprise.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Lieux emblématiques */}
          <section className="mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-black" />
                </div>
                <h2 className="text-3xl font-bold text-black">Les lieux emblématiques du 12ème arrondissement</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-black mb-2">Viaduc des Arts</h3>
                  <p className="text-gray-700">Le Viaduc des Arts est un lieu emblématique qui peut servir de cadre parfait pour votre événement. Avec ses arcades élégantes et son ambiance artistique, c’est un endroit qui inspire créativité et sophistication. Installer un photobooth ici peut ajouter une touche unique à votre événement.</p>
                </div>
                <div>
                  <h3 className="font-bold text-black mb-2">Parc de Bercy</h3>
                  <p className="text-gray-700">Pour ceux qui préfèrent un cadre plus naturel, le Parc de Bercy offre une oasis de verdure en plein cœur de Paris. C’est un lieu idéal pour des événements en plein air, et un photobooth peut capturer la beauté du cadre tout en fournissant une activité amusante pour les participants.</p>
                </div>
                <div>
                  <h3 className="font-bold text-black mb-2">Opéra Bastille</h3>
                  <p className="text-gray-700">L’Opéra Bastille, avec son architecture moderne et son atmosphère culturelle, est un autre lieu prestigieux pour organiser un événement d’entreprise. Un photobooth installé dans ce cadre peut offrir des arrière-plans époustouflants et ajouter une touche de glamour à votre événement.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Pourquoi choisir The Pix */}
          <section className="mb-16">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-black" />
                </div>
                <h2 className="text-3xl font-bold text-black">Pourquoi choisir The Pix ?</h2>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-black mb-2">Expertise et qualité</h3>
                    <p className="text-gray-600">The Pix se distingue par son expertise et son engagement envers la qualité. Leurs photobooths sont équipés de technologies de pointe, garantissant des photos de haute qualité. De plus, leur équipe professionnelle s’assure que tout se déroule sans accroc.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Palette className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-black mb-2">Personnalisation</h3>
                    <p className="text-gray-600">Que ce soit par des cadres personnalisés, des accessoires thématiques ou des arrière-plans spécifiques, The Pix peut adapter ses services pour correspondre parfaitement à votre vision.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">Louer un photobooth à Paris dans le 12ème arrondissement avec The Pix est une option innovante et efficace pour dynamiser vos événements d’entreprise. Que ce soit au Viaduc des Arts, au Parc de Bercy, ou à l’Opéra Bastille, un photobooth peut non seulement créer des souvenirs durables mais aussi renforcer la cohésion d’équipe. Avec l’expertise et les options de personnalisation offertes par The Pix, vous êtes assuré de faire de votre événement un succès retentissant.</p>
              <p className="text-gray-700 text-lg leading-relaxed">Pour plus d’informations ou pour réserver votre photobooth, contactez The Pix dès aujourd’hui.</p>
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
          { label: 'Location photobooth Paris 11', onClick: onParis11Page || (() => {}) },
          { label: 'Location photobooth Paris 12', onClick: onBack },
        ]}
      />
    </div>
  );
};

export default Paris12Page;

