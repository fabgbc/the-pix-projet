import React from 'react';

interface HomeSectionLinkProps {
  label: string;
  targetId: string;
  onBack: () => void;
  className?: string;
}

const HomeSectionLink: React.FC<HomeSectionLinkProps> = ({ label, targetId, onBack, className }) => {
  const handleClick = () => {
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

