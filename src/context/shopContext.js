import { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);
export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);


  useEffect(() => {
    const item = localStorage.getItem("cart");
    setCartItems(JSON.parse(item) ?? []);
  }, []);

  useEffect(() => {
    const item = localStorage.getItem("cart");
    if ( cartItems.length >= 1)
      localStorage.setItem("cart", JSON.stringify(cartItems));
    // else localStorage.removeItem("cart");
  }, [cartItems]);



  const addToCart = (itemID) => {
    setCartItems(
      cartItems.find((r) => r.id === itemID) === undefined
        ? [...cartItems, { id: itemID, count: 1 }]
        : cartItems.map((f) => {
            if (f.id === itemID) return { ...f, count: f.count + 1 };
            return f;
          })
    );
  };
  const removeFromCart = (itemID) => {
    setCartItems(
      cartItems.filter((i) => i.id === itemID)[0].count > 1
        ? cartItems.map((f) =>
            f.id === itemID ? { ...f, count: f.count - 1 } : f
          )
        : cartItems.filter((i) => i.id !== itemID)
    );
  };
  const contextValue = { cartItems, addToCart, removeFromCart,setCartItems };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
