import { Product } from '@interfaces';
import React from 'react';
import { Form } from 'react-bootstrap';
import { Container } from './styles';

interface RageValueProps {
  produtos: Product;
  onFilterChange: (upperValue: number) => void;
}

const ProductFilter: React.FC<RageValueProps> = ({
  produtos,
  onFilterChange,
}) => {
  const [upperValue, setUpperValue] = React.useState<number>(100);

  const handleUpperChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event) {
      const value = Math.min(100, Math.max(1, +event.target.value));
      setUpperValue(value);
      onFilterChange(value);
    }
  };

  const minPrice = Math.min(
    ...produtos.data.map((produto) => produto.attributes.price),
  );
  const maxPrice = Math.max(
    ...produtos.data.map((produto) => produto.attributes.price),
  );

  console.log(produtos);

  return (
    <>
      <Container>
        <div>
          <h5>R${minPrice} </h5>
        </div>
        <strong>
          <h5>-</h5>
        </strong>
        <div>
          <h5>R${upperValue}</h5>
        </div>
        <Form.Range
          min={minPrice}
          max={maxPrice}
          value={upperValue}
          onChange={handleUpperChange}
        />
      </Container>
    </>
  );
};

export default ProductFilter;
