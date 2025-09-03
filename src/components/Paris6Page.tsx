import React from 'react';
import {
  ArrowLeft,
  Camera,
  Users,
  Heart,
  Sparkles,
  Check,
  Star,
  Award,
  Share2,
  Settings,
  Smartphone,
  Monitor
} from 'lucide-react';
import HomeSectionLink from './HomeSectionLink';
import Footer from './Footer';

interface Paris6PageProps {
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
  onParis7Page?: () => void;
}

const Paris6Page: React.FC<Paris6PageProps> = ({ onBack, onQuoteRequest, onPhotoboothDetails, onAIAnimations, onSEOPage, onParis1Page, onParis2Page, onParis3Page, onParis4Page, onParis5Page, onParis7Page }) => {
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
              Louer un Photobooth
              <span className="text-yellow-400 relative">
                {' '}Paris 6
                <div className="absolute -bottom-2 left-0 w-full h-3 bg-yellow-400 -z-10"></div>
              </span>
            </h1>
            <h2 className="text-2xl lg:text-3xl font-semibold text-gray-600 mb-8">
              Immortalisez vos événements avec originalité
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
                <h2 className="text-3xl font-bold text-black">Photobooth Paris 6 : Immortalisez vos événements avec originalité</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Niché au cœur du Quartier Latin, ce quartier historique dévoile bien plus qu'un simple décor parisien. Entre ses murs chargés d'histoire et son effervescence contemporaine, il forme l'écrin idéal pour vos moments spéciaux. Chez « The Pix », nous capturons cette magie éphémère grâce à nos solutions de location de photobooth, bien plus qu'un service – une expérience à vivre.
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

          {/* Photobooth à Paris */}
          <section className="mb-16">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black">Photobooth à Paris : l'alliance parfaite entre innovation et authenticité</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Imaginez un dispositif qui transforme chaque sourire en œuvre d'art. Nos photobooths nouvelle génération apportent une touche de modernité discrète à vos événements professionnels. Leur secret ? Un écran tactile intuitif qui rend la photographie accessible à tous, tout en maintenant une qualité d'image irréprochable. Vos collaborateurs ou invités repartent avec bien plus qu'un selfie : la trace tangible d'un moment partagé.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Choisir notre animation photobooth, c'est opter pour une attraction qui captera tous les regards. Mariages élégants, séminaires dynamiques ou lancements produits – chaque occasion mérite son livre d'images vivant. La particularité ? Ces clichés spontanés révèlent souvent plus d'émotions que les poses étudiées.
              </p>
            </div>
          </section>

          {/* Animation tendance */}
          <section className="mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black">Louer une borne photobooth : l'animation tendance en Île-de-France</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                De plus en plus d'hôtes choisissent de louer une borne photobooth pour des événements tels que des mariages, anniversaires, lancements de produits, soirées d'entreprise, séminaires, cocktails, et plus encore. Et pour cause : la borne photobooth est une animation interactive qui permet à vos invités de se prendre en photo de façon ludique et de repartir avec une photo numérique en souvenir original. C'est devenu incontournable pour tout événement réussi, aussi bien privé que professionnel.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Que vous souhaitiez organiser une réception privée au Jardin du Luxembourg ou un événement professionnel à Saint-Sulpice, louer une borne photo selfie est idéal pour apporter une touche d'originalité et d'interactivité à votre rassemblement. Vos invités pourront se prendre en photo, seul ou à plusieurs, et repartir avec leurs photos numériques souvenirs grâce à notre borne photo selfie dernier cri. De quoi créer instantanément une ambiance joyeuse et conviviale !
              </p>
            </div>
          </section>

          {/* Borne photo équipée */}
          <section className="mb-16">
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                  <Monitor className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black">Une borne photo dotée d'un écran tactile et d'un appareil photo reflex</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Chez The Pix, nous proposons des bornes photo selfie équipées d'un écran tactile dernière génération et d'un appareil photo reflex professionnel permettant :
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl">
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Des photos haute définition pour immortaliser chaque détail</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">La personnalisation des images avec filtres, cadres, emojis…</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">L'impression instantanée de vos photos numériques souvenirs</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl">
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Le partage immédiat sur les réseaux sociaux et dans notre galerie photo en ligne</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Un large choix d'accessoires drôles pour une ambiance décontractée</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 bg-white p-6 rounded-xl">
                <p className="text-gray-700">
                  Grâce à ces options high-tech, nos bornes photo selfie garantissent une animation photobooth mémorable lors de votre événement. Vos invités pourront prendre des photos délirantes et repartir avec leur photo numérique personnalisée en souvenir pour prolonger la magie de votre réception.
                </p>
              </div>
            </div>
          </section>

          {/* Réseaux sociaux */}
          <section className="mb-16">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                  <Share2 className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black">Réseaux sociaux : donnez une résonance à vos événements</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Dans l'ère du partage instantané, notre photobooth devient votre meilleur ambassadeur digital. En quelques secondes, les participants diffusent leurs photos personnalisables sur les réseaux sociaux, créant un buzz naturel autour de votre manifestation. Une vitrine vivante qui traverse les frontières du 6ème arrondissement jusqu'aux quatre coins de l'Île-de-France.
              </p>
            </div>
          </section>

          {/* Réservation facile */}
          <section className="mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black">Réservez facilement votre borne photo selfie à Paris</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Grâce à notre site internet ergonomique, disponible 24h/24 et 7j/7, louer une borne photo selfie à Paris est très simple. Il vous suffit de choisir la date, le lieu de votre événement, les options de personnalisation, et nous gérons toute la logistique de A à Z : livraison, installation, maintenance durant la soirée et démontage. Vous n'avez qu'à profiter pleinement de vos invités ! Notre équipe est également disponible en permanence pour répondre à toutes vos questions.
              </p>
            </div>
          </section>

          {/* Partage sur réseaux */}
          <section className="mb-16">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black">Partagez vos meilleurs moments sur les réseaux</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                La borne photo selfie permet à vos invités de partager leurs photos les plus drôles et décalées sur les réseaux sociaux et dans notre galerie photo, donnant ainsi une belle visibilité à votre événement. C'est aussi une façon amusante d'immortaliser vos meilleurs moments entre amis ou collègues. Vous pourrez même créer un hashtag dédié pour rassembler toutes les photos !
              </p>
            </div>
          </section>

          {/* Service sur-mesure */}
          <section className="mb-16">
            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black">Un service de location de borne photo selfie sur-mesure</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Chaque événement est unique, c'est pourquoi notre service de location de borne photo s'adapte à vos envies en termes de design, d'habillage, d'accessoires… Nos experts se feront un plaisir de répondre à toutes vos demandes pour une intégration parfaite à votre réception, que vous soyez à Saint-Denis ou dans le 6ème arrondissement.
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
                <h2 className="text-3xl font-bold text-black">Créez des souvenirs mémorables</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Grâce à The Pix, louez une borne photo selfie à Paris 6 clés en main et créez des souvenirs numériques mémorables pour vous et vos invités ! Contactez-nous dès maintenant pour votre prochain événement et nous transformerons votre réception en moment inoubliable.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Avec The Pix, optez pour un service de location de borne photo selfie de qualité, basé sur l'écoute et la flexibilité. Notre objectif : vous garantir une expérience optimale pour sublimer votre événement à Paris 6 !
              </p>
              <div className="bg-white p-6 rounded-xl">
                <h3 className="font-bold text-black mb-4 text-xl">Prêt à transformer votre événement en une expérience inoubliable ?</h3>
                <p className="text-gray-700 mb-6">
                  Réservez dès maintenant votre borne photo selfie dans le 6ème arrondissement de Paris et créez des souvenirs exceptionnels pour vos invités.
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
          { label: 'Location photobooth Paris 6', onClick: onBack },
          { label: 'Location photobooth Paris 7', onClick: onParis7Page },
        ]}
      />
    </div>
  );
};

export default Paris6Page;