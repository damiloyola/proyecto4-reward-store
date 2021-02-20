import React from 'react'
import heroImg from '../../assets/header-x1.png'
import styled from "styled-components";

const HeroContainer = styled.div`
    width:100%;
    height:400px;
    background-image: url(${heroImg});
    background-size:cover;
    background-repeat: no-repeat;
    background-position:center;
    position:relative;
`;

const Title= styled.h1`
    position:absolute;
    top:60%;
    left:20%;
    font-size:64px;
    color:white;
`;


const Hero = () => {
    return (
        <HeroContainer>
                    <Title>Electronics</Title>
      </HeroContainer>
    )
}

export default Hero
