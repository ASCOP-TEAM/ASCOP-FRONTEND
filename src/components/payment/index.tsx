import React from 'react';
import { Container, Row } from 'react-bootstrap';

import { IDadosCliente } from '@interfaces';

import Sumary from './Summary';
import PaymentMethod from './PaymentMethod';

interface PaymentProps {
  formData: IDadosCliente | null;
  checkoutType: 'MercadoPago' | 'WhatsApp';
  disableButton: boolean;
}

const Payment: React.FC<PaymentProps> = ({
  checkoutType,
  disableButton,
  formData,
}) => {
  return (
    <>
      <Row className="flex-column justify-content-around m-2">
        <Container className="values-payment p-2">
          <Sumary />
          <PaymentMethod
            checkoutType={checkoutType}
            disableButton={disableButton}
            formData={formData}
          />
        </Container>
      </Row>
    </>
  );
};

export default Payment;
