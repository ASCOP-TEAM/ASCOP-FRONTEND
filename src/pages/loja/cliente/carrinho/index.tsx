import React from 'react';
import { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import type { NextPage } from 'next';
import { CartContext } from '@contexts';
import { Section } from '@styles/pages/loja/cliente/carrinho';
import { CartItems, CartTotal, Alert } from '@components';
import { useRouter } from 'next/router';

const Carrinho: NextPage = () => {
  const context = useContext(CartContext);
  const router = useRouter();

  const [showAlert, setShowAlert] = React.useState<boolean>(false);

  React.useEffect(() => {
    const storedCartItems: string | null = localStorage.getItem('cartItems');
    if (!storedCartItems) {
      if (context?.cartItems.length === 0) {
        setShowAlert(true);
        setTimeout(() => {
          router.push('/loja');
        }, 2000);
      }
    }
  }, [context?.cartItems, router]);

  return (
    <>
      <>
        <Section>
          <Container>
            <Row className="justify-content-around">
              <Col xs={12} lg={6}>
                <Col xs={12}>
                  <h2>Carrinho:</h2>
                  <p>
                    Confirme os produtos e tamanhos para finalizar a compra.
                  </p>
                </Col>
                <ul className="list-products ">
                  {context?.cartItems.map((product) => (
                    <CartItems key={product.id} {...{ product }} />
                  ))}
                </ul>
              </Col>

              <Col xs={12} lg={5} className="info-conatiner d-none d-lg-block">
                <CartTotal />
              </Col>
            </Row>
          </Container>

          <Col xs={12} lg={5} className="info-conatiner my-3 d-lg-none">
            <CartTotal />
          </Col>
        </Section>

        {!context && <p>Erro ao obter os dados do carrinho</p>}
      </>

      {showAlert && (
        <Alert
          show={showAlert}
          onClose={() => setShowAlert(false)}
          message={'Carrinho vazio, redirecionando ...'}
          type={'error'}
        />
      )}
    </>
  );
};

export default Carrinho;
