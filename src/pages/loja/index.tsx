import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/router';

import type { GetServerSideProps, NextPage } from 'next';

import {
  BarCategorys,
  ProductFilter,
  TopBlockSection,
  CartView,
  ProductList,
  ProductDefault,
  DataNotLoaded,
  PaginationPage,
} from '@components';

import Layout from '@layout';
import { CartContext } from '@contexts';
import { BASEURL, hasUniqueVariations } from '@utils';
import { Category, ILoja, Product, ProductData, Variante } from '@interfaces';

interface LojaProps {
  produtos: Product;
  categorias: Category;
  lojaData: ILoja | null;
}

const Loja: NextPage<LojaProps> = ({ produtos, categorias, lojaData }) => {
  const router = useRouter();
  const context = useContext(CartContext);

  const [category, setCategory] = React.useState<number>(0);
  const [upperValue, setUpperValue] = React.useState<number>(100);
  const [currentPage, setCurrentPage] = React.useState(1);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    router.replace(
      {
        pathname: router.pathname,
        query: { ...router.query, page: newPage },
      },
      undefined,
    );
  };

  function filterVariantsByAvailability(variantes: Variante[]) {
    return variantes.filter((item) => item.disponivel === true);
  }

  const [FilteredProducts, setFilteredProducts] = React.useState<ProductData[]>(
    produtos?.data
      ? produtos.data.map((produto) => ({
          ...produto,
          attributes: {
            ...produto.attributes,
            variantes: filterVariantsByAvailability(
              produto.attributes.variantes,
            ),
          },
        }))
      : [],
  );

  const handleAddToCart = (produtoData: ProductData) => {
    const isProductInCart = context?.cartItems.find(
      (item) => item.item.id === produtoData.id,
    );

    const isValidProduct = hasUniqueVariations(produtoData);

    if (!isValidProduct) {
      const param = encodeURIComponent(JSON.stringify(produtoData));
      router.push(`/loja/product/${produtoData.id}?produto=${param}`);
      return;
    }

    if (isProductInCart) {
      context?.removeFromCart(isProductInCart);
      return;
    } else {
      const size =
        produtoData.attributes?.variantes[0]?.tamanhos.data.attributes.tamanho;
      const color =
        produtoData.attributes?.colors_imgs[0]?.color_name.data.attributes.cor;
      context?.addToCart({
        id: uuidv4(),
        item: produtoData,
        price: produtoData.attributes.price,
        quantity: 1,
        size: size,
        color: color,
      });
      return;
    }
  };

  const topblocksection = lojaData?.data.attributes.topblocksection;

  const backgroudBlockSection =
    topblocksection?.background?.data?.attributes?.url || '/backgroud.jpg';

  return (
    <>
      <Layout bgColor="white" txColor={'black'} title="Loja">
        {topblocksection && backgroudBlockSection && (
          <TopBlockSection.Root imageUrl={backgroudBlockSection}>
            <TopBlockSection.Title title={topblocksection.titulo} />
            <TopBlockSection.Paragrap paragrap={topblocksection.descricao} />
          </TopBlockSection.Root>
        )}

        <Container>
          <section>
            <div className="categorias">
              <Row className="align-items-center justify-content-between">
                <BarCategorys
                  {...{ categorias }}
                  {...{ produtos }}
                  rageFilter={upperValue}
                  setCatgory={setCategory}
                  handleFilteredProducts={setFilteredProducts}
                />
                <Row className="col-auto align-items-center">
                  <Col xs={'auto'} className="d-none d-lg-block">
                    <ProductFilter
                      {...{ produtos }}
                      categoryid={category}
                      onFilterChange={setUpperValue}
                      handleFilteredProducts={setFilteredProducts}
                    />
                  </Col>

                  <CartView />
                </Row>
                <Col xs={12} className="d-lg-none">
                  <ProductFilter
                    {...{ produtos }}
                    categoryid={category}
                    onFilterChange={setUpperValue}
                    handleFilteredProducts={setFilteredProducts}
                  />
                </Col>
              </Row>
            </div>

            {FilteredProducts !== null &&
              (FilteredProducts.length > 0 ? (
                <>
                  {category === 0 && (
                    <ProductList
                      produtos={FilteredProducts}
                      handleAddToCart={handleAddToCart}
                      title="Produtos em Destaque"
                      highlight
                    />
                  )}
                  <ProductList
                    produtos={FilteredProducts}
                    handleAddToCart={handleAddToCart}
                    title="Todos os Produtos"
                  />

                  {produtos.meta.pagination.pageCount > 1 && (
                    <div className="my-4">
                      <PaginationPage
                        currentPage={currentPage}
                        dataPage={produtos}
                        handlePageChange={handlePageChange}
                      />
                    </div>
                  )}
                </>
              ) : (
                <ProductDefault
                  categorias={categorias}
                  categoryid={category}
                  upperValue={upperValue}
                />
              ))}

            {!FilteredProducts && <DataNotLoaded />}
          </section>
        </Container>
      </Layout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<LojaProps> = async (
  context,
) => {
  try {
    if (!BASEURL) {
      console.error(
        'A api não está definida corretamente nas variaveis de ambiente. - loja',
      );
      return {
        redirect: {
          destination: '/505',
          permanent: false,
        },
      };
    }

    const pageNumber = context.query.page || 1;

    const [resProducts, resCategorys, reslojaData] = await Promise.all([
      fetch(
        `${BASEURL}/api/produtos/?populate[thumbnail][populate]=*&populate[gallery][populate]=*&populate[variantes][populate]=*&populate[colors_imgs][populate]=*&populate[categoria]populate=*&pagination[page]=${pageNumber}`,
      ),
      fetch(`${BASEURL}/api/categorias`),
      fetch(`${BASEURL}/api/loja?populate[topblocksection][populate]=*`),
    ]);

    if (reslojaData.status != 200) {
      console.error(
        'Erro ao buscar dados da API - page loja:',
        reslojaData.statusText,
      );

      return {
        redirect: {
          destination: '/505',
          permanent: false,
        },
      };
    }

    const [repoProducts, repoCategorys, lojaData] = await Promise.all([
      resProducts.json(),
      resCategorys.json(),
      reslojaData.json(),
    ]);

    if (!lojaData || !lojaData.data || !lojaData.data.attributes) {
      console.error('Dados da API estão ausentes ou vazios.');

      return {
        redirect: {
          destination: '/505',
          permanent: false,
        },
      };
    }

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
        categorias: [],
        lojaData: null,
      },
    };
  }
};

export default Loja;
