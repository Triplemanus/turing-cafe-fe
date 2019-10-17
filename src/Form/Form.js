import React, { Component } from 'react';
import './Form.scss'

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      // id: '',
      name: '',
      date: '',
      time: '',
      number: ''
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value})
  }

  submitNewRes = e => {
    e.preventDefault();
    const { addRes } = this.props;
    const newRes = { ...this.state, id: Date.now()};
    addRes(newRes);
    this.resetInputs();
  }

  resetInputs = () => {
    this.setState({ 
      name: '',
      date: '',
      time: '',
      number: ''
    })
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='name'
          value={this.state.name}
          name='name'
          onChange={this.handleChange}
        />
        <input
          type='text'
          placeholder='date'
          value={this.state.date}
          name='date'
          onChange={this.handleChange}
        />
          <input
          type='text'
          placeholder='time'
          value={this.state.time}
          name='time'
          onChange={this.handleChange}
        />        <input
        type='text'
        placeholder='number'
        value={this.state.number}
        name='number'
        onChange={this.handleChange}
        />
        <button 
          onClick={this.submitNewRes}
        >
          Submit Reservation
        </button>
      </form>
    )
  }
}
