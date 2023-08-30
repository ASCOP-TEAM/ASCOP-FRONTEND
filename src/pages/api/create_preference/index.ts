import { NextApiRequest, NextApiResponse } from 'next';
import NextCors from 'nextjs-cors';
import mercadopago from 'mercadopago';
import { CreatePreferencePayload } from 'mercadopago/models/preferences/create-payload.model';

mercadopago.configure({
  access_token:
    'TEST-3380799047463911-081123-10d09c5783ff6f23e907292a6031ad1a-209891789',
});

const Preference = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await NextCors(req, res, {
      methods: ['POST'],
      origin: '*',
      optionsSuccessStatus: 200,
    });

    const { items, payer } = req.body;

    if (!items || !payer) {
      return res.status(404).json({ error: 'Missing required fields in item' });
    }

    const preference: CreatePreferencePayload = {
      items: [...items],
      back_urls: {
        success: 'http://localhost:3000/loja/feedback',
        failure: 'http://localhost:3000/loja/feedback',
      },
      payer,
      auto_return: 'approved',
      binary_mode: true,
    };

    try {
      const response = await mercadopago.preferences.create(preference);

      res.json({
        id: response.body.id,
      });
    } catch (error) {
      console.error('Mercado Pago Error:', error);
      res.status(500).json({
        error: 'An error occurred while processing the payment request.',
      });
    }
  } catch (e) {
    console.error('Error occurred:', e);
    res
      .status(500)
      .json({ error: 'An unexpected error occurred. Please try again later.' });
  }
};

export default Preference;
