import React, { Component } from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import * as coffeeActions from '../../actions/coffeeActions';
import * as coffeeMixActions from '../../actions/coffeeMixActions';
import Main from './Main'
import Header from '../common/Header'
import styled from 'styled-components'
import Modals from '../Modals/Modals'
import { show, hide } from 'redux-modal'

export class MainWrapper extends Component {
  constructor(props, context) {
    super(props, context);
    this.randomize = this.randomize.bind(this);
  }
  calcRand() {
    return (Math.floor(Math.random() * 100) + 1);
  }
  calcNorm(a, s) {
    return s !== 0 ? Number((Math.floor((a / s) * 100)).toFixed(0)) : 0;
  }
  randomize() {
    let coffeeAry = this.props.coffees.slice().filter((item) => {return item.amount > 0}).sort(() => .5 - Math.random()).slice(0,Math.floor(Math.random() * this.props.coffees.length) + 1);
    let randomRawArray = coffeeAry.map(x => ({...x, percent: this.calcRand()}));
    let sum = randomRawArray.map(x => x.percent).reduce((a, b) => a + b);
    let normalizedRandom = randomRawArray.map(x => ({...x, percent: this.calcNorm(x.percent, sum)}));
    /*for (let coffee of normalizedRandom) {
      this.props.saveCoffee(coffee);
    }*/
    console.log(normalizedRandom);
    this.props.dispatch(coffeeMixActions.setCoffeeMix(normalizedRandom));
    this.props.dispatch(show('MIX_RESULTS_MODAL'))
    return normalizedRandom;
  }




  render() {
    return (
      <React.Fragment>
        <Wrapper>
          <Header/>
          <Main coffees={this.props.coffees} randomize={this.randomize}/>
        </Wrapper>
        <Modals></Modals>
      </React.Fragment>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    coffees : state.coffees};
};

//function mapDispatchToProps(dispatch) {
//  return {
//    saveCoffee: saveCoffee
//  }
  // return {
  //   actions: bindActionCreators({}, dispatch)
  // };
//}
const Wrapper = styled.div`

  `

export default connect(mapStateToProps)(MainWrapper);
