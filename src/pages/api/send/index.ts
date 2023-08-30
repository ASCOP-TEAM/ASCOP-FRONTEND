import nodemailer from 'nodemailer';
import { MailtrapTransporter } from '@interfaces';

export async function sendMail(
  mailOptions: nodemailer.SendMailOptions,
): Promise<void> {
  const GMAIL_ID = process.env.GMAIL_ID;
  const GMAIL_PASSWORD = process.env.GMAIL_PASSWORD;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: GMAIL_ID,
        pass: GMAIL_PASSWORD,
      },
    } as MailtrapTransporter);

    await transporter.sendMail(mailOptions);
  } catch (error) {
    throw new Error(`Erro ao enviar e-mail: ${error}`);
  }
}
