import React from 'react';
import Layout from '@layout';
import { NextPage } from 'next';
import {
  Col,
  Container,
  Row,
  Form,
  Toast,
  /*  Button, */
  ToastContainer,
} from 'react-bootstrap';
import { SectionContent } from './styles';
import { Button, TextBlockSection, TopBlockSection } from '@components';
import GoogleMaps from 'src/components/googleMaps';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IEmail } from '@interfaces';
import { CheckCheck, XCircle } from 'lucide-react';

const Contato: NextPage = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [showSuccessToast, setShowSuccessToast] = React.useState(false);
  const [showErrorToast, setShowErrorToast] = React.useState(false);

  const {
    handleSubmit,
    register,
    /*   watch, */
    formState: { errors },
    reset,
  } = useForm<IEmail>();

  const onSubmit: SubmitHandler<IEmail> = async (data) => {
    setIsLoading(true);

    const response = await fetch('/api/send/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
      }),
    });

    if (!response.ok) {
      setIsLoading(false);
      setShowErrorToast(true);
      return;
    }

    setIsLoading(false);
    setShowSuccessToast(true);
    reset();
  };

  return (
    <>
      <Layout bgColor={'white'} txColor="black">
        <TopBlockSection.Root backgroud="./backgroud.jpg">
          <TopBlockSection.Title title="Contato" />
          <TopBlockSection.Paragrap paragrap="Agradecemos por fazer parte da nossa jornada de impacto social. Sua participação é valiosa para nós, e estamos aqui para colaborar e responder a quaisquer dúvidas que você possa ter. Esperamos ouvir de você em breve!" />
        </TopBlockSection.Root>

        <Container>
          <SectionContent>
            <Col xs={12} lg={6} className="box light contact">
              <div className="my-2">
                <h3>Formulário de Contato: </h3>
                <p>
                  Se você tiver alguma dúvida, comentário ou solicitação,
                  sinta-se à vontade para entrar em contato conosco preenchendo
                  o formulário abaixo.{' '}
                </p>
              </div>
              <div className="mb-4">
                <Form className="form" onSubmit={handleSubmit(onSubmit)}>
                  {/* dados de contato */}
                  <Row className="mb-2">
                    <Form.Group
                      className=" mb-3"
                      as={Col}
                      md="12"
                      controlId="validationCustom01"
                    >
                      <Form.Label>Nome:</Form.Label>
                      <Form.Control
                        type="text"
                        required
                        {...register('name', {
                          required: 'Por Favor, Preencha seu nome.',
                          pattern: {
                            value: /^[a-z ,.'-]+$/i,
                            message: 'Digite um nome válido',
                          },
                        })}
                        placeholder="Digite seu nome"
                        isInvalid={!!errors.name}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.name?.message}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group
                      className="mb-3"
                      as={Col}
                      md="12"
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

                    <Form.Group
                      as={Col}
                      md="12"
                      className="mb-3"
                      controlId="validationCustom04"
                    >
                      <Form.Label>Telefone:</Form.Label>
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

                    <Form.Group as={Col} md="12" controlId="validationCustom05">
                      <Form.Label>Mensagem:</Form.Label>
                      <Form.Control
                        as="textarea"
                        required
                        {...register('message', {
                          required: 'Por favor, escreva sua mensagem!',
                          pattern: {
                            value: /^[A-Za-z ,.'-]*$/,
                            message: 'Digite uma mensagem válida',
                          },
                        })}
                        placeholder="Digite sua mensagem!"
                        isInvalid={!!errors.message}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.message?.message}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>

                  <div className="send col-auto my-4 ">
                    <Button
                      text="Enviar Mensagem"
                      theme
                      disabled={isLoading}
                      isLoading={isLoading}
                    />
                  </div>
                  <div className="d-flex justify-content-center">
                    <TextBlockSection.Social
                      disableTitle={true}
                      theme={false}
                    />
                  </div>
                </Form>
                <div className="toasts">
                  <ToastContainer
                    className="p-3 fixed-toast "
                    position={'top-center'}
                  >
                    <Toast
                      show={showSuccessToast}
                      onClose={() => setShowSuccessToast(false)}
                      delay={3000}
                      bg={'success'}
                      autohide
                    >
                      <Toast.Body className="d-flex justify-content-around ">
                        Sua mensagem foi enviada com sucesso.
                        <CheckCheck />
                      </Toast.Body>
                    </Toast>
                    {/* Error Toast */}
                    <Toast
                      show={showErrorToast}
                      onClose={() => setShowErrorToast(false)}
                      delay={3000}
                      bg={'danger'}
                      autohide
                    >
                      <Toast.Body className="d-flex justify-content-around ">
                        Ocorreu um erro ao enviar sua mensagem.
                        <XCircle />
                      </Toast.Body>
                    </Toast>
                  </ToastContainer>
                </div>
              </div>
            </Col>
            <Col xs={12} lg={6} className="box light location">
              <div className="my-2 text-content">
                <h3>Aonde estamos?</h3>
                <div>
                  <p>
                    <strong> Endereço:</strong> Av. Jorge Lacerda, 1244 -
                    Carianos, Florianópolis - SC, 88047-010
                  </p>
                </div>
              </div>
              <div className="maps   d-none d-lg-block">
                <GoogleMaps />
              </div>
            </Col>
          </SectionContent>
        </Container>
      </Layout>
    </>
  );
};

export default Contato;
