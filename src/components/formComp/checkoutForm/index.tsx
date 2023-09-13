import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useForm, SubmitHandler } from 'react-hook-form';

import { Alert, Button } from '@components';
import { IDadosCliente } from '@interfaces';

interface IEndereco {
  address: string;
  city: string;
  state: string;
}

interface CheckoutFormProps {
  onSubmit: SubmitHandler<IDadosCliente>;
}

export function CheckoutForm({ onSubmit }: CheckoutFormProps) {
  const [endereco, setEndereco] = React.useState<IEndereco>();
  const [cepEncontrado, setCepEncontrado] = React.useState(false);
  const [editMode, setEditMode] = React.useState(true);

  const {
    handleSubmit,
    register,
    setValue,
    getValues,
    trigger,

    formState: { errors },
  } = useForm<IDadosCliente>();

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const handleEditButtonClick = () => {
    toggleEditMode();
  };

  const handleConfirmButtonClick = () => {
    if (editMode) {
      trigger().then((isValid) => {
        if (isValid) {
          onSubmit(getValues());
          setEditMode(false);
        }
      });
    }
  };

  const buscarEnderecoPorCep = async (cep: string) => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      if (!data.error) {
        setCepEncontrado(true);
        setEndereco({
          address: data.logradouro,
          city: data.localidade,
          state: data.uf,
        });
      }
    } catch (error) {
      setCepEncontrado(false);
      console.error('Erro ao buscar endereço:', error);
    }
  };

  return (
    <>
      <Form className="m-2" onSubmit={handleSubmit(onSubmit)}>
        {/* dados de contato */}
        <Row className="mb-2">
          <Form.Group
            className=" mb-3"
            as={Col}
            md="6"
            sm="12"
            controlId="validationCustom01"
          >
            <Form.Label>Nome:</Form.Label>
            <Form.Control
              type="text"
              {...register('name', {
                required: {
                  value: true,
                  message: 'Por Favor, Preencha seu nome.',
                },
                pattern: {
                  value: /^[A-Z][a-z ,.'-]*$/,
                  message: 'Digite um nome válido!',
                },
              })}
              placeholder="Digite seu primeiro nome"
              isInvalid={!!errors.name}
              readOnly={!editMode}
            />
            <Form.Control.Feedback type="invalid">
              {errors.name?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            className=" mb-3"
            as={Col}
            md="6"
            sm="12"
            controlId="validationCustom02"
          >
            <Form.Label>Sobre Nome:</Form.Label>
            <Form.Control
              type="text"
              {...register('lastname', {
                required: {
                  value: true,
                  message: 'Por Favor, Preencha seu Sobre Nome.',
                },
                pattern: {
                  value: /^[a-z ,.'-]+$/i,
                  message: 'Digite um sobre nome válido!',
                },
              })}
              placeholder={'Digite seu sobre nome'}
              isInvalid={!!errors.lastname}
              readOnly={!editMode}
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
                required: true,
              })}
              required
              placeholder="Digite seu email"
              isInvalid={!!errors.email}
              readOnly={!editMode}
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
                required: 'Telefone é obrigatório!',
                pattern: {
                  value: /^\(?\d{2}\)?\s?9\d{4}-?\d{4}$/,
                  message:
                    'Telefone inválido, siga o exemplo: "(XX) 999999999", "XX999999999" ou "XX 99999-9999"',
                },
              })}
              placeholder="Digite seu Telefone"
              isInvalid={!!errors.phone}
              readOnly={!editMode}
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
              {...register('cep', {
                required: {
                  value: true,
                  message: 'Por Favor, Preencha seu cep.',
                },
                pattern: {
                  value: /^\d{5}-?\d{3}$/,
                  message: 'Digite um CEP válido!',
                },
              })}
              onBlur={(e) => buscarEnderecoPorCep(e.target.value)}
              isInvalid={!!errors.cep}
              readOnly={!editMode}
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
              {...register('address', {
                required: {
                  value: true,
                  message: 'Seu Endereço é obrigatório!',
                },
              })}
              value={endereco && endereco.address}
              onChange={(e) => setValue('address', e.target.value)}
              isInvalid={!!errors.address}
              readOnly={!editMode || cepEncontrado}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Numero</Form.Label>
            <Form.Control
              type="number"
              placeholder="Numero "
              {...register('number', {
                required: {
                  value: true,
                  message: 'Numero é obrigatório!',
                },
              })}
              isInvalid={!!errors.number}
              readOnly={!editMode}
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
              {...register('city', {
                required: {
                  value: true,
                  message: 'Cidade é obrigatório!',
                },
              })}
              value={endereco && endereco.city}
              onChange={(e) => setValue('city', e.target.value)}
              isInvalid={!!errors.city}
              readOnly={!editMode || cepEncontrado}
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
              {...register('state', {
                required: {
                  value: true,
                  message: 'Estado é obrigatório!',
                },
              })}
              value={endereco && endereco.state}
              onChange={(e) => setValue('state', e.target.value)}
              isInvalid={!!errors.state}
              readOnly={!editMode || cepEncontrado}
            />
            {errors.state && (
              <Form.Control.Feedback type="invalid">
                {errors.state.message}
              </Form.Control.Feedback>
            )}
          </Form.Group>
        </Row>

        <Row className="mb-2">
          <Form.Group as={Col} md="12" controlId="validationCustom06">
            <Form.Label>Complemento (opcional)</Form.Label>
            <Form.Control
              type="text"
              placeholder="Complemento do seu endereço"
              {...register('complement')}
              readOnly={!editMode}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <div className="enviar col-auto my-4">
          {!editMode && (
            <Button
              className="w-100 d-flex gap-3 justify-content-center align-items-center"
              type="button"
              text="EDITAR DADOS"
              theme={'primary'}
              onClick={handleEditButtonClick}
            />
          )}

          {editMode && (
            <Button
              className="w-100  "
              type="submit"
              text="CONFIRMAR DADOS"
              onClick={handleConfirmButtonClick}
            />
          )}
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
    </>
  );
}
