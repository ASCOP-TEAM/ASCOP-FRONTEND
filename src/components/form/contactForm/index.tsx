import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Col, Form, Row } from 'react-bootstrap';
import { Alert, Button } from '@components';
import { IEmail } from '@interfaces';

const ContactForm: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const [showAlert, setShowAlert] = React.useState(false);
  const [alertMessage, setAlertMessage] = React.useState('');
  const [alertType, setAlertType] = React.useState<'success' | 'error'>(
    'success',
  );

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<IEmail>();

  const onSubmit: SubmitHandler<IEmail> = async (data) => {
    try {
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
        setAlertType('error');
        setAlertMessage(
          'Não foi possivel enviar sua mensagem! tente novamente!',
        );
        setShowAlert(true);
        return;
      }

      setAlertType('success');
      setAlertMessage('Sua mensagem foi enviada com sucesso!');
      setShowAlert(true);

      setIsLoading(false);
      reset();
    } catch (error) {
      let errorMessage = 'Erro ao processar o pedido';

      if (error instanceof Error) {
        errorMessage = `Erro: ${error.message}`;
      }

      setAlertType('error');
      setAlertMessage(errorMessage);
      setShowAlert(true);
      setIsLoading(false);
      console.error(error);
    }
  };

  return (
    <>
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
                required: 'Telefone é Necessário!',
                pattern: {
                  value: /^\(?\d{2}\)?\s?9\d{4}-?\d{4}$/,
                  message:
                    'Telefone inválido, siga o exemplo: "(XX) 999999999", "XX999999999" ou "XX 99999-9999"',
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
            disabled={isLoading}
            isLoading={isLoading}
            theme="secundary"
          />
        </div>
      </Form>

      {Object.keys(errors).length > 0 && (
        <Alert
          onClose={() => console.log('')}
          message={
            Object.keys(errors).length === 1
              ? Object.values(errors)
                  .map((error) => error.message)
                  .join(' ')
              : 'Existem erros de validação no formulário. Por favor verifique os campos.'
          }
          type="error"
          show
        />
      )}

      {showAlert && (
        <Alert
          show={showAlert}
          onClose={() => setShowAlert(false)}
          message={alertMessage}
          type={alertType}
        />
      )}
    </>
  );
};

export default ContactForm;
