# Documentação do site da ASCOP

Esta documentação tem como objetivo principal auxiliar na manutenção do site da ASCOP. Ela apresenta as tecnologias utilizadas, o esquema de integração da plataforma nos respectivos serviços e um breve resumo de como inicializar a plataforma em modo de desenvolvimento.

## Índice

- [Introdução](#introducao)
- [Tecnologias utilizadas ](#tecnologias)
- [Integração da plataforma](#integracao)
- [Inicialização em modo de desenvolvimento](#inicializacao)

<a name="introducao"></a>

## Introdução

O site da ASCOP é uma plataforma web que fornece informações sobre a organização e seus serviços. Ele conta com um portal de transparência, onde as contas e levantamento de gastos são apresentados ao público. Além disso, o site possui uma loja para venda de itens da organização. Esta documentação é destinada a desenvolvedores que precisam manter ou atualizar o site.

Este guia descreve como configurar e administrar o sistema Strapi, incluindo a liberação de acessos, modificação dos dados de implementação, cadastro de produtos e criação de relatórios.

- [Login de Administrador](#login)
- [Gerenciamento de Acessos](#acessos)
- [Cadastro de Produtos](#produtos)
- [Cadastro de Relatórios](#relatorios)
- [Dados das Páginas](#paginas)
- [Segurança e Backup](#backup)

<a name="login"></a>

## Login de Administrador {#login}

1. Assista ao vídeo instrucional sobre como fazer login como administrador.
   [Ir para a Introdução](#introducao)

[![Video do YouTube](https://img.youtube.com/vi/b4SwIDswEBc/0.jpg)](https://www.youtube.com/watch?v=b4SwIDswEBc)

<a name="acessos"></a>

## Gerenciamento de Acessos {#acessos}

2. Assista ao vídeo instrucional sobre como configurar as permissões de acesso para diferentes usuários ou grupos.
   [Ir para a Introdução](#introducao)

[![Video do YouTube](https://img.youtube.com/vi/MCtmnZ0u_74/0.jpg)](https://www.youtube.com/watch?v=MCtmnZ0u_74)

<a name="produtos"></a>

## Cadastro de Produtos {#produtos}

3. Assista ao vídeo instrucional sobre como cadastrar produtos na plataforma Strapi.
   [Ir para a Introdução](#introducao)

[![Video do YouTube](https://img.youtube.com/vi/-LtHOUe3QUI/0.jpg)](https://www.youtube.com/watch?v=-LtHOUe3QUI)

<a name="relatorios"></a>

## Cadastro de Relatórios {#relatorios}

4. Assista ao vídeo instrucional sobre como criar relatórios usando a API do Strapi.
   [Ir para a Introdução](#introducao)

[![Video do YouTube](https://img.youtube.com/vi/mNqIOtTZYes/0.jpg)](https://www.youtube.com/watch?v=mNqIOtTZYes)

<a name="paginas"></a>

## Cadastro de Paginas {#paginas}

5. Assista ao vídeo instrucional sobre como gerenciar os dados das páginas dentro da plataforma Strapi.
   [Ir para a Introdução](#introducao)

[![Video do YouTube](https://img.youtube.com/vi/NQJA_MgLDIY/0.jpg)](https://www.youtube.com/watch?v=NQJA_MgLDIY)

## Segurança e Backup {#backup}

<a name="backup"></a> 6. Assista ao vídeo instrucional sobre como implementar medidas de segurança e configurar rotinas de backup para proteger seus dados e seu painel de administração.
[Ir para a Introdução](#introducao)

[![Video do YouTube](https://img.youtube.com/vi/LaBtSe7V4mQ/0.jpg)](https://www.youtube.com/watch?v=LaBtSe7V4mQ)

<a name="tecnologias"></a>

## Tecnologias Utilizadas

O site da ASCOP é desenvolvido usando as seguintes tecnologias:

- **Front-end**:

  - Next.js: um framework React para criar aplicações web estáticas e dinâmicas.Documentação: https://nextjs.org

  - Styled Components: uma biblioteca para estilizar componentes React usando CSS.Documentação: https://styled-components.com/

  - Bootstrap: uma biblioteca de componentes web para criar layouts responsivos.Documentação: https://react-bootstrap.github.io/

- **Back-end**:

  - Strapi: um CMS headless baseado em Node.js.Documentação: https://strapi.io/

  - Node.js: um runtime JavaScript para a construção de aplicações web e móveis.Documentação: https://nodejs.org/en/

- **Banco de dados**:
  - PostgreSQL: um banco de dados relacional. Documentação: https://www.postgresql.org/docs/

[Ir para a Introdução](#introducao)
<a name="integracao"></a>

## Integração da plataforma

A plataforma foi integrada da seguinte forma: primeiramente, o backend foi hospedado na plataforma Render, onde ele tem comunicação com o GitHub da organização. Assim, quando fazemos modificações nas entidades do Strapi e fazemos commit para a plataforma, as mudanças são salvas e ocorre um novo deploy na plataforma.

Conforme o esquema apresentado mostra, o Render hospeda o Strapi na plataforma, e por sua vez, o Strapi se comunica com o banco de dados PostgreSQL que está hospedado no serviço da Vercel. Isso torna necessário ter as variáveis de ambiente da Vercel para seu banco de dados.

O painel do Strapi fica hospedado dentro do Render, em um subdomínio com o nome 'painel.ascopskt.com'. Dentro da plataforma, podemos gerenciar o conteúdo que a API do Strapi envia para a Vercel, e, por sua vez, o serviço pode se comunicar com o website. Abaixo, seguem imagens do esquema.

![esquema1](https://github.com/ASCOP-TEAM/ASCOP-FRONTEND/assets/47224472/db595727-3337-48ff-bd7a-a32ab147469b)

![esquema2](https://github.com/ASCOP-TEAM/ASCOP-FRONTEND/assets/47224472/16e34ccf-9ffb-4825-99e2-236640f84e34)

[Ir para a Introdução](#introducao)

<a name="inicializacao"></a>

## Inicialização em modo de desenvolvimento

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

[Ir para a Introdução](#introducao)

e finalmente para rodar a aplicação em modo desenvolvedor:

```bash
  yarn develop
```
