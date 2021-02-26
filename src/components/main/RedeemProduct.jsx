import React, { useContext } from "react";
import styled from "styled-components";
import { fetchRedeem } from "../../api/fetchRedeem";

import blueBag from "../../assets/icons/buy-blue.svg";

function RedeemButton(props) {
    const { productCost, productId, user, setUser } = props;

    const handleRedeem = (id, cost) => {
        fetchRedeem(id);
        const newPoints = user.points - cost;
        console.log(user);
        setUser({ ...user, points: newPoints });
    };

    return (
        <button onClick={() => handleRedeem(productId, productCost)}>
            Redeem
        </button>
    );
}

export default RedeemButton;
