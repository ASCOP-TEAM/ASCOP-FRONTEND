import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Check } from 'lucide-react';
import { Button } from './styles';
import { useRouter } from 'next/router';

const ApprovedPaymentScreen = () => {
  const router = useRouter();

  return (
    <>
      <Row className="flex-column justify-content-center align-items-center  gap-3">
        <Col className="my-2 d-flex align-items-center" md={12}>
          <h1>Obrigado!</h1>
        </Col>
        <div className="d-flex justify-content-center align-items-center gap-2">
          <div>
            <Check color="#42ff60" />
          </div>
          <div>
            <h3>Pagamento Aprovado!</h3>
          </div>
        </div>
        <Col md={8}>
          <p>
            Obrigado por comprar na ASCOP, você está apoiando diretamente nossos
            projetos e iniciativas de impacto social. Cada compra contribui para
            causar um impacto positivo nas vidas das pessoas e comunidades que
            atendemos.
          </p>
        </Col>
        <Col md={4} className="my-2">
          <Button onClick={() => router.push('/loja')}>Voltar A Loja</Button>
        </Col>
      </Row>
    </>
  );
};

export default ApprovedPaymentScreen;
