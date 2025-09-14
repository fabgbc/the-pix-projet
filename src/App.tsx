import React, { useEffect, useState } from 'react';
import HomePage from './components/HomePage';
import ArrondissementPage from './components/ArrondissementPage';

function App() {
  const arrondissementLinks = Array.from({ length: 20 }, (_, i) => ({
    label: `Location photobooth Paris ${i + 1}`,
    path: `/pages/location-photobooth-paris-${i + 1}`,
  }));

  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePop = () => setPath(window.location.pathname);
    window.addEventListener('popstate', handlePop);
    return () => window.removeEventListener('popstate', handlePop);
  }, []);

  const navigate = (to: string) => {
    window.history.pushState({}, '', to);
    setPath(to);
  };

  if (path.startsWith('/pages/location-photobooth-paris-')) {
    const id = Number(path.split('-').pop());
    return (
      <ArrondissementPage
        arrondissement={id}
        navigate={navigate}
        arrondissementLinks={arrondissementLinks}
      />
    );
  }

  return <HomePage arrondissementLinks={arrondissementLinks} navigate={navigate} />;
}

export default App;
