import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import type { GetServerSideProps, NextPage } from 'next';

import { Category, ILoja, Product, ProductData } from '@interfaces';
import {
  BarCategorys,
  CardLoja,
  ProductFilter,
  TopBlockSection,
  CartShop,
  List,
} from '@components';

import Layout from '@layout';
import { CartContext } from '@contexts';
import { SwiperSlide } from 'swiper/react';
import { BASEURL } from '@utils';
import { useRouter } from 'next/router';

interface LojaProps {
  produtos: Product;
  categorias: Category;
  lojaData: ILoja | null;
}

const Loja: NextPage<LojaProps> = ({ produtos, categorias, lojaData }) => {
  const [category, setCategory] = React.useState<number>(0);
  const [upperValue, setUpperValue] = React.useState<number>(100);

  const context = useContext(CartContext);

  const [FilteredProducts, setFilteredProducts] = React.useState<ProductData[]>(
    produtos?.data || null,
  );

  const handleAddToCart = (produtoData: ProductData) => {
    const isProductInCart = context?.cartItems.find(
      (item) => item.item.id === produtoData.id,
    );

    if (isProductInCart) {
      context?.removeFromCart(isProductInCart);
    } else {
      context?.addToCart({
        item: produtoData,
        price: produtoData.attributes.price,
        quantity: 1,
        size: null,
      });
    }
  };

  function filterProductsByPriceAndCategory(
    products: Product,
    upperValue: number,
    categoryId: number,
  ) {
    return products.data.filter((produto) => {
      const isCategoryMatch =
        categoryId === 0 ||
        (produto.attributes.categoria.data != null &&
          produto.attributes.categoria.data.id === categoryId);

      const isPriceMatch =
        produto.attributes.price < 50 ||
        (produto.attributes.price >= 50 &&
          produto.attributes.price <= upperValue);

      return isCategoryMatch && isPriceMatch;
    });
  }

  const handleFilterChange = (upperValue: number) => {
    setUpperValue(upperValue);
    const filteredProducts = filterProductsByPriceAndCategory(
      produtos,
      upperValue,
      category,
    );
    setFilteredProducts(filteredProducts);
  };

  function filterProductByCategory(categoryId: number) {
    setCategory(categoryId);
    const filteredByCategoryAndPrice = filterProductsByPriceAndCategory(
      produtos,
      upperValue,
      categoryId,
    );
    setFilteredProducts(filteredByCategoryAndPrice);
  }

  const topblocksection = lojaData?.data.attributes.topblocksection;

  const backgroudBlockSection = topblocksection?.background.data.attributes.url;

  const router = useRouter();

  React.useEffect(() => {
    if (!lojaData) {
      router.push('/505');
    }
  }, [lojaData, router]);

  return (
    <>
      <Layout bgColor="white" txColor={'black'} title="Loja">
        {topblocksection && backgroudBlockSection && (
          <TopBlockSection.Root
            imageUrl={backgroudBlockSection || '/backgroud.jpg'}
          >
            <TopBlockSection.Title title={topblocksection.titulo} />
            <TopBlockSection.Paragrap paragrap={topblocksection.descricao} />
          </TopBlockSection.Root>
        )}

        <Container>
          <section>
            <div className="categorias">
              {produtos && categorias && (
                <Row className="align-items-center justify-content-between">
                  <BarCategorys
                    {...{ categorias }}
                    setCatgory={filterProductByCategory}
                  />
                  <Row className="col-auto align-items-center">
                    <Col xs={'auto'} className="d-none d-lg-block">
                      <ProductFilter
                        {...{ produtos }}
                        onFilterChange={handleFilterChange}
                      />
                    </Col>

                    <CartShop />
                  </Row>
                  <Col xs={12} className="d-lg-none">
                    <ProductFilter
                      {...{ produtos }}
                      onFilterChange={handleFilterChange}
                    />
                  </Col>
                </Row>
              )}
            </div>

            {FilteredProducts && FilteredProducts.length > 0 && (
              <div className="main-card py-4">
                {FilteredProducts.some((item) => item.attributes.highlight) && (
                  <div className="main-card">
                    <Col xs={'auto'}>
                      <h2> Produtos em Destaque</h2>
                    </Col>

                    <List>
                      {FilteredProducts.filter(
                        (item) => item.attributes.highlight,
                      ).map((produto) => (
                        <SwiperSlide key={produto.id}>
                          <CardLoja
                            key={produto.id}
                            produto={produto}
                            onAddToCart={() => handleAddToCart(produto)}
                          />
                        </SwiperSlide>
                      ))}
                    </List>
                  </div>
                )}

                <Col xs={'auto'}>
                  <h2> Todos os produtos</h2>
                </Col>
                <List>
                  {FilteredProducts.map((produto) => (
                    <SwiperSlide key={produto.id}>
                      <CardLoja
                        key={produto.id}
                        produto={produto}
                        onAddToCart={() => handleAddToCart(produto)}
                      />
                    </SwiperSlide>
                  ))}
                </List>
              </div>
            )}

            {!FilteredProducts && <p>dados não carregados</p>}
          </section>
        </Container>
      </Layout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<LojaProps> = async () => {
  try {
    if (!BASEURL) {
      throw new Error(
        'A api não está definida corretamente nas variaveis de ambiente. - loja',
      );
    }

    const [resProducts, resCategorys, reslojaData] = await Promise.all([
      fetch(`${BASEURL}/api/produtos?populate=*`),
      fetch(`${BASEURL}/api/categorias`),
      fetch(`${BASEURL}/api/loja?populate[topblocksection][populate]=*`),
    ]);

    const [repoProducts, repoCategorys, lojaData] = await Promise.all([
      resProducts.json(),
      resCategorys.json(),
      reslojaData.json(),
    ]);

    const produtos = repoProducts ? repoProducts : [];
    const categorias = repoCategorys ? repoCategorys : [];

    return {
      props: {
        produtos,
        categorias,
        lojaData,
      },
    };
  } catch (error) {
    console.error('Erro ao buscar dados da API - page loja:', error);
    return {
      props: {
        produtos: null,
        categorias: null,
        lojaData: null,
      },
    };
  }
};

export default Loja;
