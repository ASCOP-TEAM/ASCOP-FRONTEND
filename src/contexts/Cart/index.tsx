import { ProductData } from '@interfaces';
import React, { createContext, useState, useEffect, ReactNode } from 'react';

export interface CartItem {
  id: string;
  item: ProductData;
  price: number;
  quantity: number;
  size: string | null;
  color: string | null;
}

interface CartContextProps {
  cartItems: CartItem[];
  addToCart: (product: CartItem) => void;
  updateToCart: (product: CartItem) => void;
  removeFromCart: (item: CartItem) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartTotalQuantity: () => number;
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
          return {
            ...cartItem,
            quantity: cartItem.quantity + 1,
            price: isItemInCart.item.attributes.price * (cartItem.quantity + 1),
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
          price: isItemInCart.item.attributes.price * product.quantity,
          size: product.size,
          color: product.color,
        });
      }

      // Define o estado do carrinho com a nova matriz de itens
      setCartItems(newState);
    } else {
      // Se o produto não estava no carrinho, simplesmente adiciona-o
      setCartItems([...cartItems, product]);
    }
  };

  const updateToCart = (product: CartItem) => {
    const isItemInCart = getProductById(product.item.id);

    if (isItemInCart) {
      const updatedCartItems = cartItems.map((c) => {
        // Verifique se o produto atual tem o mesmo ID e tamanho nulo
        if (c.item.id === product.item.id && c.size === null) {
          return {
            ...c,
            size: product.size,
          };
        }
        // Verifique se o produto tem o mesmo ID e tamanho não nulo
        else if (c.item.id === product.item.id && c.size !== null) {
          return {
            ...c,
            quantity: product.quantity,
          };
        }
        return c;
      });

      setCartItems(updatedCartItems);
    }
  };

  const removeFromCart = (product: CartItem) => {
    const isItemInCart = cartItems.find(
      (cartItem) =>
        cartItem.item.id === product.item.id &&
        cartItem.size === product.size &&
        cartItem.color === product.color,
    );

    if (product.quantity === 1) {
      const updatedLocalStorageItems = cartItems.filter(
        (cartItem) =>
          cartItem.id !== product.id ||
          (cartItem.id === product.id &&
            cartItem.size !== product.size &&
            cartItem.color !== product.color),
      );
      setCartItems(updatedLocalStorageItems);
      localStorage.removeItem('cartItems');
    } else if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === product.id && cartItem.size === product.size
            ? {
                ...cartItem,
                quantity: cartItem.quantity - 1,
                price: cartItem.price - cartItem.item.attributes.price,
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
    return cartItems.reduce(
      (total, item) => total + item.item.attributes.price * item.quantity,
      0,
    );
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
        updateToCart,
        removeFromCart,
        clearCart,
        getCartTotal,
        getCartTotalQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
