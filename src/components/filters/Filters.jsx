import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import Pagination from "./Pagination";
import Arrow from "../../assets/icons/arrow-right.svg";
import { Context } from "../context/Context";
import { fetchProducts } from "../../api/fetchProducts";

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding-left: 20px;
    border-left: 1px solid #d9d9d9;
    align-items: center;
    color: #a3a3a3;
`;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0% 10%;
    padding: 1% 0;
    border-bottom: 1px solid #d9d9d9;
`;

const LeftContainer = styled.div`
    display: flex;
    align-items: center;
`;

const Selector = styled.ul`
    display: flex;
    justify-content: space-between;
    list-style-type: none;
`;

const Li = styled.li`
    margin-right: 15px;
    background-color: #ededed;
    border-radius: 20.5px;
    color: #a3a3a3;
    padding: 10px 15px;
    cursor: pointer;
`;

const Img = styled.div`
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
            <LeftContainer>
                <Pagination />
                <FilterContainer>
                    <select name="category" onChange={handleCategory}>
                        <option value={"all categories"}>All Categories</option>
                        {categories.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </FilterContainer>
            </LeftContainer>
            <Img>
                <img src={Arrow} alt="next page" />
            </Img>
        </Container>
    );
};
export default Filters;
