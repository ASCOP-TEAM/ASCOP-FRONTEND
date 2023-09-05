import { Item, Payer } from '@interfaces';
import nodemailer from 'nodemailer';

export function OrderConfirmationMailOptions(
  email: string | null, // Email do destinatário
  title: string, // Título do email
  ordenId: number,
  items: Item[],
  payer: Payer,
): nodemailer.SendMailOptions {
  const orderItemsHTML = items
    .map(
      (item, index) => `
   <tr>
     <td>${index + 1}</td>
     <td>${item.title}</td>
     <td>${item.quantity}</td>
     <td>R$ ${item.unit_price.toFixed(2)}</td>
   </tr>
 `,
    )
    .join('');

  const payerName = payer.name;

  const greetingMessage = email
    ? `
    <h2>${title} - ${ordenId}</h2>
    <p>Prezado(a) ${payerName},</p>
    <p>Agradecemos por escolher nossos produtos. Abaixo estão os detalhes do seu pedido:</p>
    <p>pedido de orden: ${ordenId}</p>
    `
    : `
    <h2>${title} - ${ordenId}</h2>
    <p>Olá equipe da ASCOP,</p>
    <p>O cliente ${payerName} acabou de fazer um pedido. Abaixo estão os detalhes do pedido e os dados de contato do cliente:</p>
    <p>pedido de orden: ${ordenId}</p>
  `;

  const deliveryAddressTable = `
  <table>
    <tr>
      <td>Endereço:</td>
      <td>${payer.address.street_name}</td>
    </tr>
    <tr>
      <td>Número:</td>
      <td>${payer.address.street_number}</td>
    </tr>
    <tr>
      <td>CEP:</td>
      <td>${payer.address.zip_code}</td>
    </tr>
  </table>
`;

  const contactClienteTable = `
<table>
<tr>
  <td>Nome:</td>
  <td>${payer.name} ${payer.surname}</td>
</tr>
<tr>
  <td>Telefone:</td>
  <td>${payer.phone.area_code} ${payer.phone.number}</td>
</tr>
<tr>
  <td>Email:</td>
  <td>${payer.email}</td>
</tr>
</table>
`;

  const emailBodyHTML = `
   <html>
     <head>
       <style>
         table {
           width: 100%;
           border-collapse: collapse;
         }
         th, td {
           border: 1px solid #dddddd;
           text-align: left;
           padding: 8px;
         }
         th {
           background-color: #f2f2f2;
         }
       </style>
     </head>
     <body>
      ${greetingMessage}
      <p>Produtos Selecionados:</p>
       <table>
         <tr>
           <th>#</th>
           <th>Nome do Produto</th>
           <th>Quantidade</th>
           <th>Preço Unitário</th>
         </tr>
         ${orderItemsHTML}
       </table>
       <p>Informações de Contato:</p>
       <p>${contactClienteTable}</p>
       <p>Endereço de Entrega:</p>
       <p>${deliveryAddressTable}</p>

       ${email ? `<p>Agradecemos pela sua compra!</p>` : ''}
      
     </body>
   </html>
 `;

  return {
    from: process.env.GMAIL_ID,
    to: email || process.env.GMAIL_TO,
    subject: title,
    html: emailBodyHTML,
  };
}
