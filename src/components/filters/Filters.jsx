import React from "react";
import styled from "styled-components";
import Pagination from "./Pagination";
import Arrow from "../../assets/icons/arrow-right.svg";

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left:20px;
  border-left:1px solid #D9D9D9;
  align-items:center;
  color: #A3A3A3;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items:center;
  margin: 0% 10%;
  padding: 1% 0;
  border-bottom:1px solid  #D9D9D9;
`;

const LeftContainer = styled.div`
display:flex;
align-items:center;
`;

const Selector = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style-type:none;
`;

const Li =  styled.li`
    margin-right:15px;
    background-color:#EDEDED;
    border-radius: 20.5px;
    color:#A3A3A3;
    padding:10px 15px;
    cursor:pointer;
`;

const Img = styled.div`
cursor:pointer;
`
const Filters = () => {
  return (
    <Container>
      <LeftContainer>
        <Pagination />
        <FilterContainer>
          <span>Sort by: </span>
          <Selector>
            <Li>Most Recent</Li>
            <Li>Lowest Price</Li>
            <Li>Highest Price</Li>
          </Selector>
        </FilterContainer>
      </LeftContainer>
        <Img><img src={Arrow} alt="next page" /></Img>
      
    </Container>
  );
};
export default Filters;
