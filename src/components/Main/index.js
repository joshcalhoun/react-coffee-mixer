import React, { Component } from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import * as coffeeActions from '../../actions/coffeeActions';
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
  calcRand() {
    return (Math.floor(Math.random() * 100) + 1);
  }
  calcNorm(a, s) {
    return s !== 0 ? ((Math.floor((a / s) * 100)).toFixed(0)) : 0;
  }
  randomize(items) {
    // const mixQty = Math.floor(Math.random() * items.length) + 1;
    // let coffeeTotal = 0;
    // let randomArray = items.map(x => x.amount = Math.floor(Math.random() * 100) + 1);
    let randomRawArray = items.map(x => ({...x, amount: this.calcRand()}));
    let sum = randomRawArray.map(x => x.amount).reduce((a, b) => a + b);
    let normalizedRandom = randomRawArray.map(x => ({...x, amount: this.calcNorm(x.amount, sum)}));

    console.log(normalizedRandom);
    return normalizedRandom;
  }




  render() {
    return (
      <Wrapper>
        <Header/>
        <Main coffees = {this.props.coffees} randomize={this.props.randomize}/>
      </Wrapper>
    );
  }
}


const mapStateToProps = (state) => {
  return {coffees : state.coffees};
};

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators({
//     }, dispatch)
//   };
// }
const Wrapper = styled.div`

  `

export default connect(mapStateToProps)(MainWrapper);
