import React, { Component } from 'react'

class ContainerPromo extends Component {
  render() {
    return (
      <div className='container-promo'>
      <div className="card-grid-sva">
        {this.props.children}
      </div>
      </div>
    )
  }
}

export default ContainerPromo