import React from 'react';
import { Camera, Heart, Check, Star, Users } from 'lucide-react';
import ArrondissementPageLayout from './ArrondissementPageLayout';
import ArrondissementSection from './ArrondissementSection';

interface Paris20PageProps {
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
  onParis16Page?: () => void;
  onParis17Page?: () => void;
  onParis18Page?: () => void;
  onParis19Page?: () => void;
}

const Paris20Page: React.FC<Paris20PageProps> = ({
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
  onParis16Page,
  onParis17Page,
  onParis18Page,
  onParis19Page,
}) => {
  return (
    <ArrondissementPageLayout
      arrondissement={20}
      onBack={onBack}
      onQuoteRequest={onQuoteRequest}
      onPhotoboothDetails={onPhotoboothDetails}
      onAIAnimations={onAIAnimations}
      onSEOPage={onSEOPage}
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
        { label: 'Location photobooth Paris 16', onClick: onParis16Page || (() => {}) },
        { label: 'Location photobooth Paris 17', onClick: onParis17Page || (() => {}) },
        { label: 'Location photobooth Paris 18', onClick: onParis18Page || (() => {}) },
        { label: 'Location photobooth Paris 19', onClick: onParis19Page || (() => {}) },
        { label: 'Location photobooth Paris 20', onClick: onBack },
      ]}
    >
      <ArrondissementSection
        title="Louer un photobooth Paris 20eme arrondissement avec The Pix"
        icon={Heart}
      >
        <p>
          Organiser un séminaire d'entreprise dans le dynamique 20e arrondissement de Paris peut s’avérer être un défi stimulant. Le quartier, connu pour ses contrastes culturels allant des vivants quartiers de Belleville au calme du cimetière du Père Lachaise, offre un cadre propice à la créativité et à l'innovation.
        </p>
        <p>
          Pour rehausser l'expérience de votre événement et favoriser la cohésion d'équipe, envisagez de louer un photobooth avec The Pix. Cette activité ludique et interactive s'avère être un catalyseur efficace pour renforcer l'esprit d'équipe et dynamiser vos séminaires.
        </p>
      </ArrondissementSection>

      <ArrondissementSection
        title="L'importance d'un Photobooth dans les Séminaires"
        icon={Camera}
        variant="gray"
      >
        <p>
          Un photobooth n'est pas simplement un gadget amusant; c'est un outil stratégique pour encourager l'interaction entre collègues. Dans le contexte d’un séminaire, il sert de point de rassemblement, incitant les participants à se mélanger et à s'engager dans des activités collectives.
        </p>
        <p>
          La location d’un photobooth dans le 20e arrondissement de Paris, avec sa riche diversité, peut transformer un événement banal en une expérience mémorable.
        </p>
      </ArrondissementSection>

      <ArrondissementSection
        title="Pourquoi Choisir The Pix?"
        icon={Check}
      >
        <p>
          The Pix se distingue par son approche innovante et son équipement de haute qualité. Leurs photobooths sont conçus pour s'intégrer parfaitement dans le cadre d'un événement corporate, offrant des fonctionnalités avancées telles que l'impression instantanée, la personnalisation de l'arrière-plan et le partage sur les réseaux sociaux.
        </p>
        <p>
          En choisissant The Pix, vous optez pour une solution clé en main qui contribue activement à l’animation et à l’engagement des participants.
        </p>
      </ArrondissementSection>

      <ArrondissementSection
        title="Un Cadre Idéal dans le 20e Arrondissement"
        icon={Star}
        variant="gray"
      >
        <p>
          Le choix du 20e arrondissement comme lieu de votre séminaire n’est pas anodin. Ce quartier, avec ses rues animées et ses lieux emblématiques, offre un décor unique pour des événements d’entreprise.
        </p>
        <p>
          Que vous organisiez votre séminaire à proximité du cimetière du Père Lachaise ou au cœur des quartiers multiculturels de Belleville, l’ambiance du 20e arrondissement enrichira l’expérience de vos participants.
        </p>
      </ArrondissementSection>

      <ArrondissementSection
        title="Maximiser l'Impact de Votre Séminaire"
        icon={Users}
      >
        <p>
          Pour maximiser l'impact de votre photobooth, intégrez-le dans le programme global de votre événement. Encouragez les participants à utiliser le photobooth dès leur arrivée pour briser la glace.
        </p>
        <p>
          Proposez des concours de la meilleure photo ou offrez des récompenses pour les clichés les plus créatifs. Ces activités non seulement stimulent l'esprit d'équipe, mais elles laissent également aux participants des souvenirs tangibles de l'événement.
        </p>
      </ArrondissementSection>

      <ArrondissementSection
        title="En conclusion"
        icon={Camera}
        variant="gray"
      >
        <p>
          En somme, louer un photobooth avec The Pix dans le 20e arrondissement de Paris est une démarche à la fois innovante et efficace pour dynamiser vos séminaires d'entreprise.
        </p>
        <p>
          Cette activité, bien plus qu'un simple divertissement, s'inscrit dans une stratégie globale visant à renforcer la cohésion d'équipe et à stimuler la motivation au sein de votre entreprise.
        </p>
        <p>
          Pour les organisateurs de séminaires et les responsables RH, c'est une opportunité à ne pas manquer pour insuffler une nouvelle dynamique à vos événements d'entreprise.
        </p>
      </ArrondissementSection>
    </ArrondissementPageLayout>
  );
};

export default Paris20Page;

