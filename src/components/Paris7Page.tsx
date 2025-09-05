import React from 'react';
import {
  ArrowLeft,
  Camera,
  Heart,
  Sparkles,
  Check,
  Star,
  Award,
  Share2,
  Eye,
  Settings,
  Monitor
} from 'lucide-react';
import HomeSectionLink from './HomeSectionLink';
import Footer from './Footer';

interface Paris7PageProps {
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
  onParis8Page?: () => void;
  onParis9Page?: () => void;
}

const Paris7Page: React.FC<Paris7PageProps> = ({ onBack, onQuoteRequest, onPhotoboothDetails, onAIAnimations, onSEOPage, onParis1Page, onParis2Page, onParis3Page, onParis4Page, onParis5Page, onParis6Page, onParis8Page, onParis9Page }) => {
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
              Location un photobooth
              <span className="text-yellow-400 relative">
                {' '}Paris 7
                <div className="absolute -bottom-2 left-0 w-full h-3 bg-yellow-400 -z-10"></div>
              </span>
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
                <h2 className="text-3xl font-bold text-black">Location un photobooth Paris 7</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Avec son architecture haussmannienne majestueuse et ses avenues prestigieuses comme les Champs-Élysées ou l'avenue de La Bourdonnais, le 7ème arrondissement de Paris offre un décor somptueux pour vos événements privés ou professionnels. C'est dans ce cadre unique que The Pix vous propose de louer une borne photo à selfie pour capturer vos moments les plus mémorables et créer des souvenirs impérissables.
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

          {/* Louer une borne photobooth */}
          <section className="mb-16">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black">Louer une borne photobooth : l'animation tendance en Île-de-France</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                De plus en plus d'hôtes choisissent de louer une borne photobooth pour des événements tels que des mariages, anniversaires, lancements de produits, soirées d'entreprise, séminaires, cocktails, et plus encore. Et pour cause : la borne photobooth est une animation interactive qui permet à vos invités de se prendre en photo de façon ludique et de repartir avec une photo numérique en souvenir original. C'est devenu incontournable pour tout événement réussi, aussi bien privé que professionnel.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Que vous souhaitiez organiser une réception privée au Jardin du Luxembourg ou un événement professionnel à Saint-Sulpice, louer une borne photo selfie est idéal pour apporter une touche d'originalité et d'interactivité à votre rassemblement. Vos invités pourront se prendre en photo, seul ou à plusieurs, et repartir avec leurs photos numériques souvenirs grâce à notre borne photo selfie dernier cri. De quoi créer instantanément une ambiance joyeuse et conviviale !
              </p>
              <div className="mt-6 bg-white p-6 rounded-xl">
                <h3 className="font-bold text-black mb-3 text-xl">location photobooth paris 7</h3>
                <p className="text-gray-700">
                  Vos invités auront la possibilité de se prendre en photo seul ou en groupe dans notre cabine photo dernier cri de type borne photo selfie, de personnaliser leurs clichés grâce aux nombreux filtres et accessoires rigolos, et de repartir immédiatement avec leurs photos souvenirs imprimées en impression instantanée. De quoi créer instantanément une ambiance joyeuse et festive lors de votre réception !
                </p>
              </div>
            </div>
          </section>

          {/* Une borne photo intégrant les dernières technologies */}
          <section className="mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                  <Monitor className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black">Une borne photo intégrant les dernières technologies</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Chez The Pix, découvrez nos bornes photos dotées d'un large éventail de fonctionnalités à la pointe de la technologie :
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Appareil photo reflex professionnel pour des clichés haute définition</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Écran tactile dernière génération pour personnaliser facilement vos photos</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Imprimante intégrée pour un tirage instantané de vos photos souvenirs en impression instantanée</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Connexion Wi-Fi performante pour partager vos photos sur les réseaux sociaux dans notre galerie photo en ligne</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Accessoires drôles et déguisements pour donner libre cours à votre créativité</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Fonds d'écran personnalisés pour un rendu professionnel</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-xl">
                <p className="text-gray-700">
                  Grâce à ces fonctionnalités high-tech, notre borne photo garantit une animation mémorable lors de votre événement. Vos invités repartiront avec des souvenirs originaux pour prolonger la magie de votre réception à Paris 7.
                </p>
              </div>
            </div>
          </section>

          {/* Réservez votre borne photo */}
          <section className="mb-16">
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black">Réservez votre borne photo en quelques clics</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Grâce à notre site internet disponible 24/7, louer un photobooth à Paris 7 est d'une simplicité enfantine. Il vous suffit de sélectionner la date, le lieu de votre événement et les options de personnalisation de votre choix. Notre équipe gère ensuite l'ensemble de la logistique A à Z pour vous : transport, installation sur site, maintenance pendant la soirée et démontage rapide.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Le jour J, vous n'avez plus qu'à vous concentrer pleinement sur vos convives et profiter de chaque instant, pendant que nous nous occupons entièrement de la borne photo. Notre équipe reste également à votre écoute pour répondre à toutes vos questions en amont comme pendant l'événement.
              </p>
            </div>
          </section>

          {/* Partagez vos meilleurs moments */}
          <section className="mb-16">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                  <Share2 className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black">Partagez vos meilleurs moments sur les réseaux</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                La borne photo ou borne à selfie permet à vos invités de partager leurs photos les plus drôles et décalées sur les réseaux sociaux, donnant une belle visibilité à votre événement bien au-delà de Paris 7. C'est aussi une façon amusante d'immortaliser les temps forts de votre soirée. Vous pourrez même créer un hashtag dédié pour rassembler toutes les photos dans notre galerie photo !
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Quoi de mieux que des photos spontanées prises pendant la soirée pour donner envie à ceux qui n'ont pas pu venir de participer la prochaine fois ? Grâce à la borne photo, vous assurerez un buzz digital autour de votre événement.
              </p>
            </div>
          </section>

          {/* Une borne photo 100% personnalisée */}
          <section className="mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black">Une borne photo 100 % personnalisée selon vos envies</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Spécialistes des événements sur-mesure, nous personnalisons votre borne photo selon vos envies : choix des couleurs, intégration de votre logo ou nom, personnalisation des accessoires… Tout est possible pour une intégration parfaite à l'univers de votre événement !
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Vous souhaitez un habillage aux couleurs de votre entreprise ? Un fond d'écran estampillé à votre effigie ? Des photos souvenirs avec votre logo ? Grâce à The Pix, donnez vie à toutes vos idées pour créer une borne photo à votre image.
              </p>
            </div>
          </section>

          {/* Une équipe dédiée */}
          <section className="mb-16">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black">Une équipe dédiée pour un service 5 étoiles</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Chez The Pix, vous bénéficiez d'un service 5 étoiles de la première prise de contact à la fin de votre événement :
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl">
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Interlocuteur dédié pour répondre à toutes vos questions</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Conseils personnalisés pour choisir le photobooth idéal</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Livraison et installation clés en main</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl">
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Assistance technique pendant toute la durée de l'événement</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Démontage rapide et restitution de la salle en l'état</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 bg-white p-6 rounded-xl">
                <p className="text-gray-700">
                  Grâce à The Pix, profitez d'un service de location de photobooth ou borne photo haut de gamme pour un résultat à la hauteur de vos attentes, aussi bien pour un usage privé que professionnel. Contactez-nous dès maintenant pour louer une borne photo d'exception facile à utiliser à Paris 7 !
                </p>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-16">
            <div className="bg-yellow-50 border border-yellow-200 p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center">
                  <Star className="w-6 h-6 text-black" />
                </div>
                <h2 className="text-3xl font-bold text-black">Créez des souvenirs mémorables</h2>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <h3 className="font-bold text-black mb-4 text-xl">Prêt à transformer votre événement en une expérience inoubliable ?</h3>
                <p className="text-gray-700 mb-6">
                  Réservez dès maintenant votre borne photo dans le 7ème arrondissement de Paris et créez des souvenirs exceptionnels pour vos invités.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={onQuoteRequest}
                    className="bg-yellow-400 text-black px-8 py-4 rounded-full hover:bg-yellow-500 transition-colors font-semibold"
                  >
                    Demander un devis
                  </button>
                </div>
              </div>
            </div>
          </section>
        </article>
      </div>

      {/* Footer */}
      <Footer
        onSEOPage={onSEOPage}
        onPhotoboothDetails={onPhotoboothDetails}
        arrondissementLinks={[
          { label: 'Location photobooth Paris 1', onClick: onParis1Page },
          { label: 'Location photobooth Paris 2', onClick: onParis2Page },
          { label: 'Location photobooth Paris 3', onClick: onParis3Page },
          { label: 'Location photobooth Paris 4', onClick: onParis4Page },
          { label: 'Location photobooth Paris 5', onClick: onParis5Page },
          { label: 'Location photobooth Paris 6', onClick: onParis6Page },
          { label: 'Location photobooth Paris 7', onClick: onBack },
          { label: 'Location photobooth Paris 8', onClick: onParis8Page },
          { label: 'Location photobooth Paris 9', onClick: onParis9Page },
        ]}
      />
    </div>
  );
};

export default Paris7Page;