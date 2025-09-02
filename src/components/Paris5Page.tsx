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

interface Paris5PageProps {
  onBack: () => void;
  onQuoteRequest?: () => void;
  onPhotoboothDetails?: () => void;
  onAIAnimations?: () => void;
  onSEOPage?: () => void;
  onParis1Page?: () => void;
  onParis2Page?: () => void;
  onParis3Page?: () => void;
  onParis4Page?: () => void;
  onParis6Page?: () => void;
  onParis7Page?: () => void;
}

const Paris5Page: React.FC<Paris5PageProps> = ({ onBack, onQuoteRequest, onPhotoboothDetails, onAIAnimations, onSEOPage, onParis1Page, onParis2Page, onParis3Page, onParis4Page, onParis6Page, onParis7Page }) => {
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
                {' '}Paris 5
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
                <h2 className="text-3xl font-bold text-black">Photobooth Paris 5 : Immortalisez vos événements avec originalité</h2>
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

          {/* Réseaux sociaux */}
          <section className="mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                  <Share2 className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black">Réseaux sociaux : donnez une résonance à vos événements</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Dans l'ère du partage instantané, notre photobooth devient votre meilleur ambassadeur digital. En quelques secondes, les participants diffusent leurs photos personnalisables sur les réseaux sociaux, créant un buzz naturel autour de votre manifestation. Une vitrine vivante qui traverse les frontières du 5ème arrondissement jusqu'aux quatre coins de l'Île-de-France.
              </p>
            </div>
          </section>

          {/* Location de photobooth */}
          <section className="mb-16">
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black">Location de photobooth : sur mesure pour chaque moment clé</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Notre force ? Savoir s'effacer pour mieux mettre en lumière vos invités. Que votre événement se déroule dans un hôtel particulier du Marais ou un lieu atypique de Saint-Denis, nos bornes photo s'intègrent avec élégance. Le résultat ? Des souvenirs imprimés qui prennent vie entre les mains des participants, déclenchant souvent des rires complices et des anecdotes inattendues.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Au-delà de l'instant présent, nous pensons à la pérennité des souvenirs. L'option de partage numérique permet de constituer une galerie évolutive, consultable bien après la fin des festivités. Une manière moderne de prolonger l'expérience.
              </p>
            </div>
          </section>

          {/* Animation photobooth */}
          <section className="mb-16">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black">Animation photobooth : l'art de sublimer les rencontres</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Derrière chaque rideau de notre photobooth à Paris se joue une micro-scène de vie. Nos équipes l'ont constaté à maintes reprises : c'est souvent autour de ces bornes que naissent les interactions les plus authentiques. Un outil de communication qui devient paradoxalement… un facilitateur de vraies connexions humaines.
              </p>
            </div>
          </section>

          {/* Personnalisation */}
          <section className="mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black">Personnalisation : votre empreinte dans chaque cliché</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Notre écran tactile devient votre canvas créatif. Logo discret, message éphémère ou fond contextuel – chaque détail s'adapte à l'identité de votre événement. Ces choix minutieux font la différence entre une simple photo et un souvenir mémorable.
              </p>
            </div>
          </section>

          {/* Organisation d'événements */}
          <section className="mb-16">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black">Organisation d'événements : l'expertise qui fait la différence</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Gagner en sérénité tout en offrant une animation originale : tel est notre engagement. Notre service de location de photobooth à Paris inclut une installation sans accroc et un accompagnement sur mesure. Nous maîtrisons les particularités des lieux parisiens – accès, contraintes techniques, flux des invités – pour une intégration fluide à votre programmation.
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
                <h2 className="text-3xl font-bold text-black">Et si votre prochain événement devenait légendaire ?</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Et si votre prochain événement dans le 5ème arrondissement devenait la référence dont tout le monde parlera ? Chez « The Pix », nous transformons les instants en héritage visuel. Découvrez notre formule clé en main et laissez-vous surprendre par l'alchimie entre technologie et émotions.
              </p>
              <div className="bg-white p-6 rounded-xl">
                <h3 className="font-bold text-black mb-4 text-xl">Prêt à transformer votre événement en une expérience inoubliable ?</h3>
                <p className="text-gray-700 mb-6">
                  Réservez dès maintenant votre photobooth dans le 5ème arrondissement de Paris et créez des souvenirs exceptionnels pour vos invités.
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
                  onClick={onParis3Page}
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
                  onClick={onBack}
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

export default Paris5Page;