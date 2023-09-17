import { CartContext } from '@contexts';
import React from 'react';
import { Form } from 'react-bootstrap';

interface ProductColorsProps {
  productId: number;
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
  productId,
  setSelectedColor,
}) => {
  const context = React.useContext(CartContext);

  const availableColors: string[] = isColors.filter((color) => {
    const isColorInCart = context?.cartItems.some(
      (cart) =>
        cart.item.id === productId &&
        cart.size === selectedSize &&
        cart.color === color,
    );

    return !isColorInCart;
  });

  React.useEffect(() => {
    if (availableColors.length === 1) {
      setSelectedColor(availableColors[0]);
    }
  }, [setSelectedColor, availableColors]);

  return (
    <>
      {availableColors.length === 1 && selectedSize != null && (
        <p>
          Cor: <strong>{isColors[0]}</strong>
        </p>
      )}

      {availableColors.length > 1 && selectedSize != null ? (
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
                {availableColors.map((color, i) => (
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
      ) : null}
    </>
  );
};

export default ProductColors;
