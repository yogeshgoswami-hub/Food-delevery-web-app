import React from "react";
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

  const useCart = () => useContext(CartContext);

  const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // ✅ ADD TO CART
    const addToCart = (product) => {
      const exist = cart.find((item) => item.id === product.id);

      if (exist) {
        setCart(
          cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        );
      } else {
        setCart([...cart, { ...product, quantity: 1 }]);
      }
    };

    // ❌ REMOVE ITEM
    const removeFromCart = (id) => {
      setCart(cart.filter((item) => item.id !== id));
    };

    // ➕ INCREASE
    const increaseQty = (id) => {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
        ),
      );
    };

    // ➖ DECREASE
    const decreaseQty = (id) => {
      setCart(
        cart.map((item) =>
          item.id === id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        ),
      );
    };

    // 💰 TOTAL PRICE
    const totalPrice = cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );

    return (
      <CartContext.Provider
        value={{
          cart,
          addToCart,
          removeFromCart,
          increaseQty,
          decreaseQty,
          totalPrice,
        }}
      >
        {children}
        <div><h1>your cart is empty</h1></div>
      </CartContext.Provider>
    );

  };
export default useCart;
