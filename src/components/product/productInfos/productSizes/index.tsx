import React from 'react';
import { CartContext } from '@contexts';
import { ISizeToColors, ProductData } from '@interfaces';
import { Form } from 'react-bootstrap';

interface ProductInfoSizesProps {
  produto: ProductData;
  isError: boolean;
  selectedSize: string | null;
  setDisableButtons: (disable: boolean) => void;
  setSelectedSizeInfo: (selectedSizeInfo: ISizeToColors) => void;
}

const ProductInfoSizes: React.FC<ProductInfoSizesProps> = ({
  produto,
  isError,
  selectedSize,
  setDisableButtons,
  setSelectedSizeInfo,
}) => {
  const context = React.useContext(CartContext);

  const [sizeToColorsMap, setSizeToColorsMap] = React.useState<ISizeToColors[]>(
    [],
  );

  function handleSizeChange(selectedSize: string) {
    const selectedSizeInfo = sizeToColorsMap.find(
      (item) => item.tamanho === selectedSize,
    );

    if (selectedSizeInfo) {
      setSelectedSizeInfo(selectedSizeInfo);
    } else if (sizeToColorsMap.length === 1) {
      setSelectedSizeInfo(sizeToColorsMap[0]);
    }
  }

  React.useEffect(() => {
    if (!produto) return;

    const newMap: ISizeToColors[] = [];

    [produto].forEach((product: ProductData) => {
      product.attributes.variantes.forEach((variante) => {
        const tamanho = variante.tamanhos.data.attributes.tamanho || null;
        const color = variante.cores.data.attributes || null;

        if (tamanho && color.cor) {
          const isAvailable = variante.disponivel;
          if (isAvailable) {
            const isSizeColorInCart = context?.cartItems.some(
              (cart) =>
                cart.size === tamanho &&
                cart.color === color.cor &&
                cart.item.id === product.id,
            );

            if (!isSizeColorInCart) {
              const existingSizeObject = newMap.find(
                (item) => item.tamanho === tamanho,
              );

              if (!existingSizeObject) {
                newMap.push({ tamanho, cores: [color.cor] });
              } else {
                if (!existingSizeObject.cores.includes(color.cor)) {
                  existingSizeObject.cores.push(color.cor);
                }
              }
            }
          }
        }
      });
    });

    setSizeToColorsMap(newMap);
  }, [produto, context?.cartItems]);

  React.useEffect(() => {
    if (sizeToColorsMap.length === 0) {
      setDisableButtons(true);
    } else {
      setDisableButtons(false);
    }
  }, [sizeToColorsMap, setDisableButtons]);

  return (
    <>
      {sizeToColorsMap.length === 1 && (
        <p>
          Tamanho: <strong>{sizeToColorsMap[0].tamanho}</strong>
        </p>
      )}

      {sizeToColorsMap.length === 1 &&
        handleSizeChange(sizeToColorsMap[0].tamanho)}

      {sizeToColorsMap.length > 1 && (
        <Form>
          <Form.Group controlId="productSize">
            <Form.Label>Tamanho:</Form.Label>
            <div className="col-lg-md-6">
              <Form.Control
                as="select"
                onChange={(e) => handleSizeChange(e.target.value)}
                className={isError ? 'error' : ''}
                value={selectedSize || ''}
              >
                <option value="">Selecione um tamanho</option>
                {sizeToColorsMap.map((size, i) => (
                  <option
                    key={i}
                    value={size.tamanho}
                    className={isError ? 'error-text' : ''}
                  >
                    {size.tamanho}
                  </option>
                ))}
              </Form.Control>
            </div>
          </Form.Group>
        </Form>
      )}

      {sizeToColorsMap.length === 0 && (
        <p>
          <strong>PRODUTO SELECIONADO</strong>
        </p>
      )}
    </>
  );
};

export default ProductInfoSizes;
