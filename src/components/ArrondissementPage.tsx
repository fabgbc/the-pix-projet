import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ArrondissementPageLayout from './ArrondissementPageLayout';
import PARIS_CONTENT from '../data/arrondissements';

interface ArrondissementPageProps {
  arrondissementLinks: { label: string; path: string }[];
}

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
