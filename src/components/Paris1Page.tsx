import React from 'react';
import {
  ArrowLeft,
  Camera,
  MapPin,
  Heart,
  Sparkles,
  Check,
  Star,
  Award,
  Settings
} from 'lucide-react';
import HomeSectionLink from './HomeSectionLink';
import Footer from './Footer';

interface Paris1PageProps {
  onBack: () => void;
  onQuoteRequest?: () => void;
  onPhotoboothDetails?: () => void;
  onAIAnimations?: () => void;
  onSEOPage?: () => void;
  onParis2Page?: () => void;
  onParis3Page?: () => void;
  onParis4Page?: () => void;
  onParis5Page?: () => void;
  onParis6Page?: () => void;
  onParis7Page?: () => void;
  onParis8Page?: () => void;
}

const Paris1Page: React.FC<Paris1PageProps> = ({ onBack, onQuoteRequest, onPhotoboothDetails, onAIAnimations, onSEOPage, onParis2Page, onParis3Page, onParis4Page, onParis5Page, onParis6Page, onParis7Page, onParis8Page }) => {
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
                {' '}Paris 1
                <div className="absolute -bottom-2 left-0 w-full h-3 bg-yellow-400 -z-10"></div>
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <article className="prose prose-lg max-w-none">
          {/* Un Photobooth Parisien au Cœur des Émotions */}
          <section className="mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-black" />
                </div>
                <h2 className="text-3xl font-bold text-black">Un Photobooth Parisien au Cœur des Émotions</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Imaginez un écrin au cœur du 1er arrondissement de Paris, où chaque rue raconte une histoire. Entre les Jardins des Tuileries aux allures de tableau vivant, le Musée du Louvre et son souffle artistique, ou l'effervescence de la Rue de Rivoli, The Pix s'invite pour transformer vos événements en souvenirs palpables.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Qu'il s'agisse d'un dîner d'affaires face au Palais Royal ou d'un anniversaire intimiste dans une cour secrète du quartier, notre service de location de photobooth devient le complice malicieux de vos instants précieux.
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

          {/* Paris 1er : Un Décor de Rêve */}
          <section className="mb-16">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black">Paris 1er : Un Décor de Rêve pour Vos Événements</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Vous organisez un événement dans le quartier le plus prestigieux de Paris ? Entre le Pont Neuf, la Sainte-Chapelle et le Forum des Halles, chaque lieu respire l'élégance. C'est ici que The Pix insuffle une touche moderne à votre réception.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Notre location de photobooth ne se résume pas à des clichés : c'est une invitation à saisir les rires complices, les regards échangés, les silences éloquents.
              </p>
            </div>
          </section>

          {/* Pourquoi Choisir The Pix */}
          <section className="mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-black" />
                </div>
                <h2 className="text-3xl font-bold text-black">Pourquoi Choisir The Pix dans le 1er Arrondissement ?</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-black mb-2">Installation clé en main</h3>
                      <p className="text-gray-600">Techniciens dédiés, décoration sur mesure et prise en charge totale des réglages. Vous n'aurez qu'à profiter !</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-black mb-2">Photos haute résolution</h3>
                      <p className="text-gray-600">Avec nos bornes photos dernière génération, chaque détail est capturé avec une netteté irréprochable. Parfait pour vos réseaux sociaux ou l'album souvenir.</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-black mb-2">Espace sécurisé</h3>
                      <p className="text-gray-600">Galerie privée en ligne avec chiffrement SSL pour partager vos moments en toute confidentialité.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-black mb-2">Événements professionnels sur mesure</h3>
                      <p className="text-gray-600">À deux pas de la Bourse de Commerce, nous adaptons notre service pour séminaires, lancements produits ou team buildings.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* La Recette d'un Événement Réussi */}
          <section className="mb-16">
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black">La Recette d'un Événement Réussi</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Dans ce Paris où l'histoire épouse la modernité, le photobooth est devenu l'ingrédient secret des réceptions mémorables. Imaginez vos invités repartant de la Place Dauphine avec un tirage haute définition entre les mains : un souvenir tangible qui raconte bien plus qu'une simple photo.
              </p>
              <div className="bg-white p-6 rounded-xl">
                <p className="text-gray-700 text-lg font-medium">
                  📸 Un mariage près de la Comédie-Française ? Un cocktail d'entreprise aux Halles ?
                </p>
              </div>
              <div className="mt-8 text-center">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="font-bold text-black mb-4 text-xl">Réservez en Ligne en 2 Minutes</h3>
                  <p className="text-gray-600 mb-4">(Disponibilité en temps réel - Paiement sécurisé)</p>
                  <button 
                    onClick={onQuoteRequest}
                    className="bg-yellow-400 text-black px-8 py-4 rounded-full hover:bg-yellow-500 transition-colors font-semibold"
                  >
                    Réserver maintenant
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Comment Ça Marche */}
          <section className="mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black">Comment Ça Marche ?</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-black">1</span>
                  </div>
                  <h3 className="font-bold text-black mb-3">📅 Réservation express</h3>
                  <p className="text-gray-600">Choisissez date + options sur notre interface intuitive</p>
                </div>
                
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-black">2</span>
                  </div>
                  <h3 className="font-bold text-black mb-3">🚚 Installation sans stress</h3>
                  <p className="text-gray-600">Notre équipe arrive 1h30 avant l'événement</p>
                </div>
                
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-black">3</span>
                  </div>
                  <h3 className="font-bold text-black mb-3">✨ Magie opère</h3>
                  <p className="text-gray-600">Vous profitez, on gère le reste !</p>
                </div>
              </div>
            </div>
          </section>

          {/* Témoignage */}
          <section className="mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl text-gray-700 mb-6 leading-relaxed italic">
                  "C'était LA touche qui a fait de notre soirée un succès ! Les photos ont circulé pendant des semaines sur les réseaux."
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-black font-bold">M</span>
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-black">Marie</div>
                    <div className="text-gray-500">Organisatrice d'événements dans le 1er</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Final */}
          <section className="mb-16">
            <div className="bg-yellow-50 border border-yellow-200 p-8 rounded-2xl text-center">
              <h2 className="text-3xl font-bold text-black mb-6">
                Prêt à transformer votre événement en une expérience inoubliable ?
              </h2>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                Réservez dès maintenant votre photobooth dans le 1er arrondissement de Paris et créez des souvenirs exceptionnels pour vos invités.
              </p>
              <button 
                onClick={onQuoteRequest}
                className="bg-yellow-400 text-black px-10 py-4 rounded-full hover:bg-yellow-500 transition-colors font-semibold text-lg"
              >
                Demander un devis
              </button>
            </div>
          </section>
        </article>
      </div>

      {/* Footer */}
      <Footer
        onSEOPage={onSEOPage}
        onPhotoboothDetails={onPhotoboothDetails}
        arrondissementLinks={[
          { label: 'Location photobooth Paris 1', onClick: onBack },
          { label: 'Location photobooth Paris 2', onClick: onParis2Page },
          { label: 'Location photobooth Paris 3', onClick: onParis3Page },
          { label: 'Location photobooth Paris 4', onClick: onParis4Page },
          { label: 'Location photobooth Paris 5', onClick: onParis5Page },
          { label: 'Location photobooth Paris 6', onClick: onParis6Page },
          { label: 'Location photobooth Paris 7', onClick: onParis7Page },
          { label: 'Location photobooth Paris 8', onClick: onParis8Page },
        ]}
      />
    </div>
  );
};

export default Paris1Page;