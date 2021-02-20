import React from 'react';
import styled from "styled-components";
import {Link} from 'react-router-dom';
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

const Ul = styled.ul`
    display:flex;
    width:40%;
    justify-content:space-between;
    align-items:center;
    list-style:none;
`;
const Li = styled.li`
    text-decoration:none;
`;

const Header = () =>{

    return (<header>
                <Nav>
                    <Ul>
                        <Link to="/">
                            <img src={logo} alt="logo aerolab"/>
                        </Link>
                        <Link to="/history">
                            <Li>Purchase History</Li>
                        </Link>
                        <Link to="/coins">
                            <Li>Get Coins</Li>
                        </Link>
                    </Ul>
                    
                    <User>
                        <p>Julia Coi</p>
                        <Coins><span>6000</span> <img src={coin} alt=""/></Coins>
                    </User>
                </Nav>
               
                
             </header>)
}


export default Header;

