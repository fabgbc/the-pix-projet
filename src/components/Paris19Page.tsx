import React from 'react';
import { Camera, Heart, Check, Star, Users } from 'lucide-react';
import ArrondissementPageLayout from './ArrondissementPageLayout';
import ArrondissementSection from './ArrondissementSection';

interface Paris19PageProps {
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
}

const Paris19Page: React.FC<Paris19PageProps> = ({
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
}) => {
  return (
    <ArrondissementPageLayout
      arrondissement={19}
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
        { label: 'Location photobooth Paris 19', onClick: onBack },
      ]}
    >
      <ArrondissementSection
        title="Louer un photobooth Paris 19eme arrondissement avec The Pix"
        icon={Heart}
      >
        <p>
          Dans le cadre de la planification d'événements corporatifs, l'intégration d'activités novatrices et
          engageantes est essentielle pour renforcer la cohésion d'équipe et stimuler la motivation des employés.
          Louer un photobooth à Paris 19e, notamment avec The Pix, se révèle être une solution créative pour
          agrémenter vos séminaires et événements d'entreprise.
        </p>
      </ArrondissementSection>

      <ArrondissementSection
        title="L'importance des activités photographiques dans un séminaire d'entreprise"
        icon={Camera}
        variant="gray"
      >
        <p>
          Les activités photographiques, telles que les photobooths, offrent une occasion unique de capturer des moments
          mémorables tout en facilitant l'interaction entre les participants. Au-delà de leur aspect ludique, ces
          dispositifs encouragent la collaboration et l'engagement, éléments cruciaux dans la création d'un
          environnement de travail harmonieux.
        </p>
        <p>
          Intégrer un photobooth lors de vos séminaires à la Place Stalingrad ou à la Grande Halle de la Villette peut
          transformer l'expérience des participants, en les incitant à se détendre et à interagir de manière plus
          informelle.
        </p>
      </ArrondissementSection>

      <ArrondissementSection
        title="Pourquoi choisir The Pix pour la location de photobooth"
        icon={Check}
      >
        <p>
          La location d'un photobooth avec The Pix à Paris 19e offre plusieurs avantages distinctifs pour les
          planificateurs d'événements. The Pix se distingue par sa capacité à personnaliser ses offres pour répondre aux
          besoins spécifiques de chaque événement. Grâce à une technologie de pointe et à un design élégant, leurs
          photobooths s'intègrent parfaitement à l'ambiance de votre séminaire, tout en offrant une expérience utilisateur
          exceptionnelle.
        </p>
      </ArrondissementSection>

      <ArrondissementSection
        title="Avantages des photobooths The Pix"
        icon={Star}
        variant="gray"
      >
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Personnalisation :</strong> The Pix permet une personnalisation complète de l'expérience photobooth,
            incluant des options de marquage avec le logo de l'entreprise et des thèmes adaptés à votre événement.
          </li>
          <li>
            <strong>Technologie avancée :</strong> Équipés de caméras haute résolution et d'écrans tactiles intuitifs,
            les photobooths assurent une qualité d'image impeccable et une simplicité d'utilisation inégalée.
          </li>
          <li>
            <strong>Flexibilité de location :</strong> Que ce soit pour une heure ou pour toute la durée de votre
            événement, The Pix propose des options flexibles qui s'ajustent à vos besoins logistiques et budgétaires.
          </li>
        </ul>
      </ArrondissementSection>

      <ArrondissementSection
        title="Impact sur la cohésion d'équipe et la motivation"
        icon={Users}
      >
        <p>
          En intégrant un photobooth à votre événement d'entreprise, vous stimulez non seulement l'engagement des
          participants, mais vous favorisez également la création de souvenirs partagés qui renforcent les liens entre
          collègues. Cette approche contribue à une atmosphère positive et collaborative, essentielle pour améliorer la
          satisfaction et la productivité au sein de l'équipe.
        </p>
      </ArrondissementSection>

      <ArrondissementSection title="En conclusion" icon={Camera} variant="gray">
        <p>
          Louer un photobooth avec The Pix à Paris 19e est une stratégie efficace pour dynamiser vos séminaires et
          événements d'entreprise. En choisissant cette solution innovante, vous offrez à vos participants une expérience
          mémorable qui promeut la cohésion et la motivation, tout en renforçant l'impact global de votre événement. Pour
          les organisateurs d'événements et les responsables des ressources humaines, intégrer cette activité dans vos
          stratégies de team building est une démarche judicieuse pour atteindre vos objectifs de développement
          organisationnel.
        </p>
      </ArrondissementSection>
    </ArrondissementPageLayout>
  );
};

export default Paris19Page;
