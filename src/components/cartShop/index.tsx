/* eslint-disable react/no-unescaped-entities */
import { Col, Offcanvas, Row } from 'react-bootstrap';
import React from 'react';
import Image from 'next/image';
import { Minus, Plus, ShoppingCart } from 'lucide-react';

import { CartContext } from '@contexts';
import { Button } from '@components';
import { Cart, Container } from './styles';

const CartShop: React.FC = () => {
  const [isCartOpen, setCartOpen] = React.useState(false);
  const context = React.useContext(CartContext);

  const handleCartToggle = () => {
    setCartOpen(!isCartOpen);
  };

  return (
    <>
      <Cart onClick={handleCartToggle} xs={'auto'}>
        <span className="accout">{context?.cartItems.length}</span>
        <div className="icon-cart">
          <ShoppingCart />
        </div>
      </Cart>

      <Offcanvas show={isCartOpen} onHide={handleCartToggle} placement={'end'}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <h3>Carrinho</h3>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Container xs={12}>
            <Row className="flex-column justify-content-between h-100">
              <Col xs={12}>
                <p>
                  Escolheu seus produtos? Clique em "Finalizar" para ir ao
                  checkout.
                </p>
              </Col>

              <Col xs={12}>
                <ul className="product-list">
                  {context?.cartItems.map((product) => (
                    <li key={product.item.id} className="product d-flex ">
                      <div className="img-product ">
                        <Image
                          width={100}
                          height={100}
                          src={
                            product.item.attributes.thumbnail.data.attributes
                              .url
                          }
                          alt="produto ASCOP"
                        />
                      </div>
                      <div className="info-product">
                        <div className="title">
                          <h4>{product.item.attributes.title}</h4>
                        </div>
                        <div className="price">
                          <h4>
                            R$ <strong>{product.item.attributes.price} </strong>
                          </h4>
                        </div>
                        <div className="sizes">
                          <p>
                            tamanho:{' '}
                            {product.size != null
                              ? product.size
                              : product.item.attributes.sizes.length > 1
                              ? 'N/I'
                              : 'UNICO'}
                          </p>
                        </div>
                        <div className="action-product d-flex justify-content-between align-items-center">
                          <button
                            onClick={() => context.removeFromCart(product)}
                          >
                            <Minus />
                          </button>

                          <h5>{product.quantity}</h5>
                          <button onClick={() => context.addToCart(product)}>
                            <Plus />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </Col>

              <Col xs={12}>
                <div className="valototal">
                  <div className="d-flex justify-content-between my-2">
                    <div>
                      <h3>Valor total:</h3>
                    </div>
                    <div>
                      <h3>R$ {context?.getCartTotal()}</h3>
                    </div>
                  </div>

                  <div className="finalizar">
                    <Button
                      className="w-100"
                      text="Finalizar Compra"
                      theme={false}
                    ></Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default CartShop;
