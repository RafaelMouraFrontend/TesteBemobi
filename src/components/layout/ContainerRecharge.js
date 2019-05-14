import React, { Component } from 'react'
import styled from 'styled-components';

import background from './img/bg-recarga-phone.png'

const DivContainerRecharge = styled.div`
  background-image: url('${background}');
  background-size: cover;
  background-position: center;
`;

class ContainerRecharge extends Component {
  render() {
    return (
      <DivContainerRecharge>
        {this.props.children}
      </DivContainerRecharge>
    )
  }
}

export default ContainerRecharge