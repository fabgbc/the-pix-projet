import React from 'react';
import {
  ArrowLeft,
  Camera,
  Heart,
  Sparkles,
  Share2,
  Settings,
  Eye,
  Award,
  Star,
  Monitor,
} from 'lucide-react';
import HomeSectionLink from './HomeSectionLink';
import Footer from './Footer';

interface Paris9PageProps {
  onBack: () => void;
  onQuoteRequest?: () => void;
  onPhotoboothDetails?: () => void;
  onAIAnimations?: () => void;
  onSEOPage?: () => void;
  arrondissementLinks: { label: string; onClick: () => void }[];
}

const Paris9Page: React.FC<Paris9PageProps> = ({
  onBack,
  onQuoteRequest,
  onPhotoboothDetails,
  onAIAnimations,
  onSEOPage, arrondissementLinks }) => {
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
              <span className="text-yellow-400 relative">{' '}9ème arrondissement de Paris<div className="absolute -bottom-2 left-0 w-full h-3 bg-yellow-400 -z-10"></div></span>
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
                <h2 className="text-3xl font-bold text-black">Location photobooth Paris 9</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Avec ses grandes avenues haussmanniennes et ses passages couverts secrets, le 9ème arrondissement de Paris est un terrain de jeu idéal pour tout type d’événement privé ou professionnel. Qu’il s’agisse d’un lancement de produit au cœur du Quartier de l’Opéra ou d’une réception intimiste dans les ruelles de la Nouvelle Athènes, cet arrondissement vibrant offre un cadre propice pour créer des moments inoubliables. C’est dans ce décor vivant que The Pix vous propose de louer un photobooth dernier cri pour sublimer vos rassemblements.
              </p>
            </div>
          </section>

          {/* Tendance */}
          <section className="mb-16">
            <div className="bg-gradient-to-br from-pink-50 to-yellow-50 p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black">Le photobooth : la tendance du moment à Paris</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Ces dernières années, de plus en plus d’organisateurs optent pour la location d’un photobooth lors de leurs événements, car c’est devenu une animation incontournable, plébiscitée autant par les jeunes que par les moins jeunes. Qu’il s’agisse de mariages romantiques Place Saint-Georges, de soirées d’entreprise au Palais Garnier ou encore d’anniversaires festifs aux abords de Pigalle, le photobooth apporte une touche d’originalité et de convivialité à tout type de réception, dans une ambiance décontractée.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Vos invités pourront se prendre en photo dans notre cabine photo dernier cri, puis repartir instantanément avec leurs photos souvenirs. L’occasion rêvée de créer une ambiance festive lors de votre événement à Paris 9 ! Le photobooth renforce les liens et donne lieu à des moments de partage spontanés entre vos convives.
              </p>
            </div>
          </section>

          {/* Technologies */}
          <section className="mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black">Une cabine photo intégrant technologies de pointe et design moderne</h2>
              </div>
              <ul className="text-gray-700 text-lg leading-relaxed list-disc pl-6 space-y-2 mb-6">
                <li>Appareil photo professionnel pour des clichés haute définition</li>
                <li>Écran tactile dernier cri pour personnaliser facilement vos images</li>
                <li>Impression instantanée de vos photos souvenirs</li>
                <li>Partage immédiat sur les réseaux sociaux</li>
                <li>Grand choix d’accessoires drôles et de déguisements</li>
                <li>Fonds d’écran personnalisés pour sublimer vos photos</li>
              </ul>
              <p className="text-gray-700 text-lg leading-relaxed">
                Nos photobooths garantissent une animation mémorable et décontractée lors de vos événements à Paris 9 pour le plus grand bonheur de vos convives. Vos invités repartiront avec des photos uniques et des vidéos souvenirs pleines de surprises !
              </p>
            </div>
          </section>

          {/* Réservation */}
          <section className="mb-16">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center">
                  <Monitor className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black">Réservez votre photobooth en quelques clics</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Grâce à notre site web accessible 24h/24 et 7j/7, réserver un photobooth à Paris se fait en toute simplicité. Indiquez simplement la date, le lieu de votre réception et vos options préférées. Notre équipe gère ensuite l’ensemble de la logistique de A à Z afin que vous puissiez vous concentrer pleinement sur l’accueil de vos invités.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mt-6">
                Le jour J, profitez à 100% de chaque instant pendant que nous nous occupons entièrement du photobooth. Notre personnel reste également à votre écoute pour répondre à toutes vos questions en amont comme pendant l’événement.
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
                <h2 className="text-3xl font-bold text-black">Partagez vos meilleurs moments sur les réseaux sociaux</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                La cabine photo permet à vos invités de partager leurs plus belles photos sur les réseaux sociaux et de donner une visibilité accrue à votre événement au-delà de Paris 9, notamment via la création d’un hashtag dédié. C’est aussi une façon originale de faire vivre vos meilleurs moments ensemble et d’entretenir le souvenir de votre soirée après celle-ci !
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
                <h2 className="text-3xl font-bold text-black">Un accessoire tendance pour une image de marque branchée</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Louer un photobooth lors de vos événements à Paris, c’est l’assurance de marquer les esprits et d’apporter une touche d’originalité à votre image. Grâce à la personnalisation de la cabine et des accessoires, le photobooth reflète parfaitement l’esprit de votre soirée et devient le prolongement naturel de votre univers pour une intégration harmonieuse dans l’ambiance de votre réception.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Vos invités sont également susceptibles de partager leurs photos souvenirs insolites sur les réseaux sociaux, contribuant ainsi à accroître votre notoriété de manière positive et durable, notamment auprès des jeunes générations friandes de ce genre d’animations !
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
                <h2 className="text-3xl font-bold text-black">Une équipe d’experts à votre service</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Chez The Pix, vous bénéficiez de l’accompagnement sur mesure d’une équipe d’experts passionnés, de la prise de contact à la fin de votre réception :
              </p>
              <ul className="text-gray-700 text-lg leading-relaxed list-disc pl-6 space-y-2">
                <li>Interlocuteur dédié pour répondre à toutes vos questions</li>
                <li>Conseils avisés pour sélectionner le photobooth idéal</li>
                <li>Livraison et installation clés en main</li>
                <li>Assistance technique de pointe durant toute la soirée</li>
                <li>Démontage discret et remise en état des lieux</li>
              </ul>
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
                  Pour louer un photobooth innovant et tendance au cœur de Paris, ne cherchez plus !
                </h3>
                <p className="text-gray-700 mb-6">
                  Grâce à notre service sur mesure, nous créons avec vous les conditions d’une expérience fun et interactive pour vos convives. Contactez-nous vite !
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
        arrondissementLinks={arrondissementLinks}
      />
    </div>
  );
};

export default Paris9Page;

