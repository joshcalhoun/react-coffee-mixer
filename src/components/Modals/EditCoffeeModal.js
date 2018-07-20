import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { compose, withProps } from 'recompose'
import registerReduxModal from '../common/hoc/registerReduxModal'
import { Button } from '../common/Button'
import EditCoffeeForm from '../common/Forms/EditCoffeeForm'

const EditCoffeeModal = ({show, handleHide, message, ...props}) =>

  <ModalBoxWrapper show={show}>
    <ModalBoxContent>

      <EditCoffeeForm onSubmit={props.handleSubmit} formElements={props.formElements} coffee={props.coffee} />
      <Button onClick={handleHide}>Close</Button>
    </ModalBoxContent>
  </ModalBoxWrapper>



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
  return {selectedCoffee : state.selectedCoffee};
};

export default connect(mapStateToProps)(compose(
  registerReduxModal({ name: 'EDIT_COFFEE_MODAL'})
)(EditCoffeeModal))


