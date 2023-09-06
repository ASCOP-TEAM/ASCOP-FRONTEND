/* eslint-disable react/no-unescaped-entities */
import { Col, Offcanvas, Row } from 'react-bootstrap';
import React from 'react';
import Image from 'next/image';
import { Minus, Plus, ShoppingCart } from 'lucide-react';

import { CartContext } from '@contexts';
import { Alert, Button } from '@components';
import { Cart, Container } from './styles';
import { useRouter } from 'next/router';

const CartShop: React.FC = () => {
  const router = useRouter();
  const [isCartOpen, setCartOpen] = React.useState(false);
  const context = React.useContext(CartContext);
  const [isError, setError] = React.useState<boolean>(false);

  const handleCartToggle = () => {
    setCartOpen(!isCartOpen);
  };

  const handleRedirect = () => {
    const emptyCart = context?.cartItems.length === 0;

    if (!emptyCart) {
      setError(false);
      router.push('/loja/cliente/carrinho');
    } else {
      setError(true);
    }
  };

  return (
    <>
      <Cart onClick={handleCartToggle} xs={'auto'}>
        {context && context?.cartItems.length > 0 && (
          <span className="accout">{context?.cartItems.length}</span>
        )}
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
            <Row className="flex-column flex-nowrap  h-100">
              <Col xs={12}>
                <p>
                  Escolheu seus produtos? Clique em "Finalizar" para ir ao
                  checkout.
                </p>
              </Col>

              <Col xs={12} className="p-0">
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
                            Tamanho:{' '}
                            <strong>
                              {product.size != null
                                ? product.size
                                : product.item.attributes.sizes.length === 1
                                ? product.item.attributes.sizes[0].variations
                                : 'Não Selecionado'}
                            </strong>
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
            </Row>
          </Container>
        </Offcanvas.Body>
        <div className="valototal p-2">
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
              theme={'primary'}
              onClick={handleRedirect}
              disabled={isError}
            />
          </div>
        </div>
      </Offcanvas>

      {isError && (
        <Alert
          message="O Carrinho está vazio!"
          show={isError}
          type="error"
          onClose={() => setError(false)}
        />
      )}
    </>
  );
};

export default CartShop;
