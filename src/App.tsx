import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ArrondissementPage from './components/ArrondissementPage';

function App() {
  const arrondissementLinks = Array.from({ length: 20 }, (_, i) => ({
    label: `Location photobooth Paris ${i + 1}`,
    path: `/pages/location-photobooth-paris-${i + 1}`,
  }));

  return (
    <Routes>
      <Route path="/" element={<HomePage arrondissementLinks={arrondissementLinks} />} />
      <Route
        path="/pages/location-photobooth-paris-:id"
        element={<ArrondissementPage arrondissementLinks={arrondissementLinks} />}
      />
    </Routes>
  );
}

export default App;
