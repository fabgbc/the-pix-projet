import React, { useState } from 'react';
import { useEffect } from 'react';
import QuotePage from './components/QuotePage';
import PhotoboothDetailsPage from './components/PhotoboothDetailsPage';
import AIAnimationsPage from './components/AIAnimationsPage';
import DemoRequestPage from './components/DemoRequestPage';
import SEOPage from './components/SEOPage';
import PhotographerAIPage from './components/PhotographerAIPage';
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
import Footer from './components/Footer';
import {
  Camera,
  Sparkles,
  Users,
  Heart,
  Zap,
  Star,
  Award,
  Palette,
  Menu,
  X,
  ArrowRight,
  Check
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showQuotePage, setShowQuotePage] = useState(false);
  const [showPhotoboothDetails, setShowPhotoboothDetails] = useState(false);
  const [showAIAnimations, setShowAIAnimations] = useState(false);
  const [showDemoRequest, setShowDemoRequest] = useState(false);
  const [showSEOPage, setShowSEOPage] = useState(false);
  const [showPhotographerAI, setShowPhotographerAI] = useState(false);
  const [showParis1Page, setShowParis1Page] = useState(false);
  const [showParis2Page, setShowParis2Page] = useState(false);
  const [showParis3Page, setShowParis3Page] = useState(false);
  const [showParis4Page, setShowParis4Page] = useState(false);
  const [showParis5Page, setShowParis5Page] = useState(false);
  const [showParis6Page, setShowParis6Page] = useState(false);
  const [showParis7Page, setShowParis7Page] = useState(false);
  const [showParis8Page, setShowParis8Page] = useState(false);
  const [showParis9Page, setShowParis9Page] = useState(false);
  const [showParis10Page, setShowParis10Page] = useState(false);
  const [showParis11Page, setShowParis11Page] = useState(false);
  const [showParis12Page, setShowParis12Page] = useState(false);
  const [showParis13Page, setShowParis13Page] = useState(false);
  const [showParis14Page, setShowParis14Page] = useState(false);
  const [showParis15Page, setShowParis15Page] = useState(false);
  const [showParis16Page, setShowParis16Page] = useState(false);
  const [showParis17Page, setShowParis17Page] = useState(false);
  const [showParis18Page, setShowParis18Page] = useState(false);
  const [showParis19Page, setShowParis19Page] = useState(false);
  const [previousPage, setPreviousPage] = useState<string>('home');

  // Fonction pour remettre le scroll en haut
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Effet pour remettre le scroll en haut quand on change de page
  useEffect(() => {
    scrollToTop();
  }, [
    showQuotePage,
    showPhotoboothDetails,
    showAIAnimations,
    showDemoRequest,
    showSEOPage,
    showPhotographerAI,
    showParis1Page,
    showParis2Page,
    showParis3Page,
    showParis4Page,
    showParis5Page,
    showParis6Page,
    showParis7Page,
    showParis8Page,
    showParis9Page,
    showParis10Page,
    showParis11Page,
    showParis12Page,
    showParis13Page,
    showParis14Page,
    showParis15Page,
    showParis16Page,
    showParis17Page,
    showParis18Page,
    showParis19Page,
  ]);

  // Fonction pour gérer le retour depuis la page de devis
  const handleQuotePageBack = () => {
    setShowQuotePage(false);
    // Retourner à la page précédente
    switch (previousPage) {
      case 'seo':
        setShowSEOPage(true);
        break;
      case 'photographerAI':
        setShowPhotographerAI(true);
        break;
      case 'paris1':
        setShowParis1Page(true);
        break;
      case 'paris2':
        setShowParis2Page(true);
        break;
      case 'paris3':
        setShowParis3Page(true);
        break;
      case 'paris4':
        setShowParis4Page(true);
        break;
      case 'paris5':
        setShowParis5Page(true);
        break;
      case 'paris6':
        setShowParis6Page(true);
        break;
      case 'paris7':
        setShowParis7Page(true);
        break;
      case 'paris8':
        setShowParis8Page(true);
        break;
      case 'paris9':
        setShowParis9Page(true);
        break;
      case 'paris10':
        setShowParis10Page(true);
        break;
      case 'paris11':
        setShowParis11Page(true);
        break;
      case 'paris12':
        setShowParis12Page(true);
        break;
      case 'paris13':
        setShowParis13Page(true);
        break;
      case 'paris14':
        setShowParis14Page(true);
        break;
      case 'paris15':
        setShowParis15Page(true);
        break;
      case 'paris16':
        setShowParis16Page(true);
        break;
      case 'paris17':
        setShowParis17Page(true);
        break;
      case 'paris18':
        setShowParis18Page(true);
        break;
      case 'paris19':
        setShowParis19Page(true);
        break;
      default:
        // Rester sur la page principale
        break;
    }
  };

  // Fonction pour ouvrir la page de devis en se souvenant de la page précédente
  const openQuotePage = (fromPage: string = 'home') => {
    setPreviousPage(fromPage);
    setShowQuotePage(true);
  };

  const arrondissementLinks = [
    { label: 'Location photobooth Paris 1', onClick: () => setShowParis1Page(true) },
    { label: 'Location photobooth Paris 2', onClick: () => setShowParis2Page(true) },
    { label: 'Location photobooth Paris 3', onClick: () => setShowParis3Page(true) },
    { label: 'Location photobooth Paris 4', onClick: () => setShowParis4Page(true) },
    { label: 'Location photobooth Paris 5', onClick: () => setShowParis5Page(true) },
    { label: 'Location photobooth Paris 6', onClick: () => setShowParis6Page(true) },
    { label: 'Location photobooth Paris 7', onClick: () => setShowParis7Page(true) },
    { label: 'Location photobooth Paris 8', onClick: () => setShowParis8Page(true) },
    { label: 'Location photobooth Paris 9', onClick: () => setShowParis9Page(true) },
    { label: 'Location photobooth Paris 10', onClick: () => setShowParis10Page(true) },
    { label: 'Location photobooth Paris 11', onClick: () => setShowParis11Page(true) },
    { label: 'Location photobooth Paris 12', onClick: () => setShowParis12Page(true) },
    { label: 'Location photobooth Paris 13', onClick: () => setShowParis13Page(true) },
    { label: 'Location photobooth Paris 14', onClick: () => setShowParis14Page(true) },
    { label: 'Location photobooth Paris 15', onClick: () => setShowParis15Page(true) },
    { label: 'Location photobooth Paris 16', onClick: () => setShowParis16Page(true) },
    { label: 'Location photobooth Paris 17', onClick: () => setShowParis17Page(true) },
    { label: 'Location photobooth Paris 18', onClick: () => setShowParis18Page(true) },
    { label: 'Location photobooth Paris 19', onClick: () => setShowParis19Page(true) },
  ];

  if (showQuotePage) {
    return <QuotePage 
      onBack={handleQuotePageBack} 
      onSEOPage={() => {
        setShowQuotePage(false);
        setShowSEOPage(true);
      }}
      onParis1Page={() => {
        setShowQuotePage(false);
        setShowParis1Page(true);
      }}
      onParis2Page={() => {
        setShowQuotePage(false);
        setShowParis2Page(true);
      }}
      onParis3Page={() => {
        setShowQuotePage(false);
        setShowParis3Page(true);
      }}
      onParis4Page={() => {
        setShowQuotePage(false);
        setShowParis4Page(true);
      }}
      onParis5Page={() => {
        setShowQuotePage(false);
        setShowParis5Page(true);
      }}
      onParis6Page={() => {
        setShowQuotePage(false);
        setShowParis6Page(true);
      }}
      onParis7Page={() => {
        setShowQuotePage(false);
        setShowParis7Page(true);
      }}
      onParis8Page={() => {
        setShowQuotePage(false);
        setShowParis8Page(true);
      }}
      onParis9Page={() => {
        setShowQuotePage(false);
        setShowParis9Page(true);
      }}
      onParis10Page={() => {
        setShowQuotePage(false);
        setShowParis10Page(true);
      }}
      onParis11Page={() => {
        setShowQuotePage(false);
        setShowParis11Page(true);
      }}
      onParis12Page={() => {
        setShowQuotePage(false);
        setShowParis12Page(true);
      }}
      onParis13Page={() => {
        setShowQuotePage(false);
        setShowParis13Page(true);
      }}
      onParis14Page={() => {
        setShowQuotePage(false);
        setShowParis14Page(true);
      }}
      onParis15Page={() => {
        setShowQuotePage(false);
        setShowParis15Page(true);
      }}
      onParis16Page={() => {
        setShowQuotePage(false);
        setShowParis16Page(true);
      }}
      onParis17Page={() => {
        setShowQuotePage(false);
        setShowParis17Page(true);
      }}
      onParis18Page={() => {
        setShowQuotePage(false);
        setShowParis18Page(true);
      }}
      onParis19Page={() => {
        setShowQuotePage(false);
        setShowParis19Page(true);
      }}
    />;
  }

  if (showPhotoboothDetails) {
    return <PhotoboothDetailsPage
      onBack={() => setShowPhotoboothDetails(false)}
      onAIAnimations={() => {
        setShowPhotoboothDetails(false);
        setShowAIAnimations(true);
      }}
      onSEOPage={() => {
        setShowPhotoboothDetails(false);
        setShowSEOPage(true);
      }}
      onParis1Page={() => {
        setShowPhotoboothDetails(false);
        setShowParis1Page(true);
      }}
      onParis2Page={() => {
        setShowPhotoboothDetails(false);
        setShowParis2Page(true);
      }}
      onParis3Page={() => {
        setShowPhotoboothDetails(false);
        setShowParis3Page(true);
      }}
      onParis4Page={() => {
        setShowPhotoboothDetails(false);
        setShowParis4Page(true);
      }}
      onParis5Page={() => {
        setShowPhotoboothDetails(false);
        setShowParis5Page(true);
      }}
      onParis6Page={() => {
        setShowPhotoboothDetails(false);
        setShowParis6Page(true);
      }}
      onParis7Page={() => {
        setShowPhotoboothDetails(false);
        setShowParis7Page(true);
      }}
      onParis8Page={() => {
        setShowPhotoboothDetails(false);
        setShowParis8Page(true);
      }}
      onParis9Page={() => {
        setShowPhotoboothDetails(false);
        setShowParis9Page(true);
      }}
      onQuoteRequest={() => {
        setShowPhotoboothDetails(false);
        openQuotePage('photoboothDetails');
      }}
    />;
  }

  if (showAIAnimations) {
    return <AIAnimationsPage
      onBack={() => setShowAIAnimations(false)}
      onDemoRequest={() => {
        setShowAIAnimations(false);
        setShowDemoRequest(true);
      }}
      onPhotoboothDetails={() => {
        setShowAIAnimations(false);
        setShowPhotoboothDetails(true);
      }}
      onSEOPage={() => {
        setShowAIAnimations(false);
        setShowSEOPage(true);
      }}
      onParis1Page={() => {
        setShowAIAnimations(false);
        setShowParis1Page(true);
      }}
      onParis2Page={() => {
        setShowAIAnimations(false);
        setShowParis2Page(true);
      }}
      onParis3Page={() => {
        setShowAIAnimations(false);
        setShowParis3Page(true);
      }}
      onParis4Page={() => {
        setShowAIAnimations(false);
        setShowParis4Page(true);
      }}
      onParis5Page={() => {
        setShowAIAnimations(false);
        setShowParis5Page(true);
      }}
      onParis6Page={() => {
        setShowAIAnimations(false);
        setShowParis6Page(true);
      }}
      onParis7Page={() => {
        setShowAIAnimations(false);
        setShowParis7Page(true);
      }}
      onParis8Page={() => {
        setShowAIAnimations(false);
        setShowParis8Page(true);
      }}
      onParis9Page={() => {
        setShowAIAnimations(false);
        setShowParis9Page(true);
      }}
      onQuoteRequest={() => {
        setShowAIAnimations(false);
        openQuotePage('aiAnimations');
      }}
    />;
  }

  if (showDemoRequest) {
    return <DemoRequestPage 
      onBack={() => setShowDemoRequest(false)}
      onSEOPage={() => {
        setShowDemoRequest(false);
        setShowSEOPage(true);
      }}
      onParis1Page={() => {
        setShowDemoRequest(false);
        setShowParis1Page(true);
      }}
      onParis2Page={() => {
        setShowDemoRequest(false);
        setShowParis2Page(true);
      }}
      onParis3Page={() => {
        setShowDemoRequest(false);
        setShowParis3Page(true);
      }}
      onParis4Page={() => {
        setShowDemoRequest(false);
        setShowParis4Page(true);
      }}
      onParis5Page={() => {
        setShowDemoRequest(false);
        setShowParis5Page(true);
      }}
      onParis6Page={() => {
        setShowDemoRequest(false);
        setShowParis6Page(true);
      }}
      onParis7Page={() => {
        setShowDemoRequest(false);
        setShowParis7Page(true);
      }}
      onParis8Page={() => {
        setShowDemoRequest(false);
        setShowParis8Page(true);
      }}
      onParis9Page={() => {
        setShowDemoRequest(false);
        setShowParis9Page(true);
      }}
      onQuoteRequest={() => {
        setShowDemoRequest(false);
        openQuotePage('demoRequest');
      }}
    />;
  }

  if (showSEOPage) {
    return <SEOPage 
      onBack={() => setShowSEOPage(false)} 
      onQuoteRequest={() => {
        setShowSEOPage(false);
        openQuotePage('seo');
      }}
      onPhotoboothDetails={() => {
        setShowSEOPage(false);
        setShowPhotoboothDetails(true);
      }}
      onAIAnimations={() => {
        setShowSEOPage(false);
        setShowAIAnimations(true);
      }}
      onParis1Page={() => {
        setShowSEOPage(false);
        setShowParis1Page(true);
      }}
      onParis2Page={() => {
        setShowSEOPage(false);
        setShowParis2Page(true);
      }}
      onParis3Page={() => {
        setShowSEOPage(false);
        setShowParis3Page(true);
      }}
      onParis4Page={() => {
        setShowSEOPage(false);
        setShowParis4Page(true);
      }}
      onParis5Page={() => {
        setShowSEOPage(false);
        setShowParis5Page(true);
      }}
      onParis6Page={() => {
        setShowSEOPage(false);
        setShowParis6Page(true);
      }}
      onParis7Page={() => {
        setShowSEOPage(false);
        setShowParis7Page(true);
      }}
      onParis8Page={() => {
        setShowSEOPage(false);
        setShowParis8Page(true);
      }}
      onParis9Page={() => {
        setShowSEOPage(false);
        setShowParis9Page(true);
      }}
    />;
  }

  if (showPhotographerAI) {
    return <PhotographerAIPage 
      onBack={() => setShowPhotographerAI(false)} 
      onQuoteRequest={() => {
        setShowPhotographerAI(false);
        openQuotePage('photographerAI');
      }} 
      onPhotoboothDetails={() => {
        setShowPhotographerAI(false);
        setShowPhotoboothDetails(true);
      }}
      onAIAnimations={() => {
        setShowPhotographerAI(false);
        setShowAIAnimations(true);
      }}
      onSEOPage={() => {
        setShowPhotographerAI(false);
        setShowSEOPage(true);
      }}
      onParis1Page={() => {
        setShowPhotographerAI(false);
        setShowParis1Page(true);
      }}
      onParis2Page={() => {
        setShowPhotographerAI(false);
        setShowParis2Page(true);
      }}
      onParis3Page={() => {
        setShowPhotographerAI(false);
        setShowParis3Page(true);
      }}
      onParis4Page={() => {
        setShowPhotographerAI(false);
        setShowParis4Page(true);
      }}
      onParis5Page={() => {
        setShowPhotographerAI(false);
        setShowParis5Page(true);
      }}
      onParis6Page={() => {
        setShowPhotographerAI(false);
        setShowParis6Page(true);
      }}
      onParis7Page={() => {
        setShowPhotographerAI(false);
        setShowParis7Page(true);
      }}
      onParis8Page={() => {
        setShowPhotographerAI(false);
        setShowParis8Page(true);
      }}
      onParis9Page={() => {
        setShowPhotographerAI(false);
        setShowParis9Page(true);
      }}
    />;
  }

  if (showParis1Page) {
    return <Paris1Page 
      onBack={() => setShowParis1Page(false)} 
      onQuoteRequest={() => {
        setShowParis1Page(false);
        openQuotePage('paris1');
      }}
      onPhotoboothDetails={() => {
        setShowParis1Page(false);
        setShowPhotoboothDetails(true);
      }}
      onAIAnimations={() => {
        setShowParis1Page(false);
        setShowAIAnimations(true);
      }}
      onSEOPage={() => {
        setShowParis1Page(false);
        setShowSEOPage(true);
      }}
      onParis2Page={() => {
        setShowParis1Page(false);
        setShowParis2Page(true);
      }}
      onParis3Page={() => {
        setShowParis1Page(false);
        setShowParis3Page(true);
      }}
      onParis4Page={() => {
        setShowParis1Page(false);
        setShowParis4Page(true);
      }}
      onParis5Page={() => {
        setShowParis1Page(false);
        setShowParis5Page(true);
      }}
      onParis6Page={() => {
        setShowParis1Page(false);
        setShowParis6Page(true);
      }}
      onParis7Page={() => {
        setShowParis1Page(false);
        setShowParis7Page(true);
      }}
      onParis8Page={() => {
        setShowParis1Page(false);
        setShowParis8Page(true);
      }}
      onParis9Page={() => {
        setShowParis1Page(false);
        setShowParis9Page(true);
      }}
    />;
  }

  if (showParis2Page) {
    return <Paris2Page 
      onBack={() => setShowParis2Page(false)} 
      onQuoteRequest={() => {
        setShowParis2Page(false);
        openQuotePage('paris2');
      }}
      onPhotoboothDetails={() => {
        setShowParis2Page(false);
        setShowPhotoboothDetails(true);
      }}
      onAIAnimations={() => {
        setShowParis2Page(false);
        setShowAIAnimations(true);
      }}
      onSEOPage={() => {
        setShowParis2Page(false);
        setShowSEOPage(true);
      }}
      onParis1Page={() => {
        setShowParis2Page(false);
        setShowParis1Page(true);
      }}
      onParis3Page={() => {
        setShowParis2Page(false);
        setShowParis3Page(true);
      }}
      onParis4Page={() => {
        setShowParis2Page(false);
        setShowParis4Page(true);
      }}
      onParis5Page={() => {
        setShowParis2Page(false);
        setShowParis5Page(true);
      }}
      onParis6Page={() => {
        setShowParis2Page(false);
        setShowParis6Page(true);
      }}
      onParis7Page={() => {
        setShowParis2Page(false);
        setShowParis7Page(true);
      }}
      onParis8Page={() => {
        setShowParis2Page(false);
        setShowParis8Page(true);
      }}
      onParis9Page={() => {
        setShowParis2Page(false);
        setShowParis9Page(true);
      }}
    />;
  }

  if (showParis3Page) {
    return <Paris3Page 
      onBack={() => setShowParis3Page(false)} 
      onQuoteRequest={() => {
        setShowParis3Page(false);
        openQuotePage('paris3');
      }}
      onPhotoboothDetails={() => {
        setShowParis3Page(false);
        setShowPhotoboothDetails(true);
      }}
      onAIAnimations={() => {
        setShowParis3Page(false);
        setShowAIAnimations(true);
      }}
      onSEOPage={() => {
        setShowParis3Page(false);
        setShowSEOPage(true);
      }}
      onParis1Page={() => {
        setShowParis3Page(false);
        setShowParis1Page(true);
      }}
      onParis2Page={() => {
        setShowParis3Page(false);
        setShowParis2Page(true);
      }}
      onParis4Page={() => {
        setShowParis3Page(false);
        setShowParis4Page(true);
      }}
      onParis5Page={() => {
        setShowParis3Page(false);
        setShowParis5Page(true);
      }}
      onParis6Page={() => {
        setShowParis3Page(false);
        setShowParis6Page(true);
      }}
      onParis7Page={() => {
        setShowParis3Page(false);
        setShowParis7Page(true);
      }}
      onParis8Page={() => {
        setShowParis3Page(false);
        setShowParis8Page(true);
      }}
      onParis9Page={() => {
        setShowParis3Page(false);
        setShowParis9Page(true);
      }}
    />;
  }

  if (showParis4Page) {
    return <Paris4Page 
      onBack={() => setShowParis4Page(false)} 
      onQuoteRequest={() => {
        setShowParis4Page(false);
        openQuotePage('paris4');
      }}
      onPhotoboothDetails={() => {
        setShowParis4Page(false);
        setShowPhotoboothDetails(true);
      }}
      onAIAnimations={() => {
        setShowParis4Page(false);
        setShowAIAnimations(true);
      }}
      onSEOPage={() => {
        setShowParis4Page(false);
        setShowSEOPage(true);
      }}
      onParis1Page={() => {
        setShowParis4Page(false);
        setShowParis1Page(true);
      }}
      onParis2Page={() => {
        setShowParis4Page(false);
        setShowParis2Page(true);
      }}
      onParis3Page={() => {
        setShowParis4Page(false);
        setShowParis3Page(true);
      }}
      onParis5Page={() => {
        setShowParis4Page(false);
        setShowParis5Page(true);
      }}
      onParis6Page={() => {
        setShowParis4Page(false);
        setShowParis6Page(true);
      }}
      onParis7Page={() => {
        setShowParis4Page(false);
        setShowParis7Page(true);
      }}
      onParis8Page={() => {
        setShowParis4Page(false);
        setShowParis8Page(true);
      }}
      onParis9Page={() => {
        setShowParis4Page(false);
        setShowParis9Page(true);
      }}
    />;
  }

  if (showParis5Page) {
    return <Paris5Page 
      onBack={() => setShowParis5Page(false)} 
      onQuoteRequest={() => {
        setShowParis5Page(false);
        openQuotePage('paris5');
      }}
      onPhotoboothDetails={() => {
        setShowParis5Page(false);
        setShowPhotoboothDetails(true);
      }}
      onAIAnimations={() => {
        setShowParis5Page(false);
        setShowAIAnimations(true);
      }}
      onSEOPage={() => {
        setShowParis5Page(false);
        setShowSEOPage(true);
      }}
      onParis1Page={() => {
        setShowParis5Page(false);
        setShowParis1Page(true);
      }}
      onParis2Page={() => {
        setShowParis5Page(false);
        setShowParis2Page(true);
      }}
      onParis3Page={() => {
        setShowParis5Page(false);
        setShowParis3Page(true);
      }}
      onParis4Page={() => {
        setShowParis5Page(false);
        setShowParis4Page(true);
      }}
      onParis6Page={() => {
        setShowParis5Page(false);
        setShowParis6Page(true);
      }}
      onParis7Page={() => {
        setShowParis5Page(false);
        setShowParis7Page(true);
      }}
      onParis8Page={() => {
        setShowParis5Page(false);
        setShowParis8Page(true);
      }}
      onParis9Page={() => {
        setShowParis5Page(false);
        setShowParis9Page(true);
      }}
    />;
  }

  if (showParis6Page) {
    return <Paris6Page 
      onBack={() => setShowParis6Page(false)} 
      onQuoteRequest={() => {
        setShowParis6Page(false);
        openQuotePage('paris6');
      }}
      onPhotoboothDetails={() => {
        setShowParis6Page(false);
        setShowPhotoboothDetails(true);
      }}
      onAIAnimations={() => {
        setShowParis6Page(false);
        setShowAIAnimations(true);
      }}
      onSEOPage={() => {
        setShowParis6Page(false);
        setShowSEOPage(true);
      }}
      onParis1Page={() => {
        setShowParis6Page(false);
        setShowParis1Page(true);
      }}
      onParis2Page={() => {
        setShowParis6Page(false);
        setShowParis2Page(true);
      }}
      onParis3Page={() => {
        setShowParis6Page(false);
        setShowParis3Page(true);
      }}
      onParis4Page={() => {
        setShowParis6Page(false);
        setShowParis4Page(true);
      }}
      onParis5Page={() => {
        setShowParis6Page(false);
        setShowParis5Page(true);
      }}
      onParis7Page={() => {
        setShowParis6Page(false);
        setShowParis7Page(true);
      }}
      onParis8Page={() => {
        setShowParis6Page(false);
        setShowParis8Page(true);
      }}
      onParis9Page={() => {
        setShowParis6Page(false);
        setShowParis9Page(true);
      }}
    />;
  }

  if (showParis7Page) {
    return <Paris7Page
      onBack={() => setShowParis7Page(false)}
      onQuoteRequest={() => {
        setShowParis7Page(false);
        openQuotePage('paris7');
      }}
      onPhotoboothDetails={() => {
        setShowParis7Page(false);
        setShowPhotoboothDetails(true);
      }}
      onAIAnimations={() => {
        setShowParis7Page(false);
        setShowAIAnimations(true);
      }}
      onSEOPage={() => {
        setShowParis7Page(false);
        setShowSEOPage(true);
      }}
      onParis1Page={() => {
        setShowParis7Page(false);
        setShowParis1Page(true);
      }}
      onParis2Page={() => {
        setShowParis7Page(false);
        setShowParis2Page(true);
      }}
      onParis3Page={() => {
        setShowParis7Page(false);
        setShowParis3Page(true);
      }}
      onParis4Page={() => {
        setShowParis7Page(false);
        setShowParis4Page(true);
      }}
      onParis5Page={() => {
        setShowParis7Page(false);
        setShowParis5Page(true);
      }}
      onParis6Page={() => {
        setShowParis7Page(false);
        setShowParis6Page(true);
      }}
      onParis8Page={() => {
        setShowParis7Page(false);
        setShowParis8Page(true);
      }}
      onParis9Page={() => {
        setShowParis7Page(false);
        setShowParis9Page(true);
      }}
    />;
  }

  if (showParis8Page) {
    return <Paris8Page
      onBack={() => setShowParis8Page(false)}
      onQuoteRequest={() => {
        setShowParis8Page(false);
        openQuotePage('paris8');
      }}
      onPhotoboothDetails={() => {
        setShowParis8Page(false);
        setShowPhotoboothDetails(true);
      }}
      onAIAnimations={() => {
        setShowParis8Page(false);
        setShowAIAnimations(true);
      }}
      onSEOPage={() => {
        setShowParis8Page(false);
        setShowSEOPage(true);
      }}
      onParis1Page={() => {
        setShowParis8Page(false);
        setShowParis1Page(true);
      }}
      onParis2Page={() => {
        setShowParis8Page(false);
        setShowParis2Page(true);
      }}
      onParis3Page={() => {
        setShowParis8Page(false);
        setShowParis3Page(true);
      }}
      onParis4Page={() => {
        setShowParis8Page(false);
        setShowParis4Page(true);
      }}
      onParis5Page={() => {
        setShowParis8Page(false);
        setShowParis5Page(true);
      }}
      onParis6Page={() => {
        setShowParis8Page(false);
        setShowParis6Page(true);
      }}
      onParis7Page={() => {
        setShowParis8Page(false);
        setShowParis7Page(true);
      }}
      onParis9Page={() => {
        setShowParis8Page(false);
        setShowParis9Page(true);
      }}
    />;
  }

  if (showParis9Page) {
    return <Paris9Page
      onBack={() => setShowParis9Page(false)}
      onQuoteRequest={() => {
        setShowParis9Page(false);
        openQuotePage('paris9');
      }}
      onPhotoboothDetails={() => {
        setShowParis9Page(false);
        setShowPhotoboothDetails(true);
      }}
      onAIAnimations={() => {
        setShowParis9Page(false);
        setShowAIAnimations(true);
      }}
      onSEOPage={() => {
        setShowParis9Page(false);
        setShowSEOPage(true);
      }}
      onParis1Page={() => {
        setShowParis9Page(false);
        setShowParis1Page(true);
      }}
      onParis2Page={() => {
        setShowParis9Page(false);
        setShowParis2Page(true);
      }}
      onParis3Page={() => {
        setShowParis9Page(false);
        setShowParis3Page(true);
      }}
      onParis4Page={() => {
        setShowParis9Page(false);
        setShowParis4Page(true);
      }}
      onParis5Page={() => {
        setShowParis9Page(false);
        setShowParis5Page(true);
      }}
      onParis6Page={() => {
        setShowParis9Page(false);
        setShowParis6Page(true);
      }}
      onParis7Page={() => {
        setShowParis9Page(false);
        setShowParis7Page(true);
      }}
      onParis8Page={() => {
        setShowParis9Page(false);
        setShowParis8Page(true);
      }}
    />;
  }

  if (showParis10Page) {
    return <Paris10Page
      onBack={() => setShowParis10Page(false)}
      onQuoteRequest={() => {
        setShowParis10Page(false);
        openQuotePage('paris10');
      }}
      onPhotoboothDetails={() => {
        setShowParis10Page(false);
        setShowPhotoboothDetails(true);
      }}
      onAIAnimations={() => {
        setShowParis10Page(false);
        setShowAIAnimations(true);
      }}
      onSEOPage={() => {
        setShowParis10Page(false);
        setShowSEOPage(true);
      }}
      onParis1Page={() => {
        setShowParis10Page(false);
        setShowParis1Page(true);
      }}
      onParis2Page={() => {
        setShowParis10Page(false);
        setShowParis2Page(true);
      }}
      onParis3Page={() => {
        setShowParis10Page(false);
        setShowParis3Page(true);
      }}
      onParis4Page={() => {
        setShowParis10Page(false);
        setShowParis4Page(true);
      }}
      onParis5Page={() => {
        setShowParis10Page(false);
        setShowParis5Page(true);
      }}
      onParis6Page={() => {
        setShowParis10Page(false);
        setShowParis6Page(true);
      }}
      onParis7Page={() => {
        setShowParis10Page(false);
        setShowParis7Page(true);
      }}
      onParis8Page={() => {
        setShowParis10Page(false);
        setShowParis8Page(true);
      }}
      onParis9Page={() => {
        setShowParis10Page(false);
        setShowParis9Page(true);
      }}
    />;
  }

  if (showParis11Page) {
    return <Paris11Page
      onBack={() => setShowParis11Page(false)}
      onQuoteRequest={() => {
        setShowParis11Page(false);
        openQuotePage('paris11');
      }}
      onPhotoboothDetails={() => {
        setShowParis11Page(false);
        setShowPhotoboothDetails(true);
      }}
      onAIAnimations={() => {
        setShowParis11Page(false);
        setShowAIAnimations(true);
      }}
      onSEOPage={() => {
        setShowParis11Page(false);
        setShowSEOPage(true);
      }}
      onParis1Page={() => {
        setShowParis11Page(false);
        setShowParis1Page(true);
      }}
      onParis2Page={() => {
        setShowParis11Page(false);
        setShowParis2Page(true);
      }}
      onParis3Page={() => {
        setShowParis11Page(false);
        setShowParis3Page(true);
      }}
      onParis4Page={() => {
        setShowParis11Page(false);
        setShowParis4Page(true);
      }}
      onParis5Page={() => {
        setShowParis11Page(false);
        setShowParis5Page(true);
      }}
      onParis6Page={() => {
        setShowParis11Page(false);
        setShowParis6Page(true);
      }}
      onParis7Page={() => {
        setShowParis11Page(false);
        setShowParis7Page(true);
      }}
      onParis8Page={() => {
        setShowParis11Page(false);
        setShowParis8Page(true);
      }}
      onParis9Page={() => {
        setShowParis11Page(false);
        setShowParis9Page(true);
      }}
      onParis10Page={() => {
        setShowParis11Page(false);
        setShowParis10Page(true);
      }}
    />;
  }

  if (showParis12Page) {
    return <Paris12Page
      onBack={() => setShowParis12Page(false)}
      onQuoteRequest={() => {
        setShowParis12Page(false);
        openQuotePage('paris12');
      }}
      onPhotoboothDetails={() => {
        setShowParis12Page(false);
        setShowPhotoboothDetails(true);
      }}
      onAIAnimations={() => {
        setShowParis12Page(false);
        setShowAIAnimations(true);
      }}
      onSEOPage={() => {
        setShowParis12Page(false);
        setShowSEOPage(true);
      }}
      onParis1Page={() => {
        setShowParis12Page(false);
        setShowParis1Page(true);
      }}
      onParis2Page={() => {
        setShowParis12Page(false);
        setShowParis2Page(true);
      }}
      onParis3Page={() => {
        setShowParis12Page(false);
        setShowParis3Page(true);
      }}
      onParis4Page={() => {
        setShowParis12Page(false);
        setShowParis4Page(true);
      }}
      onParis5Page={() => {
        setShowParis12Page(false);
        setShowParis5Page(true);
      }}
      onParis6Page={() => {
        setShowParis12Page(false);
        setShowParis6Page(true);
      }}
      onParis7Page={() => {
        setShowParis12Page(false);
        setShowParis7Page(true);
      }}
      onParis8Page={() => {
        setShowParis12Page(false);
        setShowParis8Page(true);
      }}
      onParis9Page={() => {
        setShowParis12Page(false);
        setShowParis9Page(true);
      }}
      onParis10Page={() => {
        setShowParis12Page(false);
        setShowParis10Page(true);
      }}
      onParis11Page={() => {
        setShowParis12Page(false);
        setShowParis11Page(true);
      }}
    />;
  }

  if (showParis13Page) {
    return <Paris13Page
      onBack={() => setShowParis13Page(false)}
      onQuoteRequest={() => {
        setShowParis13Page(false);
        openQuotePage('paris13');
      }}
      onPhotoboothDetails={() => {
        setShowParis13Page(false);
        setShowPhotoboothDetails(true);
      }}
      onAIAnimations={() => {
        setShowParis13Page(false);
        setShowAIAnimations(true);
      }}
      onSEOPage={() => {
        setShowParis13Page(false);
        setShowSEOPage(true);
      }}
      onParis1Page={() => {
        setShowParis13Page(false);
        setShowParis1Page(true);
      }}
      onParis2Page={() => {
        setShowParis13Page(false);
        setShowParis2Page(true);
      }}
      onParis3Page={() => {
        setShowParis13Page(false);
        setShowParis3Page(true);
      }}
      onParis4Page={() => {
        setShowParis13Page(false);
        setShowParis4Page(true);
      }}
      onParis5Page={() => {
        setShowParis13Page(false);
        setShowParis5Page(true);
      }}
      onParis6Page={() => {
        setShowParis13Page(false);
        setShowParis6Page(true);
      }}
      onParis7Page={() => {
        setShowParis13Page(false);
        setShowParis7Page(true);
      }}
      onParis8Page={() => {
        setShowParis13Page(false);
        setShowParis8Page(true);
      }}
      onParis9Page={() => {
        setShowParis13Page(false);
        setShowParis9Page(true);
      }}
      onParis10Page={() => {
        setShowParis13Page(false);
        setShowParis10Page(true);
      }}
      onParis11Page={() => {
        setShowParis13Page(false);
        setShowParis11Page(true);
      }}
      onParis12Page={() => {
        setShowParis13Page(false);
        setShowParis12Page(true);
      }}
    />;
  }

  if (showParis14Page) {
    return <Paris14Page
      onBack={() => setShowParis14Page(false)}
      onQuoteRequest={() => {
        setShowParis14Page(false);
        openQuotePage('paris14');
      }}
      onPhotoboothDetails={() => {
        setShowParis14Page(false);
        setShowPhotoboothDetails(true);
      }}
      onAIAnimations={() => {
        setShowParis14Page(false);
        setShowAIAnimations(true);
      }}
      onSEOPage={() => {
        setShowParis14Page(false);
        setShowSEOPage(true);
      }}
      onParis1Page={() => {
        setShowParis14Page(false);
        setShowParis1Page(true);
      }}
      onParis2Page={() => {
        setShowParis14Page(false);
        setShowParis2Page(true);
      }}
      onParis3Page={() => {
        setShowParis14Page(false);
        setShowParis3Page(true);
      }}
      onParis4Page={() => {
        setShowParis14Page(false);
        setShowParis4Page(true);
      }}
      onParis5Page={() => {
        setShowParis14Page(false);
        setShowParis5Page(true);
      }}
      onParis6Page={() => {
        setShowParis14Page(false);
        setShowParis6Page(true);
      }}
      onParis7Page={() => {
        setShowParis14Page(false);
        setShowParis7Page(true);
      }}
      onParis8Page={() => {
        setShowParis14Page(false);
        setShowParis8Page(true);
      }}
      onParis9Page={() => {
        setShowParis14Page(false);
        setShowParis9Page(true);
      }}
      onParis10Page={() => {
        setShowParis14Page(false);
        setShowParis10Page(true);
      }}
      onParis11Page={() => {
        setShowParis14Page(false);
        setShowParis11Page(true);
      }}
      onParis12Page={() => {
        setShowParis14Page(false);
        setShowParis12Page(true);
      }}
      onParis13Page={() => {
        setShowParis14Page(false);
        setShowParis13Page(true);
      }}
    />;
  }

  if (showParis15Page) {
    return <Paris15Page
      onBack={() => setShowParis15Page(false)}
      onQuoteRequest={() => {
        setShowParis15Page(false);
        openQuotePage('paris15');
      }}
      onPhotoboothDetails={() => {
        setShowParis15Page(false);
        setShowPhotoboothDetails(true);
      }}
      onAIAnimations={() => {
        setShowParis15Page(false);
        setShowAIAnimations(true);
      }}
      onSEOPage={() => {
        setShowParis15Page(false);
        setShowSEOPage(true);
      }}
      onParis1Page={() => {
        setShowParis15Page(false);
        setShowParis1Page(true);
      }}
      onParis2Page={() => {
        setShowParis15Page(false);
        setShowParis2Page(true);
      }}
      onParis3Page={() => {
        setShowParis15Page(false);
        setShowParis3Page(true);
      }}
      onParis4Page={() => {
        setShowParis15Page(false);
        setShowParis4Page(true);
      }}
      onParis5Page={() => {
        setShowParis15Page(false);
        setShowParis5Page(true);
      }}
      onParis6Page={() => {
        setShowParis15Page(false);
        setShowParis6Page(true);
      }}
      onParis7Page={() => {
        setShowParis15Page(false);
        setShowParis7Page(true);
      }}
      onParis8Page={() => {
        setShowParis15Page(false);
        setShowParis8Page(true);
      }}
      onParis9Page={() => {
        setShowParis15Page(false);
        setShowParis9Page(true);
      }}
      onParis10Page={() => {
        setShowParis15Page(false);
        setShowParis10Page(true);
      }}
      onParis11Page={() => {
        setShowParis15Page(false);
        setShowParis11Page(true);
      }}
      onParis12Page={() => {
        setShowParis15Page(false);
        setShowParis12Page(true);
      }}
      onParis13Page={() => {
        setShowParis15Page(false);
        setShowParis13Page(true);
      }}
      onParis14Page={() => {
        setShowParis15Page(false);
        setShowParis14Page(true);
      }}
    />;
  }

  if (showParis16Page) {
    return <Paris16Page
      onBack={() => setShowParis16Page(false)}
      onQuoteRequest={() => {
        setShowParis16Page(false);
        openQuotePage('paris16');
      }}
      onPhotoboothDetails={() => {
        setShowParis16Page(false);
        setShowPhotoboothDetails(true);
      }}
      onAIAnimations={() => {
        setShowParis16Page(false);
        setShowAIAnimations(true);
      }}
      onSEOPage={() => {
        setShowParis16Page(false);
        setShowSEOPage(true);
      }}
      onParis1Page={() => {
        setShowParis16Page(false);
        setShowParis1Page(true);
      }}
      onParis2Page={() => {
        setShowParis16Page(false);
        setShowParis2Page(true);
      }}
      onParis3Page={() => {
        setShowParis16Page(false);
        setShowParis3Page(true);
      }}
      onParis4Page={() => {
        setShowParis16Page(false);
        setShowParis4Page(true);
      }}
      onParis5Page={() => {
        setShowParis16Page(false);
        setShowParis5Page(true);
      }}
      onParis6Page={() => {
        setShowParis16Page(false);
        setShowParis6Page(true);
      }}
      onParis7Page={() => {
        setShowParis16Page(false);
        setShowParis7Page(true);
      }}
      onParis8Page={() => {
        setShowParis16Page(false);
        setShowParis8Page(true);
      }}
      onParis9Page={() => {
        setShowParis16Page(false);
        setShowParis9Page(true);
      }}
      onParis10Page={() => {
        setShowParis16Page(false);
        setShowParis10Page(true);
      }}
      onParis11Page={() => {
        setShowParis16Page(false);
        setShowParis11Page(true);
      }}
      onParis12Page={() => {
        setShowParis16Page(false);
        setShowParis12Page(true);
      }}
      onParis13Page={() => {
        setShowParis16Page(false);
        setShowParis13Page(true);
      }}
      onParis14Page={() => {
        setShowParis16Page(false);
        setShowParis14Page(true);
      }}
      onParis15Page={() => {
        setShowParis16Page(false);
        setShowParis15Page(true);
      }}
    />;
  }

  if (showParis17Page) {
    return <Paris17Page
      onBack={() => setShowParis17Page(false)}
      onQuoteRequest={() => {
        setShowParis17Page(false);
        openQuotePage('paris17');
      }}
      onPhotoboothDetails={() => {
        setShowParis17Page(false);
        setShowPhotoboothDetails(true);
      }}
      onAIAnimations={() => {
        setShowParis17Page(false);
        setShowAIAnimations(true);
      }}
      onSEOPage={() => {
        setShowParis17Page(false);
        setShowSEOPage(true);
      }}
      onParis1Page={() => {
        setShowParis17Page(false);
        setShowParis1Page(true);
      }}
      onParis2Page={() => {
        setShowParis17Page(false);
        setShowParis2Page(true);
      }}
      onParis3Page={() => {
        setShowParis17Page(false);
        setShowParis3Page(true);
      }}
      onParis4Page={() => {
        setShowParis17Page(false);
        setShowParis4Page(true);
      }}
      onParis5Page={() => {
        setShowParis17Page(false);
        setShowParis5Page(true);
      }}
      onParis6Page={() => {
        setShowParis17Page(false);
        setShowParis6Page(true);
      }}
      onParis7Page={() => {
        setShowParis17Page(false);
        setShowParis7Page(true);
      }}
      onParis8Page={() => {
        setShowParis17Page(false);
        setShowParis8Page(true);
      }}
      onParis9Page={() => {
        setShowParis17Page(false);
        setShowParis9Page(true);
      }}
      onParis10Page={() => {
        setShowParis17Page(false);
        setShowParis10Page(true);
      }}
      onParis11Page={() => {
        setShowParis17Page(false);
        setShowParis11Page(true);
      }}
      onParis12Page={() => {
        setShowParis17Page(false);
        setShowParis12Page(true);
      }}
      onParis13Page={() => {
        setShowParis17Page(false);
        setShowParis13Page(true);
      }}
      onParis14Page={() => {
        setShowParis17Page(false);
        setShowParis14Page(true);
      }}
      onParis15Page={() => {
        setShowParis17Page(false);
        setShowParis15Page(true);
      }}
      onParis16Page={() => {
        setShowParis17Page(false);
        setShowParis16Page(true);
      }}
    />;
  }

  if (showParis18Page) {
    return <Paris18Page
      onBack={() => setShowParis18Page(false)}
      onQuoteRequest={() => {
        setShowParis18Page(false);
        openQuotePage('paris18');
      }}
      onPhotoboothDetails={() => {
        setShowParis18Page(false);
        setShowPhotoboothDetails(true);
      }}
      onAIAnimations={() => {
        setShowParis18Page(false);
        setShowAIAnimations(true);
      }}
      onSEOPage={() => {
        setShowParis18Page(false);
        setShowSEOPage(true);
      }}
      onParis1Page={() => {
        setShowParis18Page(false);
        setShowParis1Page(true);
      }}
      onParis2Page={() => {
        setShowParis18Page(false);
        setShowParis2Page(true);
      }}
      onParis3Page={() => {
        setShowParis18Page(false);
        setShowParis3Page(true);
      }}
      onParis4Page={() => {
        setShowParis18Page(false);
        setShowParis4Page(true);
      }}
      onParis5Page={() => {
        setShowParis18Page(false);
        setShowParis5Page(true);
      }}
      onParis6Page={() => {
        setShowParis18Page(false);
        setShowParis6Page(true);
      }}
      onParis7Page={() => {
        setShowParis18Page(false);
        setShowParis7Page(true);
      }}
      onParis8Page={() => {
        setShowParis18Page(false);
        setShowParis8Page(true);
      }}
      onParis9Page={() => {
        setShowParis18Page(false);
        setShowParis9Page(true);
      }}
      onParis10Page={() => {
        setShowParis18Page(false);
        setShowParis10Page(true);
      }}
      onParis11Page={() => {
        setShowParis18Page(false);
        setShowParis11Page(true);
      }}
      onParis12Page={() => {
        setShowParis18Page(false);
        setShowParis12Page(true);
      }}
      onParis13Page={() => {
        setShowParis18Page(false);
        setShowParis13Page(true);
      }}
      onParis14Page={() => {
        setShowParis18Page(false);
        setShowParis14Page(true);
      }}
      onParis15Page={() => {
        setShowParis18Page(false);
        setShowParis15Page(true);
      }}
      onParis16Page={() => {
        setShowParis18Page(false);
        setShowParis16Page(true);
      }}
      onParis17Page={() => {
        setShowParis18Page(false);
        setShowParis17Page(true);
      }}
    />;
  }

  if (showParis19Page) {
    return <Paris19Page
      onBack={() => setShowParis19Page(false)}
      onQuoteRequest={() => {
        setShowParis19Page(false);
        openQuotePage('paris19');
      }}
      onPhotoboothDetails={() => {
        setShowParis19Page(false);
        setShowPhotoboothDetails(true);
      }}
      onAIAnimations={() => {
        setShowParis19Page(false);
        setShowAIAnimations(true);
      }}
      onSEOPage={() => {
        setShowParis19Page(false);
        setShowSEOPage(true);
      }}
      onParis1Page={() => {
        setShowParis19Page(false);
        setShowParis1Page(true);
      }}
      onParis2Page={() => {
        setShowParis19Page(false);
        setShowParis2Page(true);
      }}
      onParis3Page={() => {
        setShowParis19Page(false);
        setShowParis3Page(true);
      }}
      onParis4Page={() => {
        setShowParis19Page(false);
        setShowParis4Page(true);
      }}
      onParis5Page={() => {
        setShowParis19Page(false);
        setShowParis5Page(true);
      }}
      onParis6Page={() => {
        setShowParis19Page(false);
        setShowParis6Page(true);
      }}
      onParis7Page={() => {
        setShowParis19Page(false);
        setShowParis7Page(true);
      }}
      onParis8Page={() => {
        setShowParis19Page(false);
        setShowParis8Page(true);
      }}
      onParis9Page={() => {
        setShowParis19Page(false);
        setShowParis9Page(true);
      }}
      onParis10Page={() => {
        setShowParis19Page(false);
        setShowParis10Page(true);
      }}
      onParis11Page={() => {
        setShowParis19Page(false);
        setShowParis11Page(true);
      }}
      onParis12Page={() => {
        setShowParis19Page(false);
        setShowParis12Page(true);
      }}
      onParis13Page={() => {
        setShowParis19Page(false);
        setShowParis13Page(true);
      }}
      onParis14Page={() => {
        setShowParis19Page(false);
        setShowParis14Page(true);
      }}
      onParis15Page={() => {
        setShowParis19Page(false);
        setShowParis15Page(true);
      }}
      onParis16Page={() => {
        setShowParis19Page(false);
        setShowParis16Page(true);
      }}
      onParis17Page={() => {
        setShowParis19Page(false);
        setShowParis17Page(true);
      }}
      onParis18Page={() => {
        setShowParis19Page(false);
        setShowParis18Page(true);
      }}
    />;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100" role="banner">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                <Camera className="w-6 h-6 text-black" />
              </div>
              <span className="text-2xl font-bold text-black">BoostPix</span>
            </div>

            <nav className="hidden lg:flex items-center space-x-8" role="navigation" aria-label="Navigation principale">
              <a href="#services" className="text-gray-700 hover:text-yellow-500 transition-colors font-medium">Accueil</a>
              <button 
                onClick={() => setShowPhotoboothDetails(true)}
                className="text-gray-700 hover:text-yellow-500 transition-colors font-medium"
              >
                Photobooth sur mesure
              </button>
              <a href="#mariages" className="text-gray-700 hover:text-yellow-500 transition-colors font-medium">Événements Privés</a>
              <button 
                onClick={() => setShowAIAnimations(true)}
                className="text-gray-700 hover:text-yellow-500 transition-colors font-medium"
              >
                Animations IA
              </button>
              <a href="#galerie" className="text-gray-700 hover:text-yellow-500 transition-colors font-medium">Galerie</a>
              <button 
                onClick={() => openQuotePage('home')}
                className="bg-yellow-400 text-black px-6 py-3 rounded-full hover:bg-yellow-500 transition-colors font-semibold"
              >
                Devis Gratuit
              </button>
            </nav>

            <button 
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-gray-100">
              <div className="flex flex-col space-y-4 pt-4">
                <a href="#services" className="text-gray-700 hover:text-yellow-500 transition-colors font-medium">Accueil</a>
                <button
                  onClick={() => setShowPhotoboothDetails(true)}
                  className="text-gray-700 hover:text-yellow-500 transition-colors font-medium text-left"
                >
                  Photobooth sur mesure
                </button>
                <a href="#mariages" className="text-gray-700 hover:text-yellow-500 transition-colors font-medium">Événements Privés</a>
                <button 
                  onClick={() => setShowAIAnimations(true)}
                  className="text-gray-700 hover:text-yellow-500 transition-colors font-medium text-left"
                >
                  Animations IA
                </button>
                <a href="#galerie" className="text-gray-700 hover:text-yellow-500 transition-colors font-medium">Galerie</a>
                <button 
                  onClick={() => openQuotePage('home')}
                  className="bg-yellow-400 text-black px-6 py-3 rounded-full hover:bg-yellow-500 transition-colors font-semibold text-center"
                >
                  Devis Gratuit
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden pt-20" role="main">
        {/* Image de fond full-width */}
        <div className="absolute inset-0">
          <img 
            src="https://res.cloudinary.com/de55ql9ig/image/upload/v1756227090/photobooth-home-page-the-pix-2_cf69jw.jpg" 
            alt="Photobooth BoostPix premium pour événements à Paris - Design moderne et élégant"
            className="w-full h-full object-cover"
            loading="eager"
            width="1920"
            height="1080"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Contenu par-dessus */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-3xl text-white">
              <div className="text-lg text-yellow-400 mb-4 font-medium">
                Location de Photobooth à Paris & Île-de-France
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 lg:mb-8 leading-tight">
                L'expérience
                <span className="text-yellow-400">
                  {' '}visuelle
                </span>
                {' '}de vos événements
              </h1>
              
              <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
                Créez des souvenirs inoubliables avec nos photobooths premium personnalisés 
                pour vos événements d'entreprise et célébrations privées.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all font-semibold text-lg"
                >
                  NOS PHOTOBOOTHS
                </button>
                <button 
                  onClick={() => openQuotePage('home')}
                  className="bg-yellow-400 text-black px-8 py-4 rounded-full hover:bg-yellow-500 transition-all font-semibold text-lg"
                >
                  VOIR NOS FORMULES
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Trusted by Section */}
      <section className="py-16 bg-white" aria-label="Clients qui nous font confiance">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-8" id="clients">
              Des clients qui nous font confiance
            </h2>
          </div>
          
          {/* Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            <div className="flex justify-center">
              <div className="text-2xl font-bold text-gray-400">LVMH</div>
            </div>
            <div className="flex justify-center">
              <div className="text-2xl font-bold text-gray-400">CHANEL</div>
            </div>
            <div className="flex justify-center">
              <div className="text-2xl font-bold text-gray-400">DIOR</div>
            </div>
            <div className="flex justify-center">
              <div className="text-2xl font-bold text-gray-400">L'ORÉAL</div>
            </div>
            <div className="flex justify-center">
              <div className="text-2xl font-bold text-gray-400">HERMÈS</div>
            </div>
            <div className="flex justify-center">
              <div className="text-2xl font-bold text-gray-400">CARTIER</div>
            </div>
            <div className="flex justify-center">
              <div className="text-2xl font-bold text-gray-400">MARRIOTT</div>
            </div>
            <div className="flex justify-center">
              <div className="text-2xl font-bold text-gray-400">ACCOR</div>
            </div>
            <div className="flex justify-center">
              <div className="text-2xl font-bold text-gray-400">GALERIES</div>
            </div>
            <div className="flex justify-center">
              <div className="text-2xl font-bold text-gray-400">LAFAYETTE</div>
            </div>
            <div className="flex justify-center">
              <div className="text-2xl font-bold text-gray-400">PRINTEMPS</div>
            </div>
            <div className="flex justify-center">
              <div className="text-2xl font-bold text-gray-400">BHV</div>
            </div>
          </div>
        </div>
      </section>
      {/* Why PhotoBooth Section */}
      <section className="py-20 bg-gray-900 text-white" aria-label="Pourquoi choisir BoostPix">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="w-full max-w-xs mx-auto">
                <img 
                  src="https://res.cloudinary.com/de55ql9ig/image/upload/v1754992274/photobooth_ohqsv4.png"
                  alt="Photobooth BoostPix - Design moderne et élégant pour événements"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                  loading="lazy"
                />
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8" id="pourquoi-boostpix">
                <span className="relative">
                  Pourquoi choisir{' '}
                  <span className="relative">
                    BoostPix
                    <div className="absolute -bottom-1 left-0 w-full h-2 bg-yellow-400 -z-10"></div>
                  </span>
                  {' '}?
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Organisateurs, agences et marques choisissent BoostPix pour une expérience photo fluide, moderne et de qualité.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                Notre photobooth au design épuré capture des images nettes, lumineuses et instantanées, 
                tout en s'intégrant élégamment à vos événements à Paris et en Île-de-France.
              </p>
              <p className="text-lg text-white mb-8">
                <span className="text-white font-semibold">Cadres personnalisés</span>, 
                <span className="text-white font-semibold"> décors sur-mesure</span> et 
                <span className="text-white font-semibold">impressions de haute qualité</span> : 
                tout est pensé pour marquer les esprits et créer des souvenirs uniques.
              </p>
              <button 
                onClick={() => setShowPhotoboothDetails(true)}
                className="bg-yellow-400 text-black px-8 py-4 rounded-full hover:bg-yellow-500 transition-colors font-bold text-lg"
              >
                EN SAVOIR PLUS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4" id="nos-services">
              Nos Services Premium
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions complètes pour transformer vos événements en expériences mémorables
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <article className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mb-6">
                <Camera className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4" id="photobooth-sur-mesure">Photobooth sur mesure</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Location de photobooths haut de gamme, personnalisés selon votre événement, votre charte ou votre image de marque.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-gray-700">Contour photo personnalisé</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-gray-700">Impression instantanée (format au choix)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-gray-700">Installation & démontage inclus</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-gray-700">Accompagnement technique</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-gray-700">Fonctionnalités IA disponibles pour des rendus créatifs ou interactifs</span>
                </li>
              </ul>
              <button 
                onClick={() => setShowPhotoboothDetails(true)}
                className="text-yellow-500 font-semibold hover:text-yellow-600 transition-colors flex items-center space-x-2"
              >
                <span>👉 En savoir plus</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </article>

            <article className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4" id="photographe-connecte">Photographe connecté</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Un photographe professionnel avec galerie en ligne, partage instantané et diffusion live sur écran ou borne. L'humain + la technologie.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-gray-700">Galerie photo en temps réel</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-gray-700">Partage via QR code ou mail</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-gray-700">Couverture de l'événement avec ou sans animation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-gray-700">Option selfie direct invité</span>
                </li>
              </ul>
              <button 
                onClick={() => setShowPhotographerAI(true)}
                className="text-yellow-500 font-semibold hover:text-yellow-600 transition-colors flex items-center space-x-2"
              >
                <span>👉 En savoir plus</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </article>

            <article className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4" id="animations-photobooth-ia">Animations Photobooth IA</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Des photos qui dépassent la réalité. Grâce à l'IA, vos invités apparaissent dans des décors virtuels, entourés d'effets visuels élégants ou d'animations personnalisées à votre événement.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-gray-700">Arrière-plans immersifs sans fond vert</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-gray-700">Effets visuels dynamiques et sur mesure</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-gray-700">Partage instantané sur tous les supports</span>
                </li>
              </ul>
              <button 
                onClick={() => setShowAIAnimations(true)}
                className="text-yellow-500 font-semibold hover:text-yellow-600 transition-colors flex items-center space-x-2"
              >
                <span>En savoir plus</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </article>
          </div>
        </div>
      </section>

      {/* Double Parcours */}
      <section className="py-20 bg-white" aria-label="Nos spécialités">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4" id="specialites">
              Nos Spécialités
            </h2>
            <p className="text-xl text-gray-600">
              Deux univers d'expertise pour des événements d'exception
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Entreprises */}
            <article id="entreprises" className="group">
              <div className="relative overflow-hidden rounded-3xl mb-8">
                <img 
                  src="https://res.cloudinary.com/de55ql9ig/image/upload/v1755009862/1695400262_asi1fg.jpg" 
                  alt="Événements entreprise avec photobooth BoostPix - Séminaires et soirées corporate à Paris"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  width="700"
                  height="500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-3xl font-bold">Événements Entreprise</h3>
                </div>
              </div>
              
              <div className="space-y-6">
                <h4 className="text-2xl font-bold text-black">Solutions Corporate Premium</h4>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Renforcez votre image de marque avec des expériences photographiques premium qui marquent les esprits 
                  et créent du lien entre vos collaborateurs et clients.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-yellow-500" />
                    <span className="text-gray-700">Séminaires & Conventions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-yellow-500" />
                    <span className="text-gray-700">Soirées d'Entreprise</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-yellow-500" />
                    <span className="text-gray-700">Lancements Produit</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-yellow-500" />
                    <span className="text-gray-700">Team Building</span>
                  </div>
                </div>

                <button 
                  onClick={() => openQuotePage('home')}
                  className="bg-yellow-400 text-black px-8 py-4 rounded-full hover:bg-yellow-500 transition-colors font-semibold"
                >
                  Découvrir nos solutions pro
                </button>
              </div>
            </article>

            {/* Mariages */}
            <article id="mariages" className="group">
              <div className="relative overflow-hidden rounded-3xl mb-8">
                <img 
                  src="https://res.cloudinary.com/de55ql9ig/image/upload/v1755009861/1695399603_w2xaqe.jpg" 
                  alt="Photobooth événements privés BoostPix - Location pour anniversaires et célébrations en Île-de-France"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  width="700"
                  height="500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-3xl font-bold">Événements Privés</h3>
                </div>
              </div>
              
              <div className="space-y-6">
                <h4 className="text-2xl font-bold text-black">Vos Célébrations Uniques</h4>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Transformez vos moments précieux en souvenirs inoubliables avec des créations sur mesure 
                  qui reflètent votre personnalité et créent une ambiance unique pour vos invités.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-yellow-500" />
                    <span className="text-gray-700">Mariages & Fiançailles</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-yellow-500" />
                    <span className="text-gray-700">Anniversaires</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-yellow-500" />
                    <span className="text-gray-700">Soirées Privées</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-yellow-500" />
                    <span className="text-gray-700">Fêtes Familiales</span>
                  </div>
                </div>

                <button 
                  onClick={() => openQuotePage('home')}
                  className="bg-yellow-400 text-black px-8 py-4 rounded-full hover:bg-yellow-500 transition-colors font-semibold"
                >
                  Découvrir nos formules privées
                </button>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Technology Showcase */}
      <section className="py-20 bg-gray-900 text-white" aria-label="Technologie de pointe">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" id="technologie">
              L'Art de la Photo Événementielle
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Des images qui capturent l'instant et subliment vos événements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Award className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3">Qualité Premium</h3>
              <p className="text-gray-300">Des photos nettes et lumineuses grâce à un matériel haut de gamme.</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Palette className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3">Personnalisation Totale</h3>
              <p className="text-gray-300">Un style et un cadrage adaptés à votre identité et à votre ambiance.</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3">Rapidité & Fluidité</h3>
              <p className="text-gray-300">Un service efficace qui s'intègre parfaitement à votre événement.</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Heart className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3">Accompagnement sur Mesure</h3>
              <p className="text-gray-300">Un interlocuteur unique pour un suivi simple et sans stress.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section id="galerie" className="py-20 bg-white" aria-label="Galerie photos de nos événements">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Première ligne */}
            <div className="relative overflow-hidden rounded-2xl h-64 group cursor-pointer">
              <img 
                src="https://res.cloudinary.com/de55ql9ig/image/upload/v1755162724/_DSC5745-Modifier_iyfv38.jpg" 
                alt="Photobooth BoostPix en action - Événement professionnel"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
            </div>
            
            <div className="relative overflow-hidden rounded-2xl h-64 group cursor-pointer">
              <img 
                src="https://res.cloudinary.com/de55ql9ig/image/upload/v1755162678/CA19-092258_w7mabd.jpg" 
                alt="Photobooth BoostPix - Animation événementielle"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
            </div>
            
            <div className="relative overflow-hidden rounded-2xl h-64 group cursor-pointer">
              <img 
                src="https://res.cloudinary.com/de55ql9ig/image/upload/v1755162666/_DSC4808_ovexjl.jpg" 
                alt="Photobooth BoostPix - Soirée d'entreprise"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
            </div>
            
            <div className="relative overflow-hidden rounded-2xl h-64 group cursor-pointer">
              <img 
                src="https://res.cloudinary.com/de55ql9ig/image/upload/v1755162650/DSC04503__aox1xl.jpg" 
                alt="Photobooth BoostPix - Événement premium"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
            </div>
            
            {/* Deuxième ligne */}
            <div className="relative overflow-hidden rounded-2xl h-64 group cursor-pointer">
              <img 
                src="https://res.cloudinary.com/de55ql9ig/image/upload/v1755162500/_DSC4597-Modifier_wnyqry.jpg" 
                alt="Photobooth BoostPix - Mariage élégant"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
            </div>
            
            <div className="relative overflow-hidden rounded-2xl h-64 group cursor-pointer">
              <img 
                src="https://res.cloudinary.com/de55ql9ig/image/upload/v1755162445/DSC04751__kpsodp.jpg" 
                alt="Photobooth BoostPix - Célébration privée"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
            </div>
            
            <div className="relative overflow-hidden rounded-2xl h-64 group cursor-pointer">
              <img 
                src="https://res.cloudinary.com/de55ql9ig/image/upload/v1756223120/The_Pix_erp4rz.jpg" 
                alt="Photobooth BoostPix - The Pix événement premium"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
            </div>
            
            <div className="relative overflow-hidden rounded-2xl h-64 group cursor-pointer">
              <img 
                src="https://res.cloudinary.com/de55ql9ig/image/upload/v1755162480/DSC05054-Modifier_rjdl39.jpg" 
                alt="Photobooth BoostPix - Animation créative"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-yellow-400 text-black px-8 py-4 rounded-full hover:bg-yellow-500 transition-colors font-semibold text-lg">
              Voir toute la galerie
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50" aria-label="Témoignages clients">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4" id="temoignages">
              Ils Nous Font Confiance
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez les retours de nos clients satisfaits
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <article className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                "Une expérience exceptionnelle ! Le photobooth personnalisé a été le clou de notre soirée d'entreprise. 
                La technologie de reconnaissance faciale a impressionné tous nos invités."
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-black font-bold">MD</span>
                </div>
                <div>
                  <div className="font-semibold text-black">Marie Dubois</div>
                  <div className="text-gray-500">Directrice Marketing, TechCorp</div>
                </div>
              </div>
            </article>

            <article className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                "Magique ! Tous nos invités ont pu partager leurs photos instantanément. 
                Le décor était parfaitement adapté à notre thème. Un souvenir inoubliable de notre mariage."
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-black font-bold">S&J</span>
                </div>
                <div>
                  <div className="font-semibold text-black">Sophie & Julien</div>
                  <div className="text-gray-500">Mariés en Juin 2024</div>
                </div>
              </div>
            </article>

            <article className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                "Professionnalisme et créativité au rendez-vous. L'équipe BoostPix a créé une ambiance unique 
                pour notre lancement produit. Résultat au-delà de nos attentes !"
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-black font-bold">AL</span>
                </div>
                <div>
                  <div className="font-semibold text-black">Alexandre Leroy</div>
                  <div className="text-gray-500">CEO, InnovStart</div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-yellow-400">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Prêt à Créer des Souvenirs Exceptionnels ?
          </h2>
          <p className="text-xl text-gray-800 mb-10 max-w-3xl mx-auto leading-relaxed">
            Contactez-nous dès aujourd'hui pour une consultation gratuite et découvrez comment transformer 
            votre événement en expérience mémorable avec nos solutions premium.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => openQuotePage('home')}
              className="bg-black text-white px-10 py-4 rounded-full hover:bg-gray-800 transition-colors font-semibold text-lg"
            >
              Consultation Gratuite
            </button>
            <button className="border-2 border-black text-black px-10 py-4 rounded-full hover:bg-black hover:text-white transition-colors font-semibold text-lg">
              Voir Notre Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer
        onSEOPage={() => setShowSEOPage(true)}
        onPhotoboothDetails={() => setShowPhotoboothDetails(true)}
        arrondissementLinks={arrondissementLinks}
      />
    </div>
  );
}

export default App;