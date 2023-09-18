import React from 'react';
import { CartContext } from '@contexts';
import { Alert, Button } from '@components';
import { useRouter } from 'next/router';
import { Container } from './style';

export const CartTotal: React.FC = () => {
  const [isError, setError] = React.useState<boolean>(false);
  const context = React.useContext(CartContext);
  const router = useRouter();

  const handleCheckout = () => {
    const checkCart = context?.cartItems.filter(
      (cart) => cart.item.attributes.variantes.length > 1 && cart.size === null,
    );
    if (checkCart?.length != 0) {
      return setError(true);
    }
    router.push('/loja/cliente');
  };

  return (
    <>
      <Container>
        <div className="items-info">
          <h3>Itens selecionados</h3>
          <div
            className="total d-flex justify-content-between
               my-2"
          >
            <div>
              <h4>Produtos</h4>
            </div>
            <div>
              <p>{context?.getCartTotalQuantity()}</p>
            </div>
          </div>
          <div className="rodape">
            <div
              className="total d-flex justify-content-between
               my-2"
            >
              <div>
                <h3>Total: </h3>
              </div>
              <div>
                <h2>R$ {context?.getCartTotal()} </h2>
              </div>
            </div>

            <div className="finalizar">
              <Button
                className="w-100"
                text="COMPRAR"
                onClick={handleCheckout}
                disabled={isError}
              />
            </div>
          </div>
        </div>
      </Container>

      {isError && (
        <Alert
          message="  Por favor selecione o tamanhos dos produtos com valores
          variaveis"
          show={isError}
          type="error"
          onClose={() => setError(false)}
        />
      )}
    </>
  );
};
