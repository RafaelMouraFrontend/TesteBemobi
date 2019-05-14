import React from 'react'
import styled from 'styled-components';

const DivCardSva = styled.div `
  width: 163px;
  margin-bottom: 20px;
`;

const DivSvaMain = styled.div `
  .box-image{
    position: absolute;
  }

  .info{
    position: relative;
    top: 0;
    bottom: 0;
    height: 120px;
    padding: 10px;
    a{
      font-family: 'Roboto', sans-serif;
      font-weight: 500;
      font-size: 10px;
      line-height: 10px;
      text-transform: uppercase;
      background: #2F80ED;
      border-radius: 2.02041px;
      float: right;
      color: #fff;
      padding: 10px 15px;
      
    }
    p{
      font-family: Titillium Web;
      font-weight: 600;
      font-size: 16px;
      display: block;
      clear: both;
      margin: 0;
      bottom: 0;
      position: absolute;
      color: #fff;
    }
    
  }
`;

const DivSvaMainSub = styled.div `
  display: inline-block;
  padding-left: 10px;
  .caption{
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    margin: 0;
    margin-top: 7px;
    margin-bottom: 15px;
  }
  .sub-caption{
    font-family: Roboto;
    font-weight: 300;
    font-size: 13px;
    line-height: 13px;
    margin: 0;
}
`;

const CardSva = ({sva}) => (
    <DivCardSva>
      <DivSvaMain>
        <div className="box-image">
          <img src={sva.imagem} alt={sva.description}/>
        </div>
        <div className="info">
          <a href="https://bemobi.com/">comprar</a>
          <p>{sva.name}</p>
        </div>

      </DivSvaMain>
      <DivSvaMainSub>
        <p className='caption'>{sva.gain}</p>
        <p className='sub-caption'>{sva.description}</p>
      </DivSvaMainSub>
    </DivCardSva>
)

export default CardSva