import { CartContext } from '@contexts';
import React from 'react';
import { Form } from 'react-bootstrap';

interface ProductColorsProps {
  isColors: string[];
  isError: boolean;
  selectedSize: string | null;
  selectedColor: string | null;
  setSelectedColor: (selectedColor: string | null) => void;
}

const ProductColors: React.FC<ProductColorsProps> = ({
  isColors,
  isError,
  selectedSize,
  selectedColor,
  setSelectedColor,
}) => {
  const context = React.useContext(CartContext);

  React.useEffect(() => {
    if (isColors.length === 1 && selectedSize != null) {
      console.log('cor selecionada', isColors);
      setSelectedColor(isColors[0]);
    }
  }, [isColors, selectedSize, setSelectedColor]);

  const availableColors = isColors.filter((color) => {
    const isColorInCart = context?.cartItems.some(
      (item) => item.size === selectedSize && item.color === color,
    );
    return !isColorInCart;
  });

  return (
    <>
      {availableColors.length === 1 && (
        <p>
          Cor: <strong>{isColors[0]}</strong>
        </p>
      )}

      {isColors.length === 1 && setSelectedColor(isColors[0])}

      {isColors.length > 1 && selectedSize != null && (
        <Form>
          <Form.Group controlId="productSize">
            <Form.Label>Cor:</Form.Label>
            <div className="col-lg-md-6">
              <Form.Control
                as="select"
                onChange={(e) => setSelectedColor(e.target.value)}
                className={isError ? 'error' : ''}
                value={selectedColor || ''}
              >
                <option value="">Selecione uma cor</option>
                {isColors.map((color, i) => (
                  <option
                    key={i}
                    value={color}
                    className={isError ? 'error-text' : ''}
                  >
                    {color}
                  </option>
                ))}
              </Form.Control>
            </div>
          </Form.Group>
        </Form>
      )}
    </>
  );
};

export default ProductColors;
