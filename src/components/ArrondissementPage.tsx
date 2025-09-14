import React from 'react';
import ArrondissementPageLayout from './ArrondissementPageLayout';
import PARIS_CONTENT from '../data/arrondissements';

interface ArrondissementPageProps {
  arrondissement: number;
  navigate: (path: string) => void;
  arrondissementLinks: { label: string; path: string }[];
}

const ArrondissementPage: React.FC<ArrondissementPageProps> = ({
  arrondissement,
  navigate,
  arrondissementLinks,
}) => {
  const content = PARIS_CONTENT[arrondissement];

  if (!content) {
    return <div className="p-8">Arrondissement inconnu</div>;
  }

  return (
    <ArrondissementPageLayout
      arrondissement={arrondissement}
      onBack={() => navigate('/')}
      arrondissementLinks={arrondissementLinks}
      navigate={navigate}
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
