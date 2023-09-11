export function stringToHexColor(colorName: string) {
  const lowerCaseString = colorName.toLowerCase();

  let hexColor = '#000000';

  switch (lowerCaseString) {
    case 'branco':
      hexColor = '#ffffff';
      break;
    case 'preto':
      hexColor = '#000000';
      break;
    case 'vermelho':
      hexColor = '#ff0000';
      break;
    case 'azul':
      hexColor = '#0000ff';
      break;
    case 'verde':
      hexColor = '#008000';
      break;
    case 'amarelo':
      hexColor = '#ffff00';
      break;
    case 'laranja':
      hexColor = '#ffa500';
      break;
    case 'roxo':
      hexColor = '#800080';
      break;
    case 'rosa':
      hexColor = '#ff69b4';
      break;
    case 'marrom':
      hexColor = '#964b00';
      break;
    case 'cinza':
      hexColor = '#808080';
      break;
    case 'bege':
      hexColor = '#f5f5dc';
      break;
    case 'ouro':
      hexColor = '#ffd700';
      break;
    case 'prata':
      hexColor = '#6b6b6b';
      break;
    case 'coral':
      hexColor = '#ff6b6b';
      break;
    case 'vinho':
      hexColor = '#800000';
      break;
    case 'aqua':
      hexColor = '#00ffff';
      break;
    case 'lilas':
      hexColor = '#c8a2c8';
      break;
    case 'menta':
      hexColor = '#98ff98';
      break;
    case 'indigo':
      hexColor = '#4b0082';
      break;
    case 'ciano':
      hexColor = '#00ffff';
      break;
    case 'oliva':
      hexColor = '#808000';
      break;
    case 'safira':
      hexColor = '#082567';
      break;
    default:
      hexColor = '#d1d1d1';
      break;
  }

  return hexColor;
}
