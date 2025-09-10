import React from 'react';
import {
  ArrowLeft,
  Camera,
  Heart,
  Sparkles,
  Check,
  Star,
  Share2,
  Settings,
  Eye,
  Award,
  Monitor
} from 'lucide-react';
import HomeSectionLink from './HomeSectionLink';
import Footer from './Footer';

interface Paris8PageProps {
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
  onParis9Page?: () => void;
}

const Paris8Page: React.FC<Paris8PageProps> = ({
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
  onParis9Page,
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
              <span className="text-yellow-400 relative">{' '}8ème arrondissement de Paris<div className="absolute -bottom-2 left-0 w-full h-3 bg-yellow-400 -z-10"></div></span>
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
                <h2 className="text-3xl font-bold text-black">Location photobooth Paris 8</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Avec ses avenues prestigieuses et ses lieux mythiques comme les Champs-Élysées,
                l'Arc de Triomphe ou encore la célèbre Place de la Concorde, le 8ème arrondissement
                de Paris constitue un écrin de choix pour des événements d'exception. C'est dans ce
                décor grandiose que The Pix vous propose de louer un photobooth pour sublimer vos
                événements privés ou professionnels.
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

          {/* Photobooth tendance */}
          <section className="mb-16">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black">Le photobooth : l'animation tendance dans la capitale</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                De plus en plus d'hôtes choisissent de louer un photobooth ou une cabine photo pour
                leurs événements, et ce n'est pas un hasard ! Qu'il s'agisse d'un mariage sur la
                luxueuse Avenue Montaigne, d'un cocktail professionnel au pied de l'Arc de Triomphe
                ou encore d'une soirée étudiante près des Champs-Élysées, le photobooth apporte une
                touche d'originalité et de convivialité à tout type de rassemblement.
              </p>
              <div className="mt-6 bg-white p-6 rounded-xl">
                <h3 className="font-bold text-black mb-3 text-xl">location photobooth paris 8</h3>
                <p className="text-gray-700">
                  Vos invités pourront se prendre en photo et repartir avec leurs photos numériques
                  souvenirs grâce à notre cabine photo dernière génération. De quoi créer
                  instantanément une ambiance joyeuse et festive lors de votre réception à Paris 8 !
                  Le photobooth est d'ailleurs devenu un incontournable des événements réussis,
                  apprécié autant des jeunes que des moins jeunes.
                </p>
              </div>
            </div>
          </section>

          {/* Technologies */}
          <section className="mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                  <Monitor className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black">Une cabine photo dotée des dernières technologies</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Nos bornes selfie intègrent des équipements haut de gamme pour une expérience optimale :
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Appareils photo reflex professionnels</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Écrans tactiles HD</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Impression instantanée des photos</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Partage immédiat sur les réseaux</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Grand choix d'accessoires drôles</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Personnalisation des fonds et de l'habillage</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mt-6">
                Grâce à ces technologies innovantes, notre photobooth garantit une animation mémorable
                lors de vos événements. Vos invités repartiront avec des photos personnalisées, à la
                fois amusantes et sophistiquées, dans la pure tradition parisienne !
              </p>
            </div>
          </section>

          {/* Réservation */}
          <section className="mb-16">
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black">Réservez votre photobooth en quelques clics</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Grâce à notre site web accessible 7j/7 et 24h/24, réserver un photobooth à Paris se
                fait en toute simplicité. Indiquez la date, le lieu de votre événement et vos options
                préférées, et nous nous chargeons du reste ! Nous gérons toute la logistique de A à Z :
                transport du matériel, installation sur site, maintenance pendant la soirée, puis
                démontage. Le jour J, vous pouvez ainsi pleinement profiter de vos convives !
              </p>
              <p className="mt-4 text-gray-700">
                À lire : <a href="#" className="text-yellow-500 hover:underline">Animer votre soirée d'entreprise avec un photobooth</a>
              </p>
            </div>
          </section>

          {/* Partage */}
          <section className="mb-16">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                  <Share2 className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black">Partagez vos moments forts</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                La cabine photo permet à vos invités de partager leurs plus belles photos sur les réseaux
                sociaux et de donner une vitrine à votre événement bien au-delà de Paris 8. Vous pouvez
                également créer un hashtag dédié pour rassembler toutes les photos souvenirs et faire
                vivre les temps forts de votre soirée, même une fois celle-ci terminée !
              </p>
            </div>
          </section>

          {/* Image de marque */}
          <section className="mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black">Un accessoire tendance pour votre image</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Louer un photobooth lors de vos événements à Paris, c'est l'assurance de marquer les esprits
                et d'apporter une touche d'originalité à votre image. Grâce à la personnalisation sur mesure
                (habillage, accessoires, tirages photos), le photobooth devient même le reflet de votre univers
                pour une intégration parfaite dans le décor de votre soirée à thème !
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Et si vos convives repartent avec des photos souvenirs pleines de folie et, en prime, des
                goodies estampillés à votre effigie, soyez sûrs qu'ils ne sont pas prêts de vous oublier !
                Le photobooth contribue ainsi largement à votre notoriété, bien au-delà de votre soirée.
              </p>
            </div>
          </section>

          {/* Équipe */}
          <section className="mb-16">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black">Une équipe d'experts à votre écoute</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Chez The Pix, vous bénéficiez de l'accompagnement sur mesure d'une équipe d'experts de A à Z
                pour vous aider à louer et installer votre photobooth facilement.
              </p>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-16">
            <div className="bg-yellow-50 border border-yellow-200 p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center">
                  <Star className="w-6 h-6 text-black" />
                </div>
                <h2 className="text-3xl font-bold text-black">Prêt à faire sourire vos invités ?</h2>
              </div>
                <div className="bg-white p-6 rounded-xl">
                  <h3 className="font-bold text-black mb-4 text-xl">
                    Pour louer un photobooth innovant et tendance au cœur de Paris, rendez-vous sur ThePix.fr !
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Notre service de location sur mesure répondra à toutes vos attentes. Réservez dès maintenant votre
                    photobooth à Paris 8 et faites de votre événement un moment inoubliable. Alors à vos cabines... prêts ?
                    Souriez !
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
          { label: 'Location photobooth Paris 7', onClick: onParis7Page },
          { label: 'Location photobooth Paris 8', onClick: onBack },
          { label: 'Location photobooth Paris 9', onClick: onParis9Page },
        ]}
      />
    </div>
  );
};

export default Paris8Page;
