import React, { Component } from 'react'
import styled from 'styled-components';

const DivMain = styled.div`
  padding: 29px 19px 25px;
`;

class Main extends Component {
  render() {
    return (
      <DivMain>
        {this.props.children}
      </DivMain>
    )
  }
}

export default Main