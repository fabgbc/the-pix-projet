import React, { useMemo } from 'react';
import {
  ArrowLeft,
  Camera,
  PenSquare,
  Sparkles,
  CalendarDays,
  Clock,
  BookOpen,
  Lightbulb,
} from 'lucide-react';
import NavigationMenu, { NavigationCallbacks } from './NavigationMenu';
import Footer from './Footer';
import { Link } from '../router';

interface ArrondissementLink {
  label: string;
  onClick: () => void;
}

interface BlogPageProps {
  onBack: () => void;
  onQuoteRequest?: () => void;
  onPhotoboothDetails?: () => void;
  onAIAnimations?: () => void;
  onSEOPage?: () => void;
  arrondissementLinks: ArrondissementLink[];
}

interface BlogArticle {
  title: string;
  description: string;
  category: string;
  readTime: string;
  publishedAt: string;
  href?: string;
}

const ARTICLES: BlogArticle[] = [
  {
    title: 'Comment bien choisir le bon photobooth pour votre événement',
    description:
      'Comparez les formats, fonctionnalités et services pour sélectionner l’animation photo qui correspond à vos objectifs et à votre scénographie.',
    category: 'Guide pratique',
    readTime: 'Lecture 8 min',
    publishedAt: 'Juillet 2024',
    href: '/comment-bien-choisir-le-bon-photobooth-pour-votre-evenement',
  },
  {
    title: 'Quand a été inventé le photobooth ?',
    description:
      "Des cabines de Broadway aux événements parisiens, découvrez comment l'invention d'Anatol Josepho est devenue un incontournable pour les entreprises.",
    category: 'Histoire',
    readTime: 'Lecture 6 min',
    publishedAt: 'Juin 2024',
    href: '/quand-a-ete-invente-le-photobooth',
  },
  {
    title: 'Les photobooths 2.0 : les tendances à venir pour vos événements',
    description:
      "Réalité augmentée, 360° et IA : un tour d'horizon des innovations qui transforment l'expérience photobooth pour vos soirées professionnelles.",
    category: 'Tendance',
    readTime: 'Lecture 7 min',
    publishedAt: 'Mai 2024',
    href: '/les-photobooths-2-0-les-tendances-a-venir-pour-vos-evenements',
  },
  {
    title: "Organiser un team building avec un photobooth : les 5 animations à réaliser",
    description:
      "Un guide complet pour préparer votre team building, fédérer vos équipes et imaginer cinq animations photobooth incontournables.",
    category: 'Team building',
    readTime: 'Lecture 9 min',
    publishedAt: 'Avril 2024',
    href: '/organiser-un-team-building-avec-un-photobooth-les-5-animations-a-realiser',
  },
  {
    title: "Le photobooth pour votre événement d'entreprise",
    description:
      "Nos conseils pour concevoir une expérience photo qui renforce la cohésion de vos équipes et valorise votre image de marque.",
    category: "Événements d'entreprise",
    readTime: 'Lecture 8 min',
    publishedAt: 'Mars 2024',
    href: '/le-photobooth-pour-votre-evenement-d-entreprise',
  },
  {
    title: 'Animations IA : transformer vos événements parisiens',
    description:
      "Comment les effets génératifs et la personnalisation temps réel créent la surprise sur vos lancements de produit.",
    category: 'Tendance',
    readTime: 'Lecture 6 min',
    publishedAt: 'Bientôt disponible',
  },
  {
    title: 'Mariage à Paris : 5 idées de scénographie photobooth',
    description:
      'Inspirez-vous de décors immersifs et élégants pour offrir à vos invités une expérience inoubliable au cœur de la capitale.',
    category: 'Mariages',
    readTime: 'Lecture 7 min',
    publishedAt: 'Bientôt disponible',
  },
  {
    title: 'Pop-up stores et activations retail : créer du trafic avec un photobooth',
    description:
      "De la collecte de leads à l'animation sociale, découvrez comment dynamiser vos opérations commerciales avec BoostPix.",
    category: 'Activation de marque',
    readTime: 'Lecture 5 min',
    publishedAt: 'Bientôt disponible',
  },
];

const BlogPage: React.FC<BlogPageProps> = ({
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
      ...(onPhotoboothDetails ? { '/location-photobooth-paris': onPhotoboothDetails } : {}),
      ...(onAIAnimations ? { '/animations-photobooth-ia': onAIAnimations } : {}),
      ...(onQuoteRequest ? { '/devis-photobooth-gratuit': onQuoteRequest } : {}),
    }),
    [onAIAnimations, onBack, onPhotoboothDetails, onQuoteRequest],
  );

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100" role="banner">
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

      <main>
        <section className="bg-gradient-to-b from-yellow-50/70 via-white to-white pt-28 pb-20 mt-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 font-semibold mb-6">
              <PenSquare className="w-4 h-4 mr-2" /> Blog BoostPix
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-black leading-tight mb-6">
              Blog photobooth à Paris
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Retours d'expérience, conseils scénographiques, innovations IA et bonnes pratiques pour créer des animations photo
              mémorables à Paris et en Île-de-France.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              {onQuoteRequest && (
                <button
                  onClick={onQuoteRequest}
                  className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition-colors"
                >
                  Discuter de votre projet
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

        <section className="max-w-6xl mx-auto px-6 pb-16">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-black mb-2">Derniers articles et inspirations</h2>
              <p className="text-gray-600">
                Une sélection de retours terrain et de guides pratiques pour imaginer votre prochaine expérience BoostPix.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {ARTICLES.map(article => {
              const cardContent = (
                <article className="h-full bg-white border border-gray-100 rounded-3xl p-8 shadow-sm transition-all duration-200 group-hover:shadow-lg group-hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-6">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-50 text-yellow-700 text-sm font-semibold">
                      {article.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm space-x-2">
                      <CalendarDays className="w-4 h-4" />
                      <span>{article.publishedAt}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-black mb-4 leading-snug">{article.title}</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">{article.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                    <div className="flex items-center text-gray-500 text-sm space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                    {article.href ? (
                      <span className="text-yellow-600 font-semibold flex items-center space-x-2">
                        <span>Lire l'article</span>
                        <ArrowLeft className="w-4 h-4 rotate-180" />
                      </span>
                    ) : (
                      <span className="text-gray-400 text-sm font-medium flex items-center space-x-2">
                        <Sparkles className="w-4 h-4" />
                        <span>Bientôt disponible</span>
                      </span>
                    )}
                  </div>
                </article>
              );

              return article.href ? (
                <Link
                  key={article.title}
                  to={article.href}
                  className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-3xl"
                >
                  {cardContent}
                </Link>
              ) : (
                <div
                  key={article.title}
                  className="group block opacity-80"
                  aria-label={`${article.title} - bientôt disponible`}
                >
                  {cardContent}
                </div>
              );
            })}
          </div>
        </section>

        <section className="bg-gray-50 py-20">
          <div className="max-w-5xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">Pourquoi suivre le blog BoostPix ?</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Nous partageons chaque mois nos retours d'expérience terrain, nos inspirations créatives et les innovations qui
                transforment l'animation photo. Que vous organisiez un événement corporate, un mariage ou une activation retail,
                profitez de contenus actionnables.
              </p>
              <div className="space-y-4">
                {["Cas clients détaillés et coulisses de projets", "Innovations technologiques et tendances IA", "Conseils pratiques pour scénographier vos espaces"]
                  .map(item => (
                    <div key={item} className="flex items-start space-x-3">
                      <div className="mt-1 w-8 h-8 bg-yellow-100 text-yellow-700 rounded-full flex items-center justify-center">
                        <Lightbulb className="w-4 h-4" />
                      </div>
                      <p className="text-gray-700 leading-relaxed">{item}</p>
                    </div>
                  ))}
              </div>
            </div>
            <div className="bg-white border border-gray-100 rounded-3xl p-10 shadow-sm">
              <div className="flex items-center space-x-3 mb-4">
                <BookOpen className="w-6 h-6 text-yellow-500" />
                <span className="text-sm font-semibold uppercase tracking-wide text-yellow-600">Ressources</span>
              </div>
              <h3 className="text-2xl font-semibold text-black mb-4">
                Un concentré d'idées pour imaginer votre prochaine expérience
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Abonnez-vous à notre newsletter pour recevoir nos nouveaux articles et tendances directement dans votre boite
                mail.
              </p>
              <form className="space-y-4" onSubmit={event => event.preventDefault()}>
                <label className="block">
                  <span className="text-sm font-medium text-gray-700">Adresse email professionnelle</span>
                  <input
                    type="email"
                    placeholder="prenom@entreprise.com"
                    className="mt-2 w-full rounded-full border border-gray-200 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    required
                  />
                </label>
                <button
                  type="submit"
                  className="w-full bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition-colors"
                >
                  Je m'inscris
                </button>
                <p className="text-xs text-gray-500">
                  En vous inscrivant, vous acceptez de recevoir nos actualités. Vous pouvez vous désinscrire à tout moment.
                </p>
              </form>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 py-20">
          <div className="bg-black text-white rounded-3xl p-10 md:p-16 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Envie de nous confier votre animation photo ?</h2>
              <p className="text-white/80 text-lg leading-relaxed">
                Parlons de votre prochain événement à Paris ou en Île-de-France et imaginons ensemble une scénographie sur mesure.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              {onQuoteRequest && (
                <button
                  onClick={onQuoteRequest}
                  className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition-colors"
                >
                  Demander un devis
                </button>
              )}
              <Link
                to="/demande-demo-photobooth"
                className="px-8 py-3 rounded-full border border-white/40 text-white font-semibold hover:bg-white hover:text-black transition-colors text-center"
              >
                Planifier une démo
              </Link>
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

export default BlogPage;
