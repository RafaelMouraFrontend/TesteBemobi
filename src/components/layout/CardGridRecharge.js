import React, { Component } from 'react'
import styled from 'styled-components';

const DivcardGridRecharge = styled.div`
  display: flex;
  justify-content: space-between;
  @media(max-width: 389px){
    flex-direction: column;
    align-items: center;
   
  }
`;

class CardGridRecharge extends Component {
  render() {
    return (
      <DivcardGridRecharge>
        {this.props.children}
      </DivcardGridRecharge>
    )
  }
}

export default CardGridRecharge