import React from 'react';
import { ProductData } from '@interfaces';
import Image from 'next/image';
import { Carousel, Col } from 'react-bootstrap';
import { Container } from './style';

interface ProductViewProps {
  produto: ProductData;
}

export const ProductView: React.FC<ProductViewProps> = ({ produto }) => {
  const [currentImage, setCurrentImage] = React.useState<string>('');

  const handleThumbnailHover = (imageurl: string) => {
    setCurrentImage(imageurl);
  };

  return (
    <>
      <>
        <Container className="d-none d-lg-flex flex-row-reverse" xs={'auto'}>
          <Col
            className="thumbnail-container d-flex flex-column justify-content-center align-items-center"
            xs={12}
          >
            <Image
              width={350}
              height={350}
              src={
                currentImage ||
                produto?.attributes?.thumbnail?.data?.attributes?.url ||
                ''
              }
              alt={'foto:' + (produto?.attributes?.title || '')}
            />
          </Col>

          <div className="galery-list-container">
            <ul className="d-flex flex-column align-items-center">
              {(produto?.attributes?.gallery?.data || []).map((image) => (
                <li
                  key={image.id}
                  onMouseEnter={() =>
                    handleThumbnailHover(image.attributes?.url || '')
                  }
                  onClick={() =>
                    handleThumbnailHover(image.attributes?.url || '')
                  }
                  onMouseLeave={() =>
                    setCurrentImage(
                      produto?.attributes?.thumbnail?.data?.attributes?.url ||
                        '',
                    )
                  }
                  className="galery"
                >
                  <Image
                    width={60}
                    height={60}
                    src={image.attributes?.formats?.small?.url || ''}
                    alt={'foto:' + (image.attributes?.name || '')}
                  />
                </li>
              ))}

              {(produto?.attributes?.colors_imgs || []).map((image) => (
                <li
                  key={image.id}
                  onMouseEnter={() =>
                    handleThumbnailHover(
                      image.img_color?.data?.attributes?.url || '',
                    )
                  }
                  onClick={() =>
                    handleThumbnailHover(
                      image.img_color?.data?.attributes?.url || '',
                    )
                  }
                  onMouseLeave={() =>
                    setCurrentImage(
                      produto?.attributes?.thumbnail?.data?.attributes?.url ||
                        '',
                    )
                  }
                  className="galery"
                >
                  <Image
                    width={60}
                    height={60}
                    src={
                      image.img_color?.data?.attributes?.formats?.small?.url ||
                      ''
                    }
                    alt={'foto:' + (image.color_name || '')}
                  />
                </li>
              ))}
            </ul>
          </div>
        </Container>

        {/*  mobile view */}
        <Col
          xs={12}
          className="d-flex justify-content-center align-items-center d-lg-none"
        >
          <Carousel data-bs-theme="dark">
            {produto?.attributes?.thumbnail?.data ? (
              <Carousel.Item key={produto.id}>
                <Image
                  width={350}
                  height={350}
                  src={produto.attributes.thumbnail.data.attributes.url}
                  alt={`foto: ${produto.attributes.title}`}
                />
              </Carousel.Item>
            ) : null}

            {produto?.attributes?.gallery?.data?.map((image) => (
              <Carousel.Item key={image.id}>
                <Image
                  width={350}
                  height={350}
                  src={image.attributes.url}
                  alt={`foto: ${image.attributes.name}`}
                />
              </Carousel.Item>
            ))}

            {produto?.attributes?.colors_imgs?.map((image) => (
              <Carousel.Item key={image.id}>
                <Image
                  width={350}
                  height={350}
                  src={
                    image.img_color?.data?.attributes?.url ||
                    'URL_DA_IMAGEM_PADRÃO_AQUI'
                  }
                  alt={`foto: ${image.color_name}`}
                />
              </Carousel.Item>
            ))}

            {!produto?.attributes?.thumbnail?.data &&
              !produto?.attributes?.gallery?.data &&
              !produto?.attributes?.colors_imgs && (
                <Carousel.Item>
                  <p>Nenhuma imagem disponível</p>
                </Carousel.Item>
              )}
          </Carousel>
        </Col>
      </>
    </>
  );
};
