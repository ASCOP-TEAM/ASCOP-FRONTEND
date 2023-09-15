import React from 'react';
import Image from 'next/image';
import { Row } from 'react-bootstrap';
import { Plus } from 'lucide-react';
import { useRouter } from 'next/router';

import { ProductData } from '@interfaces';
import { Button, HeartCardShop, ColorIcon } from '@components';
import { Container } from './styles';
import { filterUniqueSizesAndColors, stringToHexColor } from '@utils';

interface CardLojaProps {
  produto: ProductData;
  onAddToCart: (produto: ProductData) => void;
}

const CardLoja: React.FC<CardLojaProps> = ({ produto, onAddToCart }) => {
  const [uniqueSizes, setUniqueSizes] = React.useState<string[]>([]);
  const [uniqueColors, setUniqueColors] = React.useState<string[]>([]);
  const router = useRouter();

  const handleBuyClick = () => {
    const param = encodeURIComponent(JSON.stringify(produto));
    router.push(`/loja/product/${produto.id}?produto=${param}`);
  };

  function lookForTheColor(colorName: string): string {
    const colorImg = produto.attributes.colors_imgs.find(
      (color) => color.color_name.cor === colorName,
    );

    if (colorImg) {
      return colorImg.color_code;
    }

    return stringToHexColor(colorName);
  }

  React.useEffect(() => {
    if (!produto.attributes.variantes) return;

    const { uniqueSizes, uniqueColors } = filterUniqueSizesAndColors(
      produto.attributes.variantes,
      (variant) => variant.size.tamanho,
      (variant) => variant.color.cor,
    );
    setUniqueSizes(uniqueSizes);
    setUniqueColors(uniqueColors);
  }, [produto]);

  return (
    <Container>
      <Row>
        <div className="cart">
          <button onClick={() => onAddToCart(produto)}>
            <HeartCardShop productId={produto.id} />
          </button>
        </div>
        <div className="thumbnail">
          {
            <Image
              width={100}
              height={100}
              src={produto.attributes.thumbnail.data.attributes.url}
              alt={'foto:' + produto.attributes.title}
            />
          }
        </div>
        <div className="title my-1">
          <h4 className="m-0"> {produto.attributes.title}</h4>
        </div>

        <div className="sizes my-1">
          {produto.attributes.variantes && (
            <ul>
              {uniqueSizes.slice(0, 4).map((size) => (
                <li key={size}>
                  <p>{size}</p>
                </li>
              ))}

              {produto.attributes.variantes.length > 4 && (
                <li>
                  <Plus className="plus" />
                </li>
              )}
            </ul>
          )}
        </div>

        <div className="colors my-1">
          {uniqueColors.length > 1 && (
            <ul>
              {uniqueColors.slice(0, 4).map((color) => (
                <li key={color}>
                  <ColorIcon
                    color={lookForTheColor(color)}
                    view="small"
                    isSelected
                  />
                </li>
              ))}

              {produto.attributes.colors_imgs?.length > 4 && (
                <li>
                  <Plus className="plus" />
                </li>
              )}
            </ul>
          )}
        </div>
        <div className="price ">
          <h5>R${produto.attributes.price}</h5>
        </div>
        <div className="submit">
          <Button
            theme={'primary'}
            text="COMPRAR"
            className="w-100"
            onClick={handleBuyClick}
          >
            COMPRAR
          </Button>
        </div>
      </Row>
    </Container>
  );
};

export default CardLoja;
