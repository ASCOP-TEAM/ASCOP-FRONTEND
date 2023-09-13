// DadosNaoCarregados.js
import { Category } from '@interfaces';
import React from 'react';
import { ErrorDataNotLoaded } from 'src/components/errorDataNotLoaded';

interface ProductDefaultProps {
  categorias: Category;
  categoryid: number;
  upperValue: number;
}

export const ProductDefault = ({
  categorias,
  categoryid,
  upperValue,
}: ProductDefaultProps) => {
  return (
    <ErrorDataNotLoaded.Root>
      <ErrorDataNotLoaded.Title>
        <h2 className="m-0">Produto não encontrado</h2>
      </ErrorDataNotLoaded.Title>
      <ErrorDataNotLoaded.Content>
        Não encontramos produtos na categoria{' '}
        <strong>
          {categorias &&
            categorias.data.map(
              (cat) => cat.id === categoryid && cat.attributes.name,
            )}{' '}
        </strong>
        com valores abaixo de
        <strong> R${upperValue}</strong>. Verifique se há produtos disponíveis
        para essa categoria com um valor superiore a R${upperValue}.
      </ErrorDataNotLoaded.Content>
    </ErrorDataNotLoaded.Root>
  );
};
