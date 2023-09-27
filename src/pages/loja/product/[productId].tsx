import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useRouter } from 'next/router';

import type { NextPage } from 'next';

import { ProductData } from '@interfaces';
import { CartView, DataNotLoaded, ProducInfo, ProductView } from '@components';

import { Section } from '@styles/pages/loja/product';

const Producto: NextPage = () => {
  const router = useRouter();

  const { produto } = router.query;

  const [produtos, setProdutos] = React.useState<ProductData[]>([]);

  React.useEffect(() => {
    if (typeof produto == 'string') {
      const parsedProduct = JSON.parse(produto);
      setProdutos([parsedProduct]);
    }
  }, [produto]);

  return (
    <>
      <Container>
        <Section>
          <Row className="bar">
            <Col className="voltar">
              <button onClick={() => router.push('/loja')}>Voltar</button>
            </Col>
            <CartView />
          </Row>

          {produtos.length > 0 && produtos[0]?.attributes && produtos && (
            <Row className="my-4 justify-content-around">
              <Col className="product-imgens" xs={12} lg={5} md={6}>
                <ProductView {...{ produto: produtos[0] }} />
              </Col>
              <Col className="prodoct-infos" xs={12} lg={5} md={6}>
                <ProducInfo {...{ produto: produtos[0] }} />
              </Col>
            </Row>
          )}

          {!produtos.length && !produtos[0]?.attributes && !produtos && (
            <DataNotLoaded />
          )}
        </Section>
      </Container>
    </>
  );
};

export default Producto;
