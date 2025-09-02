import React from 'react';
import {
  ArrowLeft,
  Camera,
  MapPin,
  Building,
  Heart,
  Sparkles,
  Star,
  Share2,
  Shield,
  Settings,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Linkedin
} from 'lucide-react';
import HomeSectionLink from './HomeSectionLink';

interface Paris4PageProps {
  onBack: () => void;
  onQuoteRequest?: () => void;
  onPhotoboothDetails?: () => void;
  onAIAnimations?: () => void;
  onSEOPage?: () => void;
  onParis1Page?: () => void;
  onParis2Page?: () => void;
  onParis3Page?: () => void;
  onParis5Page?: () => void;
  onParis6Page?: () => void;
  onParis7Page?: () => void;
}

const Paris4Page: React.FC<Paris4PageProps> = ({ onBack, onQuoteRequest, onPhotoboothDetails, onAIAnimations, onSEOPage, onParis1Page, onParis2Page, onParis3Page, onParis5Page, onParis6Page, onParis7Page }) => {
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
              Photobooth
              <span className="text-yellow-400 relative">
                {' '}Paris 4
                <div className="absolute -bottom-2 left-0 w-full h-3 bg-yellow-400 -z-10"></div>
              </span>
            </h1>
            <h2 className="text-2xl lg:text-3xl font-semibold text-gray-600 mb-8">
              Votre événement dans la ville des lumières
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
                <h2 className="text-3xl font-bold text-black">Photobooth Paris 4 : Votre événement dans la ville des lumières avec The Pix</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Au cœur du 4ème arrondissement de Paris, où chaque rue dévoile une nouvelle histoire entre les pierres anciennes de la Cathédrale Notre-Dame et l'effervescence contemporaine du Marais, votre événement mérite une touche d'exception. Imaginez vos invités posant sous les arcades de la Place des Vosges, leurs rires figés dans le temps grâce à notre Photobooth Paris.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Chez The Pix, nous ne louons pas juste un appareil – nous vous offrez un passeur d'émotions, un créateur de liens.
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

          {/* Donnez vie à vos événements */}
          <section className="mb-16">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black">Donnez vie à vos événements avec notre photobooth à Paris 4</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Vous organisez un mariage intimiste près de l'Hôtel de Ville ou un cocktail d'entreprise à deux pas du Centre Pompidou ? Notre photobooth, discret mais élégant, s'intègre comme une évidence. Nous transformons vos instants éphémères en souvenirs durables : ces regards complices pendant les toasts, ces danses improvisées à la nuit tombée… Chaque cliché racontera votre histoire, bien après la fin du dernier verre.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Notre secret ? Une technologie intuitive alliée à un design sobre, qui épouse naturellement l'esprit du 4ème arrondissement. Les résultats ? Des photos vibrantes, où se lisent les vraies émotions – sans fioritures artificielles.
              </p>
            </div>
          </section>

          {/* L'atout pro insoupçonné */}
          <section className="mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black">L'atout pro insoupçonné de vos rendez-vous d'affaires</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Et si votre prochain séminaire devenait le plus mémorable ? Dans le quartier des institutions – à quelques encablures de la Préfecture de Police ou du Tribunal de Commerce –, notre photobooth brise la glace mieux qu'un discours. Collègues, clients ou partenaires repartent avec un souvenir tangible de ces échanges, tandis que vos équipes internalisent vos messages via des visuels personnalisés.
              </p>
            </div>
          </section>

          {/* Réservation express */}
          <section className="mb-16">
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black">Réservation express : l'art de vous simplifier la vie</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Chez The Pix, nous savons que le diable se cache dans les détails. C'est pourquoi notre plateforme de réservation en ligne vous fait gagner un temps précieux. En trois clics, choisissez votre date, précisez l'adresse exacte (une cour pavée dans le Marais ? Un loft avec vue sur les toits parisiens ?), et laissez notre équipe s'occuper du reste. Installation silencieuse, conseils sur mesure – nous maîtrisons chaque étape pour que vous restiez concentré sur l'essentiel.
              </p>
            </div>
          </section>

          {/* Des souvenirs qui voyagent */}
          <section className="mb-16">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                  <Share2 className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black">Des souvenirs qui voyagent plus loin que vos invités</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Un hashtag personnalisé, un partage immédiat sur Instagram… Sans sacrifier l'authenticité, notre photobooth à Paris 4 booste naturellement la visibilité de votre événement. Imaginez : vos collaborateurs taguent fièrement votre entreprise, vos clients partagent leur expérience en story – votre marque rayonne bien au-delà du lieu, portée par ces moments de complicité spontanée.
              </p>
            </div>
          </section>

          {/* Votre sérénité, notre priorité */}
          <section className="mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black">Votre sérénité, notre priorité absolue</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Un souci technique à 19h le jour J ? Une envie de dernière minute pour personnaliser le fond photo ? Notre équipe locale – des passionnés qui arpentent quotidiennement les ruelles du 4ème – intervient en moins d'une heure.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                C'est cette réactivité, couplée à notre connaissance intime du quartier, qui fait de The Pix bien plus qu'un prestataire : un partenaire de confiance.
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
                <h2 className="text-3xl font-bold text-black">Explorez nos solutions dans les arrondissements voisins</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Explorez aussi nos solutions sur mesure dans les arrondissements voisins : 
                <button 
                  onClick={onParis1Page}
                  className="text-blue-600 hover:text-blue-800 transition-colors underline mx-1"
                >
                  Photobooth Paris 1
                </button>
                pour les événements institutionnels, 
                <button 
                  onClick={onParis2Page}
                  className="text-blue-600 hover:text-blue-800 transition-colors underline mx-1"
                >
                  Photobooth Paris 2
                </button>
                idéal pour les lancements mode, ou 
                <button 
                  onClick={onParis3Page}
                  className="text-blue-600 hover:text-blue-800 transition-colors underline mx-1"
                >
                  Photobooth Paris 3
                </button>
                pour une ambiance plus bohème.
              </p>
              <div className="bg-white p-6 rounded-xl">
                <h3 className="font-bold text-black mb-4 text-xl">Chez The Pix, nous ne capturons pas des poses – nous révélons l'âme de vos rencontres</h3>
                <p className="text-gray-700 mb-6">
                  Et si votre prochaine soirée devenait légendaire ?
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
                  onClick={onBack}
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

export default Paris4Page;