import React from 'react';
import { MapPin, Building, Heart, Star, Share2, Shield, Settings } from 'lucide-react';
import Footer from './Footer';
import Header from './Header';

interface Paris3PageProps {
  onQuoteRequest?: () => void;
  onPhotoboothDetails?: () => void;
  onAIAnimations?: () => void;
  onSEOPage?: () => void;
  arrondissementLinks: { label: string; onClick: () => void }[];
}

const Paris3Page: React.FC<Paris3PageProps> = ({
  onQuoteRequest,
  onPhotoboothDetails,
  onAIAnimations,
  onSEOPage,
  arrondissementLinks,
}) => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gray-50 mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-black mb-6 leading-tight">
              Photobooth
              <span className="text-yellow-400 relative">
                {' '}Paris 3
                <div className="absolute -bottom-2 left-0 w-full h-3 bg-yellow-400 -z-10"></div>
              </span>
            </h1>
            <h2 className="text-2xl lg:text-3xl font-semibold text-gray-600 mb-8">
              Immortalisez vos événements
            </h2>
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
                <h2 className="text-3xl font-bold text-black">Photobooth Paris 3 : Immortalisez vos événements</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Imaginez Paris, la ville lumière, où chaque pierre du Marais murmure des siècles d'histoire, où la Place de la République devient le carrefour des rencontres inattendues, et où la Rue de Bretagne dévoile des trésors d'art contemporain à ciel ouvert. Dans le 3ème arrondissement, l'âme bohème des cours cachées dialogue avec l'énergie créative des concept-stores.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                C'est ici, entre passé et présent, que vos événements méritent d'être transcendés. Plongez dans l'expérience avec nos photobooths, bien plus que des appareils : des complices de mémoire, ajustés sur mesure à votre univers.
              </p>
              <div className="mt-8">
                <button 
                  onClick={onQuoteRequest}
                  className="bg-yellow-400 text-black px-8 py-4 rounded-full hover:bg-yellow-500 transition-colors font-semibold text-lg"
                >
                  Demander un devis maintenant
                </button>
              </div>
            </div>
          </section>

          {/* Le Photobooth Paris 3 Revisité */}
          <section className="mb-16">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black">Le Photobooth Paris 3 Revisité</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Pour une location de photobooth à Paris, The Pix incarne l'adresse à retenir. Oubliez les bornes photo impersonnelles : nos cabines sont une invitation à capturer l'âme vibrante du Paris historique, des arcades du Marais aux échoppes gourmandes de la Rue de Bretagne. L'authenticité, sans les clichés.
              </p>
              <div className="bg-white p-6 rounded-xl">
                <h3 className="font-bold text-black mb-3 text-xl">location photobooth paris 3</h3>
                <p className="text-gray-700">
                  Notre technologie haut de gamme épouse naturellement le rythme du quartier. Elle saisit les éclats de joie près du Canal Saint-Martin, les discussions animées à deux pas de la Place de la République, ces secondes où le temps semble suspendre son vol. Un rendu d'une netteté remarquable, pour des souvenirs aussi vivants que votre événement.
                </p>
              </div>
            </div>
          </section>

          {/* L'Art de l'Événement d'Affaires */}
          <section className="mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black">L'Art de l'Événement d'Affaires</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Dans l'effervescence des rendez-vous professionnels – inauguration, soirée d'entreprise ou colloque – l'excellence se doit d'être sans compromis. Nos photobooths, au design épuré, s'effacent pour mettre en lumière vos invités. Une animation discrète mais impactante, où chaque cliché devient un ambassadeur de votre marque. Redéfinissez les codes des événements en Île-de-France.
              </p>
            </div>
          </section>

          {/* Votre Réservation, Simplissime */}
          <section className="mb-16">
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black">Votre Réservation, Simplissime</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Organiser un événement à Paris relève parfois du défi. Avec The Pix, libérez-vous des contraintes logistiques. Aucun formulaire interminable ni processus alambiqué : quelques clics suffisent pour bloquer votre date.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Choix du lieu, options de personnalisation, livraison clé en main – notre équipe orchestre chaque détail avec la précision d'un horloger. Vous n'aurez qu'à profiter de l'instant.
              </p>
            </div>
          </section>

          {/* L'instant magique, prolongé sur les réseaux */}
          <section className="mb-16">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                  <Share2 className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black">L'instant magique, prolongé sur les réseaux</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                À l'ère où chaque émotion appelle au partage, notre photobooth à Paris 3 devient votre allié digital. Les sourires fusent, les poses s'enchaînent, et les clichés s'envolent en direct vers les réseaux sociaux.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Une viralité élégante qui prolonge la vie de votre événement tout en boostant votre visibilité. L'interaction devient mémoire, et la mémoire, promotion.
              </p>
              <div className="mt-6 bg-white p-6 rounded-xl">
                <p className="text-gray-700">
                  <button 
                    onClick={arrondissementLinks[1].onClick}
                    className="text-blue-600 hover:text-blue-800 transition-colors underline"
                  >
                    Découvrez aussi nos services sur Paris 2.
                  </button>
                </p>
              </div>
            </div>
          </section>

          {/* Notre Engagement : Votre Sérénité */}
          <section className="mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black">Notre Engagement : Votre Sérénité</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Confier votre événement à notre équipe, c'est choisir la tranquillité d'esprit. Besoin d'un conseil pour l'emplacement idéal ? D'une charte graphique alignée sur votre identité ? Nos experts déploient des solutions sur mesure, avec la réactivité qui caractérise Paris.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Car ici, chaque projet est traité avec la passion d'un premier rendez-vous.
              </p>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-16">
            <div className="bg-yellow-50 border border-yellow-200 p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center">
                  <Star className="w-6 h-6 text-black" />
                </div>
                <h2 className="text-3xl font-bold text-black">Paris ne se livre pas, elle se vit</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                À travers nos photobooths, offrez à vos invités un fragment de cette magie – des instants volés, transformés en héritage tangible.
              </p>
              <div className="bg-white p-6 rounded-xl">
                <h3 className="font-bold text-black mb-4 text-xl">Prêt à transformer votre événement en une expérience inoubliable ?</h3>
                <p className="text-gray-700 mb-6">
                  Réservez dès maintenant votre photobooth dans le 3ème arrondissement de Paris et créez des souvenirs exceptionnels pour vos invités.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={onQuoteRequest}
                    className="bg-yellow-400 text-black px-8 py-4 rounded-full hover:bg-yellow-500 transition-colors font-semibold"
                  >
                    Demander un devis
                  </button>
                </div>
              </div>
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

export default Paris3Page;