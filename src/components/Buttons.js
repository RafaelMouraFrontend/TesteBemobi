import React from 'react'
import styled from 'styled-components';

const DivBtn = styled.div`
  width: 100%;
  display: flex;
  text-align: center;
  color: #fff;
  
  .btn{
  background: rgba(79, 79, 79, 0.5);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(242, 242, 242, 0.4);
  flex-basis: 50%;
  cursor: pointer;
  padding: 10px 0;

  font-family: Titillium Web;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #fff;
  box-sizing:border-box
  }
  .btn:hover{
    box-sizing:border-box;
    font-weight: 600;
    border-top: 4px solid #fff;
    padding: 6px 0;

  }
  
  
`;

const Buttons = ({getRecarga, getDados}) => (
  <DivBtn>
    <button onClick={getRecarga} className='btn'>Créditos</button>
    <button onClick={getDados} className='btn'>Dados</button>
  </DivBtn>
  
)

export default Buttons