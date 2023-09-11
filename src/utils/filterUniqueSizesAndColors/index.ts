import { Variante } from '@interfaces';

export const filterUniqueSizesAndColors = (
  variantes: Variante[],
  keyExtractorSize: (variant: Variante) => string,
  keyExtractorColor: (variant: Variante) => string,
) => {
  const uniqueSizes = Array.from(new Set(variantes.map(keyExtractorSize)));
  const uniqueColors = Array.from(new Set(variantes.map(keyExtractorColor)));
  return { uniqueSizes, uniqueColors };
};
