import React from 'react';
import PropTypes from 'prop-types';

import styled from "styled-components";
import Card from "../common/Card"
import { Button } from "../common/Button"


const RateMix = ({coffees, randomize, reset}) => {

  return (
    <Wrapper>
      <h2>Home</h2>
      <p>Here are your list of coffees.</p>
      <Button>Log In to Rate</Button>
      <div>
        {coffees && coffees.length &&
        coffees.map((coffee, i) => <Card key={i} >
          <h2>{coffee.name}</h2>
          <p>{coffee.amount}</p>
        </Card>)
        }
      </div>
      <Button onClick={randomize}>Randomize</Button>
      <Button onClick={reset}>Reset</Button>

    </Wrapper>


  );


}



RateMix.propTypes = {
  coffees: PropTypes.array,
  randomize: PropTypes.func
};

const Wrapper = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  `


export default RateMix;
