import React from 'react';
import {
  ArrowLeft,
  Camera,
  Sparkles,
  Eye,
  QrCode,
  Star,
  ChevronRight,
  Wand2,
  Share2,
  Heart,
  Building,
  Trophy,
  Clock,
  Shield,
  Globe,
  Flame
} from 'lucide-react';
import HomeSectionLink from './HomeSectionLink';
import Footer from './Footer';

interface PhotographerAIPageProps {
  onBack: () => void;
  onQuoteRequest: () => void;
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
}

const PhotographerAIPage: React.FC<PhotographerAIPageProps> = ({ onBack, onQuoteRequest, onPhotoboothDetails, onAIAnimations, onSEOPage, onParis1Page, onParis2Page, onParis3Page, onParis4Page, onParis5Page, onParis6Page, onParis7Page }) => {
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
      <section className="relative py-32 bg-gray-900 text-white overflow-hidden mt-20">
        <div className="absolute inset-0">
          <img 
            src="https://res.cloudinary.com/de55ql9ig/image/upload/v1756367288/Generated_Image_August_28_2025_-_9_45AM_ed1g3a.jpg" 
            alt="Photographe IA Connecté - Capture et partage instantané pour événements"
            className="w-full h-full object-cover opacity-40"
            style={{ objectPosition: 'center 70%' }}
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Photographe IA
              <span className="text-yellow-400 relative">
                {' '}Connecté
                <div className="absolute -bottom-2 left-0 w-full h-3 bg-yellow-400 -z-10"></div>
              </span>
            </h1>
            <h2 className="text-2xl lg:text-3xl font-semibold mb-8 text-gray-200">
              L'humain + la technologie
            </h2>
            <p className="text-xl lg:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl">
              Un photographe professionnel avec galerie en ligne, partage instantané et diffusion live sur écran ou borne
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#comment-ca-marche" className="bg-yellow-400 text-black px-10 py-4 rounded-full hover:bg-yellow-500 transition-colors font-semibold text-lg inline-block text-center">
                Découvrir le service
              </a>
              <button 
                onClick={onQuoteRequest}
                className="border-2 border-white text-white px-10 py-4 rounded-full hover:bg-white hover:text-black transition-colors font-semibold text-lg"
              >
                Demander un devis
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section id="comment-ca-marche" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Comment ça marche ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un système révolutionnaire de reconnaissance faciale pour une livraison automatique
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Camera className="w-12 h-12 text-black" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Capture Professionnelle</h3>
              <p className="text-gray-600 leading-relaxed">
                Notre photographe professionnel capture tous les moments de votre événement 
                et upload instantanément les photos sur notre serveur sécurisé.
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <QrCode className="w-12 h-12 text-black" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Selfie de Reconnaissance</h3>
              <p className="text-gray-600 leading-relaxed">
                Vos invités scannent un QR code qui les dirige vers une interface selfie. 
                Ce selfie permet à notre IA de les reconnaître sur toutes les photos de l'événement.
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Eye className="w-12 h-12 text-black" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Livraison Automatique</h3>
              <p className="text-gray-600 leading-relaxed">
                Grâce à la reconnaissance faciale, toutes les photos où ils apparaissent 
                sont automatiquement ajoutées à leur galerie privée personnelle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Les Avantages pour Vos Événements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Les Avantages pour
              <span className="text-yellow-400 relative">
                {' '}Vos Événements
                <div className="absolute -bottom-1 left-0 w-full h-2 bg-yellow-400 -z-10"></div>
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transformez vos événements en expériences mémorables et engageantes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center">
                  <Flame className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black">Créez plus d'Interaction</h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                Faites vivre une expérience unique à vos invités : ils reçoivent leurs photos en direct 
                et les partagent spontanément. L'engagement est immédiat et naturel.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black">Simplifiez votre Organisation</h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                Notre système entièrement automatisé gère la retouche et la livraison. 
                Vous gagnez du temps et vous concentrez sur vos invités.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black">Boostez votre Visibilité en Ligne</h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                Chaque photo peut être personnalisée avec votre logo ou design. 
                Partagées sur les réseaux sociaux, elles deviennent des supports de communication puissants.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black">Offrez Confiance et Sérénité</h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                La confidentialité est garantie : chaque participant accède uniquement à ses propres photos. 
                Sécurité et respect de la vie privée assurés.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fonctionnalités Techniques */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-black mb-8">
                Fonctionnalités Techniques
              </h2>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Une technologie de pointe au service de vos événements
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Wand2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">Retouche IA Avancée</h3>
                    <p className="text-gray-600">
                      Correction automatique de l'exposition, des couleurs et des imperfections. 
                      Chaque photo est optimisée pour un rendu professionnel instantané.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">Reconnaissance Faciale IA</h3>
                    <p className="text-gray-600">
                      Notre IA analyse le selfie de chaque invité et les reconnaît automatiquement 
                      sur toutes les photos de l'événement, même en arrière-plan.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Share2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">Partage Instantané</h3>
                    <p className="text-gray-600">
                      Galerie privée accessible via QR code avec partage direct sur les réseaux sociaux. 
                      Téléchargement haute résolution et envoi par email automatique.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">Sécurité & Confidentialité</h3>
                    <p className="text-gray-600">
                      Chaque invité accède uniquement à ses propres photos. Stockage sécurisé 
                      et respect total de la vie privée avec suppression automatique après l'événement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://res.cloudinary.com/de55ql9ig/image/upload/v1756366821/IMG_4516_x6oj2k.jpg" 
                alt="Technologie IA - Interface photographe connecté"
                className="w-full h-auto rounded-2xl shadow-2xl scale-110"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pour quels événements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Pour Quels
              <span className="text-yellow-400 relative">
                {' '}Événements
                <div className="absolute -bottom-1 left-0 w-full h-2 bg-yellow-400 -z-10"></div>
              </span>
              {' '}?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Notre service s'adapte parfaitement à tous types d'événements professionnels et privés
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Building className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3">Événements d'Entreprise</h3>
              <p className="text-gray-600">
                Séminaires, conventions, soirées corporate et team building 
                pour renforcer l'esprit d'équipe.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Sparkles className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3">Lancements de Produits</h3>
              <p className="text-gray-600">
                Événements marketing, inaugurations et présentations produit 
                pour marquer les esprits.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Trophy className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3">Galas et Cérémonies</h3>
              <p className="text-gray-600">
                Galas de prestige, remises de prix et cérémonies officielles 
                pour des moments solennels.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Heart className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3">Mariages Haut de Gamme</h3>
              <p className="text-gray-600">
                Mariages d'exception et célébrations privées 
                pour des souvenirs inoubliables.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Ils Ont Testé Notre Service
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez les retours de nos clients satisfaits
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <article className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                "Révolutionnaire ! Nos collaborateurs ont juste scanné un QR code, fait un selfie, 
                et toutes leurs photos sont arrivées automatiquement avec une qualité exceptionnelle. 
                Les retouches IA ont sublimé chaque cliché. Technologie bluffante !"
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-black font-bold">CL</span>
                </div>
                <div>
                  <div className="font-semibold text-black">Claire Lemoine</div>
                  <div className="text-gray-500">Directrice Marketing, TechCorp</div>
                </div>
              </div>
            </article>

            <article className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                "Magique pour notre mariage ! Un selfie au début de la soirée et hop, 
                toutes nos photos de couple, de famille, de groupe sont arrivées 
                automatiquement avec des retouches parfaites. Même les photos en contre-jour 
                étaient sublimes ! Nos invités ont adoré cette technologie !"
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-black font-bold">A&M</span>
                </div>
                <div>
                  <div className="font-semibold text-black">Antoine & Marine</div>
                  <div className="text-gray-500">Mariés en Septembre 2024</div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Call-to-action final */}
      <section className="py-20 bg-yellow-400">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Camera className="w-10 h-10 text-yellow-400" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Prêt à Révolutionner Vos Souvenirs ?
          </h2>
          <p className="text-xl text-gray-800 mb-10 max-w-3xl mx-auto leading-relaxed">
            Révolutionnez la façon dont vos invités récupèrent leurs photos ! 
            Un selfie, une reconnaissance, une livraison automatique. 
            Réservez dès maintenant votre photographe IA connecté.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={onQuoteRequest}
              className="bg-black text-white px-10 py-4 rounded-full hover:bg-gray-800 transition-colors font-semibold text-lg flex items-center justify-center space-x-2"
            >
              <span>Réserver le Photographe IA Connecté</span>
              <ChevronRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-black text-black px-10 py-4 rounded-full hover:bg-black hover:text-white transition-colors font-semibold text-lg">
              Voir nos tarifs
            </button>
          </div>
        </div>
      </section>

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
        ]}
      />
    </div>
  );
};

export default PhotographerAIPage;