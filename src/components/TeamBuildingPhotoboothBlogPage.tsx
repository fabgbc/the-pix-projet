import React, { useMemo } from 'react';
import {
  ArrowLeft,
  Camera,
  Sparkles,
  ClipboardList,
  Handshake,
  Users,
  Laugh,
  Image as ImageIcon,
  Film,
  HelpCircle,
  Palette,
  Target,
  Stars,
} from 'lucide-react';
import NavigationMenu, { NavigationCallbacks } from './NavigationMenu';
import Footer from './Footer';
import { Link } from '../router';

interface TeamBuildingPhotoboothBlogPageProps {
  onBack: () => void;
  onQuoteRequest?: () => void;
  onPhotoboothDetails?: () => void;
  onAIAnimations?: () => void;
  onSEOPage?: () => void;
  arrondissementLinks: { label: string; onClick: () => void }[];
}

const TeamBuildingPhotoboothBlogPage: React.FC<TeamBuildingPhotoboothBlogPageProps> = ({
  onBack,
  onQuoteRequest,
  onPhotoboothDetails,
  onAIAnimations,
  onSEOPage,
  arrondissementLinks,
}) => {
  const navigationCallbacks = useMemo<NavigationCallbacks>(
    () => ({
      '/': onBack,
      ...((onPhotoboothDetails || onSEOPage)
        ? { '/location-photobooth-paris': onPhotoboothDetails ?? onSEOPage }
        : {}),
      ...(onAIAnimations ? { '/animations-photobooth-ia': onAIAnimations } : {}),
      ...(onQuoteRequest ? { '/devis-photobooth-gratuit': onQuoteRequest } : {}),
    }),
    [onAIAnimations, onBack, onPhotoboothDetails, onQuoteRequest, onSEOPage],
  );

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                <Camera className="w-6 h-6 text-black" />
              </div>
              <span className="text-2xl font-bold text-black">BoostPix</span>
            </div>

            <NavigationMenu className="hidden lg:flex" onNavigate={navigationCallbacks} />

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

      <section className="bg-gradient-to-b from-yellow-50/70 via-white to-white pt-28 pb-20 mt-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 font-semibold mb-6">
            Team building & cohésion
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold text-black leading-tight mb-6">
            Organiser un team building avec un photobooth&nbsp;: les 5 animations à réaliser
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Transformez votre prochain séminaire ou journée d'équipe en une expérience fédératrice où chaque collaborateur repart
            avec un souvenir vibrant et un sentiment de cohésion renforcé.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {onQuoteRequest && (
              <button
                onClick={onQuoteRequest}
                className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition-colors"
              >
                Construire votre animation sur mesure
              </button>
            )}
            <Link
              to="/services"
              className="px-8 py-3 rounded-full border border-gray-900 text-gray-900 font-semibold hover:bg-gray-900 hover:text-white transition-colors"
            >
              Découvrir nos services
            </Link>
          </div>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-6 pb-24">
        <article className="prose prose-lg max-w-none">
          <section className="mb-16">
            <div className="bg-white border border-gray-100 rounded-3xl p-10 shadow-sm">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-yellow-400 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-black" />
                </div>
                <h2 className="text-3xl font-bold text-black m-0">Pourquoi miser sur le photobooth pour un team building&nbsp;?</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Le photobooth crée un terrain de jeu commun où les équipes se lâchent, rient et construisent un récit collectif.
                En quelques minutes, les barrières hiérarchiques tombent et l'atelier devient un souvenir tangible grâce aux
                tirages personnalisés. La borne permet aussi de capitaliser sur le digital via des partages instantanés ou une
                galerie connectée pour prolonger l'expérience au bureau.
              </p>
              <p className="text-gray-700 leading-relaxed mt-6">
                Avec BoostPix, chaque détail est scénographié selon votre culture d'entreprise&nbsp;: décors, accessoires, messages
                à l'écran et effets IA s'alignent pour servir votre objectif de cohésion comme votre image employeur.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <div className="bg-gray-50 rounded-3xl p-10">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-500 flex items-center justify-center">
                  <ClipboardList className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black m-0">Bien préparer votre animation photobooth</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {[{
                  title: 'Clarifier vos objectifs',
                  description:
                    "Définissez si vous souhaitez favoriser l'intégration des nouvelles recrues, célébrer une réussite ou animer un séminaire pour adapter le ton des animations.",
                  icon: Target,
                },
                {
                  title: 'Imaginer un décor immersif',
                  description:
                    'Nous concevons un espace chaleureux et identitaire, avec fond de scène, accessoires et éclairages adaptés à votre marque.',
                  icon: Palette,
                },
                {
                  title: 'Préparer la communication',
                  description:
                    'Invitations, signalétique et teaser sur votre intranet donnent envie aux équipes de participer avant même le jour J.',
                  icon: Stars,
                },
                {
                  title: 'Fluidifier la logistique',
                  description:
                    "Installation, assistant dédié et partage numérique sont planifiés à l'avance pour garantir un déroulé sans accroc.",
                  icon: Handshake,
                }].map(({ title, description, icon: Icon }) => (
                  <div key={title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                    <Icon className="w-8 h-8 text-yellow-500 mb-4" />
                    <h3 className="text-xl font-semibold text-black mb-2">{title}</h3>
                    <p className="text-gray-600 leading-relaxed">{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mb-16">
            <div className="bg-white border border-gray-100 rounded-3xl p-10 shadow-sm">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-green-500 flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black m-0">Les 5 animations à vivre avec vos équipes</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {[{
                  title: 'Photo de groupe impactante',
                  description:
                    'Créez un portrait XXL de votre équipe avec un cadrage soigné, des messages inspirants et un tirage géant à afficher au bureau.',
                  icon: ImageIcon,
                },
                {
                  title: 'Selfie collaboratif',
                  description:
                    'Chaque participant ajoute un élément visuel ou un mot-clé sur l’écran tactile pour composer une mosaïque finale à partager.',
                  icon: Handshake,
                },
                {
                  title: 'Battle de grimaces',
                  description:
                    "Deux équipes s'affrontent en mode chronométré avec décompte et effets IA amusants pour couronner les expressions les plus originales.",
                  icon: Laugh,
                },
                {
                  title: 'Montage souvenir express',
                  description:
                    'Nous assemblons en direct une courte vidéo vertical avec vos meilleures prises et un habillage graphique reprenant votre univers.',
                  icon: Film,
                },
                {
                  title: 'Quiz photobooth',
                  description:
                    'Les collaborateurs répondent à des questions qui déclenchent poses imposées, accessoires à utiliser ou messages à transmettre à leurs collègues.',
                  icon: HelpCircle,
                }].map(({ title, description, icon: Icon }) => (
                  <div key={title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                    <Icon className="w-8 h-8 text-yellow-500 mb-4" />
                    <h3 className="text-xl font-semibold text-black mb-2">{title}</h3>
                    <p className="text-gray-600 leading-relaxed">{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mb-16">
            <div className="bg-gray-50 rounded-3xl p-10">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-purple-500 flex items-center justify-center">
                  <Stars className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black m-0">Personnaliser chaque détail</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Charte graphique, messages d'encouragement, filtres IA ou cadres aux couleurs de votre équipe&nbsp;: nous ajustons chaque
                élément pour valoriser vos valeurs. Les impressions peuvent être accompagnées d'un QR code renvoyant vers une
                plateforme RH, un formulaire de feedback ou la suite du programme de team building.
              </p>
              <p className="text-gray-700 leading-relaxed mt-6">
                Vous souhaitez aller plus loin&nbsp;? Associez le photobooth à une animation <Link to="/animations-photobooth-ia" className="text-yellow-600 font-semibold hover:text-yellow-500">IA créative</Link> ou à
                un <Link to="/photographe-connecte-ia" className="text-yellow-600 font-semibold hover:text-yellow-500">photographe connecté</Link> pour capter encore plus de contenus dynamiques durant votre événement.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <div className="bg-yellow-50 border border-yellow-100 rounded-3xl p-10">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-yellow-400 flex items-center justify-center">
                  <Camera className="w-6 h-6 text-black" />
                </div>
                <h2 className="text-3xl font-bold text-black m-0">Prêt à lancer votre prochain team building&nbsp;?</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Nous vous accompagnons de la définition du concept au suivi post-événement, en passant par la scénographie et la
                gestion des souvenirs imprimés ou numériques. Partagez-nous vos objectifs et vos contraintes logistiques&nbsp;: notre
                équipe conçoit une expérience clé en main qui s'intègre à votre programme de team building.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                {onQuoteRequest && (
                  <button
                    onClick={onQuoteRequest}
                    className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-900 transition-colors"
                  >
                    Demander un accompagnement
                  </button>
                )}
                <button
                  onClick={() => onBack()}
                  className="px-8 py-3 rounded-full border border-gray-900 text-gray-900 font-semibold hover:bg-gray-900 hover:text-white transition-colors"
                >
                  Retour au blog
                </button>
              </div>
            </div>
          </section>
        </article>
      </main>

      <Footer
        onQuoteRequest={onQuoteRequest}
        onPhotoboothDetails={onPhotoboothDetails}
        onAIAnimations={onAIAnimations}
        onSEOPage={onSEOPage}
        arrondissementLinks={arrondissementLinks}
      />
    </div>
  );
};

export default TeamBuildingPhotoboothBlogPage;
