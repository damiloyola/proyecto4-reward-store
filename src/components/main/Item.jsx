import React, { useState } from "react";
import styled from "styled-components";

import blueBag from "../../assets/icons/buy-blue.svg";
import Hover from "./Hover";
const Card = styled.div`
    text-align: center;
    box-shadow: 2px 2px 10px -5px rgba(0, 0, 0, 0.75);
    margin: 10px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    position: relative;
`;

const Img = styled.img`
    width: 80%;
    border-bottom: 1px solid grey;
    margin: 0 auto;
    padding: 20px 0;
`;
const Span = styled.span`
    text-align: left;
    padding: 10px;
    font-size: 0.8em;
    font-weight: bold;
`;
const P = styled.span`
    text-align: left;
    padding: 0 0 20px 10px;
`;

const Icon = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 40px;
`;

const Item = (props) => {
    const [hover, setHover] = useState(false);

    return (
        <Card
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {hover && <Hover id={props._id} productCost={props.cost} />}
            <Icon src={blueBag} alt="" />

            <Img src={props.img.url} alt={`Imagen de ${props.name}`} />
            <Span>{props.category}</Span>
            <P>{props.name}</P>
        </Card>
    );
};
export default Item;
