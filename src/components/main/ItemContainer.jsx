import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Context } from "../context/Context";
import Item from "./Item";
import usePagination from "../filters/UsePagination";
import NextArrow from "../../assets/icons/arrow-right.svg";
import PrevArrow from "../../assets/icons/arrow-left.svg";
const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const Pagination = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

const Button = styled.div`
    cursor: pointer;
    margin: 20px;
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
        <div>
            <Pagination>
                <Button onClick={productsPaginated.prev}>
                    <img src={PrevArrow} alt="next page" />
                </Button>
                <span>{currentPage}</span>of {pages} pages
                <Button onClick={productsPaginated.next}>
                    <img src={NextArrow} alt="next page" />
                </Button>
            </Pagination>
            <Container>
                {productsPaginated.showData().map((product) => (
                    <Item {...product} key={product._id} />
                ))}
            </Container>
            <Pagination>
                <Button onClick={productsPaginated.prev}>
                    <img src={PrevArrow} alt="next page" />
                </Button>
                <span>{currentPage}</span>of {pages} pages
                <Button onClick={productsPaginated.next}>
                    <img src={NextArrow} alt="next page" />
                </Button>
            </Pagination>
        </div>
    );
};

export default ItemContainer;
