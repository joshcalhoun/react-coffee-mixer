import React from 'react';
import {Field, reduxForm } from 'redux-form';
import styled from 'styled-components';
import Button from '../common/Button'

let LoginForm = props => {
  const {handleSubmit} = props
    return (
      <StyledForm onSubmit={handleSubmit}>
        <FormGroup>
          <StyledLabel htmlFor="email">Email</StyledLabel>
          <Field name="email" component="input" type="email" />
        </FormGroup>
        <FormGroup>
          <StyledLabel htmlFor="password">Password</StyledLabel>
          <Field name="password" component="input" type="password" />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </StyledForm>
    )
}

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

LoginForm = reduxForm({
  form: 'login'
})(LoginForm)

export default LoginForm
