import React, { useMemo } from 'react';
import {
  ArrowLeft,
  Camera,
  PartyPopper,
  Users,
  Rocket,
  Palette,
  Share2,
  MapPin,
  Activity,
  Sparkles,
  Lightbulb,
  CalendarDays,
  HeartHandshake,
} from 'lucide-react';
import NavigationMenu, { NavigationCallbacks } from './NavigationMenu';
import Footer from './Footer';
import { Link } from '../router';

interface CorporateEveningPhotoboothBlogPageProps {
  onBack: () => void;
  onQuoteRequest?: () => void;
  onPhotoboothDetails?: () => void;
  onAIAnimations?: () => void;
  onSEOPage?: () => void;
  arrondissementLinks: { label: string; onClick: () => void }[];
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
            <PartyPopper className="w-4 h-4 mr-2" /> Soirées d'entreprise
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold text-black leading-tight mb-6">
            Animer votre soirée d'entreprise avec un photobooth mémorable
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Offrez à vos collaborateurs et partenaires une animation photo immersive qui transforme votre soirée en expérience
            collective, festive et alignée sur l'ADN de votre marque.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {onQuoteRequest && (
              <button
                onClick={onQuoteRequest}
                className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition-colors"
              >
                Demander un devis pour votre soirée
              </button>
            )}
            <Link
              to="/services"
              className="px-8 py-3 rounded-full border border-gray-900 text-gray-900 font-semibold hover:bg-gray-900 hover:text-white transition-colors"
            >
              Imaginer votre scénographie
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
                  <PartyPopper className="w-6 h-6 text-black" />
                </div>
                <h2 className="text-3xl font-bold text-black m-0">Pourquoi le photobooth sublime vos soirées corporate</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Lors d'une soirée d'entreprise, chaque interaction doit renforcer la convivialité et la fierté d'appartenance. Le
                photobooth crée un point de rendez-vous spontané où l'on rit, pose et partage un moment hors du temps. Accessible
                à tous, il fluidifie les échanges entre équipes, partenaires et clients tout en générant des souvenirs tangibles.
              </p>
              <p className="text-gray-700 leading-relaxed mt-6">
                En choisissant une <Link to="/location-photobooth-paris" className="text-yellow-600 font-semibold hover:text-yellow-500">borne photo sur mesure</Link>, vous misez sur une animation autonome, au design parfaitement intégré à votre décor,
                capable d'enrichir aussi bien votre storytelling digital que les conversations du lendemain.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <div className="bg-gray-50 rounded-3xl p-10">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-500 flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black m-0">Renforcer la cohésion des équipes</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Une animation photo bien pensée crée un terrain de jeu commun pour toutes les équipes. Des poses scénarisées aux
                accessoires personnalisés, chacun se prête au jeu et se découvre sous un angle plus authentique, favorisant des
                liens durables au-delà des départements et des niveaux hiérarchiques.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                {[
                  {
                    title: 'Briser la glace en quelques secondes',
                    description:
                      'Dès l’accueil, une borne photobooth invite à la rencontre et déclenche des premiers échanges détendus.',
                  },
                  {
                    title: 'Créer des souvenirs d’équipe',
                    description:
                      'Les impressions papier deviennent des trophées à afficher dans les bureaux et des anecdotes à partager.',
                  },
                  {
                    title: 'Animer les temps calmes',
                    description:
                      'Entre deux discours ou performances, la cabine photo maintient un flux d’énergie positif dans la salle.',
                  },
                ].map(block => (
                  <div key={block.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                    <HeartHandshake className="w-8 h-8 text-yellow-500 mb-4" />
                    <h3 className="text-xl font-semibold text-black mb-2">{block.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{block.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mb-16">
            <div className="bg-white border border-gray-100 rounded-3xl p-10 shadow-sm">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-red-500 flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black m-0">Stimuler la motivation et la reconnaissance</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Un photobooth valorise les équipes en les plaçant littéralement sous les projecteurs. Profitez de l’animation pour
                mettre en avant les réussites de l’année, remercier vos collaborateurs et créer un mur de photos témoignant de
                votre culture interne.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                {[
                  'Organisez des challenges photo inter-équipes avec diffusion en direct sur vos écrans.',
                  'Ajoutez une bande personnalisée avec les objectifs atteints ou les messages du comité de direction.',
                  'Préparez un diaporama souvenir pour conclure la soirée et renforcer le sentiment d’accomplissement.',
                  'Associez l’animation à une remise de prix ou à des surprises pour les collaborateurs les plus créatifs.',
                ].map(item => (
                  <div key={item} className="flex items-start space-x-3">
                    <Sparkles className="w-5 h-5 text-yellow-600 mt-1" />
                    <p className="text-gray-600 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mb-16">
            <div className="bg-gray-50 rounded-3xl p-10">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-purple-500 flex items-center justify-center">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black m-0">Affirmer votre branding jusque dans les moindres détails</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Une scénographie cohérente fait toute la différence. Personnalisez le mobilier, les écrans et les impressions à
                vos couleurs pour faire rayonner votre marque tout au long de la soirée. Chaque photo devient un support de
                communication qui prolonge l’expérience au bureau ou sur les réseaux sociaux.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                {[
                  {
                    title: 'Habillage graphique sur mesure',
                    description:
                      'De la borne au fond de scène, adaptez les textures, les couleurs et le message à votre charte graphique.',
                  },
                  {
                    title: 'Accessoires brandés',
                    description:
                      'Créez des accessoires exclusifs : pancartes, néons, goodies à l’effigie de votre entreprise.',
                  },
                  {
                    title: 'Gabarits digitaux personnalisés',
                    description:
                      'Intégrez des cadres animés ou des filtres IA qui reprennent vos codes visuels et slogans.',
                  },
                  {
                    title: 'Suivi par nos équipes design',
                    description:
                      'Nos experts vous accompagnent pour transformer votre moodboard en décor photobooth immersif.',
                  },
                ].map(({ title, description }) => (
                  <div key={title} className="bg-white rounded-2xl p-6 border border-white/60 shadow-sm">
                    <Lightbulb className="w-8 h-8 text-yellow-500 mb-4" />
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
                <h2 className="text-3xl font-bold text-black m-0">Développer votre visibilité sur les réseaux sociaux</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                La soirée ne s’arrête pas à la fermeture du dancefloor. En encourageant le partage instantané des clichés, vous
                multipliez les points de contact avec vos communautés et prolongez l’impact de l’événement en ligne.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                {[
                  'Paramétrez l’envoi automatique par email ou SMS pour faciliter le partage.',
                  'Créez un hashtag de soirée et affichez un mur social alimenté en temps réel.',
                  'Animez vos stories Instagram ou LinkedIn avec les meilleures poses de vos invités.',
                  'Collectez des témoignages vidéo spontanés dans la foulée des prises de vue.',
                ].map(item => (
                  <div key={item} className="flex items-start space-x-3">
                    <Share2 className="w-5 h-5 text-yellow-600 mt-1" />
                    <p className="text-gray-600 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mb-16">
            <div className="bg-gray-50 rounded-3xl p-10">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-green-500 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black m-0">Réussir votre location de photobooth à Paris</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Les salles parisiennes ont chacune leur personnalité. Que votre réception se déroule sur un rooftop du 9e, dans un
                hôtel particulier du 16e ou un espace atypique du Marais, nous adaptons notre installation aux contraintes de
                lieu pour garantir une expérience fluide.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                {[
                  {
                    title: 'Logistique maîtrisée',
                    description:
                      'Accès étroits, horaires serrés, contraintes de voisinage : nos équipes anticipent chaque détail.',
                  },
                  {
                    title: 'Coordination avec vos prestataires',
                    description:
                      'Nous travaillons main dans la main avec votre traiteur, DJ ou agence événementielle pour synchroniser les temps forts.',
                  },
                  {
                    title: 'Options premium',
                    description:
                      'Photocall XXL, écran immersif, accessoires sur mesure : composez un dispositif unique pour vos invités.',
                  },
                  {
                    title: 'Accompagnement dans tous les arrondissements',
                    description:
                      'Découvrez nos guides par arrondissement pour choisir l’implantation idéale de votre animation photo.',
                  },
                ].map(({ title, description }) => (
                  <div key={title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                    <CalendarDays className="w-8 h-8 text-yellow-500 mb-4" />
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
                <div className="w-12 h-12 rounded-2xl bg-orange-500 flex items-center justify-center">
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black m-0">Optimiser l’engagement tout au long de la soirée</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Un photobooth connecté offre bien plus qu’une simple photo souvenir. Exploitez les données récoltées (inscriptions,
                préférences, fréquence de participation) pour ajuster l’animation en direct et nourrir vos communications
                post-événement.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                {[
                  'Programmez des rappels via notification pour relancer l’animation aux moments clés.',
                  'Analysez les statistiques de passage pour identifier les séquences les plus fédératrices.',
                  'Intégrez un quiz ou une roue de loterie digitale afin de récompenser les participants les plus engagés.',
                  'Reliez la base de contacts collectés à vos CRM et newsletters pour prolonger l’expérience.',
                ].map(item => (
                  <div key={item} className="flex items-start space-x-3">
                    <Activity className="w-5 h-5 text-yellow-600 mt-1" />
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
                  <Sparkles className="w-6 h-6 text-black" />
                </div>
                <h2 className="text-3xl font-bold text-black m-0">Clôturer la soirée avec des souvenirs inoubliables</h2>
              </div>
              <p className="text-gray-800 leading-relaxed mb-6">
                Grâce à une animation photobooth orchestrée par BoostPix, votre soirée d’entreprise laisse une empreinte durable.
                Les photos deviennent des vecteurs d’émotion, les supports numériques alimentent vos prochaines campagnes et vos
                équipes repartent avec la sensation d’avoir vécu un moment unique.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                {onQuoteRequest && (
                  <button
                    onClick={onQuoteRequest}
                    className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-900 transition-colors"
                  >
                    Concevoir votre animation
                  </button>
                )}
                <Link
                  to="/services"
                  className="px-8 py-3 rounded-full border border-black text-black font-semibold hover:bg-black hover:text-white transition-colors text-center"
                >
                  Explorer nos solutions photobooth
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
