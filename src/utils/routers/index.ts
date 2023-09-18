export const routeMappingsMenu = [
  {
    id: 1,
    path: '/',
    name: 'HOME',
  },
  {
    id: 2,
    path: '/loja/',
    name: 'LOJA',
  },
  {
    id: 3,
    path: '/cadastros',
    name: 'CADASTROS',
  },
  {
    id: 4,
    path: '/doacao',
    name: 'DOAÇÃO',
  },
  {
    id: 5,
    path: '/transparencia',
    name: 'TRANSPARÊNCIA',
  },
  {
    id: 6,
    path: '/contato',
    name: 'CONTATO',
  },
];

interface RouteConfig {
  [key: string]: {
    name: string;
    bgColor: string;
    txColor: string;
    static: boolean;
  };
}

export const routeMappings: RouteConfig = {
  '/': { name: '', bgColor: 'black', txColor: 'white', static: false },
  '/loja': { name: 'LOJA', bgColor: 'white', txColor: 'black', static: false },
  '/loja/product': {
    name: 'LOJA',
    bgColor: 'white',
    txColor: 'black',
    static: true,
  },
  '/loja/cliente': {
    name: 'LOJA',
    bgColor: 'white',
    txColor: 'black',
    static: true,
  },
  '/loja/cliente/carrinho': {
    name: 'LOJA',
    bgColor: 'white',
    txColor: 'black',
    static: true,
  },
  '/cadastros': {
    name: 'CADASTROS',
    bgColor: 'white',
    txColor: 'black',
    static: false,
  },
  '/doacao': {
    name: 'DOAÇÃO',
    bgColor: 'white',
    txColor: 'black',
    static: true,
  },
  '/transparencia': {
    name: 'TRANSPARÊNCIA',
    bgColor: 'white',
    txColor: 'black',
    static: false,
  },
  '/contato': {
    name: 'CONTATO',
    bgColor: 'white',
    txColor: 'black',
    static: false,
  },
};
