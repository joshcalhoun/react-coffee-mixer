import React, { Component } from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import { saveCoffee } from "../../actions/coffeeActions";
import { setCoffeeMix } from '../../actions/coffeeMixActions';
import Main from './Main'
import Header from '../common/Header'
import styled from 'styled-components'
import Modals from '../Modals/Modals'
import { show, hide } from 'redux-modal'

export class MainWrapper extends Component {
  constructor(props, context) {
    super(props, context);
    this.randomize = this.randomize.bind(this);
    this.reset = this.reset.bind(this);
  }


  reset() {

    this.props.coffees.map(x => ({...x, amount: 0})).forEach(coffee => this.props.saveCoffee(coffee));
  }

  calcRand() {
    return (Math.floor(Math.random() * 100) + 1);
  }
  calcNorm(a, s) {
    return s !== 0 ? Number((Math.floor((a / s) * 100)).toFixed(0)) : 0;
  }
  randomize() {
    let coffeeAry = this.props.coffees.slice().sort(() => .5 - Math.random()).slice(0, Math.floor(Math.random() * this.props.coffees.length + 1));
    let randomRawArray = coffeeAry.map(x => ({...x, percent: this.calcRand()}));
    let sum = randomRawArray.map(x => x.percent).reduce((a, b) => a + b);
    let normalizedRandom = randomRawArray.map(x => ({...x, percent: this.calcNorm(x.percent, sum)}));
    this.props.setCoffeeMix(normalizedRandom);
    this.props.showModal('EDIT_COFFEE_MODAL', {coffee: this.props.coffees[0]});
    return normalizedRandom;
  }



  render() {
    return (
      <React.Fragment>
        <Wrapper>
          <Header/>
          <Main coffees={this.props.coffees} randomize={this.randomize} reset={this.reset} />
        </Wrapper>
        <Modals/>
      </React.Fragment>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    coffees : state.coffees
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    saveCoffee,
    setCoffeeMix,
    showModal: show
  }, dispatch);
}
const Wrapper = styled.div`

  `

export default connect(mapStateToProps, mapDispatchToProps)(MainWrapper);
