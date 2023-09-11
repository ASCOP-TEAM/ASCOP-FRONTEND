import { Item, Payer } from '@interfaces';

export function generateOrderMessage(items: Item[], payer: Payer) {
  const itemsMessage = items
    .map((item) => {
      const size = item.variation?.size
        ? ` - Tamanho: ${item.variation.size}`
        : '';
      const color = item.variation?.color
        ? ` - Cor: ${item.variation.color}`
        : '';

      return `${item.quantity} x ${item.title}:${size}${color} - R$ ${item.unit_price}`;
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

  return message;
}
