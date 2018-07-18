import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import * as coffeeActions from '../../actions/coffeeActions';
import AddCoffees from './AddCoffees'
import Header from '../common/Header'
import styled from 'styled-components'

import form from './components/form'
class MainWrapper extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <AddCoffees formElements={form}/>
      </Wrapper>
    );
  }
}

const mapStateToProps = ({}) => ({

});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(coffeeActions, dispatch)
  };
}

const Wrapper = styled.div`

  `


export default connect(mapStateToProps, mapDispatchToProps)(MainWrapper);
