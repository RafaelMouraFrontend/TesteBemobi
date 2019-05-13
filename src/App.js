import React from 'react';

import ContainerPromo from './components/layout/ContainerPromo'
import ContainerRecharge from './components/layout/ContainerRecharge'

import CardSva from './components/CardSva'
import CardRechard from './components/CardRechard'
import Header from './components/Header'
import Buttons from './components/Buttons'

function App() {
  return (
    <div className='App'>
      <ContainerRecharge>
        <div className="main">
          <Header />
          <div className="card-grid-recharge">
            <CardRechard />
            <CardRechard />
  
          </div>
        </div>
        <div className="buttons-grid">
          <Buttons />
          <Buttons />
        </div>
      </ContainerRecharge>
      <ContainerPromo>
        <CardSva />
        <CardSva />
        <CardSva />
        <CardSva />
      </ContainerPromo>
    </div>
  );
}

export default App;
