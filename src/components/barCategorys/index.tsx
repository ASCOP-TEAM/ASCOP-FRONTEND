import { Category, Product, ProductData } from '@interfaces';
import React from 'react';
import { Container } from './styles';
import { filterProductsByPriceAndCategory } from '@utils';

interface BarCategorysProps {
  categorias: Category;
  produtos: Product;
  rageFilter: number;
  setCatgory: (idcatgory: number) => void;
  handleFilteredProducts: (filterProduct: ProductData[]) => void;
}

const BarCategorys: React.FC<BarCategorysProps> = ({
  categorias,
  produtos,
  rageFilter,
  setCatgory,
  handleFilteredProducts,
}) => {
  const [selectedCategor, setSelectedCategor] = React.useState<number>(0);

  const handleCategory = (id: number) => {
    setSelectedCategor(id);
    setCatgory(id);

    const filteredByCategoryAndPrice = filterProductsByPriceAndCategory(
      produtos,
      rageFilter,
      id,
    );

    handleFilteredProducts(filteredByCategoryAndPrice || []);
  };

  return (
    <>
      {categorias && (
        <Container
          xs={'auto'}
          lg={5}
          numberofcategories={categorias.data?.length || 0}
        >
          <ul>
            <li
              key={0}
              onClick={() => handleCategory(0)}
              className={selectedCategor === 0 ? 'active' : ''}
            >
              <span>Todos</span>
            </li>
            {categorias &&
              categorias.data?.map((categoria) => (
                <li
                  key={categoria.id}
                  onClick={() => handleCategory(categoria.id)}
                  className={selectedCategor === categoria.id ? 'active' : ''}
                >
                  <span>{categoria.attributes.name}</span>
                </li>
              ))}
          </ul>
        </Container>
      )}
      {!categorias && <p>dados não carregados</p>}
    </>
  );
};

export default BarCategorys;
