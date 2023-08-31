import { Category } from '@interfaces';
import React from 'react';
import { Container } from './styles';

interface BarCategorysProps {
  categorias: Category;
  setCatgory: (idcatgory: number) => void;
}

const BarCategorys: React.FC<BarCategorysProps> = ({
  categorias,
  setCatgory,
}) => {
  return (
    <Container>
      <ul>
        <li onClick={() => setCatgory(0)}>
          <span>Outros</span>
        </li>
        {categorias.data.map((categoria) => (
          <>
            <li key={categoria.id} onClick={() => setCatgory(categoria.id)}>
              <span>{categoria.attributes.name}</span>
            </li>
          </>
        ))}
      </ul>
    </Container>
  );
};

export default BarCategorys;
