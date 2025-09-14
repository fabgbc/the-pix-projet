import React from 'react';
import Footer from './Footer';

interface HomePageProps {
  arrondissementLinks: { label: string; path: string }[];
}

const HomePage: React.FC<HomePageProps> = ({ arrondissementLinks }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex items-center justify-center">
        <h1 className="text-4xl font-bold">BoostPix</h1>
      </main>
      <Footer arrondissementLinks={arrondissementLinks} />
    </div>
  );
};

export default HomePage;
