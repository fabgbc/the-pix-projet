import React, { useCallback, useMemo } from 'react';
import HomePage from './components/HomePage';
import ServicesPage from './components/ServicesPage';
import PrivateEventsPage from './components/PrivateEventsPage';
import GalleryPage from './components/GalleryPage';
import PhotoboothDetailsPage from './components/PhotoboothDetailsPage';
import AIAnimationsPage from './components/AIAnimationsPage';
import DemoRequestPage from './components/DemoRequestPage';
import SEOPage from './components/SEOPage';
import PhotographerAIPage from './components/PhotographerAIPage';
import QuotePage from './components/QuotePage';
import Paris1Page from './components/Paris1Page';
import Paris2Page from './components/Paris2Page';
import Paris3Page from './components/Paris3Page';
import Paris4Page from './components/Paris4Page';
import Paris5Page from './components/Paris5Page';
import Paris6Page from './components/Paris6Page';
import Paris7Page from './components/Paris7Page';
import Paris8Page from './components/Paris8Page';
import Paris9Page from './components/Paris9Page';
import Paris10Page from './components/Paris10Page';
import Paris11Page from './components/Paris11Page';
import Paris12Page from './components/Paris12Page';
import Paris13Page from './components/Paris13Page';
import Paris14Page from './components/Paris14Page';
import Paris15Page from './components/Paris15Page';
import Paris16Page from './components/Paris16Page';
import Paris17Page from './components/Paris17Page';
import Paris18Page from './components/Paris18Page';
import Paris19Page from './components/Paris19Page';
import Paris20Page from './components/Paris20Page';
import { useRouter } from './router';
import { ARRONDISSEMENTS } from './data/arrondissements';
import { PageMetadata, usePageMetadata } from './hooks/usePageMetadata';

interface RouteWrapperProps extends PageMetadata {
  children: React.ReactNode;
}

const RouteWrapper: React.FC<RouteWrapperProps> = ({ children, ...meta }) => {
  usePageMetadata(meta);
  return <>{children}</>;
};

interface ArrondissementComponentProps {
  onQuoteRequest: () => void;
  onPhotoboothDetails: () => void;
  onAIAnimations: () => void;
  onSEOPage: () => void;
  arrondissementLinks: { label: string; onClick: () => void }[];
}

type ArrondissementComponent = React.ComponentType<ArrondissementComponentProps>;

const arrondissementComponents: Record<number, ArrondissementComponent> = {
  1: Paris1Page,
  2: Paris2Page,
  3: Paris3Page,
  4: Paris4Page,
  5: Paris5Page,
  6: Paris6Page,
  7: Paris7Page,
  8: Paris8Page,
  9: Paris9Page,
  10: Paris10Page,
  11: Paris11Page,
  12: Paris12Page,
  13: Paris13Page,
  14: Paris14Page,
  15: Paris15Page,
  16: Paris16Page,
  17: Paris17Page,
  18: Paris18Page,
  19: Paris19Page,
  20: Paris20Page,
};

const App: React.FC = () => {
  const { path, navigate } = useRouter();

  const goTo = useCallback(
    (slug: string) => {
      navigate(slug);
    },
    [navigate],
  );

  const buildUrl = useCallback((slug: string) => {
    if (typeof window === 'undefined') {
      return slug;
    }

    return `${window.location.origin}${slug === '/' ? '' : slug}`;
  }, []);

  const arrondissementLinks = useMemo(
    () =>
      ARRONDISSEMENTS.map(item => ({
        label: item.label,
        onClick: () => goTo(item.slug),
      })),
    [goTo],
  );

  const goHome = useCallback(() => goTo('/'), [goTo]);
  const goPhotobooth = useCallback(() => goTo('/location-photobooth-paris'), [goTo]);
  const goPrivateEvents = useCallback(() => goTo('/photobooth-evenement-paris'), [goTo]);
  const goAI = useCallback(() => goTo('/animations-photobooth-ia'), [goTo]);
  const goQuote = useCallback(() => goTo('/devis-photobooth-gratuit'), [goTo]);
  const goSEO = useCallback(() => goTo('/location-de-photobooth-a-paris-avec-the-pix'), [goTo]);
  const goDemo = useCallback(() => goTo('/demande-demo-photobooth'), [goTo]);

  const ArrondissementRoute: React.FC<{ number: number; Component: ArrondissementComponent }> = ({ number, Component }) => {
    const arrondissementLabel = number === 1 ? '1er' : `${number}ème`;

    return (
      <RouteWrapper
        title={`Location photobooth Paris ${number} - BoostPix`}
        description={`Photobooth premium dans le ${arrondissementLabel} arrondissement de Paris : installation, animation et souvenirs personnalisés avec BoostPix.`}
        url={buildUrl(`/location-photobooth-paris-${number}`)}
      >
        <Component
          onQuoteRequest={goQuote}
          onPhotoboothDetails={goPhotobooth}
          onAIAnimations={goAI}
          onSEOPage={goSEO}
          arrondissementLinks={arrondissementLinks}
        />
      </RouteWrapper>
    );
  };

  const arrondissementMatch = path.match(/^\/location-photobooth-paris-(\d{1,2})$/);
  if (arrondissementMatch) {
    const number = Number(arrondissementMatch[1]);
    const Component = arrondissementComponents[number];
    if (Component) {
      return <ArrondissementRoute number={number} Component={Component} />;
    }
  }

  switch (path) {
    case '/': {
      return (
        <RouteWrapper
          title="BoostPix - Location Photobooth Premium Paris & Île-de-France | Événements & Mariages"
          description="Location de photobooth premium à Paris et en Île-de-France. Expériences immersives, design sur mesure, IA et accompagnement complet pour vos événements."
          url={buildUrl('/')}
        >
          <HomePage />
        </RouteWrapper>
      );
    }
    case '/services': {
      return (
        <RouteWrapper
          title="Services photobooth premium à Paris - BoostPix"
          description="Découvrez les services photobooth sur mesure de BoostPix : scénographie, animations IA, photographe connecté et expériences immersives."
          url={buildUrl('/services')}
        >
          <ServicesPage
            onPhotoboothDetails={goPhotobooth}
            onPrivateEvents={goPrivateEvents}
            onAIAnimations={goAI}
            onQuoteRequest={goQuote}
            onSEOPage={goSEO}
            arrondissementLinks={arrondissementLinks}
          />
        </RouteWrapper>
      );
    }
    case '/location-photobooth-paris': {
      return (
        <RouteWrapper
          title="Photobooth sur mesure à Paris - BoostPix"
          description="Photobooth premium personnalisable pour vos événements à Paris : design, impression instantanée, accompagnement et options IA."
          url={buildUrl('/location-photobooth-paris')}
        >
          <PhotoboothDetailsPage
            onAIAnimations={goAI}
            onQuoteRequest={goQuote}
            arrondissementLinks={arrondissementLinks}
          />
        </RouteWrapper>
      );
    }
    case '/photobooth-evenement-paris': {
      return (
        <RouteWrapper
          title="Photobooth événements privés à Paris - BoostPix"
          description="Mariages, anniversaires, célébrations : BoostPix crée des expériences photobooth élégantes et conviviales à Paris et en Île-de-France."
          url={buildUrl('/photobooth-evenement-paris')}
        >
          <PrivateEventsPage
            onPhotoboothDetails={goPhotobooth}
            onAIAnimations={goAI}
            onQuoteRequest={goQuote}
            onSEOPage={goSEO}
            arrondissementLinks={arrondissementLinks}
          />
        </RouteWrapper>
      );
    }
    case '/animations-photobooth-ia': {
      return (
        <RouteWrapper
          title="Animations photobooth IA à Paris - BoostPix"
          description="Animations photobooth avec intelligence artificielle : décors immersifs, effets créatifs et partage instantané pour vos événements parisiens."
          url={buildUrl('/animations-photobooth-ia')}
        >
          <AIAnimationsPage
            onDemoRequest={goDemo}
            onPhotoboothDetails={goPhotobooth}
            onSEOPage={goSEO}
            onQuoteRequest={goQuote}
            arrondissementLinks={arrondissementLinks}
          />
        </RouteWrapper>
      );
    }
    case '/galerie-photobooth-paris': {
      return (
        <RouteWrapper
          title="Galerie photobooth à Paris - BoostPix"
          description="Découvrez des réalisations photobooth BoostPix pour des événements professionnels et privés à Paris : décors, installations et expériences immersives."
          url={buildUrl('/galerie-photobooth-paris')}
        >
          <GalleryPage
            onPhotoboothDetails={goPhotobooth}
            onQuoteRequest={goQuote}
            onSEOPage={goSEO}
            arrondissementLinks={arrondissementLinks}
          />
        </RouteWrapper>
      );
    }
    case '/devis-photobooth-gratuit': {
      return (
        <RouteWrapper
          title="Demande de devis photobooth gratuit - BoostPix"
          description="Obtenez un devis photobooth personnalisé pour votre événement à Paris. BoostPix vous accompagne avec des solutions sur mesure."
          url={buildUrl('/devis-photobooth-gratuit')}
        >
          <QuotePage onSEOPage={goSEO} arrondissementLinks={arrondissementLinks} />
        </RouteWrapper>
      );
    }
    case '/location-de-photobooth-a-paris-avec-the-pix': {
      return (
        <RouteWrapper
          title="Location de photobooth à Paris avec The Pix - BoostPix"
          description="BoostPix accompagne les entreprises et agences avec des photobooths connectés, IA et décors sur mesure dans tout Paris."
          url={buildUrl('/location-de-photobooth-a-paris-avec-the-pix')}
        >
          <SEOPage
            onQuoteRequest={goQuote}
            onPhotoboothDetails={goPhotobooth}
            onAIAnimations={goAI}
            arrondissementLinks={arrondissementLinks}
          />
        </RouteWrapper>
      );
    }
    case '/photographe-connecte-ia': {
      return (
        <RouteWrapper
          title="Photographe connecté IA à Paris - BoostPix"
          description="Photographe connecté avec IA, galerie live et diffusion instantanée. Une expérience immersive pour vos événements parisiens."
          url={buildUrl('/photographe-connecte-ia')}
        >
          <PhotographerAIPage
            onQuoteRequest={goQuote}
            onPhotoboothDetails={goPhotobooth}
            onAIAnimations={goAI}
            onSEOPage={goSEO}
            arrondissementLinks={arrondissementLinks}
          />
        </RouteWrapper>
      );
    }
    case '/demande-demo-photobooth': {
      return (
        <RouteWrapper
          title="Demande de démonstration photobooth - BoostPix"
          description="Planifiez une démonstration photobooth pour découvrir les animations BoostPix : IA, branding sur mesure et expériences connectées."
          url={buildUrl('/demande-demo-photobooth')}
        >
          <DemoRequestPage
            onSEOPage={goSEO}
            onQuoteRequest={goQuote}
            arrondissementLinks={arrondissementLinks}
          />
        </RouteWrapper>
      );
    }
    default: {
      return (
        <RouteWrapper
          title="BoostPix - Photobooth premium à Paris"
          description="BoostPix crée des expériences photobooth haut de gamme à Paris. Retrouvez nos services, animations IA et solutions personnalisées."
          url={buildUrl(path)}
        >
          <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-6">
            <h1 className="text-4xl font-bold text-black mb-4">Page introuvable</h1>
            <p className="text-gray-600 mb-8">
              La page que vous recherchez n'existe pas ou a été déplacée.
            </p>
            <button
              onClick={goHome}
              className="bg-yellow-400 text-black px-6 py-3 rounded-full hover:bg-yellow-500 transition-colors font-semibold"
            >
              Revenir à l'accueil
            </button>
          </div>
        </RouteWrapper>
      );
    }
  }
};

export default App;

