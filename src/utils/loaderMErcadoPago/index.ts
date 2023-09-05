export const loadMercadoPago = async () => {
  try {
    const MercadoPago = await import('@mercadopago/sdk-react');

    const key = process.env.NEXT_PUBLIC_KEY_MERCADO_PAGO;

    if (key) {
      MercadoPago.initMercadoPago(key);
    }
  } catch (error) {
    console.error('Erro ao carregar Mercado Pago:', error);
  }
};
