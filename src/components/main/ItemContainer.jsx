import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Context } from "../context/Context";
import Item from "./Item";
import usePagination from "../filters/UsePagination";

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const ItemContainer = () => {
    const { products, setProducts } = useContext(Context);
    const { filters } = useContext(Context);
    const { allProducts } = useContext(Context);
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 16;
    const pages = Math.ceil(products.length / itemsPerPage);
    const productsPaginated = usePagination(
        products,
        itemsPerPage,
        currentPage,
        setCurrentPage
    );

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
            <span>{currentPage}</span>of {pages} pages
            <button onClick={productsPaginated.next}>siguiente</button>
            <button onClick={productsPaginated.prev}>anterior</button>
            {productsPaginated.showData().map((product) => (
                <Item {...product} key={product._id} />
            ))}
        </Container>
    );
};

export default ItemContainer;
