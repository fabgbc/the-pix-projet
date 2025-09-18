import React from 'react';
import { Camera, Heart, MapPin, Check, Users } from 'lucide-react';
import ArrondissementPageLayout from './ArrondissementPageLayout';
import ArrondissementSection from './ArrondissementSection';

interface Paris16PageProps {
  onBack: () => void;
  onQuoteRequest?: () => void;
  onPhotoboothDetails?: () => void;
  onAIAnimations?: () => void;
  onSEOPage?: () => void;
  arrondissementLinks: { label: string; onClick: () => void }[];
}

const Paris16Page: React.FC<Paris16PageProps> = ({
  onBack,
  onQuoteRequest,
  onPhotoboothDetails,
  onAIAnimations,
  onSEOPage, arrondissementLinks }) => {
  return (
    <ArrondissementPageLayout
      arrondissement={16}
      onBack={onBack}
      onQuoteRequest={onQuoteRequest}
      onPhotoboothDetails={onPhotoboothDetails}
      onAIAnimations={onAIAnimations}
      onSEOPage={onSEOPage}
      arrondissementLinks={arrondissementLinks}
    >
      <ArrondissementSection
        title="Location photobooth Paris 16e avec The Pix"
        icon={Heart}
      >
        <p>
          Dans le cœur vibrant du 16e arrondissement de Paris, l’organisation d’événements d’entreprise
          revêt un charme particulier. Avec des monuments emblématiques tels que Roland Garros,
          l’Arc de triomphe et le Trocadéro à proximité, l’emplacement est déjà un atout majeur.
          Mais comment rendre votre événement vraiment inoubliable ? La solution innovante : la location
          de photobooth avec The Pix.
        </p>
      </ArrondissementSection>

      <ArrondissementSection
        title="L’importance de l’innovation dans les événements d’entreprise"
        icon={Camera}
        variant="gray"
      >
        <p>
          Dans le paysage concurrentiel des entreprises d’aujourd’hui, l’innovation est essentielle.
          Cela ne se limite pas aux produits et services, mais s’étend également aux événements d’entreprise.
          Des activités innovantes, comme les photobooths, peuvent favoriser la cohésion d’équipe
          et stimuler la motivation des employés.
        </p>
        <p>location photobooth paris 16</p>
        <p>
          Elles créent des expériences mémorables qui laissent une impression durable. Avec The Pix,
          vous pouvez louer un photobooth à Paris 16e et apporter une touche de créativité à votre événement.
        </p>
      </ArrondissementSection>

      <ArrondissementSection
        title="The Pix : Votre partenaire pour la location de photobooth à Paris 16e"
        icon={Check}
      >
        <p>
          The Pix est un prestataire de premier plan pour la location de photobooths dans le 16e arrondissement
          de Paris. Nous proposons une variété d’options, allant des designs classiques aux plus modernes.
          Notre réputation de service de qualité et de fiabilité en fait un choix privilégié.
        </p>
        <p>
          Nous garantissons une installation et une utilisation du photobooth sans accroc, avec des tarifs
          compétitifs et des offres packagées pour nos clients d’entreprise.
        </p>
      </ArrondissementSection>

      <ArrondissementSection
        title="Avantages des photobooths pour la cohésion d’équipe et la motivation"
        icon={Users}
        variant="gray"
      >
        <p>
          Les photobooths constituent une activité de team building unique. En plus d’augmenter les
          interactions sociales entre les employés, ils ont un impact positif sur l’environnement de travail
          et la satisfaction des employés.
        </p>
        <p>
          Le caractère ludique et interactif des photobooths peut rehausser le moral. Les photos capturées
          lors de l’événement peuvent être utilisées pour de futures actions marketing ou pour renforcer la
          culture d’entreprise.
        </p>
      </ArrondissementSection>

      <ArrondissementSection
        title="Personnalisation et intégration de marque avec The Pix"
        icon={Camera}
      >
        <p>
          Nous offrons des options de personnalisation pour nos photobooths, vous permettant d’aligner
          l’expérience photobooth avec l’identité de votre entreprise. Vous pouvez ainsi enrichir vos thèmes
          événementiels et votre branding à travers le photobooth, ajoutant une touche personnelle à
          l’événement.
        </p>
        <p>
          Nous proposons également des fonctionnalités technologiques telles que l’intégration aux
          réseaux sociaux, permettant un partage instantané des photos et augmentant la visibilité
          de votre événement.
        </p>
      </ArrondissementSection>

      <ArrondissementSection
        title="Emplacement stratégique : Paris 16e et ses attraits"
        icon={MapPin}
        variant="gray"
      >
        <p>
          Le 16e arrondissement de Paris est un emplacement stratégique pour les événements d’entreprise,
          à proximité de monuments tels que Roland Garros, l’Arc de triomphe, et le Trocadéro. Ces lieux
          emblématiques ajoutent une touche d’élégance et de prestige à votre événement, tout en offrant
          des décors magnifiques pour vos séances de photobooth.
        </p>
      </ArrondissementSection>

      <ArrondissementSection
        title="La facilité d’installation et l’assistance de The Pix"
        icon={Check}
      >
        <p>
          Nous simplifions l’installation et l’utilisation du photobooth, en offrant un support et une
          assistance tout au long de l’événement. Cela garantit une expérience fluide et sans souci pour
          vous et votre équipe.
        </p>
      </ArrondissementSection>

      <ArrondissementSection
        title="Réserver avec The Pix : Simplicité et efficacité"
        icon={Camera}
        variant="gray"
      >
        <p>
          Réserver un photobooth avec The Pix est simple et efficace. Nous proposons des tarifs
          compétitifs et des offres packagées pour nos clients d’entreprise.
        </p>
        <p>
          Nos photobooths sont adaptables aux événements d’entreprise en intérieur comme en extérieur,
          ce qui en fait un choix polyvalent pour tout événement.
        </p>
      </ArrondissementSection>
    </ArrondissementPageLayout>
  );
};

export default Paris16Page;

