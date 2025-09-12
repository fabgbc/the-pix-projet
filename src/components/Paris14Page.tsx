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
}

const Paris14Page: React.FC<Paris14PageProps> = ({
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
}) => {
  return (
    <ArrondissementPageLayout
      arrondissement={14}
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
        { label: 'Location photobooth Paris 14', onClick: onBack },
      ]}
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

