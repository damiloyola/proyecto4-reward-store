import React from "react";
import styled from "styled-components";
import Filters from '../filters/Filters';
import ItemContainer from './ItemContainer';

const MainContainer = () => {
  return <main>
      <Filters/>
      <ItemContainer/>
  </main>;
};

export default MainContainer;