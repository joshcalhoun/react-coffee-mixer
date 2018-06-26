import React, {PropTypes} from 'react';
import styled from 'styled-components'
import Header from '../common/Header'
const AddCoffees = ({}) => {
  return (
    <Wrapper>
      <Header />
      <h2>Hello</h2>
    </Wrapper>
  );
};

AddCoffees.propTypes = {};

export default AddCoffees;

const Wrapper = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  `
