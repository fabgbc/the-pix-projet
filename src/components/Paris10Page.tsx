import React from 'react';
import {
  ArrowLeft,
  Camera,
  Heart,
  Sparkles,
  Share2,
  Settings,
} from 'lucide-react';
import HomeSectionLink from './HomeSectionLink';
import Footer from './Footer';

interface Paris10PageProps {
  onBack: () => void;
  onQuoteRequest?: () => void;
  onPhotoboothDetails?: () => void;
  onAIAnimations?: () => void;
  onSEOPage?: () => void;
  arrondissementLinks: { label: string; onClick: () => void }[];
}

const Paris10Page: React.FC<Paris10PageProps> = ({
  onBack,
  onQuoteRequest,
  onPhotoboothDetails,
  onAIAnimations,
  onSEOPage, arrondissementLinks }) => {
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
                onClick={onPhotoboothDetails}
                className="text-gray-700 hover:text-yellow-500 transition-colors font-medium"
              >
                Photobooth sur mesure
              </button>
              <HomeSectionLink label="Événements Privés" targetId="mariages" onBack={onBack} />
              <button
                onClick={onAIAnimations}
                className="text-gray-700 hover:text-yellow-500 transition-colors font-medium"
              >
                Animations IA
              </button>
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
      <section className="py-20 bg-gray-50 mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-black mb-6 leading-tight">
              Louer un photobooth dans le
              <span className="text-yellow-400 relative">{' '}10ème arrondissement de Paris<div className="absolute -bottom-2 left-0 w-full h-3 bg-yellow-400 -z-10"></div></span>
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <article className="prose prose-lg max-w-none">
          {/* Introduction */}
          <section className="mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-black" />
                </div>
                <h2 className="text-3xl font-bold text-black">Photobooth Paris 10 : des souvenirs inoubliables de votre événement</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Paris 10, un arrondissement vibrant où l’histoire et la modernité se rencontrent. Promenez-vous le long du Canal Saint-Martin, où les écluses et les ponts créent une atmosphère romantique unique. De la Place de la République aux théâtres de la Rue du Faubourg Saint-Denis, chaque coin du 10ème arrondissement raconte une histoire. Dans ce cadre dynamique, chaque événement prend une nouvelle dimension avec nos photobooths, conçus pour capturer ces instants précieux.
              </p>
            </div>
          </section>

          {/* Moments Inoubliables */}
          <section className="mb-16">
            <div className="bg-gradient-to-br from-pink-50 to-yellow-50 p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black">Photobooth Paris 10 : Moments Inoubliables</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Pour une location photobooth Paris 10, The Pix est votre partenaire de choix. Nos bornes photo ne sont pas seulement des dispositifs technologiques ; elles sont des passerelles vers les souvenirs.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Imaginez des photos prises sur les quais animés du Canal Saint-Martin ou au cœur des soirées festives près de la Gare de l’Est. Nos photobooths capturent l’âme du 10ème arrondissement, offrant une expérience inoubliable pour tous vos invités.
              </p>
            </div>
          </section>

          {/* Experience */}
          <section className="mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black">Une Nouvelle Expérience de Location Photobooth à Paris 10</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Que ce soit pour un gala d’entreprise, une inauguration ou une fête privée, nos photobooths apportent une touche d’élégance et de divertissement. Le design raffiné de nos appareils et leur interface intuitive en font un ajout parfait à tout événement. Chaque interaction avec nos photobooths laisse une impression durable, transformant de simples moments en souvenirs mémorables.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Nos photobooths sont dotés de la technologie la plus avancée pour garantir des photos de haute qualité, même dans des conditions de faible luminosité. L’éclairage professionnel intégré assure que chaque cliché est parfaitement exposé, mettant en valeur vos invités et l’ambiance de votre événement. De plus, nos options de personnalisation permettent de créer des cadres photo uniques et des arrière-plans adaptés à votre thème, ajoutant une touche personnelle à chaque souvenir.
              </p>
            </div>
          </section>

          {/* Reservation */}
          <section className="mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center">
                  <Camera className="w-6 h-6 text-black" />
                </div>
                <h2 className="text-3xl font-bold text-black">Réservez Votre Photobooth en Ligne</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                À Paris 10, chaque détail compte pour garantir la réussite de votre événement. Avec The Pix, simplifiez-vous la vie. Plus besoin de procédures compliquées ; contactez-nous simplement pour réserver. Nous nous occupons de tout, de la livraison à l’installation, pour vous offrir une expérience photo sans souci.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Choisissez la date, définissez le lieu et personnalisez votre photobooth selon vos goûts. Nous sommes là à chaque étape pour vous assurer une expérience fluide et professionnelle.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Nous offrons également un service de support 24/7 pour répondre à toutes vos questions et résoudre tout problème technique qui pourrait survenir. Notre équipe dédiée s’assure que votre événement se déroule sans accroc, vous permettant de vous concentrer sur ce qui compte le plus : profiter de votre soirée et créer des souvenirs inoubliables.
              </p>
            </div>
          </section>

          {/* Partage */}
          <section className="mb-16">
            <div className="bg-gradient-to-br from-yellow-50 to-blue-50 p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center">
                  <Share2 className="w-6 h-6 text-black" />
                </div>
                <h2 className="text-3xl font-bold text-black">Partagez vos Moments en Temps Réel</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Dans un monde de plus en plus connecté, notre service de location photobooth Paris permet de partager instantanément chaque moment. Chaque sourire et chaque éclat de rire capturés peuvent être diffusés sur les réseaux sociaux en temps réel. Cette interaction augmente non seulement l’engagement de vos invités, mais amplifie également la visibilité de votre événement ou de votre marque.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Offrez à vos invités cette opportunité unique de partager leurs moments forts et de créer une présence numérique dynamique.
              </p>
            </div>
          </section>

          {/* Excellence */}
          <section className="mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black">L’Excellence à Votre Service</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                En choisissant de louer un photobooth à Paris 10 avec The Pix, vous optez pour l’excellence. Notre équipe dédiée est là pour vous assister à chaque étape, de la personnalisation à l’assistance technique, en passant par des conseils sur le meilleur emplacement pour votre photobooth.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Paris est une ville de passion et d’innovation. Avec nos photobooths, chaque instant de votre événement devient un souvenir indélébile, capturant l’essence de la Ville Lumière.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Nous sommes fiers de notre service client exceptionnel, et nous nous engageons à fournir une expérience de qualité supérieure. Chaque détail est pris en compte pour s’assurer que votre événement soit mémorable. Nous travaillons en étroite collaboration avec vous pour comprendre vos besoins spécifiques et adapter nos services en conséquence, garantissant ainsi une satisfaction totale.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Découvrez tous nos services sur Paris 9
              </p>
            </div>
          </section>
        </article>
      </div>

      {/* Footer */}
      <Footer
        onSEOPage={onSEOPage}
        onPhotoboothDetails={onPhotoboothDetails}
        arrondissementLinks={arrondissementLinks}
      />
    </div>
  );
};

export default Paris10Page;

