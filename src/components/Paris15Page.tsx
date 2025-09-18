import React from 'react';
import { Camera, Heart, MapPin, Check } from 'lucide-react';
import ArrondissementPageLayout from './ArrondissementPageLayout';
import ArrondissementSection from './ArrondissementSection';

interface Paris15PageProps {
  onQuoteRequest?: () => void;
  onPhotoboothDetails?: () => void;
  onAIAnimations?: () => void;
  onSEOPage?: () => void;
  arrondissementLinks: { label: string; onClick: () => void }[];
}

const Paris15Page: React.FC<Paris15PageProps> = ({
  onQuoteRequest,
  onPhotoboothDetails,
  onAIAnimations,
  onSEOPage,
  arrondissementLinks,
}) => {
  return (
    <ArrondissementPageLayout
      arrondissement={15}
      onQuoteRequest={onQuoteRequest}
      onPhotoboothDetails={onPhotoboothDetails}
      onAIAnimations={onAIAnimations}
      onSEOPage={onSEOPage}
      arrondissementLinks={arrondissementLinks}
    >
      <ArrondissementSection
        title="Louer un photobooth Paris 15eme arrondissement avec The Pix"
        icon={Heart}
      >
        <p>
          Organiser un événement d’entreprise mémorable et engageant est une tâche complexe, nécessitant
          créativité et expertise. Que vous soyez un planificateur d’événements ou un responsable des
          ressources humaines, vous recherchez constamment des activités innovantes pour renforcer la cohésion
          d’équipe et motiver vos employés.
        </p>
        <p>location photobooth paris 15</p>
        <p>
          Louer un photobooth à Paris 15ème arrondissement avec The Pix peut être la solution parfaite. Ce guide
          vous aidera à comprendre pourquoi cette activité est un excellent choix pour vos événements
          corporatifs.
        </p>
      </ArrondissementSection>

      <ArrondissementSection
        title="Pourquoi choisir un photobooth ?"
        icon={Camera}
        variant="gray"
      >
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-black mb-2">Créer des souvenirs inoubliables</h3>
            <p>
              Un photobooth permet aux participants de capturer des moments joyeux et de repartir avec des
              souvenirs tangibles. Ces photos peuvent être partagées sur les réseaux sociaux, augmentant ainsi la
              visibilité de votre événement. En outre, elles servent de rappel constant de l’expérience positive
              vécue, renforçant la cohésion d’équipe.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-black mb-2">Encourager l’interaction</h3>
            <p>
              Le photobooth est une excellente activité de brise-glace. Les employés de différentes équipes ou
              départements peuvent interagir de manière informelle, favorisant ainsi des relations professionnelles
              plus solides. La dynamique ludique d’un photobooth encourage la collaboration et l’engagement,
              essentiels pour un environnement de travail harmonieux.
            </p>
          </div>
        </div>
      </ArrondissementSection>

      <ArrondissementSection
        title="Pourquoi Paris 15ème arrondissement ?"
        icon={MapPin}
      >
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-black mb-2">Proximité des lieux emblématiques</h3>
            <p>
              Le 15ème arrondissement est proche de nombreux sites emblématiques tels que la Tour Montparnasse
              et le Pont de Bir-Hakeim. Ces lieux offrent des opportunités uniques pour des activités en extérieur
              et des séances photo mémorables, ajoutant une dimension supplémentaire à votre événement.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-black mb-2">Accessibilité et commodité</h3>
            <p>
              Ce quartier est bien desservi par les transports en commun, facilitant ainsi l’accès pour tous les
              participants. De plus, il offre une variété d’espaces événementiels adaptés à différents types de
              séminaires et de réunions d’entreprise.
            </p>
          </div>
        </div>
      </ArrondissementSection>

      <ArrondissementSection
        title="The Pix : Votre partenaire idéal"
        icon={Check}
        variant="gray"
      >
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-black mb-2">Expertise et personnalisation</h3>
            <p>
              The Pix se distingue par son expertise dans la location de photobooths et son service personnalisé.
              Chaque photobooth est équipé des dernières technologies, garantissant des photos de haute qualité. De
              plus, The Pix offre des options de personnalisation, telles que des cadres et des accessoires
              thématiques, alignés avec les objectifs de votre événement.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-black mb-2">Installation et support</h3>
            <p>
              L’équipe de The Pix s’occupe de l’installation du photobooth, vous permettant de vous concentrer sur
              d’autres aspects de votre événement. Un technicien est également disponible sur place pour assurer le
              bon fonctionnement de l’équipement, garantissant une expérience sans tracas pour vos invités.
            </p>
          </div>
        </div>
      </ArrondissementSection>

      <ArrondissementSection title="Conclusion" icon={Camera} variant="gray">
        <p>
          Louer un photobooth à Paris 15ème arrondissement avec The Pix est une stratégie efficace pour dynamiser
          vos événements corporatifs. En créant une atmosphère détendue et interactive, vous pouvez renforcer la
          cohésion d’équipe et laisser une impression durable sur vos employés.
        </p>
        <p>
          Ne laissez pas passer l’opportunité d’ajouter une touche de créativité et de fun à votre prochain
          événement. Contactez The Pix dès aujourd’hui pour discuter de vos besoins spécifiques et découvrir
          comment un photobooth peut transformer votre événement en une expérience mémorable.
        </p>
      </ArrondissementSection>
    </ArrondissementPageLayout>
  );
};

export default Paris15Page;

