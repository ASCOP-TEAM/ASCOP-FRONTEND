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
  const [selectedCategor, setSelectedCategor] = React.useState<number>(0);

  const handleCategory = (id: number) => {
    setSelectedCategor(id);
    setCatgory(id);
  };

  return (
    <Container
      xs={'auto'}
      numberOfCategories={categorias.data ? categorias.data.length : 0}
    >
      <ul>
        <li
          onClick={() => handleCategory(0)}
          className={selectedCategor === 0 ? 'active' : ''}
        >
          <span>Todos</span>
        </li>
        {categorias.data.map((categoria) => (
          <>
            <li
              key={categoria.id}
              onClick={() => handleCategory(categoria.id)}
              className={selectedCategor === categoria.id ? 'active' : ''}
            >
              <span>{categoria.attributes.name}</span>
            </li>
          </>
        ))}
      </ul>
    </Container>
  );
};

export default BarCategorys;
