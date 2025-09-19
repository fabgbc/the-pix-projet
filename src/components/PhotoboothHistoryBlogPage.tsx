import React, { useMemo } from 'react';
import {
  ArrowLeft,
  Camera,
  Sparkles,
  History,
  Clock,
  Landmark,
  Globe,
  Building2,
  Users,
  PartyPopper,
  MapPin,
  Palette,
  Settings,
  Smartphone,
} from 'lucide-react';
import NavigationMenu, { NavigationCallbacks } from './NavigationMenu';
import Footer from './Footer';
import { Link } from '../router';

type ArrondissementLink = { label: string; onClick: () => void };

interface PhotoboothHistoryBlogPageProps {
  onBack: () => void;
  onQuoteRequest?: () => void;
  onPhotoboothDetails?: () => void;
  onAIAnimations?: () => void;
  onSEOPage?: () => void;
  arrondissementLinks: ArrondissementLink[];
}

const timeline = [
  {
    year: 'Début des années 1920',
    title: 'Anatol Josepho imagine une cabine autonome',
    description:
      "Ingénieur d'origine sibérienne installé à New York, Anatol Josepho conçoit un dispositif photo entièrement automatique qui libère les habitants des studios traditionnels.",
  },
  {
    year: '1925',
    title: 'Première installation sur Broadway',
    description:
      "Le Photomaton de Josepho est dévoilé sur Broadway. En huit minutes, il délivre huit portraits et attire des foules prêtes à patienter des heures pour vivre l'expérience.",
  },
  {
    year: 'Fin des années 1920',
    title: 'Une expansion mondiale',
    description:
      "Des cabines s'installent à Paris, Londres et Berlin. Les foires et carnavals adoptent rapidement le photobooth, devenu une attraction incontournable.",
  },
];

const culturalHighlights = [
  {
    title: 'Un média populaire',
    description:
      "Le photobooth capture la vie quotidienne : rires d'amis, déclarations d'amour et souvenirs de fête composent des bandes photo devenues objets de collection.",
    icon: Globe,
  },
  {
    title: 'Une icône urbaine',
    description:
      "À Paris, les cabines s'intègrent aux gares et aux rues animées. Elles deviennent un repère culturel, notamment pour la scène artistique et les amoureux de la capitale.",
    icon: Landmark,
  },
  {
    title: 'Un terrain d’expression',
    description:
      "De nombreux artistes et réalisateurs utilisent le photobooth comme laboratoire créatif pour raconter des histoires instantanées et intimes.",
    icon: Sparkles,
  },
];

const corporateBenefits = [
  {
    title: 'Cohésion renforcée',
    description:
      "La cabine crée un rituel collectif où les équipes se prêtent au jeu. Les tirages et animations laissent une trace tangible de votre culture d’entreprise.",
    icon: Users,
  },
  {
    title: 'Visibilité de marque',
    description:
      "Chaque support photo est personnalisable : habillage cabine, interface tactile et gabarits de tirage prolongent votre storytelling événementiel.",
    icon: Building2,
  },
  {
    title: 'Activation fluide',
    description:
      "Notre équipe BoostPix gère installation, assistance et partages digitaux pour dynamiser vos lancements, séminaires et soirées clients.",
    icon: PartyPopper,
  },
];

const parisAdvantages = [
  {
    title: 'Une touche locale sur-mesure',
    description:
      "Scénographies inspirées des quartiers parisiens, messages bilingues et accessoires iconiques créent une expérience immersive pour vos invités.",
    icon: MapPin,
  },
  {
    title: 'Personnalisation totale',
    description:
      "De la charte graphique aux filtres IA, chaque détail est configuré pour refléter votre identité et les ambitions de votre événement.",
    icon: Palette,
  },
  {
    title: 'Installation rapide',
    description:
      "Nos équipes anticipent contraintes d’accès, alimentation électrique et flux visiteurs pour un déploiement express dans tout Paris.",
    icon: Settings,
  },
];

const PhotoboothHistoryBlogPage: React.FC<PhotoboothHistoryBlogPageProps> = ({
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
            Histoire & culture
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold text-black leading-tight mb-6">
            Quand a été inventé le photobooth&nbsp;?
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Le photobooth, imaginé par Anatol Josepho dans les années 1920, fait ses débuts sur Broadway avant de conquérir Paris.
            Devenu symbole de convivialité, il anime aujourd’hui les événements d’entreprise les plus exigeants.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {onQuoteRequest && (
              <button
                onClick={onQuoteRequest}
                className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition-colors"
              >
                Imaginer votre animation photobooth
              </button>
            )}
            <Link
              to="/services"
              className="px-8 py-3 rounded-full border border-gray-900 text-gray-900 font-semibold hover:bg-gray-900 hover:text-white transition-colors"
            >
              Découvrir nos services photobooth
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
                <h2 className="text-3xl font-bold text-black m-0">L’ère du photobooth&nbsp;: un incontournable des événements</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Dès ses premiers jours, le photobooth s’impose comme une expérience sociale. Les invités entrent en cabine pour immortaliser un instant, repartent avec un souvenir tangible et partagent le rire provoqué par les poses improvisées. Cette magie spontanée explique pourquoi la borne est devenue la pièce maîtresse des soirées corporate, des lancements de produits et des conventions professionnelles.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <div className="bg-gray-50 rounded-3xl p-10">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-blue-500 flex items-center justify-center">
                  <History className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black m-0">Les origines du photobooth</h2>
              </div>
              <div className="space-y-6">
                {timeline.map(event => (
                  <div key={event.year} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                    <div className="flex items-center space-x-3 text-yellow-600 font-semibold mb-2">
                      <Clock className="w-5 h-5" />
                      <span>{event.year}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-black mb-2">{event.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{event.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mb-16">
            <div className="bg-white border border-gray-100 rounded-3xl p-10 shadow-sm">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-purple-500 flex items-center justify-center">
                  <Camera className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black m-0">L’impact culturel des photobooths</h2>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                {culturalHighlights.map(({ title, description, icon: Icon }) => (
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
                <div className="w-12 h-12 rounded-2xl bg-green-500 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black m-0">Photobooths dans les événements d’entreprise</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-8">
                Aujourd’hui, les entreprises parisiennes utilisent le photobooth comme un outil d’engagement. Il favorise les rencontres entre services, dynamise les conventions et nourrit votre communication interne et externe. Chez BoostPix, nous scénographions des expériences sur mesure qui allient branding, storytelling et simplicité opérationnelle.
              </p>
              <div className="grid gap-6 md:grid-cols-3">
                {corporateBenefits.map(({ title, description, icon: Icon }) => (
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
                <div className="w-12 h-12 rounded-2xl bg-yellow-400 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-black" />
                </div>
                <h2 className="text-3xl font-bold text-black m-0">Découvrez tous nos services photobooth</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Notre studio imagine des dispositifs qui répondent aux enjeux de votre marque : bornes connectées, expériences 360°, effets IA ou décors immersifs. Chaque projet est orchestré avec un accompagnement humain pour garantir fluidité et impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/services"
                  className="px-8 py-3 rounded-full border border-gray-900 text-gray-900 font-semibold hover:bg-gray-900 hover:text-white transition-colors text-center"
                >
                  Explorer les services BoostPix
                </Link>
                {onQuoteRequest && (
                  <button
                    onClick={onQuoteRequest}
                    className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition-colors"
                  >
                    Demander un devis personnalisé
                  </button>
                )}
              </div>
            </div>
          </section>

          <section className="mb-16">
            <div className="bg-gray-50 rounded-3xl p-10">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-red-500 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black m-0">Avantages de la location d’un photobooth à Paris</h2>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                {parisAdvantages.map(({ title, description, icon: Icon }) => (
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
                <div className="w-12 h-12 rounded-2xl bg-teal-500 flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black m-0">Le photobooth aujourd’hui</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                À l’heure du selfie, le photobooth renoue avec sa vocation originelle : donner à chacun la possibilité de se mettre en scène. Les technologies connectées, le partage instantané et les effets augmentés renforcent la portée de chaque cliché, sur site comme en ligne.
              </p>
              <p className="text-gray-700 leading-relaxed">
                BoostPix met cette histoire au service de vos événements : expérience fluide pour vos invités, collecte de données qualifiées et contenus calibrés pour vos réseaux sociaux. Un héritage centenaire transformé en activation moderne.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                {onAIAnimations && (
                  <button
                    onClick={onAIAnimations}
                    className="px-8 py-3 rounded-full border border-gray-900 text-gray-900 font-semibold hover:bg-gray-900 hover:text-white transition-colors"
                  >
                    Explorer nos effets IA
                  </button>
                )}
                <Link
                  to="/devis-photobooth-gratuit"
                  className="px-8 py-3 rounded-full bg-yellow-400 text-black font-semibold hover:bg-yellow-500 transition-colors text-center"
                >
                  Planifier votre prochaine animation
                </Link>
              </div>
            </div>
          </section>

          <div className="text-center">
            <Link
              to="/blog-photobooth-paris"
              className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors font-semibold"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Retour au blog</span>
            </Link>
          </div>
        </article>
      </main>

      <Footer
        onSEOPage={onSEOPage}
        onPhotoboothDetails={onPhotoboothDetails}
        arrondissementLinks={arrondissementLinks}
      />
    </div>
  );
};

export default PhotoboothHistoryBlogPage;
