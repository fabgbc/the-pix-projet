import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface ArrondissementSectionProps {
  title: string;
  icon: LucideIcon;
  variant?: 'white' | 'gray';
  children: React.ReactNode;
}

const ArrondissementSection: React.FC<ArrondissementSectionProps> = ({
  title,
  icon: Icon,
  variant = 'white',
  children,
}) => {
  const containerClasses =
    variant === 'gray'
      ? 'bg-gray-50 p-8 rounded-2xl'
      : 'bg-white p-8 rounded-2xl shadow-sm border border-gray-100';

  return (
    <section className="mb-16">
      <div className={containerClasses}>
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center">
            <Icon className="w-6 h-6 text-black" />
          </div>
          <h2 className="text-3xl font-bold text-black">{title}</h2>
        </div>
        <div className="text-gray-700 text-lg leading-relaxed space-y-6">{children}</div>
      </div>
    </section>
  );
};

export default ArrondissementSection;

