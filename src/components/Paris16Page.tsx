import React from 'react';
import { ArrowLeft, Camera } from 'lucide-react';
import HomeSectionLink from './HomeSectionLink';
import Footer from './Footer';

interface Paris16PageProps {
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
  onParis13Page?: () => void;
  onParis14Page?: () => void;
  onParis15Page?: () => void;
}

const Paris16Page: React.FC<Paris16PageProps> = ({
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
  onParis13Page,
  onParis14Page,
  onParis15Page,
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
              <button onClick={onBack} className="text-gray-700 hover:text-yellow-500 transition-colors font-medium">
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
              <span className="text-yellow-400 relative">{' '}16ème arrondissement de Paris<div className="absolute -bottom-2 left-0 w-full h-3 bg-yellow-400 -z-10"></div></span>
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <article className="prose prose-lg max-w-none">
          <section className="mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold text-black mb-4">Location photobooth Paris 16e avec The Pix</h2>
              <p className="text-gray-700 mb-4">
                Dans le cœur vibrant du 16e arrondissement de Paris, l’organisation d’événements d’entreprise revêt un charme particulier.
                Avec des monuments emblématiques tels que Roland Garros, l’Arc de triomphe et le Trocadéro à proximité, l’emplacement est déjà un atout majeur.
                Mais comment rendre votre événement vraiment inoubliable ? La solution innovante : la location de photobooth avec The Pix.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-black mb-6">L’importance de l’innovation dans les événements d’entreprise</h2>
            <p className="text-gray-700 mb-4">
              Dans le paysage concurrentiel des entreprises d’aujourd’hui, l’innovation est essentielle. Cela ne se limite pas aux produits
              et services, mais s’étend également aux événements d’entreprise. Des activités innovantes, comme les photobooths, peuvent favoriser
              la cohésion d’équipe et stimuler la motivation des employés.
            </p>
            <p className="text-gray-700 mb-4">location photobooth paris 16</p>
            <p className="text-gray-700">
              Elles créent des expériences mémorables qui laissent une impression durable. Avec The Pix, vous pouvez louer un photobooth à Paris 16e
              et apporter une touche de créativité à votre événement.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-black mb-6">The Pix : Votre partenaire pour la location de photobooth à Paris 16e</h2>
            <p className="text-gray-700 mb-4">
              The Pix est un prestataire de premier plan pour la location de photobooths dans le 16e arrondissement de Paris.
              Nous proposons une variété d’options, allant des designs classiques aux plus modernes. Notre réputation de service de qualité
              et de fiabilité en fait un choix privilégié.
            </p>
            <p className="text-gray-700">
              Nous garantissons une installation et une utilisation du photobooth sans accroc, avec des tarifs compétitifs et des offres packagées
              pour nos clients d’entreprise.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-black mb-6">Avantages des photobooths pour la cohésion d’équipe et la motivation</h2>
            <p className="text-gray-700 mb-4">
              Les photobooths constituent une activité de team building unique. En plus d’augmenter les interactions sociales entre les employés,
              ils ont un impact positif sur l’environnement de travail et la satisfaction des employés.
            </p>
            <p className="text-gray-700">
              Le caractère ludique et interactif des photobooths peut rehausser le moral. Les photos capturées lors de l’événement peuvent être utilisées
              pour de futures actions marketing ou pour renforcer la culture d’entreprise.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-black mb-6">Personnalisation et intégration de marque avec The Pix</h2>
            <p className="text-gray-700 mb-4">
              Nous offrons des options de personnalisation pour nos photobooths, vous permettant d’aligner l’expérience photobooth avec l’identité de votre entreprise.
              Vous pouvez ainsi enrichir vos thèmes événementiels et votre branding à travers le photobooth, ajoutant une touche personnelle à l’événement.
            </p>
            <p className="text-gray-700">
              Nous proposons également des fonctionnalités technologiques telles que l’intégration aux réseaux sociaux, permettant un partage instantané des photos
              et augmentant la visibilité de votre événement.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-black mb-6">Emplacement stratégique : Paris 16e et ses attraits</h2>
            <p className="text-gray-700">
              Le 16e arrondissement de Paris est un emplacement stratégique pour les événements d’entreprise, à proximité de monuments tels que Roland Garros,
              l’Arc de triomphe, et le Trocadéro. Ces lieux emblématiques ajoutent une touche d’élégance et de prestige à votre événement, tout en offrant des
              décors magnifiques pour vos séances de photobooth.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-black mb-6">La facilité d’installation et l’assistance de The Pix</h2>
            <p className="text-gray-700">
              Nous simplifions l’installation et l’utilisation du photobooth, en offrant un support et une assistance tout au long de l’événement.
              Cela garantit une expérience fluide et sans souci pour vous et votre équipe.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-black mb-6">Réserver avec The Pix : Simplicité et efficacité</h2>
            <p className="text-gray-700 mb-4">
              Réserver un photobooth avec The Pix est simple et efficace. Nous proposons des tarifs compétitifs et des offres packagées pour nos clients d’entreprise.
            </p>
            <p className="text-gray-700">
              Nos photobooths sont adaptables aux événements d’entreprise en intérieur comme en extérieur, ce qui en fait un choix polyvalent pour tout événement.
            </p>
          </section>
        </article>
      </div>

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
          { label: 'Location photobooth Paris 13', onClick: onParis13Page || (() => {}) },
          { label: 'Location photobooth Paris 14', onClick: onParis14Page || (() => {}) },
          { label: 'Location photobooth Paris 15', onClick: onParis15Page || (() => {}) },
          { label: 'Location photobooth Paris 16', onClick: onBack },
        ]}
      />
    </div>
  );
};

export default Paris16Page;

