import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Button = (props) => {
  return (
    <StyledButton onClick={props.onClick}>{props.children || "Test"}</StyledButton>
  );
};


const StyledButton = styled.button`
  display: inline-block;
  position: relative;
  cursor: pointer;
  height: 35px;
  line-height: 35px;
  padding: 0 1.5rem;
  color: #424242;
  font-size: 15px;
  font-weight: 600;
  font-family: 'Roboto', sans-serif;
  letter-spacing: .8px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  vertical-align: middle;
  white-space: nowrap;
  outline: none;
  border: none;
  user-select: none;
  border-radius: 2px;
  transition: all .3s ease-out;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.225);
`


export default Button;
