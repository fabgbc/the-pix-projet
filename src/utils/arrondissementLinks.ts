export interface ArrondissementHandlers {
  onParis1Page?: () => void;
  onParis2Page?: () => void;
  onParis3Page?: () => void;
  onParis4Page?: () => void;
  onParis5Page?: () => void;
  onParis6Page?: () => void;
  onParis7Page?: () => void;
  onParis8Page?: () => void;
  onParis9Page?: () => void;
}

const ARRONDISSEMENTS = [
  { key: 'paris1', label: 'Location photobooth Paris 1', handler: 'onParis1Page' },
  { key: 'paris2', label: 'Location photobooth Paris 2', handler: 'onParis2Page' },
  { key: 'paris3', label: 'Location photobooth Paris 3', handler: 'onParis3Page' },
  { key: 'paris4', label: 'Location photobooth Paris 4', handler: 'onParis4Page' },
  { key: 'paris5', label: 'Location photobooth Paris 5', handler: 'onParis5Page' },
  { key: 'paris6', label: 'Location photobooth Paris 6', handler: 'onParis6Page' },
  { key: 'paris7', label: 'Location photobooth Paris 7', handler: 'onParis7Page' },
  { key: 'paris8', label: 'Location photobooth Paris 8', handler: 'onParis8Page' },
  { key: 'paris9', label: 'Location photobooth Paris 9', handler: 'onParis9Page' },
];

export function getArrondissementLinks(
  current: string,
  handlers: ArrondissementHandlers
) {
  return ARRONDISSEMENTS.filter(a => a.key !== current).map(a => ({
    label: a.label,
    onClick: handlers[a.handler as keyof ArrondissementHandlers] || (() => {}),
  }));
}
