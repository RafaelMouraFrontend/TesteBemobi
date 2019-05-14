import React from 'react'
import styled from 'styled-components';

const DivCardRechard = styled.div`
  width: 159px;
  height: 114px;  
  background: #F2F2F2;
  box-shadow: 0px 4px 34px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  @media(max-width: 389px){
    &:not(:last-child){
      margin-bottom: 10px;
    }
  }
  ul{
    list-style: none;
    padding: 0;
    text-align: center;
    li:first-child{
      font-family: Titillium Web;
      font-size: 36px;
      line-height: 36px;
      font-weight: 700;
      color: #2E7CE6;
    }
    li:last-child{
      font-family: Titillium Web;
      font-size: 10px;
      line-height: 10px;
      color: #828282;
    }
  }
  a{
    font-family: Titillium Web;
    font-size: 14px;
    text-transform: uppercase;
    width: 100%;
    background: #F2994A;
    border-radius: 0px 0px 8px 8px;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    padding: 5px;

  }
`;

const CardRechard = ({recarga}) => (
  <DivCardRechard>
    <ul>
      <li>R${recarga.valor}</li>
      <li>E ganha R${recarga.bonus} de bônus</li>
    </ul>
    <a href="https://google.com">Contratar</a>
  </DivCardRechard>
)

export default CardRechard