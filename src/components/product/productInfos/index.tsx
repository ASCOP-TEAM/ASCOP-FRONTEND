import React from 'react';
import { ISizeToColors, ProductData } from '@interfaces';
import { Minus, Plus, ShoppingCart } from 'lucide-react';
import { Col, Row } from 'react-bootstrap';
import { Alert, Button } from '@components';
import { CartContext } from '@contexts';
import { useRouter } from 'next/router';
import { Container } from './style';
import ProductInfoSizes from './productSizes';
import ProductColors from './productColors';
import { v4 as uuidv4 } from 'uuid';

interface ProducInfoProps {
  produto: ProductData;
}

export const ProducInfo: React.FC<ProducInfoProps> = ({ produto }) => {
  const context = React.useContext(CartContext);
  const router = useRouter();

  const [isColors, setColors] = React.useState<string[]>([]);

  const [isSize, setSize] = React.useState<string | null>(null);
  const [isColor, setColor] = React.useState<string | null>(null);

  const [quantity, setQuantity] = React.useState<number>(1);
  const [isError, setError] = React.useState<boolean>(false);
  const [isErrorMessage, setErrorMessage] = React.useState<string>('');
  const [isSuccess, setSuccess] = React.useState<boolean>(false);

  const handleAddToCart = () => {
    if (!isSize && !isColor) {
      setError(true);
      setErrorMessage('Cor e Tamanho não Selecionados!');
      return false;
    } else if (!isSize) {
      setError(true);
      setErrorMessage('Tamanho não Selecionado!');
      return false;
    } else if (!isColor) {
      setError(true);
      setErrorMessage('Cor não Selecionada!');
      return false;
    } else {
      context?.addToCart({
        id: uuidv4(),
        item: produto,
        price: produto.attributes.price,
        quantity: quantity,
        size: isSize,
        color: isColor,
      });

      setQuantity(1);
      setSize(null);
      setColor(null);
      setColors([]);
      setError(false);
      setSuccess(true);
      return true;
    }
  };

  const handleSetColorsTosize = (setSizeInfo: ISizeToColors) => {
    setSize(null);
    setSize(setSizeInfo.tamanho);
    setColors(setSizeInfo.cores);
    setColor(null);
  };

  const handleRedirect = () => {
    if (handleAddToCart()) {
      router.push('/loja/cliente/carrinho');
    }
  };

  return (
    <Container>
      <div className="category">
        {produto.attributes.categoria && (
          <ul className="d-flex">
            <li>
              <p> Produtos </p>
            </li>
            <li>
              <p>{'>'}</p>
            </li>
            <li>
              <p>{produto.attributes.categoria.data.attributes.name}</p>
            </li>
          </ul>
        )}
      </div>
      <div className="title d-flex align-items-center justify-content-between my-2">
        <h1>{produto.attributes.title}</h1>
      </div>
      <div className="price">
        <h2>R${produto.attributes.price}</h2>
      </div>
      <div className="description">
        <p className="title">Descrição do produto:</p>
        <p className="description-content">{produto.attributes.description}</p>
      </div>

      <Col xs={'auto'} className="sizes mb-3">
        <ProductInfoSizes
          isError={isError}
          selectedSize={isSize}
          setSelectedSizeInfo={(e) => handleSetColorsTosize(e)}
          {...{ produto }}
        />
      </Col>
      <div className="colors m3-b">
        <ProductColors
          isError={isError}
          selectedSize={isSize}
          selectedColor={isColor}
          setSelectedColor={(e) => setColor(e)}
          {...{ isColors }}
        />
      </div>

      <div className="quatity my-3 d-flex flex-column">
        <div>
          <h5>Quantidade:</h5>
        </div>
        <div className="action-product d-flex justify-content-between align-items-center">
          <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>
            <Minus />
          </button>
          <div>
            <h3>{quantity}</h3>
          </div>
          <button onClick={() => setQuantity(quantity + 1)}>
            <Plus />
          </button>
        </div>
      </div>
      <Row className="buttons justify-content-around">
        <Col xs={12} lg={'auto'} md={12}>
          <Button
            className="mb-3 w-100"
            text="COMPRAR"
            onClick={handleRedirect}
            disabled={isError}
          />
        </Col>
        <Col xs={12} lg={'auto'} md={12}>
          <Button
            className="d-flex w-100 justify-content-center align-items-center gap-2 pb-2"
            text="ADICIONAR "
            onClick={handleAddToCart}
            disabled={isError}
            icon={ShoppingCart}
          />
        </Col>
      </Row>

      {isError && (
        <Alert
          message={isErrorMessage || ''}
          show={isError}
          type="error"
          onClose={() => setError(false)}
        />
      )}

      {isSuccess && (
        <Alert
          message="Produto adicionado ao carrinho com sucesso!"
          show={isSuccess}
          type="success"
          onClose={() => setSuccess(false)}
        />
      )}
    </Container>
  );
};
