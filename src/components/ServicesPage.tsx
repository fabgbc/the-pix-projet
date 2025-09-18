import React from 'react';
import { Camera, Users, Sparkles, Heart, ArrowRight, Check } from 'lucide-react';
import Footer from './Footer';

interface ServicesPageProps {
  onBack: () => void;
  onPhotoboothDetails: () => void;
  onPrivateEvents: () => void;
  onAIAnimations: () => void;
  onQuoteRequest: () => void;
  onSEOPage: () => void;
  arrondissementLinks: { label: string; onClick: () => void }[];
}

const ServicesPage: React.FC<ServicesPageProps> = ({
  onBack,
  onPhotoboothDetails,
  onPrivateEvents,
  onAIAnimations,
  onQuoteRequest,
  onSEOPage,
  arrondissementLinks,
}) => {
  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                <Camera className="w-6 h-6 text-black" />
              </div>
              <span className="text-2xl font-bold text-black">BoostPix</span>
            </div>

            <nav className="hidden lg:flex items-center space-x-8">
              <button onClick={onBack} className="text-gray-700 hover:text-yellow-500 transition-colors font-medium">
                Accueil
              </button>
              <span className="text-yellow-500 font-medium cursor-default">Services</span>
              <button
                onClick={onPhotoboothDetails}
                className="text-gray-700 hover:text-yellow-500 transition-colors font-medium"
              >
                Photobooth sur mesure
              </button>
              <button onClick={onPrivateEvents} className="text-gray-700 hover:text-yellow-500 transition-colors font-medium">
                Événements Privés
              </button>
              <button onClick={onAIAnimations} className="text-gray-700 hover:text-yellow-500 transition-colors font-medium">
                Animations IA
              </button>
              <button
                onClick={onQuoteRequest}
                className="bg-yellow-400 text-black px-6 py-3 rounded-full hover:bg-yellow-500 transition-colors font-semibold"
              >
                Devis Gratuit
              </button>
            </nav>
          </div>
        </div>
      </header>

      <main className="pt-24">
        <section className="py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-black mb-6">Des services qui subliment vos événements</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              BoostPix conçoit des expériences photobooth personnalisées pour les marques, agences et particuliers.
              De la scénographie à l'animation, nous créons des univers immersifs qui marquent les esprits.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onPhotoboothDetails}
                className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition-colors"
              >
                Photobooth sur mesure
              </button>
              <button
                onClick={onQuoteRequest}
                className="border border-yellow-400 text-yellow-500 px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition-colors"
              >
                Discuter de votre projet
              </button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-3 gap-12">
            <article className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mb-6">
                <Camera className="w-8 h-8 text-black" />
              </div>
              <h2 className="text-2xl font-bold text-black mb-4">Photobooths premium</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Conception graphique, habillage du décor, expérience utilisateur et options de personnalisation pour refléter votre univers.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-yellow-500" />
                  <span>Design sur mesure et branding complet</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-yellow-500" />
                  <span>Technologies IA et filtres avancés</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-yellow-500" />
                  <span>Installation clé en main</span>
                </li>
              </ul>
              <button
                onClick={onPhotoboothDetails}
                className="mt-6 text-yellow-500 font-semibold hover:text-yellow-600 transition-colors flex items-center space-x-2"
              >
                <span>Découvrir</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </article>

            <article className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-pink-600" />
              </div>
              <h2 className="text-2xl font-bold text-black mb-4">Événements privés</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Mariages, anniversaires, célébrations familiales : des scénographies chaleureuses et des souvenirs tangibles pour vos invités.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-yellow-500" />
                  <span>Animation personnalisée</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-yellow-500" />
                  <span>Impressions illimitées</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-yellow-500" />
                  <span>Album et galerie digitale</span>
                </li>
              </ul>
              <button
                onClick={onPrivateEvents}
                className="mt-6 text-yellow-500 font-semibold hover:text-yellow-600 transition-colors flex items-center space-x-2"
              >
                <span>Explorer</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </article>

            <article className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-black mb-4">Animations IA & connectées</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Expériences interactives avec intelligence artificielle, murs de photos en direct et diffusion sur mesure.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-yellow-500" />
                  <span>Filtres IA sur mesure</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-yellow-500" />
                  <span>Partage instantané multicanal</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-yellow-500" />
                  <span>Statistiques d'engagement</span>
                </li>
              </ul>
              <button
                onClick={onAIAnimations}
                className="mt-6 text-yellow-500 font-semibold hover:text-yellow-600 transition-colors flex items-center space-x-2"
              >
                <span>En savoir plus</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </article>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">Un accompagnement complet</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Nos équipes créatives, techniques et logistiques travaillent main dans la main pour vous offrir une expérience fluide avant, pendant et après votre événement.
              </p>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-yellow-500" />
                  <span>Direction artistique & moodboards</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-yellow-500" />
                  <span>Coordination sur site et assistance invités</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-yellow-500" />
                  <span>Reporting et exploitation des contenus</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-3xl shadow-lg p-10">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="w-6 h-6 text-yellow-500" />
                <span className="text-lg font-semibold text-black">Équipe projet dédiée</span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Nous co-créons vos expériences autour de vos objectifs : notoriété, engagement, collecte de données ou souvenirs personnalisés. Chaque projet est unique.
              </p>
              <button
                onClick={onQuoteRequest}
                className="mt-8 bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition-colors"
              >
                Construire votre dispositif
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer
        onSEOPage={onSEOPage}
        onPhotoboothDetails={onPhotoboothDetails}
        arrondissementLinks={arrondissementLinks}
      />
    </div>
  );
};

export default ServicesPage;

