import React, { useMemo, useState } from 'react';
import {
  Camera,
  Sparkles,
  Users,
  Heart,
  Zap,
  Star,
  Menu,
  X,
  ArrowRight,
  Check,
} from 'lucide-react';
import Footer from './Footer';
import { useRouter } from '../router';
import { ARRONDISSEMENTS } from '../data/arrondissements';

const HomePage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { navigate } = useRouter();

  const arrondissementLinks = useMemo(
    () =>
      ARRONDISSEMENTS.map(item => ({
        label: item.label,
        onClick: () => navigate(item.slug),
      })),
    [navigate],
  );

  const handleNavigate = (path: string) => {
    setIsMenuOpen(false);
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100" role="banner">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                <Camera className="w-6 h-6 text-black" />
              </div>
              <span className="text-2xl font-bold text-black">BoostPix</span>
            </div>

            <nav className="hidden lg:flex items-center space-x-8" role="navigation" aria-label="Navigation principale">
              <button
                onClick={() => handleNavigate('/')}
                className="text-gray-700 hover:text-yellow-500 transition-colors font-medium"
              >
                Accueil
              </button>
              <button
                onClick={() => handleNavigate('/services')}
                className="text-gray-700 hover:text-yellow-500 transition-colors font-medium"
              >
                Services
              </button>
              <button
                onClick={() => handleNavigate('/location-photobooth-paris')}
                className="text-gray-700 hover:text-yellow-500 transition-colors font-medium"
              >
                Photobooth sur mesure
              </button>
              <button
                onClick={() => handleNavigate('/photobooth-evenement-paris')}
                className="text-gray-700 hover:text-yellow-500 transition-colors font-medium"
              >
                Événements Privés
              </button>
              <button
                onClick={() => handleNavigate('/animations-photobooth-ia')}
                className="text-gray-700 hover:text-yellow-500 transition-colors font-medium"
              >
                Animations IA
              </button>
              <button
                onClick={() => handleNavigate('/galerie-photobooth-paris')}
                className="text-gray-700 hover:text-yellow-500 transition-colors font-medium"
              >
                Galerie
              </button>
              <button
                onClick={() => handleNavigate('/devis-photobooth-gratuit')}
                className="bg-yellow-400 text-black px-6 py-3 rounded-full hover:bg-yellow-500 transition-colors font-semibold"
              >
                Devis Gratuit
              </button>
            </nav>

            <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Ouvrir le menu">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-gray-100">
              <div className="flex flex-col space-y-4 pt-4">
                <button
                  onClick={() => handleNavigate('/')}
                  className="text-gray-700 hover:text-yellow-500 transition-colors font-medium text-left"
                >
                  Accueil
                </button>
                <button
                  onClick={() => handleNavigate('/services')}
                  className="text-gray-700 hover:text-yellow-500 transition-colors font-medium text-left"
                >
                  Services
                </button>
                <button
                  onClick={() => handleNavigate('/location-photobooth-paris')}
                  className="text-gray-700 hover:text-yellow-500 transition-colors font-medium text-left"
                >
                  Photobooth sur mesure
                </button>
                <button
                  onClick={() => handleNavigate('/photobooth-evenement-paris')}
                  className="text-gray-700 hover:text-yellow-500 transition-colors font-medium text-left"
                >
                  Événements Privés
                </button>
                <button
                  onClick={() => handleNavigate('/animations-photobooth-ia')}
                  className="text-gray-700 hover:text-yellow-500 transition-colors font-medium text-left"
                >
                  Animations IA
                </button>
                <button
                  onClick={() => handleNavigate('/galerie-photobooth-paris')}
                  className="text-gray-700 hover:text-yellow-500 transition-colors font-medium text-left"
                >
                  Galerie
                </button>
                <button
                  onClick={() => handleNavigate('/devis-photobooth-gratuit')}
                  className="bg-yellow-400 text-black px-6 py-3 rounded-full hover:bg-yellow-500 transition-colors font-semibold text-center"
                >
                  Devis Gratuit
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden pt-20" role="main">
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/de55ql9ig/image/upload/v1756227090/photobooth-home-page-the-pix-2_cf69jw.jpg"
            alt="Photobooth BoostPix premium pour événements à Paris - Design moderne et élégant"
            className="w-full h-full object-cover"
            loading="eager"
            width="1920"
            height="1080"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-3xl text-white">
              <div className="text-lg text-yellow-400 mb-4 font-medium">
                Location de Photobooth à Paris & Île-de-France
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 lg:mb-8 leading-tight">
                L'expérience <span className="text-yellow-400"> visuelle</span>
                <br /> qui transforme vos événements
              </h1>
              <p className="text-lg sm:text-xl text-gray-200 mb-8 lg:mb-10 leading-relaxed">
                BoostPix propose des expériences photobooth premium alliant technologie, design et personnalisation.
                Offrez à vos invités un souvenir inoubliable et renforcez l'image de votre marque.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => handleNavigate('/location-photobooth-paris')}
                  className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition-colors"
                >
                  Découvrir nos photobooths
                </button>
                <button
                  onClick={() => handleNavigate('/devis-photobooth-gratuit')}
                  className="bg-white/10 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/20 transition-colors border border-white/30"
                >
                  Demander un devis
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The remainder of the original one-page content */}
      <section className="py-20 bg-white" aria-label="Nos spécialités">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4" id="specialites">
              Nos Spécialités
            </h2>
            <p className="text-xl text-gray-600">Deux univers d'expertise pour des événements d'exception</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <article id="entreprises" className="group">
              <div className="relative overflow-hidden rounded-3xl mb-8">
                <img
                  src="https://res.cloudinary.com/de55ql9ig/image/upload/v1755009862/1695400262_asi1fg.jpg"
                  alt="Événements entreprise avec photobooth BoostPix - Séminaires et soirées corporate à Paris"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  width="700"
                  height="500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-3xl font-bold mb-2">Événements Entreprise</h3>
                  <p className="text-gray-200 max-w-md">
                    Des expériences immersives pour vos séminaires, lancements de produits et soirées corporate.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-3xl shadow-lg p-8 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h4 className="text-xl font-semibold text-black">Animations sur mesure</h4>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Personnalisation complète, intégration de votre identité visuelle et options interactives pour engager vos collaborateurs.
                </p>
                <button
                  onClick={() => handleNavigate('/services')}
                  className="text-yellow-500 font-semibold hover:text-yellow-600 transition-colors flex items-center space-x-2"
                >
                  <span>Découvrir nos services</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>

            <article id="mariages" className="group">
              <div className="relative overflow-hidden rounded-3xl mb-8">
                <img
                  src="https://res.cloudinary.com/de55ql9ig/image/upload/v1755009862/Design_sans_titre_2_knsskg.png"
                  alt="Photobooth mariage élégant BoostPix"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  width="700"
                  height="500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-3xl font-bold mb-2">Événements Privés</h3>
                  <p className="text-gray-200 max-w-md">
                    Mariages, anniversaires, célébrations familiales : capturez l'émotion avec une touche premium.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-3xl shadow-lg p-8 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5" />
                  </div>
                  <h4 className="text-xl font-semibold text-black">Souvenirs inoubliables</h4>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Albums personnalisés, impressions instantanées et accompagnement dédié pour créer des moments uniques.
                </p>
                <button
                  onClick={() => handleNavigate('/photobooth-evenement-paris')}
                  className="text-yellow-500 font-semibold hover:text-yellow-600 transition-colors flex items-center space-x-2"
                >
                  <span>Voir nos offres</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Services Highlights */}
      <section className="py-20 bg-gray-50" id="services">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-10">
            <article className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mb-6">
                <Camera className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4" id="photobooth-sur-mesure">
                Photobooth sur mesure
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Des expériences visuelles personnalisées pour marquer chaque événement. Conception graphique, décors sur mesure et technologies immersives.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-gray-700">Design et interface personnalisés</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-gray-700">Impression instantanée (format au choix)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-gray-700">Installation & démontage inclus</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-gray-700">Accompagnement technique</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-gray-700">Fonctionnalités IA disponibles</span>
                </li>
              </ul>
              <button
                onClick={() => handleNavigate('/location-photobooth-paris')}
                className="text-yellow-500 font-semibold hover:text-yellow-600 transition-colors flex items-center space-x-2"
              >
                <span>👉 En savoir plus</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </article>

            <article className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4" id="photographe-connecte">Photographe connecté</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Photographe professionnel avec galerie en ligne, partage instantané et diffusion live sur écran ou borne.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-gray-700">Galerie photo en temps réel</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-gray-700">Partage via QR code ou mail</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-gray-700">Couverture de l'événement</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-gray-700">Option selfie direct invité</span>
                </li>
              </ul>
              <button
                onClick={() => handleNavigate('/photographe-connecte-ia')}
                className="text-yellow-500 font-semibold hover:text-yellow-600 transition-colors flex items-center space-x-2"
              >
                <span>👉 En savoir plus</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </article>

            <article className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4" id="animations-photobooth-ia">
                Animations Photobooth IA
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Des photos spectaculaires grâce à l'IA : décors virtuels, effets visuels et animations créatives en temps réel.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-gray-700">Arrière-plans immersifs sans fond vert</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-gray-700">Effets visuels dynamiques et sur mesure</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-gray-700">Partage instantané sur tous les supports</span>
                </li>
              </ul>
              <button
                onClick={() => handleNavigate('/animations-photobooth-ia')}
                className="text-yellow-500 font-semibold hover:text-yellow-600 transition-colors flex items-center space-x-2"
              >
                <span>En savoir plus</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </article>
          </div>
        </div>
      </section>

      {/* Additional sections from the original homepage */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-black mb-6">Une expérience photobooth clé en main</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Nous vous accompagnons de la conception à la mise en œuvre pour sublimer vos événements. Notre équipe s'occupe de tout :
                scénographie, installation, animation et suivi.
              </p>
              <ul className="space-y-4">
                {['Brief créatif et storyboard', 'Décor et branding sur mesure', 'Technicien dédié le jour J', 'Support post-événement'].map(item => (
                  <li key={item} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 rounded-3xl p-10 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-black mb-4">Accompagnement personnalisé</h3>
              <p className="text-gray-600 leading-relaxed">
                Chaque prestation est co-construite avec vous. Nous adaptons les formats, le design, les technologies et les parcours utilisateurs pour répondre à vos objectifs.
              </p>
              <button
                onClick={() => handleNavigate('/devis-photobooth-gratuit')}
                className="mt-8 bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition-colors self-start"
              >
                Parler de votre projet
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer
        onPhotoboothDetails={() => handleNavigate('/location-photobooth-paris')}
        onSEOPage={() => handleNavigate('/location-de-photobooth-a-paris-avec-the-pix')}
        arrondissementLinks={arrondissementLinks}
      />
    </div>
  );
};

export default HomePage;

