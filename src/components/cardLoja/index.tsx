import React, { useContext } from 'react';
import Image from 'next/image';
import { Row } from 'react-bootstrap';
import { Plus } from 'lucide-react';

import { ProductData } from '@interfaces';
import { ActiveLink, Button } from '@components';
import { Container } from './styles';
import { CartContext } from '@contexts';
import CustomCheckbox from '../customCheckbox';

interface CardLojaProps {
  produto: ProductData;
  onAddToCart: () => void;
}

const CardLoja: React.FC<CardLojaProps> = ({ produto, onAddToCart }) => {
  const context = useContext(CartContext); // Use o contexto do carrinho

  const isProductInCart = context?.cartItems.some(
    (item) => item.item.id === produto.id,
  );

  return (
    <Container>
      <Row>
        <div className="cart">
          <button onClick={onAddToCart}>
            {/*    <Heart className={isProductInCart ? 'isAdd' : ''} /> */}

            <CustomCheckbox
              checked={isProductInCart ? isProductInCart : false}
            />
          </button>
        </div>
        <div className="thumbnail">
          <Image
            width={100}
            height={100}
            src={produto.attributes.thumbnail.data.attributes.url}
            alt="produto ASCOP"
          />
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
          <Button theme={false} text="COMPRAR" className="w-100">
            <ActiveLink
              href={`/loja/product/${produto.id}`}
              query={`product=${encodeURIComponent(JSON.stringify(produto))}`}
            >
              COMPRAR
            </ActiveLink>
          </Button>
        </div>
      </Row>
    </Container>
  );
};

export default CardLoja;
