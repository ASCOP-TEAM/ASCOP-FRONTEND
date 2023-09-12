import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

import type { GetServerSideProps, NextPage } from 'next';

import { Category, ILoja, Product, ProductData } from '@interfaces';

import {
  BarCategorys,
  CardLoja,
  ProductFilter,
  TopBlockSection,
  CartView,
  List,
  ErrorDataNotLoaded,
} from '@components';

import Layout from '@layout';
import { CartContext } from '@contexts';
import { SwiperSlide } from 'swiper/react';
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

  const context = useContext(CartContext);

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

  React.useEffect(() => {
    if (!lojaData) {
      router.push('/505');
    }
  }, [lojaData, router]);

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
                <div className="main-card py-4">
                  {FilteredProducts.some(
                    (item) => item.attributes.highlight,
                  ) && (
                    <div className="main-card my-3">
                      <Col xs={'auto'}>
                        <h2> Produtos em Destaque</h2>
                      </Col>

                      <List>
                        {FilteredProducts.filter(
                          (item) => item.attributes.highlight,
                        ).map((produto) => (
                          <SwiperSlide
                            key={produto.id}
                            className="justify-content-center"
                          >
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

                  <Col xs={'auto'} className="my-3">
                    <h2> Todos os produtos</h2>
                  </Col>
                  <List>
                    {FilteredProducts.map((produto) => (
                      <SwiperSlide
                        key={produto.id}
                        className="justify-content-center"
                      >
                        <CardLoja
                          key={produto.id}
                          produto={produto}
                          onAddToCart={() => handleAddToCart(produto)}
                        />
                      </SwiperSlide>
                    ))}
                  </List>
                </div>
              ) : (
                <ErrorDataNotLoaded.Root>
                  <ErrorDataNotLoaded.Title>
                    <h2 className="m-0">Produto não encontrado</h2>
                  </ErrorDataNotLoaded.Title>
                  <ErrorDataNotLoaded.Content>
                    <p>
                      Não encontramos produtos na categoria{' '}
                      <strong>
                        {categorias &&
                          categorias.data.map(
                            (cat) => cat.id === category && cat.attributes.name,
                          )}{' '}
                      </strong>
                      com valores abaixo de
                      <strong> R${upperValue}</strong>. Verifique se há produtos
                      disponíveis para essa categoria com um valor superiore a
                      R${upperValue}.
                    </p>
                  </ErrorDataNotLoaded.Content>
                </ErrorDataNotLoaded.Root>
              ))}

            {!FilteredProducts && (
              <ErrorDataNotLoaded.Root>
                <ErrorDataNotLoaded.Title>
                  Dados não Carregados
                </ErrorDataNotLoaded.Title>
                <ErrorDataNotLoaded.Content>
                  Parece que não conseguimos carregar os dados necessários para
                  exibir esta página. Isso pode ser devido a um problema
                  temporário. Por favor, tente novamente mais tarde.
                </ErrorDataNotLoaded.Content>
              </ErrorDataNotLoaded.Root>
            )}
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
      fetch(
        `${BASEURL}/api/produtos/?populate[thumbnail][populate]=*&populate[gallery][populate]=*&populate[variantes][populate]=*&populate[colors_imgs][populate]=*&populate[categoria]populate=*`,
      ),
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
        categorias: [],
        lojaData: null,
      },
    };
  }
};

export default Loja;
