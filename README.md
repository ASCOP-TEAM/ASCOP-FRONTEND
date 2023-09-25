
# Documentação do site da ASCOP

Esta documentação tem como objetivo principal auxiliar na manutenção do site da ASCOP. Ela apresenta as tecnologias utilizadas, o esquema de integração da plataforma nos respectivos serviços e um breve resumo de como inicializar a plataforma em modo de desenvolvimento.


## Índice

 - [Introdução](#introducao)
 - [Tecnologias utilizadas ](#tecnologias)
 - [Integração da plataforma](#integracao)
 - [Inicialização em modo de desenvolvimento](#inicializacao)


## Introdução

O site da ASCOP é uma plataforma web que fornece informações sobre a organização e seus serviços. Ele conta com um portal de transparência, onde as contas e levantamento de gastos são apresentados ao público. Além disso, o site possui uma loja para venda de itens da organização. Esta documentação é destinada a desenvolvedores que precisam manter ou atualizar o site.

Este guia descreve como configurar e administrar o sistema Strapi, incluindo a liberação de acessos, modificação dos dados de implementação, cadastro de produtos e criação de relatórios.

- [Login de Administrador](#login)
- [Gerenciamento de Acessos](#acessos)
- [Cadastro de Produtos](#produtos)
- [Cadastro de Relatórios](#relatorios)
- [Dados das Páginas](#paginas)
- [Segurança e Backup](#backup)

## Login de Administrador {#login}

1. Assista ao vídeo instrucional sobre como fazer login como administrador.



## Gerenciamento de Acessos {#acessos}

2. Assista ao vídeo instrucional sobre como configurar as permissões de acesso para diferentes usuários ou grupos.


## Cadastro de Produtos {#produtos}

3. Assista ao vídeo instrucional sobre como cadastrar produtos na plataforma Strapi.


## Cadastro de Relatórios {#relatorios}

4. Assista ao vídeo instrucional sobre como criar relatórios usando a API do Strapi.


## Dados das Páginas {#paginas}

5. Assista ao vídeo instrucional sobre como gerenciar os dados das páginas dentro da plataforma Strapi.

## Segurança e Backup {#backup}

6. Assista ao vídeo instrucional sobre como implementar medidas de segurança e configurar rotinas de backup para proteger seus dados e seu painel de administração.



##  Tecnologias Utilizadas

O site da ASCOP é desenvolvido usando as seguintes tecnologias:

- **Front-end**:
  - Next.js: um framework React para criar aplicações web    estáticas e dinâmicas.Documentação: https://nextjs.org
  
  - Styled Components: uma biblioteca para estilizar componentes React usando CSS.Documentação: https://styled-components.com/

  - Bootstrap: uma biblioteca de componentes web para criar layouts responsivos.Documentação: https://react-bootstrap.github.io/

- **Back-end**:
  - Strapi: um CMS headless baseado em Node.js.Documentação: https://strapi.io/

  - Node.js: um runtime JavaScript para a construção de aplicações web e móveis.Documentação: https://nodejs.org/en/

- **Banco de dados**: 
  - PostgreSQL: um banco de dados relacional. Documentação: https://www.postgresql.org/docs/
## Integração da plataforma

A plataforma foi integrada da seguinte forma: primeiramente, o backend foi hospedado na plataforma Render, onde ele tem comunicação com o GitHub da organização. Assim, quando fazemos modificações nas entidades do Strapi e fazemos commit para a plataforma, as mudanças são salvas e ocorre um novo deploy na plataforma.

Conforme o esquema apresentado mostra, o Render hospeda o Strapi na plataforma, e por sua vez, o Strapi se comunica com o banco de dados PostgreSQL que está hospedado no serviço da Vercel. Isso torna necessário ter as variáveis de ambiente da Vercel para seu banco de dados.

O painel do Strapi fica hospedado dentro do Render, em um subdomínio com o nome 'painel.ascopskt.com'. Dentro da plataforma, podemos gerenciar o conteúdo que a API do Strapi envia para a Vercel, e, por sua vez, o serviço pode se comunicar com o website. Abaixo, seguem imagens do esquema. 

### Implantação (Frontend)

Para fazer o deploy desse projeto no fronte end se deve dar com: 

 para fazer o dowload das dependencias
```bash
  yarn 
```

para fazer a verificação que todas as dependencias estão instaladas corretamnete: 
```bash
  yarn lint
```

e finalmente para rodar a aplicação em modo desenvolvedor: 
```bash
  yarn dev
```
Isso garantirá uma implantação tranquila do projeto no frontend.

### Implantação (Backend)

Para implantar este projeto no backend, siga estas etapas:

clone o repositorio
```bash
  git clone <URL DO REPóSITORIO> BACKEND 
```

entre na pasta clonada
```bash
  cd BACKEND
```

para fazer o dowload das dependencias
```bash
  yarn 
```

e finalmente para rodar a aplicação em modo desenvolvedor: 
```bash
  yarn develop
```
