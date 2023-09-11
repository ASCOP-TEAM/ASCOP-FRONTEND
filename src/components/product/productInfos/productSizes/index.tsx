import React from 'react';
import { CartContext } from '@contexts';
import { ISizeToColors, ProductData } from '@interfaces';
import { Form } from 'react-bootstrap';

interface ProductInfoSizesProps {
  produto: ProductData;
  isError: boolean;
  selectedSize: string | null;

  setSelectedSizeInfo: (selectedSizeInfo: ISizeToColors) => void;
}

const ProductInfoSizes: React.FC<ProductInfoSizesProps> = ({
  produto,
  isError,
  selectedSize,
  setSelectedSizeInfo,
}) => {
  const context = React.useContext(CartContext);

  const [sizeToColorsMap, setSizeToColorsMap] = React.useState<ISizeToColors[]>(
    [],
  );

  React.useEffect(() => {
    if (!produto) return;

    const newMap: ISizeToColors[] = [];

    [produto].forEach((product: ProductData) => {
      product.attributes.variantes.forEach((variante) => {
        const { color } = variante;
        const { tamanho } = variante.size;

        // Verifica se a combinação de tamanho e cor está no carrinho
        const isSizeColorInCart = context?.cartItems.some(
          (item) => item.size === tamanho && item.color === color.cor,
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
      });
    });

    setSizeToColorsMap(newMap);
  }, [produto, context?.cartItems]);

  function handleSizeChange(selectedSize: string) {
    const selectedSizeInfo = sizeToColorsMap.find(
      (item) => item.tamanho === selectedSize,
    );

    if (selectedSizeInfo) {
      setSelectedSizeInfo(selectedSizeInfo);
    }
  }

  return (
    <>
      {produto.attributes.variantes.length === 1 && (
        <p>
          Tamanho:{' '}
          <strong>{produto.attributes.variantes[0].size.tamanho}</strong>
        </p>
      )}

      {sizeToColorsMap.length > 0 && (
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

      {sizeToColorsMap.length == 0 && (
        <p>
          <strong>Produto Indisponível!</strong>
        </p>
      )}
    </>
  );
};

export default ProductInfoSizes;
