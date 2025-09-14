import React from 'react';
import { Camera, Heart, MapPin, Check } from 'lucide-react';
import ArrondissementPageLayout from './ArrondissementPageLayout';
import ArrondissementSection from './ArrondissementSection';

interface Paris14PageProps {
  onBack: () => void;
  onQuoteRequest?: () => void;
  onPhotoboothDetails?: () => void;
  onAIAnimations?: () => void;
  onSEOPage?: () => void;
  arrondissementLinks: { label: string; onClick: () => void }[];
}

const Paris14Page: React.FC<Paris14PageProps> = ({
  onBack,
  onQuoteRequest,
  onPhotoboothDetails,
  onAIAnimations,
  onSEOPage, arrondissementLinks }) => {
  return (
    <ArrondissementPageLayout
      arrondissement={14}
      onBack={onBack}
      onQuoteRequest={onQuoteRequest}
      onPhotoboothDetails={onPhotoboothDetails}
      onAIAnimations={onAIAnimations}
      onSEOPage={onSEOPage}
      arrondissementLinks={arrondissementLinks}
    >
      <ArrondissementSection
        title="Louer un photobooth Paris 14eme arrondissement avec The Pix"
        icon={Heart}
      >
        <p>
          L’organisation d’un événement d’entreprise à Paris peut être un défi, surtout lorsqu’il s’agit de trouver des
          activités engageantes qui renforcent la cohésion d’équipe et motivent les employés.
        </p>
        <p>
          Dans cet article, nous explorons comment louer un photobooth à Paris 14ème arrondissement avec The Pix peut
          transformer votre événement en une expérience inoubliable.
        </p>
      </ArrondissementSection>

      <ArrondissementSection
        title="Pourquoi choisir un photobooth pour votre événement ?"
        icon={Camera}
        variant="gray"
      >
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-black mb-2">Créer des souvenirs durables</h3>
            <p>
              Un photobooth permet de capturer des moments de manière créative et amusante. Vos employés peuvent prendre des
              photos ensemble, essayer des accessoires variés et repartir avec des souvenirs tangibles de l’événement.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-black mb-2">Encourager l’interaction et la cohésion d’équipe</h3>
            <p>
              Un photobooth n’est pas seulement un appareil photo. Il s’agit d’un outil interactif qui encourage les
              participants à interagir les uns avec les autres.
            </p>
          </div>
        </div>
      </ArrondissementSection>

      <ArrondissementSection title="Pourquoi Paris 14ème arrondissement ?" icon={MapPin}>
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-black mb-2">Accessibilité et commodité</h3>
            <p>
              Situé au cœur de Paris, le 14ème arrondissement est facilement accessible par les transports en commun, ce qui
              en fait un choix pratique pour les événements d’entreprise.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-black mb-2">Ambiance locale</h3>
            <p>
              Paris 14ème est connu pour son ambiance vibrante et sa diversité culturelle, offrant un cadre idéal pour capturer
              l’essence de Paris.
            </p>
          </div>
        </div>
      </ArrondissementSection>

      <ArrondissementSection
        title="Comment louer un photobooth avec The Pix ?"
        icon={Check}
        variant="gray"
      >
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-black mb-2">Options de personnalisation</h3>
            <p>
              The Pix offre une gamme variée d’options de personnalisation pour répondre aux besoins spécifiques de votre
              événement.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-black mb-2">Installation et support technique</h3>
            <p>
              Louer un photobooth avec The Pix signifie également bénéficier d’un service complet incluant installation,
              maintenance et support technique.
            </p>
          </div>
        </div>
      </ArrondissementSection>

      <ArrondissementSection title="Conclusion" icon={Camera} variant="gray">
        <p>
          Intégrer un photobooth à votre prochain événement dans le 14ème arrondissement de Paris est une stratégie innovante
          pour améliorer l’expérience des participants.
        </p>
        <p>
          N’hésitez pas à nous contacter pour discuter de vos besoins spécifiques et découvrir comment The Pix peut transformer
          votre événement.
        </p>
      </ArrondissementSection>
    </ArrondissementPageLayout>
  );
};

export default Paris14Page;

