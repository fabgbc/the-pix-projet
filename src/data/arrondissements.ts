export interface ArrondissementInfo {
  label: string;
  slug: string;
}

export const ARRONDISSEMENTS: ArrondissementInfo[] = Array.from({ length: 20 }, (_, index) => {
  const number = index + 1;
  return {
    label: `Location photobooth Paris ${number}`,
    slug: `/location-photobooth-paris-${number}`,
  };
});

