import React from 'react';

interface HomeSectionLinkProps {
  label: string;
  targetId: string;
  onNavigate: (id: string) => void;
  className?: string;
}

const HomeSectionLink: React.FC<HomeSectionLinkProps> = ({ label, targetId, onNavigate, className }) => {
  return (
    <button
      onClick={() => onNavigate(targetId)}
      className={className || 'text-gray-700 hover:text-yellow-500 transition-colors font-medium'}
    >
      {label}
    </button>
  );
};

export default HomeSectionLink;
