import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ArrondissementPageLayout from './ArrondissementPageLayout';

interface ArrondissementPageProps {
  arrondissementLinks: { label: string; path: string }[];
}

interface ArrondissementContent {
  title: string;
  description: string;
}

const PARIS_CONTENT: Record<number, ArrondissementContent> = Object.fromEntries(
  Array.from({ length: 20 }, (_, i) => {
    const num = i + 1;
    const suffix = num === 1 ? 'er' : 'ème';
    return [
      num,
      {
        title: `Photobooth Paris ${num}`,
        description: `Profitez d'un service de photobooth dans le ${num}${suffix} arrondissement de Paris.`,
      },
    ];
  }),
) as Record<number, ArrondissementContent>;

const ArrondissementPage: React.FC<ArrondissementPageProps> = ({ arrondissementLinks }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const arrondissement = Number(id);
  const content = PARIS_CONTENT[arrondissement];

  if (!content) {
    return <div className="p-8">Arrondissement inconnu</div>;
  }

  return (
    <ArrondissementPageLayout
      arrondissement={arrondissement}
      onBack={() => navigate('/')}
      arrondissementLinks={arrondissementLinks}
    >
      <section className="mb-16">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-3xl font-bold text-black mb-4">{content.title}</h2>
          <p className="text-gray-700 text-lg leading-relaxed">{content.description}</p>
        </div>
      </section>
    </ArrondissementPageLayout>
  );
};

export default ArrondissementPage;
