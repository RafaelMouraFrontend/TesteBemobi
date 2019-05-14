import React from 'react'
import Logo from '../logo.svg'
import styled from 'styled-components';

const DivHeader = styled.div`
  font-family: 'Titillium Web', sans-serif;
  color: #fff;
  h1{
    padding: 0;
    margin: 0;
    line-height: 0;
  }
  p{
    padding: 0;
    margin: 35px 0 0;
    font-size: 14px;
    line-height: 14px;
    text-transform: uppercase;

  }
  h2{
    padding: 0;
    margin: 0 0 60px 0;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 36px;
    line-height: 37px;
    max-width: 220px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

const Header = () => (
  <DivHeader>
    <h1><img src={Logo} alt="Hapz"/></h1>
    <p>Você está sem Saldo</p>
    <h2>Recarregue agora</h2>
  </DivHeader>
)

export default Header