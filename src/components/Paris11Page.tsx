import React from 'react';
import { Camera, Heart, Users, Star, Settings, Palette, Award, Sparkles, Share2 } from 'lucide-react';
import Footer from './Footer';
import Header from './Header';

interface Paris11PageProps {
  onQuoteRequest?: () => void;
  onPhotoboothDetails?: () => void;
  onAIAnimations?: () => void;
  onSEOPage?: () => void;
  arrondissementLinks: { label: string; onClick: () => void }[];
}

const Paris11Page: React.FC<Paris11PageProps> = ({
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
              Louer un photobooth dans le
              <span className="text-yellow-400 relative">{' '}11ème arrondissement de Paris<div className="absolute -bottom-2 left-0 w-full h-3 bg-yellow-400 -z-10"></div></span>
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
                <h2 className="text-3xl font-bold text-black">Louer un photobooth Paris 11ème arrondissement avec The Pix</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                L’organisation d’une fête d’entreprise ou d’un événement à Paris peut souvent s’avérer être un défi, surtout lorsqu’il s’agit de trouver des activités innovantes et engageantes pour maintenir l’intérêt des participants.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Les photobooths se sont révélés être une solution créative et efficace pour animer vos événements, et The Pix offre une option idéale pour louer un photobooth dans le 11ème arrondissement de Paris.
              </p>
            </div>
          </section>

          {/* Pourquoi choisir un photobooth */}
          <section className="mb-16">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black">Pourquoi choisir un photobooth pour votre événement d’entreprise ?</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Les photobooths sont devenus un incontournable des événements d’entreprise modernes. Non seulement ils offrent une source de divertissement interactif, mais ils encouragent également la participation et l’interaction entre les collègues, favorisant ainsi la cohésion d’équipe.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-black mb-2">Interaction et Cohésion d’Équipe</h3>
                    <p className="text-gray-600">
                      Les photobooths encouragent les participants à interagir de manière ludique et détendue. Dans un cadre professionnel, cela peut aider à briser la glace entre les employés qui ne se connaissent pas bien et renforcer les liens entre ceux qui travaillent ensemble au quotidien.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Camera className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-black mb-2">Souvenirs Personnalisés</h3>
                    <p className="text-gray-600">
                      Les photos imprimées sur place servent de souvenirs tangibles que les participants peuvent emporter avec eux. Ces souvenirs personnalisés rappellent les bons moments passés ensemble et renforcent le sentiment d’appartenance à l’entreprise.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Star className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-black mb-2">Amélioration de l’Image de Marque</h3>
                    <p className="text-gray-600">
                      Un photobooth bien conçu peut également servir de puissant outil de branding. En personnalisant les arrière-plans et les accessoires avec le logo de votre entreprise, vous pouvez renforcer la reconnaissance de la marque et augmenter sa visibilité sur les réseaux sociaux.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Pourquoi choisir The Pix */}
          <section className="mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center">
                  <Share2 className="w-6 h-6 text-black" />
                </div>
                <h2 className="text-3xl font-bold text-black">Pourquoi choisir The Pix pour louer un photobooth dans le 11ème arrondissement de Paris ?</h2>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Palette className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-black mb-2">Options Personnalisables</h3>
                    <p className="text-gray-600">
                      The Pix offre une gamme d’options personnalisables pour s’adapter parfaitement à l’ambiance et au thème de votre événement.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Settings className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-black mb-2">Installation et Support Technique</h3>
                    <p className="text-gray-600">
                      L’équipe de The Pix assure une installation rapide et sans tracas de votre photobooth, ainsi qu’un support technique tout au long de votre événement.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-black mb-2">Qualité Supérieure</h3>
                    <p className="text-gray-600">
                      Les photobooths de The Pix sont équipés de la dernière technologie en matière de photographie, garantissant des images de haute qualité.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section>
            <div className="bg-gradient-to-br from-yellow-50 to-pink-50 p-8 rounded-2xl">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Louer un photobooth avec The Pix pour votre fête d’entreprise ou événement à Paris 11ème arrondissement est une décision judicieuse pour dynamiser vos événements.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                En favorisant l’interaction, en créant des souvenirs personnalisés et en améliorant l’image de marque, un photobooth peut transformer une simple réunion en une expérience mémorable et engageante.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Pour plus d’informations ou pour réserver votre photobooth, contactez The Pix dès aujourd’hui et découvrez comment ils peuvent contribuer à la réussite de votre prochain événement.
              </p>
              <div className="mt-8">
                <button
                  onClick={onQuoteRequest}
                  className="bg-yellow-400 text-black px-8 py-4 rounded-full hover:bg-yellow-500 transition-colors font-semibold text-lg"
                >
                  Demander un devis
                </button>
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

export default Paris11Page;

