import React, {PropTypes} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
const Header = ({}) => {
  return (
    <Container>
      <HeaderLink to={'/'}>Home</HeaderLink>
      <HeaderLink to={'/addCoffees'}>Add Coffees</HeaderLink>
      <HeaderLink to={'/rate'}>Rate</HeaderLink>
    </Container>
  );
};

Header.propTypes = {};

export default Header;

const Container = styled.header`
  margin: 0 auto;
  text-align:center;
  padding:15px;
  background-color: #cccccc;
    
  `

const HeaderLink = styled(Link)`
  background-color: #cccccc;
  color:white;
  text-align:center;
  padding: 5px;
  text-decoration:none;
  `
