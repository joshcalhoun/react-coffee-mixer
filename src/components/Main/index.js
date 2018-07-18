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
    this.reset = this.reset.bind(this);
  }

  randomize() {
    this.reset();
    let randomCoffees = this.props.coffees.slice().sort(() => .5 - Math.random()).slice(0, Math.floor(Math.random() * this.props.coffees.length + 1));
    let randomRawArray = randomCoffees.map(x => ({...x, amount: this.calcRand()}));
    let sum = randomRawArray.map(x => x.amount).reduce((a, b) => a + b);
    let normalizedRandom = randomRawArray.map(x => ({...x, amount: this.calcNorm(x.amount, sum)}));
    normalizedRandom.forEach(coffee => this.props.saveCoffee(coffee));


  }

  reset() {

    this.props.coffees.map(x => ({...x, amount: 0})).forEach(coffee => this.props.saveCoffee(coffee));
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
        <Main coffees = {this.props.coffees} randomize={this.randomize} reset={this.reset}/>
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
