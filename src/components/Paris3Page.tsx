import React from 'react';
import { 
  ArrowLeft, 
  Camera, 
  MapPin,
  Users,
  Building,
  Heart,
  Sparkles,
  Check,
  Star,
  Award,
  Zap,
  Share2,
  Eye,
  ChevronRight,
  Shield,
  Clock,
  Settings,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Linkedin
} from 'lucide-react';

interface Paris3PageProps {
  onBack: () => void;
  onQuoteRequest?: () => void;
  onPhotoboothDetails?: () => void;
  onAIAnimations?: () => void;
  onSEOPage?: () => void;
  onParis1Page?: () => void;
  onParis2Page?: () => void;
  onParis4Page?: () => void;
  onParis5Page?: () => void;
  onParis6Page?: () => void;
  onParis7Page?: () => void;
}

const Paris3Page: React.FC<Paris3PageProps> = ({ onBack, onQuoteRequest, onPhotoboothDetails, onAIAnimations, onSEOPage, onParis1Page, onParis2Page, onParis4Page, onParis5Page, onParis6Page, onParis7Page }) => {
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
              <a href="#mariages" className="text-gray-700 hover:text-yellow-500 transition-colors font-medium">Événements Privés</a>
              <button 
                onClick={onAIAnimations}
                className="text-gray-700 hover:text-yellow-500 transition-colors font-medium"
              >
                Animations IA
              </button>
              <a href="#galerie" className="text-gray-700 hover:text-yellow-500 transition-colors font-medium">Galerie</a>
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
                {' '}Paris 3
                <div className="absolute -bottom-2 left-0 w-full h-3 bg-yellow-400 -z-10"></div>
              </span>
            </h1>
            <h2 className="text-2xl lg:text-3xl font-semibold text-gray-600 mb-8">
              Immortalisez vos événements
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
                <h2 className="text-3xl font-bold text-black">Photobooth Paris 3 : Immortalisez vos événements</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Imaginez Paris, la ville lumière, où chaque pierre du Marais murmure des siècles d'histoire, où la Place de la République devient le carrefour des rencontres inattendues, et où la Rue de Bretagne dévoile des trésors d'art contemporain à ciel ouvert. Dans le 3ème arrondissement, l'âme bohème des cours cachées dialogue avec l'énergie créative des concept-stores.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                C'est ici, entre passé et présent, que vos événements méritent d'être transcendés. Plongez dans l'expérience avec nos photobooths, bien plus que des appareils : des complices de mémoire, ajustés sur mesure à votre univers.
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

          {/* Le Photobooth Paris 3 Revisité */}
          <section className="mb-16">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black">Le Photobooth Paris 3 Revisité</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Pour une location de photobooth à Paris, The Pix incarne l'adresse à retenir. Oubliez les bornes photo impersonnelles : nos cabines sont une invitation à capturer l'âme vibrante du Paris historique, des arcades du Marais aux échoppes gourmandes de la Rue de Bretagne. L'authenticité, sans les clichés.
              </p>
              <div className="bg-white p-6 rounded-xl">
                <h3 className="font-bold text-black mb-3 text-xl">location photobooth paris 3</h3>
                <p className="text-gray-700">
                  Notre technologie haut de gamme épouse naturellement le rythme du quartier. Elle saisit les éclats de joie près du Canal Saint-Martin, les discussions animées à deux pas de la Place de la République, ces secondes où le temps semble suspendre son vol. Un rendu d'une netteté remarquable, pour des souvenirs aussi vivants que votre événement.
                </p>
              </div>
            </div>
          </section>

          {/* L'Art de l'Événement d'Affaires */}
          <section className="mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black">L'Art de l'Événement d'Affaires</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Dans l'effervescence des rendez-vous professionnels – inauguration, soirée d'entreprise ou colloque – l'excellence se doit d'être sans compromis. Nos photobooths, au design épuré, s'effacent pour mettre en lumière vos invités. Une animation discrète mais impactante, où chaque cliché devient un ambassadeur de votre marque. Redéfinissez les codes des événements en Île-de-France.
              </p>
            </div>
          </section>

          {/* Votre Réservation, Simplissime */}
          <section className="mb-16">
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black">Votre Réservation, Simplissime</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Organiser un événement à Paris relève parfois du défi. Avec The Pix, libérez-vous des contraintes logistiques. Aucun formulaire interminable ni processus alambiqué : quelques clics suffisent pour bloquer votre date.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Choix du lieu, options de personnalisation, livraison clé en main – notre équipe orchestre chaque détail avec la précision d'un horloger. Vous n'aurez qu'à profiter de l'instant.
              </p>
            </div>
          </section>

          {/* L'instant magique, prolongé sur les réseaux */}
          <section className="mb-16">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                  <Share2 className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black">L'instant magique, prolongé sur les réseaux</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                À l'ère où chaque émotion appelle au partage, notre photobooth à Paris 3 devient votre allié digital. Les sourires fusent, les poses s'enchaînent, et les clichés s'envolent en direct vers les réseaux sociaux.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Une viralité élégante qui prolonge la vie de votre événement tout en boostant votre visibilité. L'interaction devient mémoire, et la mémoire, promotion.
              </p>
              <div className="mt-6 bg-white p-6 rounded-xl">
                <p className="text-gray-700">
                  <button 
                    onClick={onParis2Page}
                    className="text-blue-600 hover:text-blue-800 transition-colors underline"
                  >
                    Découvrez aussi nos services sur Paris 2.
                  </button>
                </p>
              </div>
            </div>
          </section>

          {/* Notre Engagement : Votre Sérénité */}
          <section className="mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black">Notre Engagement : Votre Sérénité</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Confier votre événement à notre équipe, c'est choisir la tranquillité d'esprit. Besoin d'un conseil pour l'emplacement idéal ? D'une charte graphique alignée sur votre identité ? Nos experts déploient des solutions sur mesure, avec la réactivité qui caractérise Paris.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Car ici, chaque projet est traité avec la passion d'un premier rendez-vous.
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
                <h2 className="text-3xl font-bold text-black">Paris ne se livre pas, elle se vit</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                À travers nos photobooths, offrez à vos invités un fragment de cette magie – des instants volés, transformés en héritage tangible.
              </p>
              <div className="bg-white p-6 rounded-xl">
                <h3 className="font-bold text-black mb-4 text-xl">Prêt à transformer votre événement en une expérience inoubliable ?</h3>
                <p className="text-gray-700 mb-6">
                  Réservez dès maintenant votre photobooth dans le 3ème arrondissement de Paris et créez des souvenirs exceptionnels pour vos invités.
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
      <footer className="bg-white py-16 border-t border-gray-100" role="contentinfo">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Camera className="w-6 h-6 text-black" />
                </div>
                <span className="text-2xl font-bold text-black">BoostPix</span>
              </div>
              <p className="text-gray-600 mb-6 max-w-md leading-relaxed">
                Spécialiste des expériences visuelles premium pour vos événements d'exception. 
                Photobooths sur mesure, technologie connectée et décors immersifs.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors">
                  <Instagram className="w-5 h-5 text-gray-600" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors">
                  <Facebook className="w-5 h-5 text-gray-600" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors">
                  <Linkedin className="w-5 h-5 text-gray-600" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-black mb-6 text-lg">Services</h3>
              <div className="space-y-3">
                <a href="#" className="block text-gray-600 hover:text-yellow-500 transition-colors">Photobooths sur mesure</a>
                <a href="#" className="block text-gray-600 hover:text-yellow-500 transition-colors">Technologie connectée</a>
                <a href="#" className="block text-gray-600 hover:text-yellow-500 transition-colors">Décors immersifs</a>
                <a href="#" className="block text-gray-600 hover:text-yellow-500 transition-colors">Animation événementielle</a>
                <button 
                  onClick={onSEOPage}
                  className="block text-gray-600 hover:text-yellow-500 transition-colors text-left"
                >
                  Location photobooth Paris
                </button>
                <button 
                  onClick={onParis1Page}
                  className="block text-gray-600 hover:text-yellow-500 transition-colors text-left"
                >
                  Location photobooth Paris 1
                </button>
                <button 
                  onClick={onParis2Page}
                  className="block text-gray-600 hover:text-yellow-500 transition-colors text-left"
                >
                  Location photobooth Paris 2
                </button>
                <button 
                  onClick={onBack}
                  className="block text-gray-600 hover:text-yellow-500 transition-colors text-left"
                >
                  Location photobooth Paris 3
                </button>
                <button 
                  onClick={onParis4Page}
                  className="block text-gray-600 hover:text-yellow-500 transition-colors text-left"
                >
                  Location photobooth Paris 4
                </button>
                <button 
                  onClick={onParis5Page}
                  className="block text-gray-600 hover:text-yellow-500 transition-colors text-left"
                >
                  Location photobooth Paris 5
                </button>
                <button 
                  onClick={onParis6Page}
                  className="block text-gray-600 hover:text-yellow-500 transition-colors text-left"
                >
                  Location photobooth Paris 6
                </button>
                <button 
                  onClick={onParis7Page}
                  className="block text-gray-600 hover:text-yellow-500 transition-colors text-left"
                >
                  Location photobooth Paris 7
                </button>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-black mb-6 text-lg">Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-yellow-500" />
                  <a href="tel:+33123456789" className="text-gray-600 hover:text-yellow-500 transition-colors">+33 1 23 45 67 89</a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-yellow-500" />
                  <a href="mailto:contact@boostpix.fr" className="text-gray-600 hover:text-yellow-500 transition-colors">contact@boostpix.fr</a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-yellow-500" />
                  <span className="text-gray-600">Paris - Lyon - Marseille</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 mb-4 md:mb-0">&copy; 2024 BoostPix. Tous droits réservés.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-yellow-500 transition-colors">Mentions légales</a>
              <a href="#" className="text-gray-500 hover:text-yellow-500 transition-colors">Politique de confidentialité</a>
              <a href="#" className="text-gray-500 hover:text-yellow-500 transition-colors">CGV</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Paris3Page;