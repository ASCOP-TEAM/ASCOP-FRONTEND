import React from 'react';
import { CartContext } from '@contexts';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';

import { BiLogoWhatsapp } from 'react-icons/bi';
import { useRouter } from 'next/router';

import { ButtonMercadoLivreFake } from './styles';

import { Alert, Button } from '@components';

import { IDadosCliente, Item, Payer } from '@interfaces';
import {
  getDefaultPayer,
  loadMercadoPago,
  renderCheckoutButton,
  extrairCodigoENumero,
} from '@utils';

interface PaymentProps {
  formData: IDadosCliente | null;
  checkoutType: 'MercadoPago' | 'WhatsApp';
  disableButton: boolean;
}

const Payment: React.FC<PaymentProps> = ({
  checkoutType,
  disableButton,
  formData,
}) => {
  const [showAlert, setShowAlert] = React.useState(false);
  const [alertMessage, setAlertMessage] = React.useState('');
  const [alertType, setAlertType] = React.useState<'success' | 'error'>(
    'success',
  );

  const [isLoading, setIsLoading] = React.useState(false);
  const [preferenceId, setPreferenceId] = React.useState<string | null>(null);
  const context = React.useContext(CartContext);
  const router = useRouter();

  const fillItemsAndPayer = (
    formData: IDadosCliente | null,
  ): { items: Item[]; payer: Payer } => {
    const itemsFromCart = context?.cartItems;

    if (!itemsFromCart?.length) {
      setAlertType('error');
      setAlertMessage('Carrinho de compras vazio ou indisponível');
      setShowAlert(true);
      router.push('/loja');
      return { items: [], payer: getDefaultPayer() };
    }
    if (!formData) {
      setAlertType('error');
      setAlertMessage('Dados de entrega indisponível ou Incorretos');
      setShowAlert(true);
      return { items: [], payer: getDefaultPayer() };
    }

    const items: Item[] = itemsFromCart.map((cart) => {
      const categoryId = cart.item.attributes.categoria?.data || null;
      const pictureUrl =
        cart.item.attributes.thumbnail?.data?.attributes.url || null;

      return {
        id: String(cart.item.id),
        title: cart.item.attributes.title,
        currency_id: 'BRL',
        picture_url: String(pictureUrl),
        description: cart.item.attributes.description,
        category_id: String(categoryId),
        unit_price: Number(cart.item.attributes.price),
        quantity: Number(cart.quantity),
      };
    });

    const payer: Payer = {
      phone: {
        area_code: formData.phone
          ? extrairCodigoENumero(formData.phone).areaCode
          : null,
        number: Number(extrairCodigoENumero(formData.phone).numero),
      },
      address: {
        zip_code: formData.cep,
        street_name: formData.address,
        street_number: Number(formData.number),
      },
      email: formData.email,
      identification: { number: '', type: '' },
      name: formData.name,
      surname: formData.lastname,
      date_created: new Date(),
      last_purchase: new Date(),
    };

    return { items, payer };
  };

  const handleWhatsAppPayment = async () => {
    const { items, payer } = fillItemsAndPayer(formData);

    if (items.length && payer) {
      try {
        setIsLoading(true);
        const response = await fetch('/api/send/orden', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ items, payer }),
        });

        if (!response.ok) {
          setIsLoading(false);
          setAlertType('error');
          setAlertMessage(
            'Erro ao tentar gerar sua orden de serviço, tente novamnete em alguns minutos!',
          );
          setShowAlert(true);
          return;
        }

        const itemsMessage = items
          .map((item) => {
            return `${item.quantity} x ${item.title}: R$ ${item.unit_price}`;
          })
          .join('\n');

        let message = `Olá, gostaria de fazer um pedido:\n\n${itemsMessage}\n\nDados do Cliente:\n`;

        message += `Nome: ${payer.name} ${payer.surname}\n`;
        message += `E-mail: ${payer.email}\n`;
        message += `Telefone: ${payer.phone.area_code} ${payer.phone.number}\n`;

        message += `Endereço de Entrega:\n`;
        message += `Rua: ${payer.address.street_name}\n`;
        message += `Número: ${payer.address.street_number}\n`;
        message += `CEP: ${payer.address.zip_code}\n`;

        const encodedMessage = encodeURIComponent(message);

        const whatsappURL = `https://api.whatsapp.com/send?phone=5511997217411&text=${encodedMessage}`;

        setIsLoading(false);

        router.push(whatsappURL);
      } catch (error) {
        let errorMessage = 'Erro ao processar o pedido';

        if (error instanceof Error) {
          errorMessage = `Erro: ${error.message}`;
        }

        setAlertType('error');
        setAlertMessage(errorMessage);
        setShowAlert(true);
        setIsLoading(false);
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  React.useEffect(() => {
    const fetchData = async () => {
      if (checkoutType === 'MercadoPago') {
        if (formData == null) {
          setAlertType('error');
          setAlertMessage('Dados de entrega indisponível ou Incorretos');
          setShowAlert(true);
          return;
        }

        const { items, payer } = fillItemsAndPayer(formData);

        try {
          const response = await fetch('/api/create_preference', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ items, payer }),
          });

          if (!response.ok) {
            setAlertType('error');
            setAlertMessage(
              'Erro ao criar preferência de pagamento, tente mais tarde!',
            );
            setShowAlert(true);
            router.push('/loja');
            return;
          }

          const preference = await response.json();

          setPreferenceId(preference.id);
        } catch (error) {
          setAlertType('error');
          setAlertMessage('Erro ao processar pedido, tente mais tarde!');
          setShowAlert(true);
          setPreferenceId(null);
          console.error('Erro ao processar pedido:', error);
        }

        loadMercadoPago();
      }
    };

    fetchData();
  }, [checkoutType, formData]);

  return (
    <>
      <Row className="flex-column justify-content-around m-2">
        <Container className="values-payment p-2">
          <Col>
            <h3>Resumo do Pedido</h3>
          </Col>

          <Col className="d-flex justify-content-between">
            <p>Produtos selecionados</p>
            <p>
              {context && `${context.cartItems && context.cartItems.length}`}
            </p>
          </Col>

          <Col className="d-flex justify-content-between">
            <p>Frete</p>
            <p>
              <strong>R$ 0</strong>
            </p>
          </Col>

          <Col className="d-flex justify-content-between">
            <h3>Total</h3>
            <h3>
              <strong>
                {context &&
                  `R$ ${context.getCartTotal() ? context.getCartTotal() : 0}`}
              </strong>
            </h3>
          </Col>
          <Col className="payment col-auto">
            {checkoutType === 'MercadoPago' ? (
              preferenceId ? (
                renderCheckoutButton(preferenceId)
              ) : (
                <ButtonMercadoLivreFake disabled={disableButton}>
                  <div>
                    <Image
                      src={'/logomercadopago.png'}
                      width={30}
                      height={30}
                      loading="lazy"
                      alt="mercado pago logo"
                    />
                  </div>
                  <span className="text-1XN644 svelte-16x6ay9">
                    Pay with Mercado Pago
                  </span>
                </ButtonMercadoLivreFake>
              )
            ) : (
              <div className="wpp-checkout">
                <Button
                  className="w-100 my-3 d-flex justify-content-center align-items-center gap-2 "
                  text="CHECKOUT NO WHATSAPP"
                  icon={BiLogoWhatsapp}
                  isLoading={isLoading}
                  theme={false}
                  onClick={handleWhatsAppPayment}
                  disabled={disableButton}
                />
              </div>
            )}
          </Col>
        </Container>
      </Row>

      {showAlert && (
        <Alert
          show={showAlert}
          onClose={() => setShowAlert(false)}
          message={alertMessage}
          type={alertType}
        />
      )}
    </>
  );
};

export default Payment;
