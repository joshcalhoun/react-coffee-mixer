import React, {PropTypes} from 'react';
import styled from 'styled-components'
import AddCoffeeForm from './components/AddCoffeeForm'

const AddCoffees = (props) => {
  return (
    <Wrapper>
      <h2>Add a new Coffee Flavor :)</h2>
      <AddCoffeeForm formElements={props.formElements} />
    </Wrapper>
  );
};


export default AddCoffees;

const Wrapper = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  `
