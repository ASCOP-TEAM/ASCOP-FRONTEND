import React from 'react';
import { Col } from 'react-bootstrap';
import { SwiperSlide } from 'swiper/react';
import { CardLoja, List } from '@components';
import { ProductData } from '@interfaces';

interface ProductListProps {
  produtos: ProductData[];
  highlight?: boolean;
  handleAddToCart: (produto: ProductData) => void;
  title: string;
}

export const ProductList = ({
  produtos,
  handleAddToCart,
  title,
  highlight = false,
}: ProductListProps) => {
  const maxProductsPerList = 10;

  const productLists: ProductData[][] = [];
  let start = 0;

  while (start < produtos.length) {
    const productList: ProductData[] = produtos.slice(
      start,
      start + maxProductsPerList,
    );

    productLists.push(productList);

    start += maxProductsPerList;
  }

  const filteredProdutos = produtos.filter((item) =>
    highlight ? item.attributes.highlight : true,
  );

  return (
    <>
      {filteredProdutos.length ? (
        <div className="main-card my-3">
          <Col xs={'auto'} className="my-2">
            <h2>{title}</h2>
          </Col>
          <List>
            {filteredProdutos
              .filter((item) => (highlight ? item.attributes.highlight : item))
              .map((produto) => (
                <SwiperSlide
                  key={produto.id}
                  className="justify-content-center"
                >
                  <CardLoja
                    key={produto.id}
                    produto={produto}
                    onAddToCart={handleAddToCart}
                  />
                </SwiperSlide>
              ))}
          </List>
        </div>
      ) : null}
    </>
  );
};
