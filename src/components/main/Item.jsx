import React from 'react'
import styled from "styled-components";

const Card= styled.div`
 border:1px solid red;
`;



const Item = (props) => { 

    return(
    <Card>
        <p>{props.name}</p>
        <img src={props.img.url} alt={`Imagen de ${props.name}`} />
    </Card>
    )

}
export default Item;