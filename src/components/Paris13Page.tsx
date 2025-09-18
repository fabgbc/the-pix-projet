import React from 'react';
import { Camera, Heart, Award, Check } from 'lucide-react';
import ArrondissementPageLayout from './ArrondissementPageLayout';
import ArrondissementSection from './ArrondissementSection';

interface Paris13PageProps {
  onQuoteRequest?: () => void;
  onPhotoboothDetails?: () => void;
  onAIAnimations?: () => void;
  onSEOPage?: () => void;
  arrondissementLinks: { label: string; onClick: () => void }[];
}

const Paris13Page: React.FC<Paris13PageProps> = ({
  onQuoteRequest,
  onPhotoboothDetails,
  onAIAnimations,
  onSEOPage,
  arrondissementLinks,
}) => {
  return (
    <ArrondissementPageLayout
      arrondissement={13}
      onQuoteRequest={onQuoteRequest}
      onPhotoboothDetails={onPhotoboothDetails}
      onAIAnimations={onAIAnimations}
      onSEOPage={onSEOPage}
      arrondissementLinks={arrondissementLinks}
    >
      <ArrondissementSection title="Louer un photobooth Paris 13eme arrondissement avec The Pix" icon={Heart}>
        <p>
          Louer un photobooth peut transformer n&apos;importe quel événement en une expérience mémorable. Que vous organisiez un mariage,
          une fête d&apos;anniversaire, ou un événement d&apos;entreprise à Paris, un photobooth est une excellente façon de capturer des souvenirs et de divertir vos invités.
        </p>
        <p>
          Dans cet article, nous allons explorer pourquoi vous devriez louer un photobooth dans le 13ème arrondissement de Paris avec The Pix.
        </p>
      </ArrondissementSection>

      <ArrondissementSection title="Pourquoi louer un photobooth pour votre événement à Paris ?" icon={Camera} variant="gray">
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-black mb-2">Créez des souvenirs inoubliables</h3>
            <p>
              Les photobooths permettent à vos invités de prendre des photos amusantes et spontanées. Ces photos deviennent de précieux souvenirs qu&apos;ils peuvent emporter chez eux. De plus, avec des options de personnalisation, vous pouvez ajouter le logo de votre événement ou un message spécial sur chaque photo.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-black mb-2">Divertissez vos invités</h3>
            <p>
              Il est une excellente façon de divertir vos invités. Ils peuvent s&apos;amuser à poser avec des accessoires, à faire des grimaces, et à se créer des souvenirs uniques. C&apos;est une activité qui plaît à tous les âges et qui peut briser la glace entre les invités qui ne se connaissent pas bien.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-black mb-2">Partagez sur les réseaux sociaux</h3>
            <p>
              Avec les options de partage instantané, vos invités peuvent publier leurs photos sur les réseaux sociaux en un clin d&apos;œil. Cela permet non seulement de prolonger le plaisir de l&apos;événement, mais aussi d&apos;augmenter la visibilité de votre événement en ligne.
            </p>
          </div>
        </div>
      </ArrondissementSection>

      <ArrondissementSection title="Pourquoi choisir The Pix pour louer un photobooth à Paris 13ème arrondissement ?" icon={Award}>
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-black mb-2">Matériel de haute qualité</h3>
            <p>
              The Pix propose des photobooths équipés de caméras haute définition et d&apos;imprimantes de qualité professionnelle. Vous pouvez être sûr que les photos seront claires et nettes, et que les impressions seront de haute qualité.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-black mb-2">Large gamme d&apos;options de personnalisation</h3>
            <p>
              Que vous souhaitiez personnaliser l&apos;apparence du photobooth ou les impressions photo, The Pix offre une multitude d&apos;options. Vous pouvez choisir des arrière-plans, des cadres photo, et des accessoires qui correspondent à votre thème ou à votre marque.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-black mb-2">Service client exceptionnel</h3>
            <p>
              The Pix se distingue par son excellent service client. Ils vous accompagnent tout au long du processus, de la réservation à l&apos;installation du photobooth. Leur équipe est disponible pour répondre à toutes vos questions et s&apos;assurer que tout se passe bien le jour de l&apos;événement.
            </p>
          </div>
        </div>
      </ArrondissementSection>

      <ArrondissementSection title="Comment louer avec The Pix ?" icon={Check} variant="gray">
        <ol className="list-decimal list-inside space-y-4">
          <li>
            <span className="font-bold text-black">Étape 1 : Contactez The Pix</span> – Vous pouvez contacter The Pix via leur site web ou par téléphone. Un membre de leur équipe vous aidera à choisir le photobooth qui convient le mieux à votre événement et à répondre à toutes vos questions.
          </li>
          <li>
            <span className="font-bold text-black">Étape 2 : Choisissez vos options de personnalisation</span> – The Pix vous propose une variété d&apos;options de personnalisation pour rendre votre photobooth unique. Vous pouvez choisir l&apos;apparence, les accessoires, les arrière-plans, et les cadres photo.
          </li>
          <li>
            <span className="font-bold text-black">Étape 3 : Réservez votre photobooth</span> – Une fois que vous avez choisi vos options de personnalisation, vous pouvez réserver votre photobooth. The Pix vous enverra une confirmation de réservation et des informations sur le jour de l&apos;événement.
          </li>
          <li>
            <span className="font-bold text-black">Étape 4 : Installation et utilisation</span> – Le jour de l&apos;événement, une équipe de The Pix viendra installer le photobooth à l&apos;endroit de votre choix dans le 13ème arrondissement de Paris. Ils s&apos;assureront que tout fonctionne correctement et seront disponibles pour toute assistance pendant l&apos;événement.
          </li>
          <li>
            <span className="font-bold text-black">Étape 5 : Profitez de votre événement</span> – Une fois le photobooth installé, vos invités peuvent commencer à l&apos;utiliser. Ils pourront prendre des photos amusantes, les imprimer, et les partager sur les réseaux sociaux. Vous pouvez vous détendre et profiter de l&apos;événement en sachant que vos invités s&apos;amusent et créent des souvenirs inoubliables.
          </li>
        </ol>
      </ArrondissementSection>

      <ArrondissementSection title="Conseils pour tirer le meilleur parti de votre photobooth" icon={Heart}>
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-black mb-2">Placez le photobooth dans un endroit stratégique</h3>
            <p>
              Assurez-vous que le photobooth est placé dans un endroit visible et accessible pour tous vos invités. Un endroit proche de la piste de danse ou de la zone de réception est idéal.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-black mb-2">Fournissez des accessoires amusants</h3>
            <p>
              Les accessoires sont essentiels pour une soirée réussie. Fournissez une variété d&apos;accessoires amusants comme des chapeaux, des lunettes, et des pancartes pour encourager vos invités à se lâcher et à s&apos;amuser.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-black mb-2">Encouragez le partage sur les réseaux sociaux</h3>
            <p>
              Encouragez vos invités à partager leurs photos sur les réseaux sociaux en utilisant un hashtag spécifique à votre événement. Cela augmente non seulement la visibilité de votre événement en ligne, mais permet aussi de rassembler toutes les photos en un seul endroit.
            </p>
          </div>
        </div>
      </ArrondissementSection>

      <ArrondissementSection title="Conclusion" icon={Camera} variant="gray">
        <p>
          Louer un photobooth pour votre événement dans le 13ème arrondissement de Paris avec The Pix est une excellente façon de créer des souvenirs inoubliables et de divertir vos invités.
        </p>
        <p>
          Avec leur matériel de haute qualité, leurs options de personnalisation, et leur service client exceptionnel, vous pouvez être sûr que votre événement sera un succès. Alors n&apos;attendez plus, contactez The Pix et réservez votre photobooth dès aujourd&apos;hui !
        </p>
      </ArrondissementSection>
    </ArrondissementPageLayout>
  );
};

export default Paris13Page;

