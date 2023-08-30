import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { XIcon } from 'lucide-react';
import { Button } from './styles';
import { useRouter } from 'next/router';

const RejectedPaymentScreen = () => {
  const router = useRouter();

  return (
    <>
      <Row className="flex-column align-items-center gap-3">
        <Col className="my-2 d-flex align-items-center" md={12}>
          <h1>Não foi dessa vez!</h1>
        </Col>
        <div className="d-flex justify-content-center align-items-center gap-2">
          <div>
            <XIcon color="#ff0000" />
          </div>
          <div>
            <h3>Pagamento Recusado! {':('}</h3>
          </div>
        </div>
        <Col md={8}>
          <p>
            Infelizmente, não conseguimos processar o seu pagamento. Por favor,
            reveja os dados e tente novamente. Ao comprar na lojinha da ASCOP,
            você está apoiando diretamente nossos projetos e iniciativas de
            impacto social. Cada compra contribui para causar um impacto
            positivo nas vidas das pessoas e comunidades que atendemos.
          </p>
        </Col>
        <Col md={4} className="my-2">
          <Button onClick={() => router.push('/loja')}>Voltar A Loja</Button>
        </Col>
      </Row>
    </>
  );
};

export default RejectedPaymentScreen;
