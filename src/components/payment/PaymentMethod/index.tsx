import React from 'react';
import { IDadosCliente, Item, Payer } from '@interfaces';
import { Alert, Button } from '@components';
import { CartContext, ONGContext } from '@contexts';
import { BiLogoWhatsapp } from 'react-icons/bi';

import {
  extrairCodigoENumero,
  generateOrderMessage,
  getDefaultPayer,
} from '@utils';
import { useRouter } from 'next/router';

interface PaymentMethodProps {
  checkoutType: 'MercadoPago' | 'WhatsApp';
  /*   preferenceId: string | null; */
  disableButton: boolean;
  formData: IDadosCliente | null;
}

const PaymentMethod: React.FC<PaymentMethodProps> = ({
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

  const context = React.useContext(CartContext);
  const router = useRouter();

  const ongData = React.useContext(ONGContext);

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
      setAlertMessage('Dados de entrega Incorretos');
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
        variation: {
          size: cart.size || '',
          color: cart.color || '',
        },
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

    if (!items.length && !payer && !ongData) {
      setAlertType('error');
      setAlertMessage('Erro, Tente Novamente!');
      setShowAlert(true);
      return;
    }

    try {
      setIsLoading(true);

      const phoneNumber = ongData?.data.attributes.contato.telefone;

      if (!phoneNumber) {
        setIsLoading(false);
        setAlertType('error');
        setAlertMessage('Erro ao obter dados da organização.');
        setShowAlert(true);
        router.push('/loja');
        return;
      }

      const response = await fetch('/api/send/orden', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items, payer, phoneNumber }),
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

      const message = generateOrderMessage(items, payer);
      const encodedMessage = encodeURIComponent(message);

      if (phoneNumber && encodedMessage) {
        const whatsappURL = `https://api.whatsapp.com/send?phone=55${phoneNumber}&text=${encodedMessage}`;
        setIsLoading(false);
        context?.clearCart();
        router.push(whatsappURL);
      }
    } catch (error) {
      setAlertType('error');
      setAlertMessage('Erro ao processar o pedido');
      setShowAlert(true);
      setIsLoading(false);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div>
        {checkoutType === 'MercadoPago' ? (
          <p>ative a implementação no código</p>
        ) : (
          <div className="wpp-checkout">
            <Button
              className="w-100 my-3 d-flex justify-content-center align-items-center gap-2"
              text="CHECKOUT NO WHATSAPP"
              icon={BiLogoWhatsapp}
              isLoading={isLoading}
              onClick={handleWhatsAppPayment}
              disabled={disableButton}
            />
          </div>
        )}

        {showAlert && (
          <Alert
            show={showAlert}
            onClose={() => setShowAlert(false)}
            message={alertMessage}
            type={alertType}
          />
        )}
      </div>
    </>
  );
};

export default PaymentMethod;
