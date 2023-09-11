// Importe os módulos necessários
import { NextApiRequest, NextApiResponse } from 'next';
import { Item, Payer } from '@interfaces';
import { sendMail } from '..';
import { OrderConfirmationMailOptions } from '@templates';

export default async function OrderConfirmation(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  try {
    if (req.method === 'POST') {
      const {
        items,
        payer,
        phoneNumber,
      }: { items: Item[]; payer: Payer; phoneNumber: number } = req.body;

      if (!items || !payer || !phoneNumber) {
        return res.status(400).json({ message: 'Bad request', ok: false });
      }

      const orderId = Math.floor(Math.random() * 10000000) + 1;

      const orderConfirmationCliente = OrderConfirmationMailOptions(
        payer.email,
        `Confirmação de Pedido - ${payer.name + ' ' + payer.surname}`,
        orderId,
        phoneNumber,
        items,
        payer,
      );

      const orderConfirmationCompany = OrderConfirmationMailOptions(
        null,
        'Novo Pedido Recebido - ASCOP',
        orderId,
        phoneNumber,
        items,
        payer,
      );

      await Promise.all([
        sendMail(orderConfirmationCliente),
        sendMail(orderConfirmationCompany),
      ]);

      res.status(200).json({
        message: 'Email de confirmação de pedido enviado com sucesso!',
        ok: true,
      });
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).json({ message: 'Method not allowed', ok: false });
    }
  } catch (error) {
    console.error('Erro ao enviar email de confirmação de pedido:', error);
    res.status(500).json({
      message: 'Erro ao enviar email de confirmação de pedido',
      error: error instanceof Error ? error.message : 'Erro desconhecido',
      ok: false,
    });
  }
}
