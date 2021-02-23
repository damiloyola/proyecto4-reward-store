import React, { useState, useEffect } from "react";
import { fetchProducts } from "../../api/fetchProducts";
import { fetchUser } from "../../api/fetchUser";

export const Context = React.createContext();

export default function Provider(props) {
    const [products, setProducts] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const [user, setUser] = useState({
        id: "0",
        name: "Loading...",
        points: 0,
        redeemHistory: {},
    });
    const [filters, setFilters] = useState({
        category: "all categories",
        price: "all prices",
    });

    useEffect(() => {
        fetchProducts(setProducts);
        fetchProducts(setAllProducts);
        fetchUser(setUser);
    }, []);

    return (
        <Context.Provider
            value={{
                products,
                setProducts,
                allProducts,
                setAllProducts,
                user,
                setUser,
                filters,
                setFilters,
            }}
        >
            {props.children}
        </Context.Provider>
    );
}
