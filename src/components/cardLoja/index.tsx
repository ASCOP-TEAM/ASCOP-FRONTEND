import React, { useContext } from 'react';
import Image from 'next/image';
import { Row } from 'react-bootstrap';
import { Plus } from 'lucide-react';

import { ProductData } from '@interfaces';
import { Button } from '@components';
import { Container } from './styles';
import { CartContext } from '@contexts';
import CustomCheckbox from '../customCheckbox';
import { useRouter } from 'next/router';

interface CardLojaProps {
  produto: ProductData;
  onAddToCart: () => void;
}

const CardLoja: React.FC<CardLojaProps> = ({ produto, onAddToCart }) => {
  const router = useRouter();
  const context = useContext(CartContext);

  const isProductInCart = context?.cartItems.some(
    (item) => item.item.id === produto.id,
  );

  const handleBuyClick = () => {
    const param = encodeURIComponent(JSON.stringify(produto));
    router.push(`/loja/product/${produto.id}?produto=${param}`);
  };

  return (
    <Container>
      <Row>
        <div className="cart">
          <button onClick={onAddToCart}>
            <CustomCheckbox
              checked={isProductInCart ? isProductInCart : false}
            />
          </button>
        </div>
        <div className="thumbnail">
          {
            <Image
              width={100}
              height={100}
              src={produto.attributes.thumbnail.data.attributes.url}
              alt={'foto:' + produto.attributes.title}
            />
          }
        </div>
        <div className="title">
          <h4> {produto.attributes.title}</h4>
        </div>
        <div className="price my-2">
          <div className="sizes">
            {produto.attributes.sizes && (
              <ul>
                {produto.attributes.sizes.slice(0, 4).map((size, index) => (
                  <li key={index}>
                    <p>{size.variations}</p>
                  </li>
                ))}

                {produto.attributes.sizes.length > 4 && (
                  <li>
                    <Plus className="plus" />
                  </li>
                )}
              </ul>
            )}
          </div>
          <h5>R${produto.attributes.price}</h5>
        </div>
        <div className="submit">
          <Button
            theme={false}
            text="COMPRAR"
            className="w-100"
            onClick={handleBuyClick}
          >
            COMPRAR
          </Button>
        </div>
      </Row>
    </Container>
  );
};

export default CardLoja;
