import React, { useState, useEffect } from "react";
import { fetchProducts } from "../../api/fetchProducts";
import { fetchUser } from "../../api/fetchUser";

export const Context = React.createContext();

export default function Provider(props) {
    const [products, setProducts] = useState([]);
    const [user, setUser] = useState({
        id: "0",
        name: "Loading...",
        points: 0,
        redeemHistory: {},
    });

    useEffect(() => {
        fetchProducts(setProducts);
        fetchUser(setUser);
    }, []);

    return (
        <Context.Provider value={{ products, setProducts, user, setUser }}>
            {props.children}
        </Context.Provider>
    );
}
