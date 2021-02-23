import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { Context } from "../context/Context";
import Item from "./Item";

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const ItemContainer = () => {
    const { products, setProducts } = useContext(Context);
    const { filters } = useContext(Context);
    const { allProducts } = useContext(Context);

    const handleFilters = async () => {
        if (filters.category == "all categories") {
            setProducts(allProducts);
        } else {
            setProducts(
                allProducts.filter(
                    (product) => product.category === filters.category
                )
            );
        }
    };

    useEffect(() => {
        handleFilters();
    }, [filters]);

    return (
        <Container>
            {products.map((product) => (
                <Item {...product} key={product._id} />
            ))}
        </Container>
    );
};

export default ItemContainer;
