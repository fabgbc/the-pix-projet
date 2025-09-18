import React from 'react';
import { Camera, Star } from 'lucide-react';
import Footer from './Footer';

interface GalleryPageProps {
  onBack: () => void;
  onPhotoboothDetails: () => void;
  onQuoteRequest: () => void;
  onSEOPage: () => void;
  arrondissementLinks: { label: string; onClick: () => void }[];
}

const GalleryPage: React.FC<GalleryPageProps> = ({
  onBack,
  onPhotoboothDetails,
  onQuoteRequest,
  onSEOPage,
  arrondissementLinks,
}) => {
  const photos = [
    {
      src: 'https://res.cloudinary.com/de55ql9ig/image/upload/v1755162724/_DSC5745-Modifier_iyfv38.jpg',
      alt: "Photobooth BoostPix en action - Événement professionnel",
    },
    {
      src: 'https://res.cloudinary.com/de55ql9ig/image/upload/v1755162678/CA19-092258_w7mabd.jpg',
      alt: "Photobooth BoostPix - Animation événementielle",
    },
    {
      src: 'https://res.cloudinary.com/de55ql9ig/image/upload/v1755162666/_DSC4808_ovexjl.jpg',
      alt: "Photobooth BoostPix - Soirée d'entreprise",
    },
    {
      src: 'https://res.cloudinary.com/de55ql9ig/image/upload/v1755162650/DSC04503__aox1xl.jpg',
      alt: 'Photobooth BoostPix - Événement premium',
    },
    {
      src: 'https://res.cloudinary.com/de55ql9ig/image/upload/v1755162500/_DSC4597-Modifier_wnyqry.jpg',
      alt: 'Photobooth BoostPix - Mariage élégant',
    },
    {
      src: 'https://res.cloudinary.com/de55ql9ig/image/upload/v1755162445/DSC04751__kpsodp.jpg',
      alt: 'Photobooth BoostPix - Célébration privée',
    },
    {
      src: 'https://res.cloudinary.com/de55ql9ig/image/upload/v1756223120/The_Pix_erp4rz.jpg',
      alt: 'Photobooth BoostPix - The Pix événement premium',
    },
    {
      src: 'https://res.cloudinary.com/de55ql9ig/image/upload/v1755162480/DSC05054-Modifier_rjdl39.jpg',
      alt: 'Photobooth BoostPix - Animation créative',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                <Camera className="w-6 h-6 text-black" />
              </div>
              <span className="text-2xl font-bold text-black">BoostPix</span>
            </div>

            <nav className="hidden lg:flex items-center space-x-8">
              <button onClick={onBack} className="text-gray-700 hover:text-yellow-500 transition-colors font-medium">
                Accueil
              </button>
              <button onClick={onPhotoboothDetails} className="text-gray-700 hover:text-yellow-500 transition-colors font-medium">
                Photobooth sur mesure
              </button>
              <button onClick={onQuoteRequest} className="bg-yellow-400 text-black px-6 py-3 rounded-full hover:bg-yellow-500 transition-colors font-semibold">
                Devis Gratuit
              </button>
            </nav>
          </div>
        </div>
      </header>

      <main className="pt-24">
        <section className="py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-black mb-6">Galerie photo BoostPix</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Découvrez quelques-unes de nos installations et mises en scène réalisées pour des événements professionnels et privés.
              Chaque dispositif est imaginé sur mesure pour correspondre à l'identité de nos clients.
            </p>
            <button
              onClick={onQuoteRequest}
              className="mt-10 bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition-colors"
            >
              Créer une galerie pour votre événement
            </button>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {photos.map(photo => (
                <div key={photo.src} className="relative overflow-hidden rounded-2xl h-64 group">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">Ils parlent de nous</h2>
              <p className="text-gray-600">
                Les marques et agences qui nous font confiance pour leurs événements premium.
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              {[1, 2, 3].map(index => (
                <article key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, starIndex) => (
                      <Star key={starIndex} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    « Une équipe réactive et créative. Le photobooth a été un véritable point d'attraction pendant notre soirée. »
                  </p>
                  <div>
                    <h3 className="text-lg font-semibold text-black">Client BoostPix</h3>
                    <p className="text-gray-500">Événement premium</p>
                  </div>
                </article>
              ))}
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

export default GalleryPage;

