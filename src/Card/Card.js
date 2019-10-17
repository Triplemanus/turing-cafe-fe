import React from 'react';
import './Card.scss';
import PropTypes from 'prop-types';

const ResyCard = ({ id, name, date, time, number }) => {
  return (
    <section className="card">
      <article className="card-title">
        <h3> Name: <span>{name}</span></h3>
      </article>
      <article className="card-contents">
        <h3>Date: <span>{date}</span></h3>
        <h3>Time: <span>{time}</span></h3>
        <h3>Number: <span>{number}</span></h3>
      </article>
    </section>
  )
}

export default ResyCard;

ResyCard.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired
  }