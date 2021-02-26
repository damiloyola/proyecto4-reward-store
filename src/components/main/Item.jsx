import React, { useContext } from "react";
import styled from "styled-components";
import RedeemProduct from "./RedeemProduct";
import { Context } from "../context/Context";

const Card = styled.div`
    text-align: center;
    box-shadow: 2px 2px 10px -5px rgba(0, 0, 0, 0.75);
    margin: 10px;
    border-radius: 4px;
`;

const Item = (props) => {
    const { user, setUser } = useContext(Context);
    return (
        <Card>
            <img src={props.img.url} alt={`Imagen de ${props.name}`} />
            <p>{props.name}</p>
            <RedeemProduct
                productId={props._id}
                productCost={props.cost}
                user={user}
                setUser={setUser}
            />
            <img src={props.img.url} alt={`Imagen de ${props.name}`} />
        </Card>
    );
};
export default Item;
