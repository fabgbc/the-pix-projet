import React, { useMemo } from 'react';
import {
  ArrowLeft,
  Camera,
  Sparkles,
  Layers,
  Play,
  RotateCw,
  Share2,
  Printer,
  PartyPopper,
  Cast,
  Brain,
  Lightbulb,
  Rocket,
} from 'lucide-react';
import NavigationMenu, { NavigationCallbacks } from './NavigationMenu';
import Footer from './Footer';
import { Link } from '../router';

interface PhotoboothTrendsBlogPageProps {
  onBack: () => void;
  onQuoteRequest?: () => void;
  onPhotoboothDetails?: () => void;
  onAIAnimations?: () => void;
  onSEOPage?: () => void;
  arrondissementLinks: { label: string; onClick: () => void }[];
}

const PhotoboothTrendsBlogPage: React.FC<PhotoboothTrendsBlogPageProps> = ({
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

  const trends = [
    {
      title: 'La réalité augmentée s’invite sur chaque cliché',
      description:
        "Ajoutez des éléments 3D, un décor immersif ou votre logo animé en temps réel : le photobooth devient un véritable studio où l'identité de votre événement s'affiche instantanément.",
      icon: Layers,
    },
    {
      title: 'Des formats animés pour rythmer vos souvenirs',
      description:
        'Slow motion, time lapse ou vidéos rafales mettent vos invités en mouvement et créent des contenus parfaits pour les réseaux sociaux et vos rétrospectives internes.',
      icon: Play,
    },
    {
      title: 'Le photobooth rotatif 360',
      description:
        'Un bras motorisé tourne autour des participants pour capter une vidéo à 360°. Résultat : un rendu spectaculaire et viral qui transforme vos invités en véritables ambassadeurs.',
      icon: RotateCw,
    },
    {
      title: 'Partage instantané et viralité contrôlée',
      description:
        'Galeries en ligne, e-mails personnalisés ou SMS : vos invités publient leurs contenus en direct tout en respectant votre charte et vos autorisations.',
      icon: Share2,
    },
    {
      title: 'Impressions premium et personnalisées',
      description:
        'Grâce à la sublimation thermique, les photos sortent en quelques secondes avec un rendu haute définition, un habillage graphique sur mesure et des finitions durables.',
      icon: Printer,
    },
    {
      title: 'Accessoires physiques et virtuels',
      description:
        'Chapeaux, perruques, masques ou filtres digitaux : nous combinons accessoires tangibles et effets virtuels pour déclencher les sourires et varier les mises en scène.',
      icon: PartyPopper,
    },
    {
      title: 'Live streaming et diffusion sur site',
      description:
        'Mur d’images, écran géant ou flux privé : la prise de vue peut être diffusée en direct pour animer la soirée et multiplier les points de contact avec votre audience.',
      icon: Cast,
    },
    {
      title: 'L’intelligence artificielle comme chef d’orchestre',
      description:
        'Les réglages s’adaptent automatiquement à la lumière, des filtres intelligents subliment les portraits et des suggestions de poses guident vos participants en douceur.',
      icon: Brain,
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
            Tendances & innovation
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold text-black leading-tight mb-6">
            Les photobooths&nbsp;2.0&nbsp;: les tendances à venir pour vos événements
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Le photobooth nouvelle génération combine technologie immersive, partage instantané et souvenirs tangibles. Découvrez comment ces innovations redéfinissent l’expérience des invités lors de vos prochains événements professionnels.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {onQuoteRequest && (
              <button
                onClick={onQuoteRequest}
                className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition-colors"
              >
                Imaginer mon photobooth nouvelle génération
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
                <h2 className="text-3xl font-bold text-black m-0">L’ère du photobooth traditionnel est révolue</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Exit la simple borne photo posée dans un coin de la salle. Les entreprises recherchent désormais des expériences immersives où le participant devient acteur, scénographe et porte-parole de la marque. L’objectif est de susciter l’émotion et l’engagement, tout en collectant des contenus à forte valeur pour la communication.
              </p>
              <p className="text-gray-700 leading-relaxed mt-6">
                Chez BoostPix, nous orchestrons chaque détail pour que la technologie serve votre narration&nbsp;: de la scénographie à la diffusion en direct, chaque interaction est pensée pour prolonger l’événement avant, pendant et après la rencontre.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <div className="bg-gray-50 rounded-3xl p-10">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-blue-500 flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black m-0">Les tendances qui feront sensation</h2>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {trends.map(({ title, description, icon: Icon }) => (
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
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black m-0">Préparer votre événement à ces nouveautés</h2>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {[{
                  title: 'Définir l’expérience attendue',
                  description:
                    'Clarifiez le rôle du photobooth dans votre dispositif : collecte de leads, création de contenus sociaux ou animation fédératrice. Cette vision guidera les technologies à activer.',
                },
                {
                  title: 'Scénographier un décor immersif',
                  description:
                    'Fond sur mesure, accessoires physiques, lumière adaptée et interactions guidées : chaque élément doit inviter les invités à jouer le jeu.',
                },
                {
                  title: 'Préparer la diffusion multicanale',
                  description:
                    'Anticipez les gabarits des partages, hashtags, landing pages ou écrans live pour prolonger la portée de l’animation au-delà du lieu.',
                },
                {
                  title: 'Fluidifier le parcours invité',
                  description:
                    'De l’accueil à la récupération des contenus, un accompagnement humain et digital assure un passage rapide et mémorable pour chaque participant.',
                }].map(({ title, description }) => (
                  <div key={title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                    <h3 className="text-xl font-semibold text-black mb-2">{title}</h3>
                    <p className="text-gray-600 leading-relaxed">{description}</p>
                  </div>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mt-8">
                En associant ces tendances à nos <Link to="/animations-photobooth-ia" className="text-yellow-600 font-semibold hover:text-yellow-500">animations photobooth IA</Link> ou à un <Link to="/photographe-connecte-ia" className="text-yellow-600 font-semibold hover:text-yellow-500">photographe connecté</Link>, vous créez un écosystème complet où chaque prise de vue nourrit votre stratégie événementielle.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <div className="bg-yellow-50 border border-yellow-100 rounded-3xl p-10">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-yellow-400 flex items-center justify-center">
                  <Camera className="w-6 h-6 text-black" />
                </div>
                <h2 className="text-3xl font-bold text-black m-0">BoostPix, votre partenaire photobooth 2.0</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                De la conception à la diffusion live, nos experts vous accompagnent pour imaginer un dispositif photobooth à la hauteur de vos enjeux de marque. Chaque projet est livré clé en main avec une équipe dédiée, une personnalisation complète et des indicateurs pour mesurer l’impact de l’animation.
              </p>
              <p className="text-gray-700 leading-relaxed mt-6">
                Surprise des invités, visibilité accrue et souvenirs mémorables : la borne photo devient le prolongement de votre stratégie événementielle immersive.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                {onQuoteRequest && (
                  <button
                    onClick={onQuoteRequest}
                    className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-900 transition-colors"
                  >
                    Échanger avec un expert BoostPix
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

export default PhotoboothTrendsBlogPage;
