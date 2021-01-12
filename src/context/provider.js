import React, { useState, useEffect } from "react";
import { fetchProducts } from "../api/fetchProducts";

export const Context = React.createContext();

export default function Provider(props) {
  const [products, setProducts] = useState({});

  const setNewState = async () => {
     const newProducts = await fetchProducts;
    setProducts(newProducts);
  };

  useEffect(() => {
    setNewState();
  }, []);

  return (
    <Context.Provider value={{ products, setProducts }}>
      {props.children}
    </Context.Provider>
  );
}
