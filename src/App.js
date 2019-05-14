import React, { Component } from 'react'
import AppContent from './components/AppContent'
import axios from 'axios';

class App extends Component {
  constructor () {
    super()
    this.state = {
      recarga: []
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
          bonus: `E ganha ${repo.bonus_amount} de bônus`
        }))
      })
    })
  }
  
  render(){
    return  <AppContent  
              recarga={this.state.recarga}
              getRecarga={this.getRecarga('recarga')} 
              getDados={this.getDados('dados')} 
            />  
  }
}

export default App;
