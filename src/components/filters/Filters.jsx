import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";

import { Context } from "../context/Context";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0% 10%;
    padding: 1% 0;
    border-bottom: 1px solid #d9d9d9;
`;

const Select = styled.select`
    font-size: 16px;
    padding: 5px 10px;
    border: none;
    outline: none;
    margin: 0 10px;
    cursor: pointer;
`;

const Filters = () => {
    const { filters, setFilters } = useContext(Context);
    const { allProducts, setAllProducts } = useContext(Context);

    let categories = [
        ...new Set(allProducts.map((product) => product.category)),
    ].sort();

    const handleCategory = (event) => {
        let { value } = event.target;
        const newCategory = { ...filters, category: value };
        setFilters(newCategory);
    };

    return (
        <Container>
            <Select name="category" onChange={handleCategory}>
                <option value={"all categories"}>All Categories</option>
                {categories.map((category) => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </Select>
        </Container>
    );
};
export default Filters;
