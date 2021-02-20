import React from "react";
import styled from "styled-components";
import Filters from '../filters/Filters';
import ItemContainer from './ItemContainer';
import Hero from "./Hero";




const MainContainer = () => {
  return <div>
            <Hero />
            <Filters/>
            <ItemContainer/>
      </div>
     
  ;
};

export default MainContainer;