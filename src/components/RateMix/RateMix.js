import React from 'react';
import PropTypes from 'prop-types';

import styled from "styled-components";
import Card from "../common/Card"
import Button from "../common/Button"


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

// const Button = styled.a`
//   display: inline-block;
//   position: relative;
//   width: 120px;
//   height: 32px;
//   line-height: 32px;
//   border-radius: 2px;
//   font-size: 0.9em;
//   background-color: #fff;
//   color: #646464;
//   transition: box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);
//   transition-delay: 0.2s;
//   box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
//   text-align:center;
// `

export default RateMix;
