import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

import type { GetServerSideProps, NextPage } from 'next';

import { Category, ILoja, Product, ProductData } from '@interfaces';

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

import { BASEURL, filterProductsByPriceAndCategory } from '@utils';
import { useRouter } from 'next/router';

interface LojaProps {
  produtos: Product;
  categorias: Category;
  lojaData: ILoja | null;
}

const Loja: NextPage<LojaProps> = ({ produtos, categorias, lojaData }) => {
  const router = useRouter();

  const [category, setCategory] = React.useState<number>(0);
  const [upperValue, setUpperValue] = React.useState<number>(100);
  const [currentPage, setCurrentPage] = React.useState(1);

  const context = useContext(CartContext);

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

  const [FilteredProducts, setFilteredProducts] = React.useState<ProductData[]>(
    produtos?.data || null,
  );

  const handleFilterChange = (upperValue: number) => {
    setUpperValue(upperValue);

    const filteredProducts = filterProductsByPriceAndCategory(
      produtos,
      upperValue,
      category,
    );
    setFilteredProducts(filteredProducts || []);
  };

  function filterProductByCategory(categoryId: number) {
    setCategory(categoryId);
    const filteredByCategoryAndPrice = filterProductsByPriceAndCategory(
      produtos,
      upperValue,
      categoryId,
    );
    setFilteredProducts(filteredByCategoryAndPrice || []);
  }

  const hasValidVariations = (product: ProductData) => {
    const hasSizeVariation = product.attributes.variantes.length === 1;
    const hasColorVariation = product.attributes.colors_imgs.length === 1;
    return hasSizeVariation && hasColorVariation;
  };

  const handleAddToCart = (produtoData: ProductData) => {
    const isProductInCart = context?.cartItems.find(
      (item) => item.item.id === produtoData.id,
    );

    const isValidProduct = hasValidVariations(produtoData);

    if (!isValidProduct) {
      const param = encodeURIComponent(JSON.stringify(produtoData));
      router.push(`/loja/product/${produtoData.id}?produto=${param}`);
    } else if (isProductInCart) {
      context?.removeFromCart(isProductInCart);
    } else {
      const size = produtoData.attributes.variantes[0].size.tamanho;
      const color = produtoData.attributes.colors_imgs[0].color_name.cor;
      context?.addToCart({
        id: uuidv4(),
        item: produtoData,
        price: produtoData.attributes.price,
        quantity: 1,
        size: size,
        color: color,
      });
    }
  };

  const topblocksection = lojaData?.data.attributes.topblocksection;

  const backgroudBlockSection = topblocksection?.background.data.attributes.url;

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

                  <CartView />
                </Row>
                <Col xs={12} className="d-lg-none">
                  <ProductFilter
                    {...{ produtos }}
                    onFilterChange={handleFilterChange}
                  />
                </Col>
              </Row>
            </div>

            {FilteredProducts !== null &&
              (FilteredProducts.length > 0 ? (
                <>
                  <div>
                    <ProductList
                      produtos={FilteredProducts}
                      handleAddToCart={handleAddToCart}
                      title="Produtos em Destaque"
                      highlight
                    />
                    <ProductList
                      produtos={FilteredProducts}
                      handleAddToCart={handleAddToCart}
                      title="Todos os Produtos"
                    />
                  </div>
                  <div>
                    <div className="my-4">
                      <PaginationPage
                        currentPage={currentPage}
                        dataPage={produtos}
                        handlePageChange={handlePageChange}
                      />
                    </div>
                  </div>
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
      throw new Error(
        'A api não está definida corretamente nas variaveis de ambiente. - loja',
      );
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
