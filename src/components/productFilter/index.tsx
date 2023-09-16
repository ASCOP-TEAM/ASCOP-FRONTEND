import { Product, ProductData } from '@interfaces';
import React from 'react';
import { Form } from 'react-bootstrap';
import { Container } from './styles';
import { filterProductsByPriceAndCategory } from '@utils';

interface RageValueProps {
  produtos: Product;
  categoryid: number;
  onFilterChange: (upperValue: number) => void;
  handleFilteredProducts: (filterProduct: ProductData[]) => void;
}

const ProductFilter: React.FC<RageValueProps> = ({
  produtos,
  categoryid,
  onFilterChange,
  handleFilteredProducts,
}) => {
  const [upperValue, setUpperValue] = React.useState<number>(100);
  const [maxPrice, setMaxPrice] = React.useState<number>(100);
  const [minPrice, setMinPrice] = React.useState<number>(0);

  const handleUpperChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event) {
      const value = Math.min(100, Math.max(1, +event.target.value));
      setUpperValue(value);
      onFilterChange(value);

      const filteredProducts = filterProductsByPriceAndCategory(
        produtos,
        value,
        categoryid,
      );
      handleFilteredProducts(filteredProducts || []);
    }
  };

  React.useEffect(() => {
    if (produtos && produtos.data) {
      const prices = produtos.data.map((produto) => produto.attributes.price);
      const minPrice = Math.min(...prices);
      const maxPrice = Math.max(...prices);

      setMinPrice(minPrice);
      setMaxPrice(maxPrice);
    }
  }, [produtos]);

  return (
    <>
      <Container>
        <div>
          <h5>R${minPrice || 0} </h5>
        </div>
        <strong>
          <h5>-</h5>
        </strong>
        <div>
          <h5>R${upperValue || 0}</h5>
        </div>
        <Form.Range
          min={minPrice || 0}
          max={maxPrice || 100}
          value={upperValue}
          onChange={handleUpperChange}
        />
      </Container>
    </>
  );
};

export default ProductFilter;
