import { ProductData } from '@interfaces';
import React, { createContext, useState, useEffect, ReactNode } from 'react';

export interface CartItem {
  item: ProductData;
  price: number; // You can replace this with the actual type of your item price
  quantity: number; // You can replace this with the actual type of your item quantity
  size: string | null;
}

interface CartContextProps {
  cartItems: CartItem[];
  addToCart: (product: CartItem) => void;
  updateToCart: (product: CartItem) => void;
  removeFromCart: (item: CartItem) => void;
  clearCart: () => void;
  getCartTotal: () => number;
}

export const CartContext = createContext<CartContextProps | undefined>(
  undefined,
);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const getProductById = (id: number): CartItem | undefined => {
    return cartItems.find((p) => p.item.id === id);
  };

  const addToCart = (product: CartItem) => {
    const isItemInCart = getProductById(product.item.id);

    let newState: CartItem[] = [];

    if (isItemInCart) {
      let updated = false;

      newState = cartItems.map((c) => {
        if (c.item.id === isItemInCart.item.id && c.size === product.size) {
          updated = true;
          return {
            item: c.item,
            quantity: c.quantity + 1,
            price: isItemInCart.item.attributes.price * (c.quantity + 1),
            size: product.size,
          };
        }
        return c;
      });

      if (!updated) {
        newState.push({
          item: isItemInCart.item,
          quantity: product.quantity,
          price: isItemInCart.item.attributes.price * product.quantity,
          size: product.size,
        });
      }

      setCartItems(newState);
    } else {
      setCartItems([...cartItems, product]);
    }
  };

  const updateToCart = (product: CartItem) => {
    const isItemInCart = getProductById(product.item.id);

    if (isItemInCart) {
      const updatedCartItems = cartItems.map((c) => {
        if (c.item.id === isItemInCart.item.id) {
          return {
            ...c,
            quantity: product.quantity,
            price: isItemInCart.item.attributes.price * product.quantity,
            size: product.size,
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
        cartItem.item.id === product.item.id && cartItem.size === product.size,
    );

    if (isItemInCart && isItemInCart.quantity === 1) {
      setCartItems(
        cartItems.filter(
          (cartItem) =>
            !(
              cartItem.item.id === product.item.id &&
              cartItem.size === product.size
            ),
        ),
      );
    } else if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.item.id === product.item.id && cartItem.size === product.size
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
  };

  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.item.attributes.price * item.quantity,
      0,
    );
  };

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const storedCartItems: string | null = localStorage.getItem('cartItems');

    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateToCart,
        removeFromCart,
        clearCart,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
