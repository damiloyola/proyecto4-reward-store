import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { Context } from "../context/Context";
import { fetchHistory } from "../../api/fetchHistory";
import coin from "../../assets/icons/coin.svg";

const HistoryContainer = styled.div`
    width: 50%;
    margin: 5% auto;
    background-color: #ededed;
    padding: 5%;
    align-text: center;
    p {
        text-align: center;
    }
`;

const Products = styled.div``;
const ProductsImg = styled.img`
    width: 40%;
`;

const H4 = styled.h4`
    border-bottom: 1px solid #000;
    padding-bottom: 10px;
    margin-bottom: 10px;
    width: 80%;
    text-align: center;
    font-weight: 400;
`;
const H3 = styled.h4`
    font-size: 2em;
    margin-bottom: 1%;
    font-weight: 200;
    text-align: center;
`;
const ProductsCoins = styled.div`
    display: flex;
    align-items: center;
    img {
        width: 25px;
        margin: 5px 0 0 5px;
    }
`;
const ProductsText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60%;
`;
const ProductsContainer = styled.div`
    display: flex;
    background-color: #fff;
    padding: 10px;
    margin: 5% 0;
    border-radius: 10px;
`;

const History = () => {
    useEffect(() => {
        fetchHistory(setPurchaseHistory);
    }, []);

    const { purchaseHistory, setPurchaseHistory } = useContext(Context);
    const history =
        purchaseHistory.length < 10
            ? purchaseHistory
            : purchaseHistory.slice(-10);
    console.log(history);
    return (
        <HistoryContainer>
            <H3>History</H3>
            <p>Last 10 products purchased</p>
            <Products>
                {history.reverse().map((product) => (
                    <ProductsContainer>
                        <ProductsImg src={product.img.url} alt="" />
                        <ProductsText>
                            <H4>{product.name}</H4>
                            <ProductsCoins>
                                {product.cost}
                                <img src={coin} alt="" />
                            </ProductsCoins>
                        </ProductsText>
                    </ProductsContainer>
                ))}
            </Products>
        </HistoryContainer>
    );
};

export default History;
