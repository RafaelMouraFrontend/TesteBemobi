import React, { Component } from 'react'
import styled from 'styled-components';

const DivCardGridSva = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 32px 19px 15px ;
  background: #fff;
  @media(max-width: 389px){
    flex-direction: column;
    align-items: center;
  }
`;

class ContainerPromo extends Component {
  render() {
    return (
      <div className='container-promo'>
      <DivCardGridSva>
        {this.props.children}
      </DivCardGridSva>
      </div>
    )
  }
}

export default ContainerPromo