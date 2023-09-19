import nodemailer from 'nodemailer';

export function ContactMailOptions(
  name: string,
  email: string,
  phone: string,
  message: string,
): nodemailer.SendMailOptions {
  return {
    from: process.env.GMAIL_ID,
    to: process.env.GMAIL_TO, 
    subject: `${name} - Contato ASCOP`,
    text: message,
    html: `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Contato ASCOP</title>
    </head>
    <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
    
        <div style="max-width: 600px; margin: 0 auto; background-color: #fff; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); padding: 20px;">
    
            <h1 style="font-size: 24px;">Contato de ${name}</h1>
    
            <p> <strong>${name}</strong> diz:</p>
            <p>${message}</p>
    
            <h4>Detalhes de Contato:</h4>
            <ul style="list-style: none;">
                <li style="margin: 0;"><strong>Email:</strong> ${email}</li>
                <li style="margin: 0;">
                <strong>Telefone:</strong> 
                <a href="https://wa.me/${phone}" target="_blank">${phone}</a>
                </li>
            </ul>
    
        </div>
    
    </body>
    </html>
    `,
  };
}
