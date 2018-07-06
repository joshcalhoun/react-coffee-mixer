import React, {PropTypes} from 'react';
import styled from 'styled-components'
import Header from '../common/Header'
import Card from '../common/Card'
const AddCoffees = ({coffees}) => {
  return (
    <Wrapper>
      <Header />
      <h2>Update Coffee Details Here</h2>
      <div>
        {coffees && coffees.length &&
        coffees.map((coffee, i) =>
          <Card key={i} >
            <h2>{coffee.name}</h2>
            <p>{coffee.amount}</p>

          </Card>)
        }
      </div>
    </Wrapper>
  );
};

AddCoffees.propTypes = {};

export default AddCoffees;

const Wrapper = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  `
