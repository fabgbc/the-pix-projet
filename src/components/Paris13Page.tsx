import React from 'react';
import { ArrowLeft, Camera } from 'lucide-react';
import HomeSectionLink from './HomeSectionLink';
import Footer from './Footer';

interface Paris13PageProps {
  onBack: () => void;
  onQuoteRequest?: () => void;
  onPhotoboothDetails?: () => void;
  onAIAnimations?: () => void;
  onSEOPage?: () => void;
  onParis1Page?: () => void;
  onParis2Page?: () => void;
  onParis3Page?: () => void;
  onParis4Page?: () => void;
  onParis5Page?: () => void;
  onParis6Page?: () => void;
  onParis7Page?: () => void;
  onParis8Page?: () => void;
  onParis9Page?: () => void;
  onParis10Page?: () => void;
  onParis11Page?: () => void;
  onParis12Page?: () => void;
}

const Paris13Page: React.FC<Paris13PageProps> = ({
  onBack,
  onQuoteRequest,
  onPhotoboothDetails,
  onAIAnimations,
  onSEOPage,
  onParis1Page,
  onParis2Page,
  onParis3Page,
  onParis4Page,
  onParis5Page,
  onParis6Page,
  onParis7Page,
  onParis8Page,
  onParis9Page,
  onParis10Page,
  onParis11Page,
  onParis12Page,
}) => {
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
              <span className="text-yellow-400 relative">{' '}13ème arrondissement de Paris<div className="absolute -bottom-2 left-0 w-full h-3 bg-yellow-400 -z-10"></div></span>
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
              <h2 className="text-3xl font-bold text-black mb-4">Louer un photobooth Paris 13eme arrondissement avec The Pix</h2>
              <p className="text-gray-700 mb-4">
                Louer un photobooth peut transformer n'importe quel événement en une expérience mémorable. Que vous organisiez un mariage, une fête d'anniversaire, ou un événement d'entreprise à Paris, un photobooth est une excellente façon de capturer des souvenirs et de divertir vos invités.
              </p>
              <p className="text-gray-700">
                Dans cet article, nous allons explorer pourquoi vous devriez louer un photobooth dans le 13ème arrondissement de Paris avec The Pix.
              </p>
            </div>
          </section>

          {/* Pourquoi louer */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-black mb-6">Pourquoi louer un photobooth pour votre événement à Paris ?</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-black mb-2">Créez des souvenirs inoubliables</h3>
                <p className="text-gray-700">
                  Les photobooths permettent à vos invités de prendre des photos amusantes et spontanées. Ces photos deviennent de précieux souvenirs qu'ils peuvent emporter chez eux. De plus, avec des options de personnalisation, vous pouvez ajouter le logo de votre événement ou un message spécial sur chaque photo.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-black mb-2">Divertissez vos invités</h3>
                <p className="text-gray-700">
                  Il est une excellente façon de divertir vos invités. Ils peuvent s'amuser à poser avec des accessoires, à faire des grimaces, et à se créer des souvenirs uniques. C'est une activité qui plaît à tous les âges et qui peut briser la glace entre les invités qui ne se connaissent pas bien.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-black mb-2">Partagez sur les réseaux sociaux</h3>
                <p className="text-gray-700">
                  Avec les options de partage instantané, vos invités peuvent publier leurs photos sur les réseaux sociaux en un clin d'œil. Cela permet non seulement de prolonger le plaisir de l'événement, mais aussi d'augmenter la visibilité de votre événement en ligne.
                </p>
              </div>
            </div>
          </section>

          {/* Pourquoi choisir The Pix */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-black mb-6">Pourquoi choisir The Pix pour louer un photobooth à Paris 13ème arrondissement ?</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-black mb-2">Matériel de haute qualité</h3>
                <p className="text-gray-700">
                  The Pix propose des photobooths équipés de caméras haute définition et d'imprimantes de qualité professionnelle. Vous pouvez être sûr que les photos seront claires et nettes, et que les impressions seront de haute qualité.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-black mb-2">Large gamme d'options de personnalisation</h3>
                <p className="text-gray-700">
                  Que vous souhaitiez personnaliser l'apparence du photobooth ou les impressions photo, The Pix offre une multitude d'options. Vous pouvez choisir des arrière-plans, des cadres photo, et des accessoires qui correspondent à votre thème ou à votre marque.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-black mb-2">Service client exceptionnel</h3>
                <p className="text-gray-700">
                  The Pix se distingue par son excellent service client. Ils vous accompagnent tout au long du processus, de la réservation à l'installation du photobooth. Leur équipe est disponible pour répondre à toutes vos questions et s'assurer que tout se passe bien le jour de l'événement.
                </p>
              </div>
            </div>
          </section>

          {/* Comment louer */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-black mb-6">Comment louer avec The Pix ?</h2>
            <ol className="list-decimal list-inside text-gray-700 space-y-4">
              <li>
                <span className="font-bold text-black">Étape 1 : Contactez The Pix</span> – Vous pouvez contacter The Pix via leur site web ou par téléphone. Un membre de leur équipe vous aidera à choisir le photobooth qui convient le mieux à votre événement et à répondre à toutes vos questions.
              </li>
              <li>
                <span className="font-bold text-black">Étape 2 : Choisissez vos options de personnalisation</span> – The Pix vous propose une variété d'options de personnalisation pour rendre votre photobooth unique. Vous pouvez choisir l'apparence, les accessoires, les arrière-plans, et les cadres photo.
              </li>
              <li>
                <span className="font-bold text-black">Étape 3 : Réservez votre photobooth</span> – Une fois que vous avez choisi vos options de personnalisation, vous pouvez réserver votre photobooth. The Pix vous enverra une confirmation de réservation et des informations sur le jour de l'événement.
              </li>
              <li>
                <span className="font-bold text-black">Étape 4 : Installation et utilisation</span> – Le jour de l'événement, une équipe de The Pix viendra installer le photobooth à l'endroit de votre choix dans le 13ème arrondissement de Paris. Ils s'assureront que tout fonctionne correctement et seront disponibles pour toute assistance pendant l'événement.
              </li>
              <li>
                <span className="font-bold text-black">Étape 5 : Profitez de votre événement</span> – Une fois le photobooth installé, vos invités peuvent commencer à l'utiliser. Ils pourront prendre des photos amusantes, les imprimer, et les partager sur les réseaux sociaux. Vous pouvez vous détendre et profiter de l'événement en sachant que vos invités s'amusent et créent des souvenirs inoubliables.
              </li>
            </ol>
          </section>

          {/* Conseils */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-black mb-6">Conseils pour tirer le meilleur parti de votre photobooth</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-black mb-2">Placez le photobooth dans un endroit stratégique</h3>
                <p className="text-gray-700">
                  Assurez-vous que le photobooth est placé dans un endroit visible et accessible pour tous vos invités. Un endroit proche de la piste de danse ou de la zone de réception est idéal.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-black mb-2">Fournissez des accessoires amusants</h3>
                <p className="text-gray-700">
                  Les accessoires sont essentiels pour une soirée réussie. Fournissez une variété d'accessoires amusants comme des chapeaux, des lunettes, et des pancartes pour encourager vos invités à se lâcher et à s'amuser.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-black mb-2">Encouragez le partage sur les réseaux sociaux</h3>
                <p className="text-gray-700">
                  Encouragez vos invités à partager leurs photos sur les réseaux sociaux en utilisant un hashtag spécifique à votre événement. Cela augmente non seulement la visibilité de votre événement en ligne, mais permet aussi de rassembler toutes les photos en un seul endroit.
                </p>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Louer un photobooth pour votre événement dans le 13ème arrondissement de Paris avec The Pix est une excellente façon de créer des souvenirs inoubliables et de divertir vos invités.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Avec leur matériel de haute qualité, leurs options de personnalisation, et leur service client exceptionnel, vous pouvez être sûr que votre événement sera un succès. Alors n'attendez plus, contactez The Pix et réservez votre photobooth dès aujourd'hui !
            </p>
          </section>
        </article>
      </div>

      {/* Footer */}
      <Footer
        onSEOPage={onSEOPage}
        onPhotoboothDetails={onPhotoboothDetails}
        arrondissementLinks={[
          { label: 'Location photobooth Paris 1', onClick: onParis1Page || (() => {}) },
          { label: 'Location photobooth Paris 2', onClick: onParis2Page || (() => {}) },
          { label: 'Location photobooth Paris 3', onClick: onParis3Page || (() => {}) },
          { label: 'Location photobooth Paris 4', onClick: onParis4Page || (() => {}) },
          { label: 'Location photobooth Paris 5', onClick: onParis5Page || (() => {}) },
          { label: 'Location photobooth Paris 6', onClick: onParis6Page || (() => {}) },
          { label: 'Location photobooth Paris 7', onClick: onParis7Page || (() => {}) },
          { label: 'Location photobooth Paris 8', onClick: onParis8Page || (() => {}) },
          { label: 'Location photobooth Paris 9', onClick: onParis9Page || (() => {}) },
          { label: 'Location photobooth Paris 10', onClick: onParis10Page || (() => {}) },
          { label: 'Location photobooth Paris 11', onClick: onParis11Page || (() => {}) },
          { label: 'Location photobooth Paris 12', onClick: onParis12Page || (() => {}) },
          { label: 'Location photobooth Paris 13', onClick: onBack },
        ]}
      />
    </div>
  );
};

export default Paris13Page;

