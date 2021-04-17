import React, { useContext } from "react";
import styled from "styled-components";
import whiteBag from "../../assets/icons/buy-white.svg";
import RedeemProduct from "./RedeemProduct";
import coin from "../../assets/icons/coin.svg";
import { Context } from "../context/Context";

const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgb(22 194 239 / 62%);
    z-index: 11;
`;

const H3 = styled.h3`
    color: #fff;
    font-weight: 200;
    font-size: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        margin-left: 5px;
    }
`;

const Img = styled.img`
    position: absolute;
    top: 8px;
    right: 4px;
    width: 50px;
    z-index: 10;
`;
const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

const Hover = (props) => {
    const { user, setUser } = useContext(Context);

    return (
        <Container>
            <Img src={whiteBag} />

            <FlexContainer>
                <H3>
                    {props.productCost}
                    <img src={coin} />
                </H3>

                <RedeemProduct
                    productId={props.id}
                    productCost={props.productCost}
                    user={user}
                    setUser={setUser}
                />
            </FlexContainer>
        </Container>
    );
};

export default Hover;
