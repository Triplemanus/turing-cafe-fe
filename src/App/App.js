import React, { Component } from 'react';
import './App.css';
import CardContainer from '../CardContainer/CardContainer';
import Form from '../Form/Form';

class App extends Component {
  constructor () {
    super();
    this.state = {
      reservations: []
    }
  }

  componentDidMount = () => {
      fetch('http://localhost:3001/api/v1/reservations')
      .then(response => response.json())
      .then(reservations => {
        const reservationData = reservations.map(reservation => {
          let { id, name, date, time, number } = reservation;
          return { id, name, date, time, number } 
        });
        return Promise.all(reservationData)
      })
        .then(data => {
          return this.setReservations(data)})
      .catch(error => console.log('error retrieving reservation: ', error.message))
  }

  setReservations = (reservations) => {
    this.setState({ reservations })
  }

  addRes = newRes => {
    this.setState({ reservations: [...this.state.reservations, newRes]})
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container '>
          <Form addRes={this.addRes} />
          {this.state.reservations.length !== 0 && <CardContainer resyData={this.state.reservations}/>}

          <article className='resy-card'>
          </article>
          
        </div>
      </div>
    )
  }
}

export default App;
