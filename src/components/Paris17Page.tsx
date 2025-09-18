import React from 'react';
import { Camera, Heart, MapPin, Check, Users } from 'lucide-react';
import ArrondissementPageLayout from './ArrondissementPageLayout';
import ArrondissementSection from './ArrondissementSection';

interface Paris17PageProps {
  onBack: () => void;
  onQuoteRequest?: () => void;
  onPhotoboothDetails?: () => void;
  onAIAnimations?: () => void;
  onSEOPage?: () => void;
  arrondissementLinks: { label: string; onClick: () => void }[];
}

const Paris17Page: React.FC<Paris17PageProps> = ({
  onBack,
  onQuoteRequest,
  onPhotoboothDetails,
  onAIAnimations,
  onSEOPage, arrondissementLinks }) => {
  return (
    <ArrondissementPageLayout
      arrondissement={17}
      onBack={onBack}
      onQuoteRequest={onQuoteRequest}
      onPhotoboothDetails={onPhotoboothDetails}
      onAIAnimations={onAIAnimations}
      onSEOPage={onSEOPage}
      arrondissementLinks={arrondissementLinks}
    >
      <ArrondissementSection
        title="Louer un photobooth Paris 17eme arrondissement avec The Pix"
        icon={Heart}
      >
        <p>
          Dans le cœur animé du 17ème arrondissement de Paris, les événements d’entreprise prennent une
          tournure innovante. Le secret de cette transformation ? Les photobooths.
        </p>
        <p>
          Et pas n’importe quel photobooth, mais ceux de The Pix. Ce n’est pas juste un ajout à votre
          événement, c’est un outil pour renforcer l’esprit d’équipe, motiver vos employés et créer des
          souvenirs inoubliables.
        </p>
        <p>
          Dans cet article, nous allons explorer l’importance stratégique des photobooths dans les
          événements d’entreprise. Nous verrons comment The Pix, un service de location de photobooths de
          premier plan dans le 17ème arrondissement de Paris, peut rehausser votre prochain séminaire
          d’entreprise.
        </p>
      </ArrondissementSection>

      <ArrondissementSection
        title="L’importance stratégique des photobooths dans les événements d’entreprise"
        icon={Camera}
        variant="gray"
      >
        <p>
          Dans le cadre des événements d’entreprise, l’innovation est essentielle. Il s’agit de créer un
          environnement qui favorise la cohésion d’équipe et stimule la motivation des employés. Les
          photobooths jouent un rôle clé en offrant une expérience interactive unique qui encourage les
          employés à interagir entre eux.
        </p>
        <p>
          Ils peuvent être adaptés à n’importe quel thème d’événement, ce qui en fait un ajout flexible à
          votre planification. En résumé, un photobooth est bien plus qu’un divertissement, c’est un outil
          stratégique qui améliore le succès de votre événement d’entreprise.
        </p>
      </ArrondissementSection>

      <ArrondissementSection
        title="The Pix : votre service de location de photobooths dans le 17ème arrondissement"
        icon={Check}
      >
        <p>
          En matière de location de photobooths dans le 17ème arrondissement de Paris, The Pix se
          distingue. Reconnu pour son service professionnel et ses équipements de haute qualité, The Pix
          propose de nombreuses options de personnalisation, adaptées à la marque et au thème de votre
          événement. Faciles à utiliser et dotés des dernières technologies, nos photobooths permettent à
          vos invités de partager instantanément leurs photos sur les réseaux sociaux. Avec un système de
          réservation en ligne simple et une installation rapide, The Pix garantit une expérience fluide et
          sans tracas.
        </p>
      </ArrondissementSection>

      <ArrondissementSection
        title="Renforcer la cohésion d’équipe avec un photobooth lors de votre séminaire"
        icon={Users}
        variant="gray"
      >
        <p>
          Un photobooth peut être un ajout unique et engageant à votre séminaire d’entreprise, encourageant
          l’interaction et le réseautage entre les employés. En tant que brise-glace, il aide à casser les
          barrières hiérarchiques et favorise un environnement inclusif et collaboratif. De plus, il est
          possible de personnaliser les photos avec votre logo, renforçant ainsi l’identité de votre marque
          tout en créant des souvenirs inoubliables.
        </p>
      </ArrondissementSection>

      <ArrondissementSection
        title="Les monuments emblématiques du 17ème comme toile de fond"
        icon={MapPin}
      >
        <p>
          Le 17ème arrondissement de Paris regorge de lieux emblématiques, parfaits pour servir de toile de
          fond à votre événement d’entreprise. Que ce soit le Square des Batignolles, le Parc Monceau, ou
          l’Arc de Triomphe, ces lieux ajoutent une touche de prestige à votre événement et subliment vos
          séances de photobooth.
        </p>
      </ArrondissementSection>

      <ArrondissementSection
        title="Personnalisation et branding avec The Pix"
        icon={Camera}
        variant="gray"
      >
        <p>
          The Pix propose une large gamme d’options de personnalisation pour adapter l’expérience
          photobooth à votre marque et au thème de votre événement. Du fond aux accessoires, tout peut être
          personnalisé, garantissant que votre photobooth reflète l’unicité de votre entreprise. Les photos
          imprimées peuvent également être marquées avec votre logo, créant ainsi un rappel constant de
          votre marque.
        </p>
      </ArrondissementSection>

      <ArrondissementSection
        title="Les aspects pratiques de la location d’un photobooth avec The Pix"
        icon={Check}
      >
        <p>
          Louer un photobooth avec The Pix est un processus sans tracas. L’équipe assure une livraison et
          une installation ponctuelles, et les photobooths sont dotés d’interfaces intuitives pour garantir
          une utilisation facile. The Pix fournit également un support technique pendant toute la durée de
          l’événement pour assurer un bon déroulement.
        </p>
      </ArrondissementSection>

      <ArrondissementSection
        title="Capturer l’esprit de la culture d’entreprise grâce aux souvenirs photo instantanés"
        icon={Heart}
        variant="gray"
      >
        <p>
          Les photobooths ne sont pas seulement amusants, ils capturent l’essence de votre culture
          d’entreprise. Les souvenirs photo instantanés rappellent les expériences partagées, renforçant la
          cohésion d’équipe. Ces photos peuvent également être personnalisées avec votre logo, permettant à
          vos employés de ramener un morceau de votre événement chez eux.
        </p>
      </ArrondissementSection>

      <ArrondissementSection
        title="Maximiser l’engagement des employés grâce aux fonctionnalités interactives"
        icon={Users}
      >
        <p>
          Les photobooths de The Pix incluent des fonctionnalités interactives conçues pour maximiser la
          participation des employés. Grâce à une interface intuitive et des accessoires amusants, ils
          encouragent les participants à se lâcher et à profiter de l’expérience. De plus, l’intégration aux
          réseaux sociaux permet de partager instantanément les photos, augmentant la visibilité de votre
          événement.
        </p>
      </ArrondissementSection>

      <ArrondissementSection
        title="Pourquoi la location d’un photobooth avec The Pix est un atout pour vos événements d’entreprise"
        icon={Camera}
        variant="gray"
      >
        <p>
          Louer un photobooth avec The Pix pour vos événements d’entreprise dans le 17ème arrondissement de
          Paris est une décision stratégique. Cela favorise la cohésion d’équipe, crée des souvenirs durables
          et ajoute une touche de fun à votre événement. Contactez The Pix dès aujourd’hui pour découvrir
          comment nous pouvons transformer votre prochain événement en une expérience mémorable.
        </p>
      </ArrondissementSection>
    </ArrondissementPageLayout>
  );
};

export default Paris17Page;

