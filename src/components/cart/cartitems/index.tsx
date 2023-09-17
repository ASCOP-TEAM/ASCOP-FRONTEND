import { CartContext, CartItem } from '@contexts';
import { Minus, Plus } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { Li } from './style';

interface CartItemsProps {
  product: CartItem;
}

export const CartItems: React.FC<CartItemsProps> = ({ product }) => {
  const context = React.useContext(CartContext);

  return (
    <Li key={product.item.id} className="  d-flex justify-content-between">
      <div className="d-flex">
        <div className="img-product ">
          <Image
            width={115}
            height={115}
            src={
              product.item.attributes.thumbnail.data.attributes.formats.small
                .url
            }
            alt="produto ASCOP"
            className="img-fluid"
            priority={false}
          />
        </div>
        <div className="info-product mr-3">
          <div className="title">
            <h4>{product.item.attributes.title}</h4>
          </div>
          <div className="price">
            <h4>
              R$ <strong>{product.item.attributes.price} </strong>
            </h4>
          </div>
          <div className="sizes mb-3">
            <p className="m-0">
              Tamanho:{' '}
              <strong>
                {product.size != null
                  ? product.size
                  : product.item.attributes.variantes.length === 1
                  ? product.item.attributes.variantes[0].tamanhos.data
                      .attributes.tamanho
                  : null}
              </strong>
            </p>
          </div>
          <div className="colors mb-3">
            <p className="m-0">
              Cor:{' '}
              <strong>
                {product.color != null
                  ? product.color
                  : product.size &&
                    product.item.attributes.variantes.length === 1
                  ? product.item.attributes.variantes[0].cores.data.attributes
                      .cor
                  : null}
              </strong>
            </p>
          </div>
        </div>
      </div>

      <div className="action-product d-flex justify-content-between align-items-center">
        <button onClick={() => context?.removeFromCart(product)}>
          <Minus />
        </button>

        <h5>{product.quantity}</h5>
        <button onClick={() => context?.addToCart(product)}>
          <Plus />
        </button>
      </div>
    </Li>
  );
};
