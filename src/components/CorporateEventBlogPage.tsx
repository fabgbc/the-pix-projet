import React, { useMemo } from 'react';
import {
  ArrowLeft,
  Camera,
  Sparkles,
  Users,
  Image as ImageIcon,
  CheckCircle2,
  Layers,
  Gauge,
  Share2,
  MessageCircle,
  TrendingUp,
  Target,
  Building,
  ClipboardList,
} from 'lucide-react';
import NavigationMenu, { NavigationCallbacks } from './NavigationMenu';
import Footer from './Footer';
import { Link } from '../router';

interface CorporateEventBlogPageProps {
  onBack: () => void;
  onQuoteRequest?: () => void;
  onPhotoboothDetails?: () => void;
  onAIAnimations?: () => void;
  onSEOPage?: () => void;
  arrondissementLinks: { label: string; onClick: () => void }[];
}

const CorporateEventBlogPage: React.FC<CorporateEventBlogPageProps> = ({
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
            Inspiration événementielle
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold text-black leading-tight mb-6">
            Le photobooth pour votre événement d'entreprise
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Transformez vos rencontres professionnelles en expériences mémorables grâce à une animation photo immersive,
            connectée et parfaitement alignée sur votre identité de marque.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {onQuoteRequest && (
              <button
                onClick={onQuoteRequest}
                className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition-colors"
              >
                Demander un devis personnalisé
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
                <h2 className="text-3xl font-bold text-black m-0">
                  Créer des souvenirs mémorables
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Dans un paysage professionnel où chaque interaction compte, le photobooth devient le catalyseur de moments
                authentiques. Bien plus qu'un simple appareil photo, il insuffle de l'énergie à vos lancements de produits,
                séminaires ou soirées annuelles en offrant une animation conviviale et immédiate. Le souvenir tangible que
                représentent les tirages papier complète parfaitement l'engagement digital et prolonge l'expérience bien après
                l'événement.
              </p>
              <p className="text-gray-700 leading-relaxed mt-6">
                En optant pour une <Link to="/services" className="text-yellow-600 font-semibold hover:text-yellow-500">borne photobooth</Link>,
                vous combinez technologie et émotion : les collaborateurs repartent avec un souvenir marquant tandis que votre
                marque gagne en visibilité et en capital sympathie.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <div className="bg-gray-50 rounded-3xl p-10">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-500 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black m-0">L'évolution des événements d'entreprise</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Les rencontres professionnelles ne se limitent plus aux présentations formelles. Elles sont devenues des moments
                de partage, de co-création et de networking. L'animation photobooth symbolise cette transition : chaque invité
                devient acteur de l'événement et repart avec un souvenir fidèle à l'atmosphère que vous souhaitez transmettre.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                {[
                  {
                    icon: Users,
                    title: 'Interactions facilitées',
                    description:
                      'Brisez la glace dès l’accueil et encouragez les rencontres informelles entre vos collaborateurs et invités.',
                  },
                  {
                    icon: MessageCircle,
                    title: 'Expérience partagée',
                    description:
                      'Chaque photo devient un prétexte à la conversation et nourrit l’esprit d’équipe au-delà des réunions officielles.',
                  },
                  {
                    icon: Building,
                    title: 'Image de marque renforcée',
                    description:
                      'Une scénographie cohérente véhicule un message moderne et innovant auprès de vos partenaires.',
                  },
                ].map(({ icon: Icon, title, description }) => (
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
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black m-0">Les avantages clés pour votre entreprise</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Souvenirs tangibles',
                    description:
                      'Des impressions instantanées premium que vos invités conserveront longtemps, rappelant l’expérience partagée.',
                  },
                  {
                    title: 'Animation inclusive',
                    description:
                      'Une activité accessible à tous qui dynamise les temps forts et libère la créativité des équipes.',
                  },
                  {
                    title: 'Amplification sociale',
                    description:
                      'Partage direct sur les réseaux sociaux pour étendre la portée de votre événement et générer du contenu authentique.',
                  },
                  {
                    title: 'Engagement mesurable',
                    description:
                      'Collecte de données volontaire (emails, hashtags, feedback) afin de prolonger la relation après l’événement.',
                  },
                ].map(item => (
                  <div key={item.title} className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-5 h-5 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-black mb-2">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mb-16">
            <div className="bg-gray-50 rounded-3xl p-10">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-purple-500 flex items-center justify-center">
                  <Layers className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black m-0">Comment choisir le bon photobooth ?</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Un dispositif adapté à votre culture d’entreprise et à vos objectifs repose sur quatre piliers essentiels.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                {[
                  {
                    icon: Target,
                    title: 'Personnalisation totale',
                    description:
                      'Habillage graphique, accessoires et messages sur mesure pour refléter votre identité de marque.',
                  },
                  {
                    icon: Gauge,
                    title: 'Technologie intuitive',
                    description:
                      'Écran tactile fluide, impression à sublimation thermique et options digitales telles que GIF ou réalité augmentée.',
                  },
                  {
                    icon: ClipboardList,
                    title: 'Expérience fluide',
                    description:
                      'Un parcours utilisateur simple pour garantir l’autonomie des participants sans assistance permanente.',
                  },
                  {
                    icon: ImageIcon,
                    title: 'Logistique maîtrisée',
                    description:
                      'Installation rapide, format compact et mobilité pour s’intégrer facilement à votre espace de réception.',
                  },
                ].map(({ icon: Icon, title, description }) => (
                  <div key={title} className="bg-white rounded-2xl p-6 border border-white/60 shadow-sm">
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
                <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center">
                  <Share2 className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black m-0">Intégrer le photobooth à votre communication</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Chaque photo devient un média. Encouragez le partage via un hashtag dédié, alimentez vos newsletters avec les
                meilleurs clichés et animez vos réseaux sociaux en temps réel. Grâce à la collecte consentie d’adresses email,
                vous prolongez la conversation avec vos invités et mesurez l’impact de votre événement.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                {[
                  'Tableaux de bord pour suivre l’engagement en direct.',
                  'Galeries privées en ligne pour prolonger l’expérience.',
                  'Réutilisation des visuels dans vos rapports et bilans annuels.',
                  'Activation marketing post-événement via campagnes ciblées.',
                ].map(item => (
                  <div key={item} className="flex items-start space-x-3">
                    <div className="w-9 h-9 rounded-full bg-yellow-100 flex items-center justify-center mt-1">
                      <CheckCircle2 className="w-5 h-5 text-yellow-600" />
                    </div>
                    <p className="text-gray-600 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mb-12">
            <div className="bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-100 rounded-3xl p-10">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-yellow-500 flex items-center justify-center">
                  <Target className="w-6 h-6 text-black" />
                </div>
                <h2 className="text-3xl font-bold text-black m-0">Passez à l’action</h2>
              </div>
              <p className="text-gray-800 leading-relaxed mb-6">
                Offrez à vos collaborateurs une expérience photo qui marque les esprits et renforce la cohésion d’équipe. En
                intégrant un photobooth à votre prochain événement professionnel, vous créez un souvenir fort, partageable et
                aligné sur votre stratégie de communication.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                {onQuoteRequest && (
                  <button
                    onClick={onQuoteRequest}
                    className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-900 transition-colors"
                  >
                    Parler de votre projet
                  </button>
                )}
                <Link
                  to="/services"
                  className="px-8 py-3 rounded-full border border-black text-black font-semibold hover:bg-black hover:text-white transition-colors text-center"
                >
                  Explorer les options photobooth
                </Link>
              </div>
            </div>
          </section>
        </article>
      </main>

      <Footer onSEOPage={onSEOPage} onPhotoboothDetails={onPhotoboothDetails} arrondissementLinks={arrondissementLinks} />
    </div>
  );
};

export default CorporateEventBlogPage;
