import React from 'react';
import { useRouter } from '../router';

interface HomeSectionLinkProps {
  label: string;
  targetId: string;
  onBack: () => void;
  className?: string;
}

const anchorToRoute: Record<string, string> = {
  mariages: '/photobooth-evenement-paris',
  galerie: '/galerie-photobooth-paris',
  services: '/services',
};

const HomeSectionLink: React.FC<HomeSectionLinkProps> = ({ label, targetId, onBack, className }) => {
  const { navigate } = useRouter();

  const handleClick = () => {
    const route = anchorToRoute[targetId];

    if (route) {
      navigate(route);
      return;
    }

    onBack();
    setTimeout(() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <button
      onClick={handleClick}
      className={className || 'text-gray-700 hover:text-yellow-500 transition-colors font-medium'}
    >
      {label}
    </button>
  );
};

export default HomeSectionLink;

