import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Card = ({title, amount}) => {
  return (
  <StyledCard>
    <h2>{title}</h2>
    <p>{amount}</p>
  </StyledCard>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.string

};

export default Card;

const StyledCard = styled.div`
  background: #fff;
  border-radius: 2px;
  display: inline-block;
  height: 300px;
  margin: 1rem;
  position: relative;
  width: 300px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  padding:10px;

  `
