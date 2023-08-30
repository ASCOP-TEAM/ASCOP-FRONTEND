import { NextApiRequest, NextApiResponse } from 'next';
import { ContactMailOptions } from '@templates';
import { IEmail } from '@interfaces';
import { sendMail } from '..';

export default async function Contact(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  try {
    if (req.method === 'POST') {
      const { name, email, phone, message }: IEmail = req.body;

      if (!name || !email || !phone || !message) {
        return res.status(400).json({ message: 'Bad request', ok: false });
      }

      await sendMail(ContactMailOptions(name, email, phone, message));

      res.status(200).json({ message: 'Email enviado com sucesso!', ok: true });
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).json({ message: 'Method not allowed', ok: false });
    }
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    res.status(500).json({
      message: 'Erro ao enviar email',
      error: error instanceof Error ? error.message : 'Erro desconhecido',
      ok: false,
    });
  }
}
