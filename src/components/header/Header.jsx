import React, {useContext} from 'react';
import styled from "styled-components";

import logo from '../../assets/aerolab-logo.svg'
import coin from '../../assets/icons/coin.svg'
import {Context} from '../context/Context'



const Nav = styled.nav`
display:flex;
justify-content:space-between;
padding:.5%;
`;
const Coins= styled.div`
cursor:pointer;
width:150px;
min-width:75px;
display:flex;
justify-content:space-around;
align-items:center;
background-color:#EDEDED;
border-radius:20px;
padding-left:8px;
@media(max-width:700px){
    display:none;
}

img{
    margin-top:3px;

}
`;
const User = styled.div`
width:20%;
display:flex;
justify-content:space-around;

align-items:center;
@media(max-width:700px){
    width:40%;
}

`;

const Ul = styled.ul`
    display:flex;
    width:35%;
    padding:0;
    justify-content:space-between;
    align-items:center;
    list-style:none;
    @media(max-width:700px){
    width:60%;
}
`;
const Li = styled.li`
    width:140px;
    height:37px;
    
    
    line-height:37px;
    @media(max-width:700px){
    width:130px;

    
}
`;

const A = styled.a `
display:block;
    text-decoration:none;
    color:black;
    text-align:center;
    transition:.5s;
    &:hover{
        background-color:#EDEDED;
        border-radius:20px;
    }
`;

const Img = styled.img ` 
    width:30px;
`;


const Header = () =>{


    const {user}  = useContext(Context);


    return (<header>
                <Nav>
                    <Ul>
                    <Img src={logo} alt="logo aerolab"/>
                        <Li>
                        <A href="/">
                            Products
                        </A>
                        </Li>
                        
                        <Li>
                            <A href="/history">
                                Purchased
                            </A>
                        </Li>
                        <Li>
                            <A href="/coins">
                                Get Coins
                            </A>
                        </Li>
                        
                    </Ul>
                    
                    <User>
                        <p>{user.name}</p>
                        <Coins><span>{user.points}</span> <img src={coin} alt=""/></Coins>
                    </User>
                </Nav>
               
                
             </header>)
}


export default Header;

