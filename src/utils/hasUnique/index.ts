import { ProductData } from '@interfaces';

export const hasUniqueVariations = (product: ProductData) => {
  const hasSizeVariation = product.attributes.variantes.length === 1;
  const hasColorVariation = product.attributes.colors_imgs.length === 1;
  return hasSizeVariation || hasColorVariation;
};
