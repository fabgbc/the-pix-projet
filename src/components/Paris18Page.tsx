import React from 'react';
import { Camera, Heart, MapPin, Check, Users } from 'lucide-react';
import ArrondissementPageLayout from './ArrondissementPageLayout';
import ArrondissementSection from './ArrondissementSection';

interface Paris18PageProps {
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
}

const Paris18Page: React.FC<Paris18PageProps> = ({
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
}) => {
  return (
    <ArrondissementPageLayout
      arrondissement={18}
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
        { label: 'Location photobooth Paris 18', onClick: onBack },
      ]}
    >
      <ArrondissementSection
        title="Louer un photobooth Paris 18eme arrondissement avec The Pix"
        icon={Heart}
      >
        <p>
          Au cœur vibrant de Paris, le 18ème arrondissement incarne à la fois la culture et l'histoire,
          symbolisées par des lieux emblématiques tels que Montmartre et le Moulin Rouge. Ce riche décor
          artistique et divertissant offre un cadre unique pour les événements d'entreprise.
        </p>
        <p>
          Dans ce contexte, la location d’un photobooth, notamment le Photobooth 360 innovant, se présente
          comme une stratégie idéale pour enrichir les rassemblements professionnels.
        </p>
      </ArrondissementSection>

      <ArrondissementSection
        title="L'importance des photobooths dans les événements d'entreprise"
        icon={Camera}
        variant="gray"
      >
        <p>
          Dans l’organisation d’événements d’entreprise, renforcer la cohésion d’équipe et stimuler la
          motivation des employés sont des objectifs clés. Les photobooths, de par leur nature interactive,
          favorisent intrinsèquement l’engagement des participants. Ils ne se contentent pas d’être une
          source de divertissement, mais offrent aussi un moyen de créer des souvenirs durables. Le
          Photobooth 360, en particulier, propose une expérience dynamique, capturant des moments sous tous
          les angles et laissant aux participants un souvenir unique de l’événement.
        </p>
      </ArrondissementSection>

      <ArrondissementSection
        title="Pourquoi choisir le 18ème arrondissement de Paris ?"
        icon={MapPin}
      >
        <p>
          Le 18ème arrondissement, avec son mélange éclectique de charme historique et de modernité, offre
          un cadre incomparable pour des événements d’entreprise. La juxtaposition entre l’architecture
          parisienne traditionnelle et les lieux culturels contemporains crée un environnement stimulant,
          propice à l’inspiration et au développement d’un esprit de communauté parmi les participants.
        </p>
        <p><strong>Louer photobooth Paris 18</strong></p>
        <p>
          En situant votre événement dans ce quartier, vous profitez de l'attrait de Montmartre et du
          légendaire Moulin Rouge, qui peuvent servir de thématiques ou de points d'intérêt pour votre
          événement.
        </p>
      </ArrondissementSection>

      <ArrondissementSection
        title="The Pix : une solution complète"
        icon={Check}
        variant="gray"
      >
        <p>
          Pour la location de photobooths à Paris, The Pix se positionne comme un leader dans
          l’industrie, offrant du matériel de pointe et des services sur mesure, adaptés aux besoins
          spécifiques des clients d’entreprise. Leur expertise dans l’installation du Photobooth 360
          garantit que votre événement sera unique, en offrant une plateforme interactive qui incite à
          la participation et à l’interaction entre les participants.
        </p>
      </ArrondissementSection>

      <ArrondissementSection
        title="Personnalisation et sur-mesure"
        icon={Heart}
      >
        <p>
          The Pix comprend que chaque événement d’entreprise est unique et nécessite une approche sur
          mesure pour l’intégration du photobooth. Ils proposent une large gamme d’options de
          personnalisation, vous permettant d’adapter l’expérience photobooth en fonction du thème de
          votre événement ou de votre identité d’entreprise. Des modèles de photos personnalisés aux
          arrière-plans sur mesure mettant en avant les monuments emblématiques parisiens, The Pix veille
          à ce que votre événement soit non seulement mémorable, mais aussi représentatif de votre image
          de marque.
        </p>
      </ArrondissementSection>

      <ArrondissementSection
        title="Renforcer la cohésion d’équipe grâce à des expériences partagées"
        icon={Users}
        variant="gray"
      >
        <p>
          L'ajout d’un photobooth à votre événement d’entreprise peut grandement renforcer la cohésion
          d’équipe. En s’engageant dans l’expérience du photobooth, les employés partagent la création de
          souvenirs communs, favorisant un esprit de camaraderie et d’unité. Cette expérience partagée
          peut agir comme un catalyseur pour améliorer les relations interpersonnelles au sein de
          l’entreprise, contribuant ainsi à un environnement de travail plus harmonieux et productif.
        </p>
      </ArrondissementSection>

      <ArrondissementSection
        title="En conclusion"
        icon={Camera}
        variant="gray"
      >
        <p>
          Louer un photobooth auprès de The Pix pour votre événement d’entreprise dans le 18ème
          arrondissement de Paris n’est pas simplement un ajout, mais un véritable atout. C’est une
          approche innovante qui s’aligne sur les objectifs de cohésion d’équipe et de motivation des
          employés. En exploitant la richesse culturelle de Montmartre et la technologie innovante du
          Photobooth 360, vous pouvez créer un événement à la fois marquant et inoubliable.
        </p>
      </ArrondissementSection>
    </ArrondissementPageLayout>
  );
};

export default Paris18Page;

