import React, { Component } from 'react'

class ContainerRecharge extends Component {
  render() {
    return (
      <div className='container-recharge'>
        {this.props.children}
      </div>
    )
  }
}

export default ContainerRecharge