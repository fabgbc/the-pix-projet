import React from 'react';
import {
  ArrowLeft,
  Camera,
  Sparkles,
  Users,
  Zap,
  Eye,
  Palette,
  Clock,
  Award,
  Star,
  Check,
  ChevronRight,
  Bot,
  Wand2,
  Image as ImageIcon,
  Layers,
  Shuffle,
  Timer,
  Trophy
} from 'lucide-react';
import HomeSectionLink from './HomeSectionLink';
import Footer from './Footer';

interface AIAnimationsPageProps {
  onBack: () => void;
  onDemoRequest: () => void;
  onPhotoboothDetails?: () => void;
  onSEOPage?: () => void;
  onParis1Page?: () => void;
  onParis2Page?: () => void;
  onParis3Page?: () => void;
  onParis4Page?: () => void;
  onParis5Page?: () => void;
  onParis6Page?: () => void;
  onParis7Page?: () => void;
  onParis8Page?: () => void;
  onParis9Page?: () => void;
  onQuoteRequest?: () => void;
}

const AIAnimationsPage: React.FC<AIAnimationsPageProps> = ({ onBack, onDemoRequest, onPhotoboothDetails, onSEOPage, onParis1Page, onParis2Page, onParis3Page, onParis4Page, onParis5Page, onParis6Page, onParis7Page, onParis8Page, onParis9Page, onQuoteRequest }) => {
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
                onClick={onPhotoboothDetails || onBack}
                className="text-gray-700 hover:text-yellow-500 transition-colors font-medium"
              >
                Photobooth sur mesure
              </button>
              <HomeSectionLink label="Événements Privés" targetId="mariages" onBack={onBack} />
              <span className="text-yellow-500 font-medium cursor-default">
                Animations IA
              </span>
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
            src="https://res.cloudinary.com/de55ql9ig/image/upload/v1755251264/Design_sans_titre_4_ajzjcq.png" 
            alt="Animations Photobooth IA - Expériences visuelles révolutionnaires avec intelligence artificielle"
            className="w-full h-full object-cover opacity-40"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/0"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Animations Photobooth
              <span className="text-yellow-400 relative">
                {' '}IA
                <div className="absolute -bottom-2 left-0 w-full h-3 bg-yellow-400 -z-10"></div>
              </span>
            </h1>
            <h2 className="text-2xl lg:text-3xl font-semibold mb-8 text-gray-200">
              Créez l'exceptionnel
            </h2>
            <p className="text-xl lg:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl">
              Des expériences visuelles sur mesure grâce à l'Intelligence Artificielle
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#ia-service" className="bg-yellow-400 text-black px-10 py-4 rounded-full hover:bg-yellow-500 transition-colors font-semibold text-lg inline-block text-center">
                Découvrir nos animations IA
              </a>
              <button 
                onClick={onDemoRequest}
                className="border-2 border-white text-white px-10 py-4 rounded-full hover:bg-white hover:text-black transition-colors font-semibold text-lg"
              >
                Demander une démo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section id="ia-service" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Bot className="w-8 h-8 text-black" />
            </div>
            <h2 className="text-4xl font-bold text-black mb-8">
              L'Intelligence Artificielle au Service de Vos Événements
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Nous transformons vos événements en souvenirs uniques grâce à la puissance de l'IA. 
              Personnalisation en temps réel, décors virtuels immersifs et interactions créatives 
              pour une expérience photographique révolutionnaire qui marquera les esprits de vos invités.
            </p>
          </div>
        </div>
      </section>

      {/* Personnalisation en temps réel */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-8">
                <Wand2 className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-black mb-8">
                Personnalisation en
                <span className="text-yellow-400 relative">
                  {' '}Temps Réel
                  <div className="absolute -bottom-1 left-0 w-full h-2 bg-yellow-400 -z-10"></div>
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Notre technologie IA révolutionnaire adapte chaque photo à votre événement et à vos invités 
                en quelques secondes, créant des expériences uniques et personnalisées.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">Custom Prompt 2.0</h3>
                    <p className="text-gray-600">
                      Génération d'images sur mesure basée sur vos instructions spécifiques. 
                      Thèmes, ambiances et styles adaptés à votre événement.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">PersonaFX</h3>
                    <p className="text-gray-600">
                      Reconnaissance et adaptation automatique selon le profil de chaque invité. 
                      Effets personnalisés et suggestions intelligentes.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Eye className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">Galerie Partagée Privée</h3>
                    <p className="text-gray-600">
                      Accès instantané à toutes les créations via QR code. 
                      Partage sécurisé et téléchargement haute résolution.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">Traitement Optimisé</h3>
                    <p className="text-gray-600">
                      Algorithmes IA optimisés pour des créations de qualité professionnelle. 
                      Le temps d'attente en vaut la peine pour un résultat exceptionnel.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative mt-24">
              <img 
                src="https://res.cloudinary.com/de55ql9ig/image/upload/v1755249074/Design_sans_titre_1_rttovw.png" 
                alt="Expériences créatives IA - Animations et effets visuels avancés"
                className="w-full h-auto rounded-2xl scale-[2.06] mt-16"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Expériences créatives */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img 
                  src="https://res.cloudinary.com/de55ql9ig/image/upload/v1755249793/Design_sans_titre_2_gipyxb.png" 
                  alt="Expériences créatives IA - Animations et effets visuels avancés"
                  className="w-full h-auto rounded-2xl scale-[1.69] mt-16"
                  loading="lazy"
                />
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mb-8">
                <ImageIcon className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-black mb-8">
                Expériences
                <span className="text-yellow-400 relative">
                  {' '}Créatives
                  <div className="absolute -bottom-1 left-0 w-full h-2 bg-yellow-400 -z-10"></div>
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Plongez vos invités dans des univers extraordinaires avec nos animations IA 
                révolutionnaires qui repoussent les limites de la créativité photographique.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shuffle className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">FaceSwap IA</h3>
                    <p className="text-gray-600">
                      Échanges de visages créatifs et amusants entre invités. 
                      Technologie de pointe pour des résultats bluffants et hilarants.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Layers className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">Décors Immersifs à Thème</h3>
                    <p className="text-gray-600">
                      Transportez vos invités dans des univers fantastiques : 
                      plages paradisiaques, châteaux médiévaux, villes futuristes.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">Créations de Groupe Dynamiques</h3>
                    <p className="text-gray-600">
                      Animations collectives intelligentes qui s'adaptent au nombre d'invités. 
                      Mosaïques créatives et compositions artistiques automatiques.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi choisir notre IA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Award className="w-8 h-8 text-black" />
            </div>
            <h2 className="text-4xl font-bold mb-8">
              Pourquoi Choisir Notre
              <span className="text-yellow-400 relative">
                {' '}IA
                <div className="absolute -bottom-1 left-0 w-full h-2 bg-yellow-400 -z-10"></div>
              </span>
              {' '}?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Une technologie de pointe développée spécifiquement pour l'événementiel, 
              garantissant des performances exceptionnelles et une expérience utilisateur optimale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Timer className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Excellence IA</h3>
              <div className="text-3xl font-bold text-yellow-400 mb-2">{"~2min"}</div>
              <p className="text-gray-300">
                Le temps nécessaire pour créer des œuvres d'art uniques. 
                Chaque minute d'attente vaut le résultat exceptionnel.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Trophy className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Qualité Premium</h3>
              <div className="text-3xl font-bold text-yellow-400 mb-2">HD</div>
              <p className="text-gray-300">
                Rendu haute résolution avec une précision photographique 
                digne des plus grands studios.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Forte Interactivité</h3>
              <div className="text-3xl font-bold text-yellow-400 mb-2">100%</div>
              <p className="text-gray-300">
                Interface intuitive et engageante qui captive 
                tous vos invités, quel que soit leur âge.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Star className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Expérience Unique</h3>
              <div className="text-3xl font-bold text-yellow-400 mb-2">∞</div>
              <p className="text-gray-300">
                Possibilités créatives illimitées pour des souvenirs 
                vraiment exceptionnels et mémorables.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Fonctionnalités Avancées
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez toutes les possibilités offertes par notre technologie IA
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-6">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">IA Générative</h3>
              <p className="text-gray-600 mb-4">
                Création d'arrière-plans et d'éléments visuels uniques en temps réel
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-gray-700 text-sm">Styles artistiques variés</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-gray-700 text-sm">Adaptation automatique</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Reconnaissance Avancée</h3>
              <p className="text-gray-600 mb-4">
                Détection intelligente des visages, poses et expressions
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-gray-700 text-sm">Multi-visages simultanés</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-gray-700 text-sm">Analyse des émotions</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-6">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Filtres Intelligents</h3>
              <p className="text-gray-600 mb-4">
                Application automatique de filtres selon le contexte et l'ambiance
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-gray-700 text-sm">Adaptation contextuelle</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-gray-700 text-sm">Rendu naturel</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Effets Spéciaux</h3>
              <p className="text-gray-600 mb-4">
                Animations et effets visuels dynamiques pour plus d'impact
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-gray-700 text-sm">Particules animées</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-gray-700 text-sm">Transitions fluides</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Mode Collaboratif</h3>
              <p className="text-gray-600 mb-4">
                Créations collectives et interactions entre plusieurs utilisateurs
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-gray-700 text-sm">Photos de groupe intelligentes</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-gray-700 text-sm">Compositions automatiques</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Analytics Temps Réel</h3>
              <p className="text-gray-600 mb-4">
                Suivi des interactions et statistiques d'utilisation en direct
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-gray-700 text-sm">Tableau de bord live</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-gray-700 text-sm">Rapports détaillés</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-action final */}
      <section className="py-20 bg-yellow-400">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Sparkles className="w-10 h-10 text-yellow-400" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Prêt à Révolutionner Vos Événements ?
          </h2>
          <p className="text-xl text-gray-800 mb-10 max-w-3xl mx-auto leading-relaxed">
            Découvrez comment nos animations photobooth IA peuvent transformer votre prochain événement 
            en une expérience inoubliable. Contactez-nous pour une démonstration personnalisée.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-black text-white px-10 py-4 rounded-full hover:bg-gray-800 transition-colors font-semibold text-lg flex items-center justify-center space-x-2">
              <span>Contactez-nous pour créer votre expérience sur mesure</span>
              <ChevronRight className="w-5 h-5" />
            </button>
            <button 
              onClick={onDemoRequest}
              className="border-2 border-black text-black px-10 py-4 rounded-full hover:bg-black hover:text-white transition-colors font-semibold text-lg"
            >
              Voir une démonstration
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
          { label: 'Location photobooth Paris 8', onClick: onParis8Page },
          { label: 'Location photobooth Paris 9', onClick: onParis9Page },
        ]}
      />
    </div>
  );
};

export default AIAnimationsPage;