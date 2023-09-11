import React from 'react';
import { Col } from 'react-bootstrap';
import { Container } from '../styles';
import { CartContext } from '@contexts';

const Sumary: React.FC = () => {
  const context = React.useContext(CartContext);

  const cartTotal = context?.getCartTotal() || 0;
  const cartItemCount = context?.cartItems.length || 0;

  return (
    <>
      <Container className="values-payment p-2">
        <Col>
          <h3>Resumo do Pedido</h3>
        </Col>

        <Col className="d-flex justify-content-between">
          <p>Produtos selecionados</p>
          <p>{cartItemCount}</p>
        </Col>

        <Col className="d-flex justify-content-between">
          <p>Frete</p>
          <p>
            <strong>Combinar no Whatsapp</strong>
          </p>
        </Col>

        <Col className="d-flex justify-content-between">
          <h3>Total</h3>
          <h3>
            <strong>R$ {cartTotal}</strong>
          </h3>
        </Col>
      </Container>
    </>
  );
};

export default Sumary;
