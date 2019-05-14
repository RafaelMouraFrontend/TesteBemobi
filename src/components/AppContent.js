import React from 'react'

import ContainerPromo from './layout/ContainerPromo'
import ContainerRecharge from './layout/ContainerRecharge'
import ButtonsGrid from './layout/ButtonsGrid'
import CardGridRecharge from './layout/CardGridRecharge'
import Main from './layout/Main'

import CardSva from './CardSva'
import CardRechard from './CardRechard'
import Header from './Header'
import Buttons from './Buttons'

import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,500|Titillium+Web:400,600,700');
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    background: #eaeaea;
   
  }
  a{
    text-decoration: none;
    color: #333
  }

`;

const DivApp = styled.div `
  max-width: 375px;
  margin: 0 auto;
`;

const AppContent = ({recarga, sva, getRecarga, getDados}) => (
    <DivApp>
    <GlobalStyle />
      <ContainerRecharge>
        <Main>
          <Header />
          <CardGridRecharge>
          {recarga.map((repo, index)=>(
            <CardRechard recarga={repo}  key={index}/>  
          ))}
                      
          </CardGridRecharge>
        </Main>
        <ButtonsGrid>
          <Buttons getRecarga={getRecarga} getDados={getDados}/>
        </ButtonsGrid>
      </ContainerRecharge>
      <ContainerPromo>
      {sva.map((repo, index)=>(
        <CardSva sva={repo}  key={index}/>
      ))}

      </ContainerPromo>
  </DivApp>
)

export default AppContent