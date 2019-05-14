import React, { Component } from 'react'
import styled from 'styled-components';


const DivButttonsGrid = styled.div`
  display: flex;
 
  
  
`;

class ButttonsGrid extends Component {
  render() {
    return (
      <DivButttonsGrid>
        {this.props.children}
      </DivButttonsGrid>
      
    )
  }
}

export default ButttonsGrid