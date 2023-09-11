import { Item, Payer } from '@interfaces';
import { generateOrderMessage } from '@utils';
import nodemailer from 'nodemailer';

export function OrderConfirmationMailOptions(
  email: string | null,
  title: string,
  ordenId: number,
  phoneNumber: number,
  items: Item[],
  payer: Payer,
): nodemailer.SendMailOptions {
  const message = generateOrderMessage(items, payer);
  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://api.whatsapp.com/send?phone=55${phoneNumber}&text=${encodedMessage}`;

  const orderItemsHTML = items
    .map(
      (item, index) => `
   <tr>
     <td>${index + 1}</td>
     <td>${item.title}</td>
     <td>${item.quantity}</td>
     <td>R$ ${item.unit_price.toFixed(2)}</td>
     <td>${item.variation?.size || ''}</td>
     <td>${item.variation?.color || ''}</td>
   </tr>
 `,
    )
    .join('');

  const payerName = payer.name;

  const greetingMessage = email
    ? `
    <h2>${title} - ID ${ordenId}</h2>
    <p>Prezado(a) ${payerName},</p>
    <p>Agradecemos por escolher nossos produtos. Abaixo estão os detalhes do seu pedido:</p>
    <p>Número de Identificação do Pedido: <strong>ID ${ordenId}</strong></p>

    <p>Caso você não tenha sido redirecionado para o nosso WhatsApp, por favor, <a class="button-link" href="${whatsappURL}" target="_blank">clique aqui</a> e envie a mensagem predefinida. Isso nos ajudará a processar o seu pedido e calcular o custo de frete.</p>
    `
    : `
    <h2>${title} - ID ${ordenId}</h2>
    <p>Olá equipe da ASCOP,</p>
    <p>O cliente ${payerName} acabou de fazer um pedido. Abaixo estão os detalhes do pedido e os dados de contato do cliente:</p>
    <p>Número de Identificação do Pedido: <strong>ID ${ordenId}</strong></p>
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
  <td>
   <a href="https://api.whatsapp.com/send?phone=55${payer.phone.area_code}${payer.phone.number}" target="_blank">
    ${payer.phone.area_code} ${payer.phone.number}
  </a>
</td>
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

         .button-link {
          display: inline-block;
          color: #007bff;
          text-decoration: none;
          border-radius: 5px;
          font-weight: bold;
          transition: background-color 0.3s;
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
           <th>Tamanho</th>
           <th>Cor</th>
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
