import { ProductData } from '@interfaces';
import React, { createContext, useState, useEffect, ReactNode } from 'react';
import Big from 'big.js';

export interface CartItem {
  id: string;
  item: ProductData;
  price: string | number;
  quantity: number;
  size: string | null;
  color: string | null;
}

interface CartContextProps {
  cartItems: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (item: CartItem) => void;
  clearCart: () => void;
  getCartTotal: () => string;
  getCartTotalQuantity: () => number;
  getCartItemTotal: (productCart: CartItem) => string;
  getUnitaryPrice: (productData: ProductData) => string;
}

export const CartContext = createContext<CartContextProps | undefined>(
  undefined,
);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Função que encontra um produto no carrinho com base no ID do produto
  const getProductById = (id: number): CartItem | undefined => {
    return cartItems.find((cartItem) => cartItem.item.id === id);
  };

  // Função para adicionar um produto ao carrinho
  const addToCart = (product: CartItem) => {
    // Verifica se o produto já está no carrinho
    const isItemInCart = getProductById(product.item.id);

    // Cria uma nova matriz de itens do carrinho
    let newState: CartItem[] = [];

    // Se o produto já está no carrinho
    if (isItemInCart) {
      let updated = false;

      // Percorre todos os itens do carrinho
      newState = cartItems.map((cartItem) => {
        // Verifica se o item corresponde ao produto que estamos adicionando
        if (
          cartItem.id === product.id &&
          cartItem.size === product.size &&
          cartItem.color === product.color
        ) {
          updated = true;
          // Atualiza a quantidade, o preço e outros detalhes do item no carrinho

          const newQuantity = cartItem.quantity + 1;
          // Calcula o novo preço com precisão usando Big.js
          const newPrice = Big(isItemInCart.item.attributes.price)
            .times(newQuantity)
            .toFixed(2);

          return {
            ...cartItem,
            quantity: cartItem.quantity + 1,
            price: newPrice,
          };
        }
        // Mantém o item inalterado se não corresponder ao produto
        return cartItem;
      });

      // Se o produto não foi atualizado, adiciona um novo item ao carrinho
      if (!updated) {
        newState.push({
          id: product.id,
          item: isItemInCart.item,
          quantity: product.quantity,
          price: Big(isItemInCart.item.attributes.price)
            .times(product.quantity)
            .toFixed(2),
          size: product.size,
          color: product.color,
        });
      }

      // Define o estado do carrinho com a nova matriz de itens
      setCartItems(newState);
    } else {
      // Se o produto não estava no carrinho, simplesmente adiciona-o
      setCartItems([
        ...cartItems,
        {
          ...product,
          price: Big(product.item.attributes.price)
            .times(product.quantity)
            .toFixed(2),
        },
      ]);
    }
  };

  const removeFromCart = (productCart: CartItem) => {
    const isItemInCart = cartItems.find(
      (cartItem) =>
        cartItem.item.id === productCart.item.id &&
        cartItem.size === productCart.size &&
        cartItem.color === productCart.color,
    );

    if (productCart.quantity === 1) {
      const updatedLocalStorageItems = cartItems.filter(
        (cartItem) =>
          cartItem.id !== productCart.id ||
          (cartItem.id === productCart.id &&
            cartItem.size !== productCart.size &&
            cartItem.color !== productCart.color),
      );
      setCartItems(updatedLocalStorageItems);
      localStorage.removeItem('cartItems');
    } else if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === productCart.id && cartItem.size === productCart.size
            ? {
                ...cartItem,
                quantity: cartItem.quantity - 1,
                price: Big(cartItem.price)
                  .minus(cartItem.item.attributes.price)
                  .toFixed(2),
              }
            : cartItem,
        ),
      );
    }
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('cartItems');
  };

  const getCartTotal = () => {
    return cartItems
      .reduce((total, item) => {
        const itemPrice = Big(item.item.attributes.price);
        const itemQuantity = Big(item.quantity);
        const itemTotal = itemPrice.times(itemQuantity);
        return total.plus(itemTotal);
      }, Big(0))
      .toFixed(2)
      .replace('.', ',');
  };

  const getCartItemTotal = (productCart: CartItem): string => {
    const totalItemPrice = Big(productCart.price);
    return totalItemPrice.toFixed(2).replace('.', ',');
  };

  const getUnitaryPrice = (productData: ProductData): string => {
    const price = Big(productData.attributes.price);
    return price.toFixed(2).replace('.', ',');
  };

  const getCartTotalQuantity = () => {
    return cartItems.reduce(
      (totalQuantity, item) => totalQuantity + item.quantity,
      0,
    );
  };

  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    } else {
      const storedCartItems: string | null = localStorage.getItem('cartItems');

      if (storedCartItems) {
        try {
          const parsedCartItems = JSON.parse(storedCartItems);

          if (Array.isArray(parsedCartItems)) {
            if (cartItems.length === 0) {
              setCartItems(parsedCartItems);
            }
          } else {
            localStorage.removeItem('cartItems');
          }
        } catch (error) {
          localStorage.removeItem('cartItems');
        }
      }
    }
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal,
        getCartTotalQuantity,
        getCartItemTotal,
        getUnitaryPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
