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
  Phone,
  Mail,
  Instagram,
  Facebook,
  Linkedin
} from 'lucide-react';
import HomeSectionLink from './HomeSectionLink';

interface SEOPageProps {
  onBack: () => void;
  onQuoteRequest?: () => void;
  onPhotoboothDetails?: () => void;
  onAIAnimations?: () => void;
  onParis1Page?: () => void;
  onParis2Page?: () => void;
  onParis3Page?: () => void;
  onParis4Page?: () => void;
  onParis5Page?: () => void;
  onParis6Page?: () => void;
  onParis7Page?: () => void;
}

const SEOPage: React.FC<SEOPageProps> = ({ onBack, onQuoteRequest, onPhotoboothDetails, onAIAnimations, onParis1Page, onParis2Page, onParis3Page, onParis4Page, onParis5Page, onParis6Page, onParis7Page }) => {
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
              Location de Photobooth à
              <span className="text-yellow-400 relative">
                {' '}Paris
                <div className="absolute -bottom-2 left-0 w-full h-3 bg-yellow-400 -z-10"></div>
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Vous planifiez un événement professionnel à Paris ? À la recherche d'une animation photo innovante 
              et engageante pour renforcer la cohésion d'équipe et stimuler la motivation de vos employés ? 
              Pensez à la location photobooth Paris avec BoostPix.
            </p>
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
                  <Sparkles className="w-6 h-6 text-black" />
                </div>
                <h2 className="text-3xl font-bold text-black">Une expérience mémorable</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Cette animation photobooth unique peut transformer votre soirée d'entreprise en une expérience mémorable. 
                Nos photobooths premium offrent bien plus qu'une simple animation : ils créent des moments de partage 
                authentiques et renforcent l'esprit d'équipe.
              </p>
            </div>
          </section>

          {/* Importance Section */}
          <section className="mb-16">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black">L'importance d'un photobooth pour votre événement d'entreprise</h2>
              </div>
              <div className="space-y-6">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Un photobooth à Paris peut considérablement améliorer votre évènement à Paris. Il encourage la participation 
                  et l'interaction entre les employés, favorisant le team building et le réseautage.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <Check className="w-6 h-6 text-green-500 mt-1" />
                    <div>
                      <h3 className="font-semibold text-black mb-2">Souvenirs tangibles</h3>
                      <p className="text-gray-600">Impression instantanée de photos de qualité professionnelle</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-6 h-6 text-green-500 mt-1" />
                    <div>
                      <h3 className="font-semibold text-black mb-2">Image positive</h3>
                      <p className="text-gray-600">Contribue à une image positive de l'entreprise</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose BoostPix */}
          <section className="mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-black" />
                </div>
                <h2 className="text-3xl font-bold text-black">Pourquoi choisir BoostPix pour votre location de photobooth à Paris</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                BoostPix offre un service de location de photobooth à Paris adapté aux événements professionnels. 
                Nos services comprennent la livraison, l'installation et l'assistance tout au long de l'événement, 
                assurant une expérience fluide et agréable pour tous les invités.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <Camera className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
                  <h3 className="font-semibold text-black mb-2">Équipement Premium</h3>
                  <p className="text-gray-600 text-sm">Photobooths haute qualité avec technologie avancée</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <Users className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
                  <h3 className="font-semibold text-black mb-2">Service Complet</h3>
                  <p className="text-gray-600 text-sm">Installation, assistance et support technique</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <Sparkles className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
                  <h3 className="font-semibold text-black mb-2">Personnalisation</h3>
                  <p className="text-gray-600 text-sm">Décors et accessoires sur mesure</p>
                </div>
              </div>
            </div>
          </section>

          {/* Services sur mesure */}
          <section className="mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black">Des services sur mesure pour chaque soirée d'entreprise</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Les photobooths de BoostPix peuvent être personnalisés pour s'adapter au thème de votre événement 
                en Île-de-France, que ce soit à Boulogne-Billancourt, Issy-les-Moulineaux, Saint-Denis, 
                Rueil-Malmaison ou Aulnay-sous-Bois.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl">
                  <h3 className="font-bold text-black mb-3">Personnalisation complète</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span className="text-gray-700">Intégration de vos logos</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span className="text-gray-700">Messages personnalisés</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span className="text-gray-700">Contour photo sur mesure</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl">
                  <h3 className="font-bold text-black mb-3">Zones de couverture</h3>
                  <div className="flex items-center space-x-2 mb-2">
                    <MapPin className="w-4 h-4 text-yellow-500" />
                    <span className="text-gray-700">Paris et Île-de-France</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Service disponible dans toute la région parisienne avec installation sur site
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Animation qui renforce la cohésion */}
          <section className="mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black">Une animation photo qui renforce la cohésion d'équipe</h2>
              </div>
              <div className="space-y-6">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Les animations photobooth offrent une forme de divertissement non intrusive qui ne perturbe pas 
                  le déroulement de l'événement. Elles peuvent être un déclencheur de conversation, aidant à briser 
                  la glace entre les employés.
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl">
                  <h3 className="font-bold text-black mb-3">Bénéfices pour l'équipe</h3>
                  <ul className="space-y-2">
                    <li className="text-gray-700">• Encourage la collaboration pour les photos de groupe</li>
                    <li className="text-gray-700">• Offre une opportunité d'expression créative</li>
                    <li className="text-gray-700">• Permet aux employés de révéler leur personnalité</li>
                    <li className="text-gray-700">• Crée des moments de détente et de convivialité</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Impression instantanée */}
          <section className="mb-16">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black">Les avantages de l'impression instantanée pour l'engagement des employés</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Les services de location borne photo de BoostPix incluent l'impression instantanée. 
                Cela permet aux invités de repartir avec un souvenir tangible de l'événement.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl">
                  <h3 className="font-bold text-black mb-3">Souvenirs personnalisés</h3>
                  <p className="text-gray-600">
                    Les impressions photo instantanées servent de souvenirs personnalisés pour les participants, 
                    renforçant l'engagement et le moral des employés.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl">
                  <h3 className="font-bold text-black mb-3">Qualité professionnelle</h3>
                  <p className="text-gray-600">
                    Impressions haute résolution sur papier premium pour des souvenirs durables 
                    et de qualité exceptionnelle.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Révolution de l'animation */}
          <section className="mb-16">
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black">Comment BoostPix révolutionne l'animation photobooth à Paris</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                BoostPix est à la pointe de la révolution de l'animation photobooth à Paris. 
                Notre équipement d'appareil photo de haute qualité assure des photos de qualité professionnelle.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-xl text-center">
                  <Camera className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                  <h3 className="font-semibold text-black text-sm">Haute Qualité</h3>
                  <p className="text-gray-600 text-xs">Images haute résolution</p>
                </div>
                <div className="bg-white p-4 rounded-xl text-center">
                  <Zap className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                  <h3 className="font-semibold text-black text-sm">Impression Rapide</h3>
                  <p className="text-gray-600 text-xs">Technologie d'impression avancée</p>
                </div>
                <div className="bg-white p-4 rounded-xl text-center">
                  <Users className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                  <h3 className="font-semibold text-black text-sm">Interface Intuitive</h3>
                  <p className="text-gray-600 text-xs">Accessible à tous</p>
                </div>
                <div className="bg-white p-4 rounded-xl text-center">
                  <Star className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                  <h3 className="font-semibold text-black text-sm">Analyses Détaillées</h3>
                  <p className="text-gray-600 text-xs">Mesure du succès</p>
                </div>
              </div>
            </div>
          </section>

          {/* Contour photo et personnalisation */}
          <section className="mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black">Contour photo et personnalisation : une touche unique pour votre événement</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                BoostPix propose des options de contour photo, ajoutant une touche créative et personnalisée 
                à l'expérience photobooth. Les modèles de photos personnalisables peuvent incorporer les logos 
                de l'entreprise et les détails de l'événement.
              </p>
              <div className="bg-pink-50 border border-pink-200 p-6 rounded-xl">
                <h3 className="font-bold text-black mb-3">Personnalisation unique</h3>
                <p className="text-gray-700">
                  Cette personnalisation unique peut faire ressortir votre événement professionnel et créer 
                  une expérience mémorable pour tous vos invités.
                </p>
              </div>
            </div>
          </section>

          {/* Flexibilité Île-de-France */}
          <section className="mb-16">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black">La location de photobooth à travers l'Île-de-France : flexibilité et accessibilité</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Les services de BoostPix sont disponibles dans divers emplacements à travers l'Île-de-France, 
                notamment à Rueil-Malmaison, Aulnay-sous-Bois, Boulogne-Billancourt, Issy-les-Moulineaux et Saint-Denis.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl">
                  <h3 className="font-bold text-black mb-3">Couverture étendue</h3>
                  <p className="text-gray-600 mb-4">
                    Cela offre commodité et flexibilité pour la planification de votre événement.
                  </p>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    <span className="text-gray-700 text-sm">Installation directe sur site</span>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl">
                  <h3 className="font-bold text-black mb-3">Intégration transparente</h3>
                  <p className="text-gray-600">
                    Les photobooths peuvent être installés directement sur le lieu de votre événement, 
                    assurant une intégration transparente dans votre configuration.
                  </p>
                </div>
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
                <h2 className="text-3xl font-bold text-black">Maximiser la visibilité de votre événement sur les réseaux sociaux</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Le partage de photos sur réseaux sociaux peut amplifier l'impact et la portée de l'événement. 
                Les photobooths de BoostPix sont équipés d'une intégration aux réseaux sociaux pour des capacités 
                de partage instantané.
              </p>
              <div className="bg-white p-6 rounded-xl">
                <h3 className="font-bold text-black mb-3">Outil de marketing stratégique</h3>
                <p className="text-gray-700">
                  Cela peut être un outil de marketing stratégique, avec des photos de marque partagées par les employés 
                  sur les plateformes sociales, contribuant à une image d'entreprise positive et à la satisfaction des employés.
                </p>
              </div>
            </div>
          </section>

          {/* Impact sur l'image de marque */}
          <section className="mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black">L'impact des photos de soirée d'entreprise sur l'image de marque</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Les photobooths peuvent être une plateforme pour présenter la culture et les valeurs de l'entreprise 
                de manière amusante et engageante.
              </p>
              <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-xl">
                <p className="text-gray-700">
                  Les photos partagées peuvent améliorer l'image de marque de votre entreprise, favorisant un sentiment 
                  de communauté et d'expériences partagées parmi les employés.
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
                <h2 className="text-3xl font-bold text-black">Conclusion : pourquoi un photobooth à Paris est un investissement pour l'avenir de votre entreprise</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Investir dans un photobooth pour votre événement professionnel n'est pas seulement une question de divertissement. 
                C'est un moyen de renforcer la cohésion d'équipe, de stimuler la motivation des employés et d'améliorer l'image 
                de marque de votre entreprise, en faisant un investissement stratégique pour l'avenir de votre entreprise.
              </p>
              <div className="bg-white p-6 rounded-xl">
                <h3 className="font-bold text-black mb-4 text-xl">Prêt à transformer votre événement en une expérience inoubliable ?</h3>
                <p className="text-gray-700 mb-6">
                  Réservez dès maintenant votre location de photobooth à Paris avec BoostPix et faites de votre événement 
                  un succès retentissant.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={onQuoteRequest}
                    className="border-2 border-yellow-400 text-yellow-600 px-8 py-4 rounded-full hover:bg-yellow-400 hover:text-black transition-colors font-semibold"
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
                  onClick={onBack}
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

export default SEOPage;