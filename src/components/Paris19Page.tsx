import React from 'react';
import { Camera, Heart, Check, Star, Users } from 'lucide-react';
import ArrondissementPageLayout from './ArrondissementPageLayout';
import ArrondissementSection from './ArrondissementSection';

interface Paris19PageProps {
  onQuoteRequest?: () => void;
  onPhotoboothDetails?: () => void;
  onAIAnimations?: () => void;
  onSEOPage?: () => void;
  arrondissementLinks: { label: string; onClick: () => void }[];
}

const Paris19Page: React.FC<Paris19PageProps> = ({
  onQuoteRequest,
  onPhotoboothDetails,
  onAIAnimations,
  onSEOPage,
  arrondissementLinks,
}) => {
  return (
    <ArrondissementPageLayout
      arrondissement={19}
      onQuoteRequest={onQuoteRequest}
      onPhotoboothDetails={onPhotoboothDetails}
      onAIAnimations={onAIAnimations}
      onSEOPage={onSEOPage}
      arrondissementLinks={arrondissementLinks}
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
