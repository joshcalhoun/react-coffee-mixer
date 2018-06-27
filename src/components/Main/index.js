import React, { Component } from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import {saveCoffee} from '../../actions/coffeeActions';
import Main from './Main'
import Header from '../common/Header'
import styled from 'styled-components'

export class MainWrapper extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      coffees: [],
    };
    this.randomize = this.randomize.bind(this);
  }

  randomize() {
    // const mixQty = Math.floor(Math.random() * items.length) + 1;
    // let coffeeTotal = 0;
    // let randomArray = items.map(x => x.amount = Math.floor(Math.random() * 100) + 1);
    let randomRawArray = this.props.coffees.map(x => ({...x, amount: this.calcRand()}));
    let sum = randomRawArray.map(x => x.amount).reduce((a, b) => a + b);
    let normalizedRandom = randomRawArray.map(x => ({...x, amount: this.calcNorm(x.amount, sum)}));
    for (let coffee of normalizedRandom) {
      this.props.saveCoffee(coffee);
    }

  }
  calcRand() {
    return (Math.floor(Math.random() * 100) + 1);
  }
  calcNorm(a, s) {
    return s !== 0 ? ((Math.floor((a / s) * 100)).toFixed(0)) : 0;
  }




  render() {
    return (
      <Wrapper>
        <Header/>
        <Main coffees = {this.props.coffees} randomize={this.randomize}/>
      </Wrapper>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    coffees : state.coffees};
};

function mapDispatchToProps(dispatch) {
  return {
    saveCoffee: saveCoffee
  }
  // return {
  //   actions: bindActionCreators({}, dispatch)
  // };
}
const Wrapper = styled.div`

  `

export default connect(mapStateToProps, mapDispatchToProps())(MainWrapper);
