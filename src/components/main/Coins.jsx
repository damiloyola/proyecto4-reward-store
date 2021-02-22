import React, { useContext } from "react";
import styled from "styled-components";
import { fetchCoins } from "../../api/fetchCoins";
import coin from "../../assets/icons/coin.svg";
import { Context } from "../context/Context";

const Container = styled.div`
    width: 50%;
    margin: 5% auto;
    text-align: center;
    background-color: #ededed;
    padding: 5%;
`;
const H3 = styled.div`
    font-size: 2em;
    margin-bottom: 1%;
`;
const BtnContainer = styled.div`
    width: 70%;
    margin: 5% auto;
    display: flex;
    justify-content: space-around;
    @media (max-width: 1080px) {
        flex-direction: column;
    }
`;
const Btn = styled.button`
    border: none;
    outline: none;
    background-color: white;
    cursor: pointer;
    line-height: 40px;
    border-radius: 10px;
    height: 40px;
    padding: 5px 15px;
    margin-top: 20px;
    transition: 0.7s;
    &:hover {
        box-shadow: 0px 0px 10px 0px #bababa;
    }
`;

const Span = styled.span`
    position: relative;
    top: -40%;
`;

const Coins = () => {
    const { user, setUser } = useContext(Context);

    const addCoins = (amount) => {
        fetchCoins(amount, user, setUser);
    };

    return (
        <Container>
            <H3>Get more coins</H3>
            <p>Choose the amount you want to add</p>
            <BtnContainer>
                <Btn
                    onClick={() => {
                        addCoins(1000);
                    }}
                >
                    <Span>1000</Span>
                    <img src={coin} alt="" />
                </Btn>
                <Btn
                    onClick={() => {
                        addCoins(5000);
                    }}
                >
                    <Span>5000</Span>
                    <img src={coin} alt="" />
                </Btn>
                <Btn
                    onClick={() => {
                        addCoins(7500);
                    }}
                >
                    <Span>7500</Span>
                    <img src={coin} alt="" />
                </Btn>
            </BtnContainer>
        </Container>
    );
};

export default Coins;
