import React from 'react';
import { useRouter } from '../router';

type NavigationItem = {
  path: NavigationPath;
  label: string;
  isPrimary?: boolean;
};

export type NavigationPath =
  | '/'
  | '/services'
  | '/location-photobooth-paris'
  | '/photobooth-evenement-paris'
  | '/animations-photobooth-ia'
  | '/galerie-photobooth-paris'
  | '/devis-photobooth-gratuit';

const NAVIGATION_ITEMS: readonly NavigationItem[] = [
  { path: '/', label: 'Accueil' },
  { path: '/services', label: 'Services' },
  { path: '/location-photobooth-paris', label: 'Photobooth sur mesure' },
  { path: '/photobooth-evenement-paris', label: 'Événements Privés' },
  { path: '/animations-photobooth-ia', label: 'Animations IA' },
  { path: '/galerie-photobooth-paris', label: 'Galerie' },
  { path: '/devis-photobooth-gratuit', label: 'Devis Gratuit', isPrimary: true },
];

export type NavigationCallbacks = Partial<Record<NavigationPath, () => void>>;

export interface NavigationMenuProps extends React.HTMLAttributes<HTMLElement> {
  layout?: 'horizontal' | 'vertical';
  onNavigate?: NavigationCallbacks;
  onItemClick?: () => void;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({
  layout = 'horizontal',
  className = '',
  onNavigate,
  onItemClick,
  ...rest
}) => {
  const { path: currentPath, navigate } = useRouter();

  const containerClassName = [
    layout === 'vertical' ? 'flex flex-col space-y-4' : 'flex items-center space-x-8',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <nav className={containerClassName} {...rest}>
      {NAVIGATION_ITEMS.map(item => {
        const isActive = currentPath === item.path;
        const baseClassName = item.isPrimary
          ? layout === 'vertical'
            ? 'bg-yellow-400 text-black px-6 py-3 rounded-full hover:bg-yellow-500 transition-colors font-semibold text-center'
            : 'bg-yellow-400 text-black px-6 py-3 rounded-full hover:bg-yellow-500 transition-colors font-semibold'
          : layout === 'vertical'
            ? 'text-left text-gray-700 hover:text-yellow-500 transition-colors font-medium'
            : 'text-gray-700 hover:text-yellow-500 transition-colors font-medium';
        const activeClassName = item.isPrimary ? 'bg-yellow-500 text-black' : 'text-yellow-500';
        const classNames = [baseClassName, isActive ? `${activeClassName} cursor-default` : undefined]
          .filter(Boolean)
          .join(' ');

        const handleClick = () => {
          if (isActive) {
            onItemClick?.();
            return;
          }

          const callback = onNavigate?.[item.path];
          if (callback) {
            callback();
          } else {
            navigate(item.path);
          }

          onItemClick?.();
        };

        return (
          <button
            key={item.path}
            type="button"
            onClick={handleClick}
            className={classNames}
            aria-current={isActive ? 'page' : undefined}
          >
            {item.label}
          </button>
        );
      })}
    </nav>
  );
};

export default NavigationMenu;
