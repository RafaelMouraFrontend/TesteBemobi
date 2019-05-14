import React from 'react'
import styled from 'styled-components';

const Btn = styled.button`
  flex-basis: 50%;
  text-align: center;
  color: #fff;
  background: rgba(79, 79, 79, 0.5);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(242, 242, 242, 0.4);
  
  
`;

const Buttons = ({getRecarga}) => (
  <Btn onClick={getRecarga}>Créditos</Btn>
)

export default Buttons