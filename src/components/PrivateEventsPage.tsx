import React from 'react';
import { Heart, Sparkles, MapPin, Check } from 'lucide-react';
import Footer from './Footer';
import Header from './Header';

interface PrivateEventsPageProps {
  onPhotoboothDetails: () => void;
  onAIAnimations: () => void;
  onQuoteRequest: () => void;
  onSEOPage: () => void;
  arrondissementLinks: { label: string; onClick: () => void }[];
}

const PrivateEventsPage: React.FC<PrivateEventsPageProps> = ({
  onPhotoboothDetails,
  onAIAnimations,
  onQuoteRequest,
  onSEOPage,
  arrondissementLinks,
}) => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-24">
        <section className="py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-black mb-6">Des souvenirs inoubliables pour vos événements privés</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Mariages, anniversaires, baptêmes ou célébrations familiales : nos photobooths créent des moments complices et des souvenirs tangibles pour chacun de vos invités.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onQuoteRequest}
                className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition-colors"
              >
                Demander un devis personnalisé
              </button>
              <button
                onClick={onPhotoboothDetails}
                className="border border-yellow-400 text-yellow-500 px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition-colors"
              >
                Voir nos photobooths
              </button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
            <article className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-pink-100 text-pink-600 rounded-2xl flex items-center justify-center">
                  <Heart className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-black">Mariages & célébrations</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Créez un espace photo élégant avec des décors sur mesure, des impressions instantanées et des animations interactives.
              </p>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-yellow-500" />
                  <span>Design romantique et accessoires raffinés</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-yellow-500" />
                  <span>Galerie digitale sécurisée</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-yellow-500" />
                  <span>Accompagnement d'un animateur dédié</span>
                </li>
              </ul>
            </article>

            <article className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-black">Anniversaires & soirées privées</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Un photobooth ludique et festif, avec des options de personnalisation pour surprendre vos invités tout au long de la soirée.
              </p>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-yellow-500" />
                  <span>Accessoires thématiques et décors personnalisés</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-yellow-500" />
                  <span>Vidéo booth & GIFs animés</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-yellow-500" />
                  <span>Partage instantané par SMS, mail ou QR code</span>
                </li>
              </ul>
            </article>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">Un accompagnement humain et rassurant</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                De la prise de brief à la coordination le jour J, nous nous assurons que chaque détail reflète vos envies. Profitez de votre événement, nous nous occupons de tout.
              </p>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-yellow-500" />
                  <span>Installation discrète et rapide</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-yellow-500" />
                  <span>Animateur souriant et bilingue sur demande</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-yellow-500" />
                  <span>Souvenirs personnalisés pour vos invités</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-3xl shadow-lg p-10">
              <div className="flex items-center space-x-3 mb-4">
                <MapPin className="w-6 h-6 text-yellow-500" />
                <span className="text-lg font-semibold text-black">Partout en Île-de-France</span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Nous intervenons à Paris et dans tous les arrondissements. Choisissez votre quartier, nous imaginons le décor idéal.
              </p>
              <button
                onClick={onQuoteRequest}
                className="mt-8 bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition-colors"
              >
                Réserver votre date
              </button>
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

export default PrivateEventsPage;

