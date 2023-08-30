import React, { useContext } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Main } from '@layout';
import { Col, Form, Row } from 'react-bootstrap';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button, ButtonMercadoLivreFake, Section } from './style';
import { CartContext } from '@contexts';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

interface IEndereco {
  address: string;
  city: string;
  state: string;
}

interface ICompletetion extends IEndereco {
  name: string;
  lastname: string;

  email: string;
  phone: string;

  cep: string;
  number: string;
  complement: string;
}

/* MercadoPago.initMercadoPago('TEST-faa94ae4-4d57-4880-828e-2de97bfd11ff'); */
const Carrinho: NextPage = () => {
  const {
    handleSubmit,
    register,
    setValue,
    /*     watch, */
    formState: { errors },
  } = useForm<ICompletetion>();

  const [endereco, setEndereco] = React.useState<IEndereco>();
  const [cepEncontrado, setCepEncontrado] = React.useState(true);
  const [preferenceId, setPreferenceId] = React.useState(null);
  const [isComponentVisible, setIsComponentVisible] = React.useState(false);
  const context = useContext(CartContext);
  const router = useRouter();

  const loadMercadoPago = async () => {
    try {
      const MercadoPago = await import('@mercadopago/sdk-react');

      MercadoPago.initMercadoPago('TEST-faa94ae4-4d57-4880-828e-2de97bfd11ff');
      setIsComponentVisible(true);
    } catch (error) {
      console.error('Erro ao carregar Mercado Pago:', error);
    }
  };

  const onSubmit: SubmitHandler<ICompletetion> = async (
    data: ICompletetion,
  ) => {
    const itemsFromCart = context?.cartItems;

    if (itemsFromCart?.length) {
      const items = [
        ...itemsFromCart.map((cart) => {
          const categoryId = cart.item.attributes.categoria?.data || null;
          const pictureUrl =
            cart.item.attributes.thumbnail?.data?.previewUrl || null;

          return {
            id: cart.item.id,
            title: cart.item.attributes.title,
            currency_id: 'BRL',
            picture_url: String(pictureUrl),
            description: cart.item.attributes.description,
            category_id: String(categoryId),
            unit_price: Number(cart.item.attributes.price),
            quantity: Number(cart.quantity),
          };
        }),
      ];

      const payer = {
        phone: {
          area_code: separarNumeroEAreaCode(data.phone).areaCode,
          number: Number(separarNumeroEAreaCode(data.phone).numero),
        },
        address: {
          zip_code: data.cep,
          street_name: data.address,
          street_number: Number(data.number),
        },
        email: data.email,
        identification: { number: '', type: '' },
        name: data.name,
        surname: data.lastname,
        date_created: new Date(),
        last_purchase: new Date(),
      };

      try {
        const response = await fetch('/api/create_preference', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ items, payer }),
        });

        if (!response.ok) {
          throw new Error('Erro ao criar preferência de pagamento');
        }

        const preference = await response.json();
        setPreferenceId(preference.id);
        setIsComponentVisible(true);
      } catch (error) {
        setPreferenceId(null);
        setIsComponentVisible(false);
        console.error('Erro ao processar pedido:', error);
      }
    } else {
      console.error('Carrinho de compras vazio ou indisponível');
      router.push('/loja');
    }
  };

  const buscarEnderecoPorCep = async (cep: string) => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      if (data.erro) {
        setCepEncontrado(false);
      } else {
        setCepEncontrado(true);
        setEndereco({
          address: data.logradouro,
          city: data.localidade,
          state: data.uf,
        });
      }
    } catch (error) {
      console.error('Erro ao buscar endereço:', error);
    }
  };

  const renderCheckoutButton = (preferenceId: string) => {
    if (!preferenceId || !isComponentVisible) return null;
    const Wallet = dynamic(
      () => import('@mercadopago/sdk-react').then((module) => module.Wallet),
      {
        ssr: false,
      },
    );
    return <Wallet initialization={{ preferenceId: preferenceId }} />;
  };

  function separarNumeroEAreaCode(numeroTelefone: string) {
    const regex = /\((\d{2})\)|(\d{2})/; // Isso corresponderá a (XX) ou XX
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

  React.useEffect(() => {
    loadMercadoPago();
  }, []);

  return (
    <>
      <Head>
        <title>Cliente - Dados </title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Main>
        <Section>
          <Row className="justify-content-between">
            <Col md={6} className="container-form">
              <h2>Prencha os dados adicionais</h2>
              <p>
                Preencha seus dados para que possamos enviar a sua encomenda.
              </p>
              {!cepEncontrado && (
                <div className="alert alert-danger">
                  CEP não encontrado. Por favor, verifique o CEP informado.
                </div>
              )}
              <Form className="m-2" onSubmit={handleSubmit(onSubmit)}>
                {/* dados de contato */}
                <Row className="mb-2">
                  <Form.Group
                    className=" mb-3"
                    as={Col}
                    md="6"
                    controlId="validationCustom01"
                  >
                    <Form.Label>Nome:</Form.Label>
                    <Form.Control
                      type="text"
                      required
                      {...register('name', {
                        required: 'Por Favor, Preencha seu nome.',
                        pattern: {
                          value: /^[A-Z][a-z ,.'-]*$/,
                          message: 'Digite um nome válido',
                        },
                      })}
                      placeholder="Digite seu primeiro nome"
                      isInvalid={!!errors.name}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.name?.message}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group
                    className=" mb-3"
                    as={Col}
                    md="6"
                    controlId="validationCustom02"
                  >
                    <Form.Label>Sobre Nome:</Form.Label>
                    <Form.Control
                      type="text"
                      required
                      {...register('lastname', {
                        required: true,
                        pattern: /^[a-z ,.'-]+$/i,
                      })}
                      placeholder={'Digite seu sobre nome'}
                      isInvalid={!!errors.lastname}
                    />
                    <Form.Control.Feedback type="invalid">
                      Por Favor, Preencha seu Sobrenome!
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>

                {/* dados de contato */}

                <Row className="mb-2">
                  <Form.Group
                    className=" mb-3"
                    as={Col}
                    md="6"
                    controlId="validationCustom03"
                  >
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                      type="email"
                      {...register('email', {
                        required: 'Seu Email é obrigatório',
                      })}
                      required
                      placeholder="Digite seu email"
                      isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email?.message}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} md="6" controlId="validationCustom04">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      type="tel"
                      {...register('phone', {
                        required: 'Phone number is required',
                        pattern: {
                          value: /^\(?\d{2}\)?\s?9\d{4}-?\d{4}$/,
                          message:
                            'Invalid phone number, exemple: "(11) 999999999", "11999999999" ou "11 99999-9999"',
                        },
                      })}
                      placeholder="Digite seu Telefone"
                      isInvalid={!!errors.phone}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.phone?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>

                {/* dados de entrega */}
                <Row className="mb-2">
                  <Form.Group as={Col} md="3" controlId="validationCustom07">
                    <Form.Label>Cep</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Cep"
                      required
                      {...register('cep', {
                        required: 'Por Favor, Preencha seu cep.',
                        pattern: {
                          value: /^\d{5}-?\d{3}$/,
                          message: 'Digite um CEP válido',
                        },
                      })}
                      onBlur={(e) => buscarEnderecoPorCep(e.target.value)}
                      isInvalid={!!errors.cep}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.cep?.message}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} md="6" controlId="validationCustom05">
                    <Form.Label>Endereço</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Endereço "
                      required
                      {...register('address', {
                        required: true,
                      })}
                      value={endereco && endereco.address}
                      onChange={(e) => setValue('address', e.target.value)}
                      isInvalid={!!errors.address}
                      readOnly
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid city.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} md="3" controlId="validationCustom05">
                    <Form.Label>Numero</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Numero "
                      required
                      {...register('number')}
                      isInvalid={!!errors.number}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid city.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Row className="mb-2">
                  <Form.Group as={Col} md="6" controlId="validationCustom05">
                    <Form.Label>Cidade</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Cidade"
                      required
                      {...register('city', {
                        required: true,
                      })}
                      value={endereco && endereco.city}
                      onChange={(e) => setValue('city', e.target.value)}
                      isInvalid={!!errors.city}
                      readOnly
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid city.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} md="6" controlId="validationCustom06">
                    <Form.Label>Estado</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Estado"
                      required
                      {...register('state', {
                        required: true,
                      })}
                      value={endereco && endereco.state}
                      onChange={(e) => setValue('state', e.target.value)}
                      isInvalid={!!errors.state}
                      readOnly
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid state.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Row className="mb-2">
                  <Form.Group as={Col} md="12" controlId="validationCustom06">
                    <Form.Label>Complemento (opcional)</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Complemento do seu endereço"
                      {...register('complement')}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid state.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <div className="enviar col-auto my-4 ">
                  <Button disabled={!!preferenceId}>Confirmar Dados</Button>
                </div>
              </Form>
            </Col>

            <Col md={6} className="container-checkout">
              <Row className="flex-column justify-content-around m-2">
                <Col className="values-payment">
                  <Col>
                    <h2>Resumo do Pedido</h2>
                  </Col>

                  <Col className="d-flex justify-content-between">
                    <p>Produtos selecionados</p>
                    <p>
                      {context &&
                        `${context.cartItems && context.cartItems.length}`}
                    </p>
                  </Col>

                  <Col className="d-flex justify-content-between">
                    <p>Frete</p>
                    <p>
                      <strong>R$ 0</strong>
                    </p>
                  </Col>

                  <Col className="d-flex justify-content-between">
                    <h3>Total</h3>
                    <h2>
                      <strong>
                        {context &&
                          `R$ ${
                            context.getCartTotal() ? context.getCartTotal() : 0
                          }`}
                      </strong>
                    </h2>
                  </Col>

                  <Col>
                    <p>Serviço de entrega</p>
                    <Col className="services"></Col>
                  </Col>

                  <Col className="enviar col-auto my-4 ">
                    {isComponentVisible && preferenceId ? (
                      renderCheckoutButton(preferenceId)
                    ) : (
                      <ButtonMercadoLivreFake disabled>
                        <div>
                          <Image
                            src={'/logomercadopago.png'}
                            width={30}
                            height={30}
                            loading="lazy"
                            alt="mercado pago logo"
                          />
                        </div>
                        <span className="text-1XN644 svelte-16x6ay9">
                          Pay with Mercado Pago
                        </span>
                      </ButtonMercadoLivreFake>
                    )}
                  </Col>
                </Col>
                <Col className="payment-image">
                  <Image
                    src={'/pagamento.png'}
                    width={200}
                    height={150}
                    alt="forma de pagamento"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Section>
      </Main>
    </>
  );
};

export default Carrinho;
