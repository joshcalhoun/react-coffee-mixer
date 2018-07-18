import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {Button} from './Button'

export class Card extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleEditClick = this.handleEditClick.bind(this);
  }

  handleEditClick() {
    console.log('edit me!', this.props.coffee)
  }

  render() {
    return (
      <StyledCard>
        <Title>{this.props.coffee.name}</Title>
        <div>
          <strong>Amount: </strong><span>{this.props.coffee.amount} OZ</span>
        </div>

        <CustomButton onClick={this.handleEditClick}>Edit</CustomButton>
      </StyledCard>
    );
  }
};

Card.propTypes = {
  coffee: PropTypes.object.isRequired
};

export default Card;

const StyledCard = styled.div`
  background: #fff;
  border-radius: 2px;
  display: inline-block;
  height: 150px;
  margin: 1rem;
  position: relative;
  width: 300px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  padding:10px;

  `

const Title = styled.h2`
  margin:0;
`

const CustomButton = styled(Button)`
font-size:14px;
padding:5px 10px;
position:absolute;
bottom:10px;
`
