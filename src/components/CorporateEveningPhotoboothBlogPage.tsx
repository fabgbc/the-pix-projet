import React, { useMemo } from 'react';
import {
  ArrowLeft,
  Camera,
  Sparkles,
  Users,
  Smile,
  Palette,
  Share2,
  MapPin,
  Lightbulb,
  CheckCircle2,
  Target,
} from 'lucide-react';
import NavigationMenu, { NavigationCallbacks } from './NavigationMenu';
import Footer from './Footer';
import { Link } from '../router';

interface ArrondissementLink {
  label: string;
  onClick: () => void;
}

interface CorporateEveningPhotoboothBlogPageProps {
  onBack: () => void;
  onQuoteRequest?: () => void;
  onPhotoboothDetails?: () => void;
  onAIAnimations?: () => void;
  onSEOPage?: () => void;
  arrondissementLinks: ArrondissementLink[];
}

const CorporateEveningPhotoboothBlogPage: React.FC<CorporateEveningPhotoboothBlogPageProps> = ({
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

      <section className="bg-gradient-to-b from-yellow-50/70 via-white to-white pt-28 pb-20 mt-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 font-semibold mb-6">
            Soirées d'entreprise
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold text-black leading-tight mb-6">
            Animer votre soirée d'entreprise avec un photobooth
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Offrez à vos collaborateurs une parenthèse ludique et fédératrice. Avec un photobooth, votre soirée gagne en dynamisme,
            en cohésion et en visibilité tout en laissant des souvenirs concrets qui prolongent l'expérience au bureau.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {onQuoteRequest && (
              <button
                onClick={onQuoteRequest}
                className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition-colors"
              >
                Imaginer votre animation
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
                <h2 className="text-3xl font-bold text-black m-0">Créer une ambiance conviviale et mémorable</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Une soirée d'entreprise réussie doit trouver l'équilibre entre information, célébration et engagement. Le photobooth devient
                un fil rouge festif qui attire naturellement vos invités et facilite les échanges. Dès l'accueil, les collaborateurs se prennent
                au jeu, rient ensemble et déclenchent une énergie positive qui se diffuse sur l'ensemble de l'événement.
              </p>
              <p className="text-gray-700 leading-relaxed mt-6">
                Chez BoostPix, nous concevons des expériences immersives qui s'intègrent parfaitement à votre scénographie. Décors sur mesure,
                accessoires choisis avec soin et animation professionnelle garantissent un rythme convivial du cocktail au dancefloor.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <div className="bg-gray-50 rounded-3xl p-10">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-500 flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black m-0">L'importance d'un photobooth pour la cohésion d'équipe</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Poser ensemble devant l'objectif efface instantanément les barrières hiérarchiques. Les équipes se mélangent,
                les directions se mêlent aux nouveaux arrivants et chacun repart avec la sensation d'avoir partagé un moment privilégié.
                Les tirages photo deviennent des souvenirs tangibles qui prennent place sur les bureaux, les frigos ou les murs des open spaces.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                {[{
                  title: "Moments partagés",
                  description:
                    "Encourager les collaborateurs à se mélanger et à créer des souvenirs communs au-delà des cercles habituels.",
                },
                {
                  title: "Fierté d'appartenance",
                  description:
                    "Renforcer la culture d'entreprise en diffusant des images positives et spontanées de vos équipes.",
                },
                {
                  title: "Souvenirs durables",
                  description:
                    "Proposer des tirages premium qui rappellent la soirée et nourrissent le sentiment de cohésion sur la durée.",
                }].map(item => (
                  <div key={item.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                    <Smile className="w-8 h-8 text-yellow-500 mb-4" />
                    <h3 className="text-xl font-semibold text-black mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
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
                <h2 className="text-3xl font-bold text-black m-0">Les avantages pour la motivation des employés</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Offrir une parenthèse récréative dans un cadre professionnel permet de récompenser les efforts fournis tout au long de l'année.
                Les collaborateurs se sentent considérés, ce qui contribue directement à leur motivation et à leur engagement au quotidien.
              </p>
              <ul className="mt-6 space-y-4">
                {[
                  "Valoriser les réussites collectives et individuelles en immortalisant les moments forts de la soirée.",
                  "Favoriser un climat détendu où chacun peut exprimer sa personnalité et se sentir à l'aise.",
                  "Créer un souvenir positif qui prolonge le sentiment de reconnaissance bien après l'événement.",
                ].map(point => (
                  <li key={point} className="flex items-start space-x-3">
                    <div className="w-2 h-2 mt-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-gray-700 leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mb-16">
            <div className="bg-gray-50 rounded-3xl p-10">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-purple-500 flex items-center justify-center">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black m-0">Personnalisation et branding pour votre entreprise</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Le photobooth devient un outil de communication puissant lorsqu'il reprend vos codes graphiques. Habillage de la borne,
                personnalisation des cadres photo, écrans d'accueil animés : chaque détail rappelle votre marque et renforce la mémorisation.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                {[{
                  title: "Décor et scénographie",
                  description:
                    "Nous créons un univers visuel cohérent avec le thème de votre soirée : couleurs, matières et accessoires sur mesure.",
                },
                {
                  title: "Templates personnalisés",
                  description:
                    "Vos logos, messages clés et call-to-action sont intégrés sur chaque photo imprimée ou partagée.",
                },
                {
                  title: "Animation guidée",
                  description:
                    "Un animateur dédié embarque vos invités et véhicule vos valeurs avec enthousiasme.",
                },
                {
                  title: "Intégration digitale",
                  description:
                    "Diffusion sur écran géant, mur de photos live ou galerie en ligne : le branding se prolonge après la soirée.",
                }].map(card => (
                  <div key={card.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                    <Target className="w-8 h-8 text-yellow-500 mb-4" />
                    <h3 className="text-xl font-semibold text-black mb-2">{card.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{card.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mb-16">
            <div className="bg-white border border-gray-100 rounded-3xl p-10 shadow-sm">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-500 flex items-center justify-center">
                  <Share2 className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black m-0">Visibilité accrue grâce aux photos instantanées</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Les photos produites pendant l'événement deviennent un support de communication organique. Partagées sur les réseaux sociaux,
                elles prolongent la portée de votre soirée et valorisent votre culture d'entreprise auprès de vos communautés.
              </p>
              <ul className="mt-6 space-y-4">
                {[
                  "Envoi par e-mail ou SMS pour encourager le partage immédiat sur les réseaux professionnels et personnels.",
                  "Création de hashtags dédiés et d'un mur social pour dynamiser la soirée et centraliser les contenus.",
                  "Collecte de données qualifiées pour nourrir vos campagnes marketing post-événement en toute transparence.",
                ].map(point => (
                  <li key={point} className="flex items-start space-x-3">
                    <div className="w-2 h-2 mt-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-gray-700 leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mb-16">
            <div className="bg-gray-50 rounded-3xl p-10">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-red-500 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black m-0">Location de photobooth à Paris : ce qu'il faut considérer</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Pour garantir une expérience fluide, choisissez un partenaire qui comprend vos enjeux et maîtrise la logistique parisienne.
                Nous évaluons l'espace disponible, les contraintes de circulation et la configuration de la salle afin de proposer le format le plus adapté.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                {[
                  {
                    title: "Repérage et installation",
                    description: "Anticiper les accès, l'alimentation électrique et les temps de montage pour un événement sans stress.",
                  },
                  {
                    title: "Accompagnement sur mesure",
                    description: "Brief créatif, test des flux digitaux, technicien dédié le soir J : chaque étape est coordonnée.",
                  },
                  {
                    title: "Options adaptées au lieu",
                    description: "Cabine compacte, borne design ou studio mobile : nous alignons le format sur vos contraintes.",
                  },
                  {
                    title: "Service premium",
                    description: "Support en temps réel et reporting post-événement pour capitaliser sur les retombées.",
                  },
                ].map(item => (
                  <div key={item.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                    <h3 className="text-xl font-semibold text-black mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mb-16">
            <div className="bg-white border border-gray-100 rounded-3xl p-10 shadow-sm">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-yellow-500 flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-black" />
                </div>
                <h2 className="text-3xl font-bold text-black m-0">Maximiser l'engagement des employés</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                L'emplacement du photobooth influence directement son succès. Nous recommandons de le placer dans un lieu de passage,
                suffisamment proche du cœur de la soirée pour capter l'attention sans gêner les échanges.
              </p>
              <ul className="mt-6 space-y-4">
                {[
                  "Prévoir un parcours fluide entre le buffet, la piste de danse et la borne pour maintenir une fréquentation régulière.",
                  "Adapter les accessoires et les écrans aux temps forts du programme (discours, remise de prix, cocktail).",
                  "Ajouter des défis photos ou un livre d'or digital pour encourager les équipes à revenir plusieurs fois.",
                ].map(item => (
                  <li key={item} className="flex items-start space-x-3">
                    <div className="w-2 h-2 mt-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mb-16">
            <div className="bg-gray-50 rounded-3xl p-10 text-center">
              <h2 className="text-3xl font-bold text-black mb-4">Renforcer les liens d'équipe avec des souvenirs mémorables</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Un photobooth ne se contente pas d'amuser vos invités. Il cristallise l'esprit de votre entreprise et crée des souvenirs
                qui nourrissent la fierté d'appartenir à vos équipes. Ces émotions partagées rejaillissent sur la productivité, l'engagement
                et l'attractivité de votre marque employeur.
              </p>
              <p className="text-gray-700 leading-relaxed">
                BoostPix imagine des dispositifs qui allient design, technologie et accompagnement humain pour faire de votre soirée d'entreprise
                un événement inoubliable.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                {onQuoteRequest && (
                  <button
                    onClick={onQuoteRequest}
                    className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition-colors"
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

export default CorporateEveningPhotoboothBlogPage;
