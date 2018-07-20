import React from 'react';
import {Field, reduxForm } from 'redux-form';
import styled from 'styled-components';
import { Button } from '../../common/Button'
import { connect } from 'react-redux'

let EditCoffeeForm = props =>
    <StyledForm onSubmit={props.handleSubmit}>
      {!!props.coffee && Object.keys(props.coffee).map(key =>
      key !== 'id' ? <FormGroup key={key}>
          <StyledLabel htmlFor={key}>{key.toUpperCase()}</StyledLabel>
          <Field name={key} component="input" type="text"/>
        </FormGroup> : ''
      )}

      <Button type="submit">Submit</Button>
    </StyledForm>


const StyledForm = styled.form`
  margin: auto;
  padding: 30px;
  width: 300px;
`

const StyledLabel = styled.label`
  width: 100px;
  font-weight:bold;
  display:inline-block;
`
const FormGroup = styled.div`
 margin-bottom: 10px;
`

EditCoffeeForm = reduxForm({
  form: 'editcoffee',
  keepDirtyOnReinitialize: true,
  enableReinitialize: true
})(EditCoffeeForm)

EditCoffeeForm = connect(state => ({
    initialValues: state.selectedCoffee
  })
)(EditCoffeeForm)

export default EditCoffeeForm
