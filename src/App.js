import React from 'react';

function App() {
  return (
    <div className='App'>
      <div className='container-recharge'>
        <div className="main">
          <div className="header">
            <h1>Logo</h1>
            <p>Você está sem Saldo</p>
            <h2>Recarregue agora</h2>
          </div>
          <div className="card-grid">
            <div className="card">
              <ul>
                <li>R$ 15</li>
                <li>E ganha R$5 de bônus</li>
              </ul>
              <button>Contratar</button>
            </div>
            <div className="card">
              <ul>
                <li>R$ 20</li>
                <li>E ganha R$10 de bônus</li>
              </ul>
              <button>Contratar</button>
            </div>
          </div>
        </div>
        <div className="buttons-grid">
          <a href="#">Créditos</a>
          <a href="#">Dados</a>
        </div>
      </div>
      <div className='container-promo'>
        <div className="card-grid-sva">
          <div className='card-sva'>
            <div className='sva-main'>
              <img src="https://cdn.glitch.com/33b14571-87e4-48c9-b8ba-824c4228ac32%2Fdiscounts.png?1551208773014" alt=""/>
              <a href="">comprar</a>
              <p>Lorem, ipsum dolor sit amet !</p>
            </div>
            <div className='sva-main__sub'>
              <p>Saraiva 10$</p>
              <p>Curta o Som</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
