import React, { useContext , useEffect} from "react";
import styled from "styled-components";
import {Context} from '../context/Context'
import Item from './Item'
import {fetchProducts} from '../../api/fetchProducts';

const Container= styled.div`
   display:flex;
   flex-wrap:wrap;
  justify-content:center;
`;




const ItemContainer = () => {

  const {products, setProducts}  = useContext(Context);

  return(
  <Container>
    {products.map((product)=>(
      <Item
      {...product}
      key={product._id}
      
      />
    ))}

  </Container>
  ) ;
}

export default ItemContainer;