import React, { Component } from 'react'
import AppContent from './components/AppContent'
import axios from 'axios';

class App extends Component {
  constructor () {
    super()
    this.state = {
      recarga: [],
      sva:[]
    }
  }
 
  getRecarga(type){
    return(e) => {
    axios.get(`https://tidal-hearing.glitch.me/${type}`)
    .then((result)=>{
      const carga = result.data;
      this.setState({
        recarga: carga.map((repo) => ({
          valor: `R$${repo.amount}`,
          bonus: `E ganha ${repo.bonus_amount} de bônus`
        }))
      })
    })
  }
  }

  getDados(type){
    return(e) => {
    axios.get(`https://tidal-hearing.glitch.me/${type}`)
    .then((result)=>{
      const carga = result.data;
      this.setState({
        recarga: carga.map((repo) => ({
          valor: `${repo.gb_amount}GB`,
          bonus: 'Redes sociais ilimitadas'
        }))
      })
    })
  }
  }
  
  componentDidMount(){
    axios.get(`https://tidal-hearing.glitch.me/recarga`)
    .then((result)=>{
      const carga = result.data;
      this.setState({
        recarga: carga.map((repo) => ({
          valor: `R$${repo.amount}`,
          bonus: `E ganhe ${repo.bonus_amount} de bônus`
        }))
      })
    })
    axios.get(`https://tidal-hearing.glitch.me/sva`)
    .then((result)=>{
      const dados = result.data;
      this.setState({
        sva: dados.map((repo) => ({
          name: repo.name,
          description: repo.description,
          gain: repo.gain,
          imagem: repo.image

        }))
      })
    })
  }
  
  render(){
    return  <AppContent  
              recarga={this.state.recarga}
              sva={this.state.sva}
              getRecarga={this.getRecarga('recarga')} 
              getDados={this.getDados('dados')} 
            />  
  }
}

export default App;
