import React, { useMemo } from 'react';
import {
  ArrowLeft,
  Camera,
  Sparkles,
  Aperture,
  DoorOpen,
  RotateCw,
  Palette,
  LayoutDashboard,
  SlidersHorizontal,
  Wifi,
  Printer,
  ShieldCheck,
  MessageSquare,
  Headset,
  Package,
  CalendarClock,
  MapPin,
  Plug,
  Megaphone,
  Users,
  Share2,
} from 'lucide-react';
import NavigationMenu, { NavigationCallbacks } from './NavigationMenu';
import Footer from './Footer';
import { Link } from '../router';

interface ChoosingPhotoboothBlogPageProps {
  onBack: () => void;
  onQuoteRequest?: () => void;
  onPhotoboothDetails?: () => void;
  onAIAnimations?: () => void;
  onSEOPage?: () => void;
  arrondissementLinks: { label: string; onClick: () => void }[];
}

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

  const photoboothTypes = [
    {
      title: 'La borne photobooth classique',
      description:
        'Une installation compacte, tactile et intuitive qui capture des photos haute définition. Idéale pour les cocktails, séminaires et soirées de networking.',
      icon: Aperture,
    },
    {
      title: 'La cabine Photomaton revisitée',
      description:
        'Une structure fermée qui offre un cocon ludique et garantit une ambiance intimiste. Parfaite pour créer un rituel de passage et multiplier les fous rires.',
      icon: DoorOpen,
    },
    {
      title: 'Le plateau vidéo 360° immersif',
      description:
        'Un bras motorisé tourne autour des invités pour générer une séquence spectaculaire prête à être partagée. L’animation idéale pour vos lancements de produit et soirées VIP.',
      icon: RotateCw,
    },
  ];

  const thematicTips = [
    {
      title: 'Palette et décor sur-mesure',
      description:
        'Cadrez l’expérience avec des fonds et accessoires alignés sur votre charte ou le thème de la soirée. Les éléments graphiques renforcent l’immersion.',
      icon: Palette,
    },
    {
      title: 'Scénographie fluide',
      description:
        'Positionnez la borne dans un espace central, soignez la circulation et prévoyez des repères visuels pour guider vos invités sans créer d’attente.',
      icon: LayoutDashboard,
    },
    {
      title: 'Touches de magie',
      description:
        'Filtres digitaux, animations IA ou accessoires signatures : ajoutez un détail qui raconte votre histoire et incite vos invités à revenir en fin de soirée.',
      icon: Sparkles,
    },
  ];

  const keyFeatures = [
    {
      title: 'Réglages photo maîtrisés',
      description:
        'Éclairage LED, retouche automatique et stabilisation garantissent un rendu professionnel quelles que soient les conditions de lumière.',
      icon: SlidersHorizontal,
    },
    {
      title: 'Partage connecté',
      description:
        'Envoi par mail, SMS ou QR code pour prolonger l’expérience en ligne et amplifier la visibilité de votre événement.',
      icon: Wifi,
    },
    {
      title: 'Impressions premium',
      description:
        'Formats variés, papier épais et habillage graphique personnalisable pour offrir des souvenirs tangibles à conserver.',
      icon: Printer,
    },
    {
      title: 'Sécurité et conformité',
      description:
        'Collecte de consentements, hébergement sécurisé et maîtrise des droits à l’image pour protéger votre marque et vos invités.',
      icon: ShieldCheck,
    },
  ];

  const providerCriteria = [
    {
      title: 'Avis vérifiés et retours clients',
      description:
        'Consultez les témoignages et références pour mesurer la qualité du matériel, la créativité des décors et la fiabilité opérationnelle.',
      icon: MessageSquare,
    },
    {
      title: 'Support humain réactif',
      description:
        'Un interlocuteur unique avant, pendant et après l’événement assure une coordination fluide et une gestion des imprévus.',
      icon: Headset,
    },
    {
      title: 'Forfaits clairs et flexibles',
      description:
        'Comparez les options (durée, nombre d’hôtes, impressions illimitées, animations digitales) afin d’investir juste pour vos objectifs.',
      icon: Package,
    },
  ];

  const preparationSteps = [
    {
      title: 'Réserver au bon moment',
      description:
        'Bloquez votre date dès que le lieu est confirmé pour bénéficier des meilleures disponibilités et anticiper la création graphique.',
      icon: CalendarClock,
    },
    {
      title: 'Définir l’emplacement idéal',
      description:
        'Identifiez un espace alimenté en électricité, proche des zones de passage et sans contre-jour pour maximiser l’affluence.',
      icon: MapPin,
    },
    {
      title: 'Prévoir la logistique technique',
      description:
        'Accès au chargement, durée d’installation, connexion réseau : partagez ces informations avec votre prestataire pour éviter les surprises.',
      icon: Plug,
    },
  ];

  const impactTips = [
    {
      title: 'Communiquer avant et pendant',
      description:
        'Invitations, signalétique, maître de cérémonie : annoncez l’animation pour que chaque participant planifie son passage.',
      icon: Megaphone,
    },
    {
      title: 'Animer et accompagner',
      description:
        'Des hôtes souriants aident aux poses, gèrent les accessoires et entretiennent l’énergie de la file d’attente.',
      icon: Users,
    },
    {
      title: 'Capitaliser après l’événement',
      description:
        'Diffusez les meilleures créations dans un aftermovie, un album interne ou une newsletter pour prolonger l’émotion.',
      icon: Share2,
    },
  ];

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
            Le photobooth est devenu l’un des incontournables de vos soirées, lancements ou séminaires. Bien sélectionné, il crée un rituel fédérateur, génère des souvenirs tangibles et amplifie votre visibilité en ligne.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {onQuoteRequest && (
              <button
                onClick={onQuoteRequest}
                className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition-colors"
              >
                Construire mon expérience photobooth
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
                <h2 className="text-3xl font-bold text-black m-0">Le photobooth, créateur d’engagement</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                En captant les émotions à chaud, le photobooth donne une dimension vivante à votre événement. Les invités se prêtent au jeu, partagent le moment avec leurs équipes et repartent avec un souvenir immédiat. C’est aussi un formidable prétexte pour initier les discussions et briser la glace.
              </p>
              <p className="text-gray-700 leading-relaxed mt-6">
                Le secret réside dans le choix d’une solution qui colle à vos objectifs : notoriété, cohésion, collecte de données ou création de contenus sociaux. Ce guide vous accompagne pas à pas pour identifier le format, les options et le prestataire adaptés.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <div className="bg-gray-50 rounded-3xl p-10">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-blue-500 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black m-0">Comparer les grands types de photobooths</h2>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                {photoboothTypes.map(({ title, description, icon: Icon }) => (
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
                <div className="w-12 h-12 rounded-2xl bg-purple-500 flex items-center justify-center">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black m-0">Adapter l’animation au thème de votre événement</h2>
              </div>
              <div className="space-y-6">
                {thematicTips.map(({ title, description, icon: Icon }) => (
                  <div key={title} className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-2xl bg-yellow-100 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-black mb-2">{title}</h3>
                      <p className="text-gray-600 leading-relaxed">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mb-16">
            <div className="bg-gray-50 rounded-3xl p-10">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-green-500 flex items-center justify-center">
                  <SlidersHorizontal className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black m-0">Les fonctionnalités clés à examiner</h2>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {keyFeatures.map(({ title, description, icon: Icon }) => (
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
                <div className="w-12 h-12 rounded-2xl bg-indigo-500 flex items-center justify-center">
                  <Headset className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black m-0">Choisir le prestataire qui vous accompagnera</h2>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                {providerCriteria.map(({ title, description, icon: Icon }) => (
                  <div key={title} className="bg-gray-50 rounded-2xl p-6">
                    <Icon className="w-7 h-7 text-yellow-500 mb-4" />
                    <h3 className="text-xl font-semibold text-black mb-2">{title}</h3>
                    <p className="text-gray-600 leading-relaxed">{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mb-16">
            <div className="bg-gray-50 rounded-3xl p-10">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-orange-500 flex items-center justify-center">
                  <CalendarClock className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black m-0">Préparer sereinement l’installation</h2>
              </div>
              <div className="space-y-6">
                {preparationSteps.map(({ title, description, icon: Icon }) => (
                  <div key={title} className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-gray-200 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-yellow-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-black mb-2">{title}</h3>
                      <p className="text-gray-600 leading-relaxed">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mb-16">
            <div className="bg-white border border-gray-100 rounded-3xl p-10 shadow-sm">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-yellow-400 flex items-center justify-center">
                  <Megaphone className="w-6 h-6 text-black" />
                </div>
                <h2 className="text-3xl font-bold text-black m-0">Maximiser l’impact le jour J</h2>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                {impactTips.map(({ title, description, icon: Icon }) => (
                  <div key={title} className="bg-gray-50 rounded-2xl p-6">
                    <Icon className="w-7 h-7 text-yellow-500 mb-4" />
                    <h3 className="text-xl font-semibold text-black mb-2">{title}</h3>
                    <p className="text-gray-600 leading-relaxed">{description}</p>
                  </div>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mt-8">
                En orchestrant communication, animation et suivi, votre photobooth devient un véritable fil rouge qui marque les esprits et alimente vos contenus post-événement.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <div className="bg-gradient-to-r from-yellow-100 via-yellow-50 to-white rounded-3xl p-10 border border-yellow-200">
              <div className="flex items-center justify-between flex-col lg:flex-row gap-6">
                <div className="max-w-2xl">
                  <h2 className="text-3xl font-bold text-black mb-4">Prêts à imaginer votre prochaine expérience BoostPix ?</h2>
                  <p className="text-gray-700 leading-relaxed">
                    De la conception scénographique à l’animation le jour J, notre équipe met en scène votre identité et coordonne chaque détail pour un photobooth mémorable.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  {onQuoteRequest && (
                    <button
                      onClick={onQuoteRequest}
                      className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition-colors"
                    >
                      Échanger avec un expert
                    </button>
                  )}
                  <button
                    onClick={onBack}
                    className="px-6 py-3 rounded-full border border-gray-900 text-gray-900 font-semibold hover:bg-gray-900 hover:text-white transition-colors"
                  >
                    Retour au blog
                  </button>
                </div>
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

export default ChoosingPhotoboothBlogPage;
