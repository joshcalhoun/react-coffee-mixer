import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {Button} from './Button'
import { show, hide } from 'redux-modal'
import {bindActionCreators} from "redux";
import {saveCoffee} from "../../actions/coffeeActions";
import {setSelectedCoffee} from "../../actions/selectCoffeeActions";
import {connect} from "react-redux";

export class Card extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      coffee: {},
      selectedCoffee: {
        name: '',
        amount: 0,
      }
    }

    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit = values => {
    this.props.saveCoffee(values)
  }

  handleEditClick() {
    this.props.setSelectedCoffee(this.props.coffee);
    console.log('edit me!', this.props.coffee, this.props.selectedCoffee)
    this.props.showModal('EDIT_COFFEE_MODAL', { handleSubmit: this.handleSubmit, coffee: this.props.coffee });
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
}

Card.propTypes = {
  selectedCoffee: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  return {
    selectedCoffee : state.selectedCoffee
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    saveCoffee,
    setSelectedCoffee,
    showModal: show
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);


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
