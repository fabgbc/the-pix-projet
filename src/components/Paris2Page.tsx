import React from 'react';
import {
  ArrowLeft,
  Camera,
  Heart,
  Check,
  Star,
  Award
} from 'lucide-react';
import HomeSectionLink from './HomeSectionLink';
import Footer from './Footer';
import { getArrondissementLinks } from '../utils/arrondissementLinks';

interface Paris2PageProps {
  onBack: () => void;
  onNavigateHome: (id: string) => void;
  onQuoteRequest?: () => void;
  onPhotoboothDetails?: () => void;
  onAIAnimations?: () => void;
  onSEOPage?: () => void;
  onParis1Page?: () => void;
  onParis3Page?: () => void;
  onParis4Page?: () => void;
  onParis5Page?: () => void;
  onParis6Page?: () => void;
  onParis7Page?: () => void;
  onParis8Page?: () => void;
  onParis9Page?: () => void;
}

const Paris2Page: React.FC<Paris2PageProps> = ({ onBack, onNavigateHome, onQuoteRequest, onPhotoboothDetails, onAIAnimations, onSEOPage, onParis1Page, onParis3Page, onParis4Page, onParis5Page, onParis6Page, onParis7Page, onParis8Page, onParis9Page }) => {
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
              <HomeSectionLink label="Événements Privés" targetId="mariages" onNavigate={onNavigateHome} />
              <button 
                onClick={onAIAnimations}
                className="text-gray-700 hover:text-yellow-500 transition-colors font-medium"
              >
                Animations IA
              </button>
              <HomeSectionLink label="Galerie" targetId="galerie" onNavigate={onNavigateHome} />
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
              Photobooth
              <span className="text-yellow-400 relative">
                {' '}Paris 2
                <div className="absolute -bottom-2 left-0 w-full h-3 bg-yellow-400 -z-10"></div>
              </span>
            </h1>
            <h2 className="text-2xl lg:text-3xl font-semibold text-gray-600 mb-8">
              L'incontournable de vos événements
            </h2>
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
                <h2 className="text-3xl font-bold text-black">Un Photobooth Parisien au Cœur des Émotions</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Paris 2, au cœur de l'Île-de-France, incarne à merveille cette harmonie unique entre patrimoine historique et effervescence contemporaine. Entre les passages couverts, témoins silencieux du Paris du XIXe siècle, et l'énergie vibrante du quartier Montorgueil, cet arrondissement respire l'art de vivre à la parisienne.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                C'est dans ce décor que The Pix vous propose de sublimer vos événements avec une location de photobooth pensée pour créer des souvenirs aussi authentiques que ceux que la ville elle-même inspire.
              </p>
              <div className="mt-8">
                <button 
                  onClick={onQuoteRequest}
                  className="bg-yellow-400 text-black px-8 py-4 rounded-full hover:bg-yellow-500 transition-colors font-semibold text-lg"
                >
                  Demander un devis maintenant
                </button>
              </div>
            </div>
          </section>

          {/* Pourquoi opter pour The Pix */}
          <section className="mb-16">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black">Pourquoi Opter pour The Pix ?</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Paris 2, c'est un ballet entre l'agitation des Grands Boulevards et la quiétude des cours secrètes. Un lieu où chaque rue raconte une histoire. Et si vous releviez le défi d'ajouter une touche originale à vos événements, juste ici, entre la Bourse et les galeries marchandes ancestrales ?
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Imaginez une borne photo à la pointe de la technologie, aussi intuitive qu'un sourire entre amis. Chez The Pix, on ne se contente pas de capturer des instants : on saisit les éclats de rire, les regards complices, ces secondes où le temps semble suspendu. Des photos nettes, vibrantes, prêtes à animer votre feed Instagram ou à trôner sur le frigo. Parce qu'un souvenir, ça se vit, mais ça se partage aussi.
              </p>
            </div>
          </section>

          {/* Louer un photobooth en un clic */}
          <section className="mb-16">
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black">Louer un Photobooth à Paris 2 en un Clic !</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Organiser un événement dans le 2e arrondissement, c'est composer avec son rythme trépidant. Alors pourquoi compliquer les choses ? Que ce soit pour un afterwork entre collègues à deux pas de la Bourse ou un anniversaire dans une cour pavée du quartier Montorgueil, notre photobooth s'installe en moins de temps qu'il ne faut pour dire "fromage".
              </p>
              <div className="bg-white p-6 rounded-xl">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Écran tactile, fond personnalisable, ambiance garantie – vos invités n'auront qu'à se laisser guider par leur envie de s'amuser.
                </p>
              </div>
              <div className="mt-6 bg-orange-100 border-l-4 border-orange-400 p-6 rounded-r-xl">
                <p className="text-gray-700 font-medium">
                  Pendant ce temps, vous… Et bien, vous profiterez simplement. C'est ça, la magie The Pix : une logistique invisible pour des émotions, elles, bien visibles.
                </p>
              </div>
            </div>
          </section>

          {/* Les avantages */}
          <section className="mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black">Les Avantages de Notre Photobooth à Paris 2</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-black mb-2">Installation rapide</h3>
                      <p className="text-gray-600">Notre équipe arrive, installe, explique. Aucun câble qui traîne, aucun mode d'emploi compliqué. Le temps que vous accueilliez vos premiers invités, le photobooth est déjà le centre de l'attention.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-black mb-2">Qualité d'image irréprochable</h3>
                      <p className="text-gray-600">Oubliez les photos granuleuses ou les éclairages blafards. Ici, chaque cliché restitue les couleurs avec une fidélité qui fait presque oublier l'écran.</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-black mb-2">Espace dédié pour vos images</h3>
                      <p className="text-gray-600">Un lien unique, sécurisé, accessible même un an plus tard. Parce qu'une soirée, ça s'oublie parfois… Mais pas les photos qui en sont nées.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-black mb-2">Événements professionnels</h3>
                      <p className="text-gray-600">On vous l'accorde, le photobooth n'est pas qu'un gadget pour mariages. En entreprise, il brise la glace mieux qu'un discours. Séminaire, team building, lancement produit – c'est l'outil qui transforme un rendez-vous business en expérience collective.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* L'incontournable */}
          <section className="mb-16">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black">Le Photobooth, l'Incontournable de Vos Événements</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Le phénomène du photobooth n'a rien d'un caprice d'un soir. C'est une évidence : à l'ère du tout-numérique, le besoin de souvenirs tangibles, drôles, un peu décalés, est plus fort que jamais. Et ça, dans l'Île-de-France comme ailleurs, on l'a bien compris.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Que vous soyez dans le 2e arrondissement ou dans le Paris 1 voisin, The Pix s'adapte à votre terrain de jeu.
              </p>
              <div className="bg-white p-6 rounded-xl">
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Et si vous sautiez le pas ? Parce qu'un événement réussi, c'est celui dont on parle encore le lendemain… Et dont on rit en redécouvrant les photos des années plus tard.
                </p>
                <p className="text-gray-700 text-lg font-medium">
                  La spontanéité, ça ne se programme pas. Mais avec un photobooth, ça se provoque.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Final */}
          <section className="mb-16">
            <div className="bg-yellow-50 border border-yellow-200 p-8 rounded-2xl text-center">
              <h2 className="text-3xl font-bold text-black mb-6">
                Prêt à écrire la suite de votre histoire ?
              </h2>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                Réservez votre photobooth – la machine à souvenirs n'attend plus que vous.
              </p>
              <button 
                onClick={onQuoteRequest}
                className="bg-yellow-400 text-black px-10 py-4 rounded-full hover:bg-yellow-500 transition-colors font-semibold text-lg"
              >
                Réserver maintenant
              </button>
            </div>
          </section>
        </article>
      </div>

      {/* Footer */}
      <Footer
        onSEOPage={onSEOPage}
        onPhotoboothDetails={onPhotoboothDetails}
        arrondissementLinks={getArrondissementLinks('paris2', {
          onParis1Page,
          onParis3Page,
          onParis4Page,
          onParis5Page,
          onParis6Page,
          onParis7Page,
          onParis8Page,
          onParis9Page
        })}
      />
    </div>
  );
};

export default Paris2Page;