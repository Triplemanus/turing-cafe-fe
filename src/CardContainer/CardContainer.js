import React, { Component } from 'react';
import './CardContainer.scss';
import Card from '../Card/Card'
import PropTypes from 'prop-types'

const CardContainer = ({ resyData }) => {
  console.log('cardContainer data ', resyData);
  const resyCard = resyData.map(reservation => {
    return (
    <Card
    id={reservation.id} 
    name={reservation.name}
    time={reservation.time}
    date={reservation.date}
    number={reservation.number}
    />
  )
})
  return (
    <section className='card-components' >
      {resyCard}
    </section>
  )
}

export default CardContainer;


CardContainer.propTypes = {
  resyData: PropTypes.array.isRequired
}