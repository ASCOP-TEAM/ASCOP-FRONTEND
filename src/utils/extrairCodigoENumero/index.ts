export function extrairCodigoENumero(numeroTelefone: string) {
  const regex = /\((\d{2})\)|(\d{2})/;
  const match = numeroTelefone.match(regex);

  let areaCode = null;
  let numero = numeroTelefone;

  if (match) {
    areaCode = match[1] || match[2];
    numero = numeroTelefone.replace(match[0], '').trim();
  }

  return {
    areaCode: areaCode,
    numero: numero,
  };
}
