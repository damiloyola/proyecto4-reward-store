import React, { useState, useEffect } from "react";
import { fetchProducts } from "../../api/fetchProducts";

export const Context = React.createContext();

export default function Provider(props) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts(setProducts);
    }, []);
    return (
        <Context.Provider value={[products, setProducts]}>
            {props.children}
        </Context.Provider>
    );
}
