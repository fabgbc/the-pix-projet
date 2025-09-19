import React, { useMemo } from 'react';
import {
  ArrowLeft,
  Camera,
  Sparkles,
  Users,
  Share2,
  Image as ImageIcon,
  Orbit,
  Palette,
  CheckCircle2,
  SlidersHorizontal,
  Cpu,
  CloudUpload,
  ShieldCheck,
  Headset,
  ClipboardList,
  MapPin,
  CalendarClock,
  PartyPopper,
  Megaphone,
  Stars,
} from 'lucide-react';
import NavigationMenu, { NavigationCallbacks } from './NavigationMenu';
import Footer from './Footer';
import { Link } from '../router';

type ArrondissementLink = { label: string; onClick: () => void };

interface ChoosingPhotoboothBlogPageProps {
  onBack: () => void;
  onQuoteRequest?: () => void;
  onPhotoboothDetails?: () => void;
  onAIAnimations?: () => void;
  onSEOPage?: () => void;
  arrondissementLinks: ArrondissementLink[];
}

const experienceHighlights = [
  {
    title: 'Animation instantanée',
    description:
      "Le photobooth devient un point de rendez-vous naturel pour briser la glace et encourager les invités à interagir, même lors d'événements formels.",
    icon: Sparkles,
  },
  {
    title: 'Souvenirs tangibles',
    description:
      "Tirages premium et galeries numériques prolongent l'expérience vécue sur place et renforcent l'attachement à votre événement parisien.",
    icon: ImageIcon,
  },
  {
    title: 'Visibilité de marque',
    description:
      "Chaque photo partagée devient un support de communication où votre identité visuelle et vos messages clés s'invitent naturellement.",
    icon: Share2,
  },
];

const boothOptions = [
  {
    title: 'Photobooth classique',
    description:
      "Une borne ouverte élégante, équipée d'un reflex haute définition et d'un éclairage studio pour des portraits nets et lumineux.",
    usage: 'Mariages, soirées privées, événements premium recherchant un décor raffiné.',
    difference: 'Design personnalisable et format compact pour se fondre dans votre scénographie.',
    icon: Camera,
  },
  {
    title: 'Cabine Photomaton',
    description:
      "Une cabine fermée qui rappelle les cabines urbaines historiques, idéale pour des moments complices en petit comité.",
    usage: 'Activations retail, événements avec flux continu ou besoin d’intimité.',
    difference: 'Expérience nostalgique avec habillage intégral aux couleurs de votre marque.',
    icon: Users,
  },
  {
    title: 'Photobooth 360°',
    description:
      "Plateforme dynamique qui capture vos invités en mouvement pour des vidéos immersives partageables instantanément.",
    usage: 'Lancements de produits, soirées d’entreprise innovantes, expériences sociales virales.',
    difference: 'Effets slow motion, overlays animés et intégration directe aux réseaux sociaux.',
    icon: Orbit,
  },
];

const personalizationIdeas = [
  {
    title: 'Scénographie sur mesure',
    description:
      "Jouez avec des fonds floraux, métalliques ou inspirés des quartiers parisiens pour créer un décor cohérent avec votre identité.",
    icon: Palette,
  },
  {
    title: 'Accessoires thématiques',
    description:
      "Pancartes, accessoires couture ou gadgets futuristes : proposez plusieurs niveaux de lecture pour stimuler la créativité.",
    icon: PartyPopper,
  },
  {
    title: 'Parcours invité fluide',
    description:
      "Positionnez la borne dans un espace visible, proche du bar ou de la scène, afin de capter naturellement le trafic pendant les temps forts.",
    icon: MapPin,
  },
];

const featureChecklist = [
  {
    title: 'Qualité d’image et d’impression',
    description:
      "Capteurs professionnels, éclairage LED et imprimantes sublimation thermique assurent des rendus précis en quelques secondes.",
    icon: CheckCircle2,
  },
  {
    title: 'Interface intuitive',
    description:
      "Ecran tactile, guidage pas-à-pas et animations personnalisées facilitent la prise en main pour tous vos invités.",
    icon: SlidersHorizontal,
  },
  {
    title: 'Fonctionnalités IA et filtres',
    description:
      "Ajoutez des effets génératifs, détourage automatique ou avatars pour un souvenir résolument contemporain.",
    icon: Cpu,
  },
  {
    title: 'Diffusion digitale',
    description:
      "Partage par email, QR code ou galerie en ligne sécurisée pour amplifier l’audience de votre événement.",
    icon: CloudUpload,
  },
];

const providerCriteria = [
  {
    title: 'Accompagnement expert',
    description:
      "Un interlocuteur dédié vous guide de la conception à l’exploitation, avec une équipe technique présente sur place le jour J.",
    icon: Headset,
  },
  {
    title: 'Prestation transparente',
    description:
      "Vérifiez le détail des forfaits, les heures supplémentaires, les options et les éventuels frais de déplacement pour éviter les surprises.",
    icon: ClipboardList,
  },
  {
    title: 'Sécurité et fiabilité',
    description:
      "Contrats clairs, matériel assuré et procédures de sauvegarde des données garantissent une expérience sereine.",
    icon: ShieldCheck,
  },
];

const preparationTimeline = [
  {
    title: 'J-90 à J-60',
    description:
      "Définissez vos objectifs (cohésion, visibilité, collecte de contacts) et sélectionnez le type de photobooth adapté.",
    icon: CalendarClock,
  },
  {
    title: 'J-60 à J-30',
    description:
      "Validez le prestataire, le forfait et la scénographie. Préparez les éléments graphiques : logos, charte, messages.",
    icon: ClipboardList,
  },
  {
    title: 'J-7',
    description:
      "Brief complet avec l’équipe technique, vérification des accès, horaires d’installation et scénarios de secours.",
    icon: ShieldCheck,
  },
  {
    title: 'Jour J',
    description:
      "Un animateur accueille les invités, veille aux flux et encourage le partage sur les réseaux sociaux.",
    icon: Stars,
  },
];

const impactTips = [
  {
    title: 'Lancer l’animation dès l’accueil',
    description:
      "Proposez un premier passage photo lors du cocktail d’arrivée pour instaurer une dynamique conviviale.",
    icon: Megaphone,
  },
  {
    title: 'Créer des défis thématiques',
    description:
      "Invitez les équipes à réaliser une pose imposée ou à révéler un message clé pour cumuler des souvenirs variés.",
    icon: PartyPopper,
  },
  {
    title: 'Capitaliser après l’événement',
    description:
      "Envoyez une galerie personnalisée ou un best-of vidéo pour prolonger l’engagement et remercier vos participants.",
    icon: Share2,
  },
];

const ChoosingPhotoboothBlogPage: React.FC<ChoosingPhotoboothBlogPageProps> = ({
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
            Guide pratique
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold text-black leading-tight mb-6">
            Comment bien choisir le bon photobooth pour votre événement
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Offrez à vos invités une expérience photo mémorable et parfaitement alignée sur votre univers. Ce guide vous aide à
            sélectionner l’animation photobooth idéale pour un événement réussi à Paris.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {onQuoteRequest && (
              <button
                onClick={onQuoteRequest}
                className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition-colors"
              >
                Demander un devis photobooth
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
                <h2 className="text-3xl font-bold text-black m-0">Pourquoi intégrer un photobooth à votre événement&nbsp;?</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Le photobooth s’impose désormais comme un incontournable des événements d’entreprise, mariages ou lancements
                parisiens. Il crée un terrain de jeu collaboratif où les invités échangent, rient et repartent avec un souvenir
                tangible aux couleurs de votre marque.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                {experienceHighlights.map(({ title, description, icon: Icon }) => (
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
                <div className="w-12 h-12 rounded-2xl bg-blue-500 flex items-center justify-center">
                  <Camera className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black m-0">Comparer les principaux types de photobooths</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Chaque format possède ses atouts. Identifiez celui qui correspond à l’ambiance, au volume d’invités et aux
                objectifs de votre événement.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                {boothOptions.map(({ title, description, usage, difference, icon: Icon }) => (
                  <div key={title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                    <Icon className="w-8 h-8 text-yellow-500 mb-4" />
                    <h3 className="text-xl font-semibold text-black mb-3">{title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{description}</p>
                    <div className="bg-yellow-50 rounded-xl p-4 mb-3">
                      <h4 className="text-sm font-semibold text-yellow-800 uppercase tracking-wide mb-1">Idéal pour</h4>
                      <p className="text-sm text-yellow-900 leading-relaxed">{usage}</p>
                    </div>
                    <div className="bg-gray-100 rounded-xl p-4">
                      <h4 className="text-sm font-semibold text-gray-800 uppercase tracking-wide mb-1">Atout signature</h4>
                      <p className="text-sm text-gray-700 leading-relaxed">{difference}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mb-16">
            <div className="bg-white border border-gray-100 rounded-3xl p-10 shadow-sm">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-purple-500 flex items-center justify-center">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black m-0">Intégrer le photobooth à votre scénographie</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Un photobooth réussi se fond naturellement dans le décor. Pensez à coordonner l’habillage, les accessoires et le
                parcours des invités pour créer une expérience immersive.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                {personalizationIdeas.map(({ title, description, icon: Icon }) => (
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
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black m-0">Les fonctionnalités à privilégier</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Au-delà du design, comparez les fonctionnalités proposées par chaque borne pour garantir une expérience fluide et
                qualitative.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                {featureChecklist.map(({ title, description, icon: Icon }) => (
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
                <div className="w-12 h-12 rounded-2xl bg-blue-500 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black m-0">Choisir un prestataire photobooth à Paris</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                L’expertise du prestataire est déterminante pour assurer une installation sans faille et un accompagnement
                réactif tout au long de votre événement.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                {providerCriteria.map(({ title, description, icon: Icon }) => (
                  <div key={title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                    <Icon className="w-8 h-8 text-yellow-500 mb-4" />
                    <h3 className="text-xl font-semibold text-black mb-2">{title}</h3>
                    <p className="text-gray-600 leading-relaxed">{description}</p>
                  </div>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mt-6">
                Prenez le temps de consulter les avis clients, d’examiner des réalisations passées et de vérifier la présence
                d’un support technique sur place. Chez BoostPix, un chef de projet dédié coordonne chaque étape et reste disponible
                le jour J pour ajuster les paramètres selon vos besoins.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <div className="bg-gray-50 rounded-3xl p-10">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-yellow-500 flex items-center justify-center">
                  <CalendarClock className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black m-0">Planifier votre installation photobooth</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Une organisation millimétrée garantit une expérience fluide pour vos invités et laisse de la place aux imprévus
                positifs.
              </p>
              <div className="grid md:grid-cols-4 gap-6 mt-8">
                {preparationTimeline.map(({ title, description, icon: Icon }) => (
                  <div key={title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                    <Icon className="w-8 h-8 text-yellow-500 mb-4" />
                    <h3 className="text-lg font-semibold text-black mb-2">{title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mb-16">
            <div className="bg-white border border-gray-100 rounded-3xl p-10 shadow-sm">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-red-500 flex items-center justify-center">
                  <Megaphone className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black m-0">Maximiser l’impact le jour J</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Une fois la borne installée, animez la séquence photo avec un storytelling engageant pour générer un souvenir
                collectif mémorable.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                {impactTips.map(({ title, description, icon: Icon }) => (
                  <div key={title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                    <Icon className="w-8 h-8 text-yellow-500 mb-4" />
                    <h3 className="text-xl font-semibold text-black mb-2">{title}</h3>
                    <p className="text-gray-600 leading-relaxed">{description}</p>
                  </div>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mt-6">
                Pensez également à intégrer le photobooth à votre stratégie de communication globale : hashtags dédiés, écrans de
                diffusion live ou concours photo renforcent l’engagement sur les réseaux sociaux.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <div className="bg-yellow-50 border border-yellow-100 rounded-3xl p-10 text-center shadow-sm">
              <h2 className="text-3xl font-bold text-black mb-4">Prêt à imaginer votre expérience photobooth&nbsp;?</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                BoostPix conçoit des animations photo premium sur tout Paris : scénographie sur-mesure, technologies innovantes
                et accompagnement terrain pour magnifier vos événements professionnels ou privés.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                {onQuoteRequest && (
                  <button
                    onClick={onQuoteRequest}
                    className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-900 transition-colors"
                  >
                    Créer votre dispositif sur-mesure
                  </button>
                )}
                <Link
                  to="/location-photobooth-paris"
                  className="px-8 py-3 rounded-full border border-gray-900 text-gray-900 font-semibold hover:bg-gray-900 hover:text-white transition-colors"
                >
                  Explorer nos photobooths premium
                </Link>
              </div>
            </div>
          </section>
        </article>
      </main>

      <Footer arrondissementLinks={arrondissementLinks} />
    </div>
  );
};

export default ChoosingPhotoboothBlogPage;
