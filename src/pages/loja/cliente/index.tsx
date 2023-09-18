import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import type { NextPage } from 'next';
import { Section } from '@styles/pages/loja/cliente';

import { Payment, CheckoutForm, Alert } from '@components';
import { useScreenWidth } from '@utils';
import { CartContext } from '@contexts';
import { useRouter } from 'next/router';

interface IEndereco {
  address: string;
  city: string;
  state: string;
}

interface ICompletion extends IEndereco {
  name: string;
  lastname: string;

  email: string;
  phone: string;

  cep: string;
  number: string;
  complement: string;
}

const Carrinho: NextPage = () => {
  const [showCheckout, setShowCheckout] = React.useState(false);
  const [formData, setFormData] = React.useState<ICompletion | null>(null);
  const context = React.useContext(CartContext);
  const router = useRouter();
  const [showAlert, setShowAlert] = React.useState<boolean>(false);

  const width = useScreenWidth();

  const handleFormSubmit = (data: ICompletion) => {
    setShowCheckout(true);
    setFormData(data);
  };

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
            <Row className="justify-content-between">
              <Col xs={12} lg={6} className={`container-form `}>
                <>
                  <div className="title">
                    <h3>Prencha os dados adicionais</h3>
                    <p>
                      Preencha seus dados para que possamos enviar a sua
                      encomenda.
                    </p>
                  </div>

                  <CheckoutForm onSubmit={handleFormSubmit} />
                </>
              </Col>

              <Col
                xs={12}
                lg={5}
                className={`container-checkout d-none d-lg-block`}
              >
                {width > 986 && (
                  <Payment
                    formData={formData}
                    checkoutType={'WhatsApp'}
                    disableButton={!showCheckout}
                  />
                )}
              </Col>
            </Row>
          </Container>
          {showCheckout && width < 986 && (
            <Col xs={12} lg={5} className={`container-checkout d-lg-none`}>
              <Payment
                formData={formData}
                checkoutType={'WhatsApp'}
                disableButton={!showCheckout}
              />
            </Col>
          )}
        </Section>
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
