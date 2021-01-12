import React from 'react';
import styled from "styled-components";
import heroImg from '../../assets/header-x1.png'
import logo from '../../assets/aerolab-logo.svg'
import coin from '../../assets/icons/coin.svg'
const Nav = styled.nav`
display:flex;
justify-content:space-between;
padding:.5%;
`;
const Coins= styled.div`
cursor:pointer;
width:40%;
min-width:75px;
display:flex;
justify-content:space-around;
align-items:center;
background-color:#EDEDED;
border-radius:20px;
padding-left:8px;

img{
    margin-top:3px;

}
`;
const User = styled.div`
width:20%;
display:flex;
justify-content:space-around;
align-items:center;
 

`;
const Hero = styled.div`
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
const Header = () =>{

    return (<header>
                <Nav>
                    <img src={logo} alt="logo aerolab"/>
                    <User>
                        <p>Julia Coi</p>
                        <Coins><span>6000</span> <img src={coin} alt=""/></Coins>
                    </User>
                </Nav>
                <Hero>
                    <Title>Electronics</Title>
                </Hero>
             </header>)
}


export default Header;

