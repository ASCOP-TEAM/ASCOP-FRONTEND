export function formatPhoneNumber(phoneNumber: string | undefined) {
  if (phoneNumber != undefined) {
    const numericPhoneNumber = phoneNumber.replace(/\D/g, '');

    if (numericPhoneNumber.length !== 11) {
      return 'Número de telefone inválido';
    }

    const formattedPhoneNumber = `(${numericPhoneNumber.slice(
      0,
      2,
    )}) ${numericPhoneNumber.slice(2, 7)}-${numericPhoneNumber.slice(7)}`;

    return formattedPhoneNumber;
  }
}
