import { Product } from '@interfaces';

export function filterProductsByPriceAndCategory(
  products: Product,
  upperValue: number,
  categoryId: number,
) {
  if (!products || !products?.data) {
    return null;
  }

  const FilterProducts = products.data.filter((produto) =>
    produto.attributes.variantes.some((item) => item.disponivel),
  );

  return FilterProducts.filter((produto) => {
    const isCategoryMatch =
      categoryId === 0 ||
      (produto.attributes.categoria != null &&
        produto.attributes.categoria.data.id === categoryId);

    const isPriceMatch =
      produto.attributes.price < 50 ||
      (produto.attributes.price >= 50 &&
        produto.attributes.price <= upperValue);

    return isCategoryMatch && isPriceMatch;
  });
}
