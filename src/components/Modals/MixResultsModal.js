import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { compose, withProps } from 'recompose'
import registerReduxModal from '../common/hoc/registerReduxModal'
import { Button } from '../common/Button'
import CoffeeRow from '../common/CoffeeRow'

class MixResultsModal extends Component {
  static propTypes = {

  }
  render() {
    const { show, handleHide, message } = this.props

    return (
      <ModalBoxWrapper show={show}>
        <ModalBoxContent>
          <div>
            { this.props.coffeeMix && this.props.coffeeMix.length &&
              this.props.coffeeMix.map((coffee, i) => <CoffeeRow key={i} coffee={coffee}></CoffeeRow>)
            }
          </div>
          <Button onClick={handleHide}>Close</Button>
        </ModalBoxContent>
      </ModalBoxWrapper>
    )
  }
}

//export default MixResultsModal

const ModalBoxWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1100;
  width: 100%;
  height: 100%;
  background-color: rgba(35, 38, 43, 0.34);
`

const ModalBoxContent = styled.div`
    position: fixed;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
    background:#fff;
    padding:20px;
`


const mapStateToProps = (state, props) => {
  return {coffeeMix : state.coffeeMix};
};

export default connect(mapStateToProps)(compose(
  registerReduxModal({ name: 'MIX_RESULTS_MODAL'})
)(MixResultsModal))