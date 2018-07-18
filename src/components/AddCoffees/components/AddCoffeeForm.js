import React, {Component} from 'react'
import styled from 'styled-components'
import {reduxForm, Field} from 'redux-form'
import {Input} from '../../common/Input'
import { Button } from '../../common/Button'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { saveCoffee } from '../../../actions/coffeeActions'
import { withRouter } from 'react-router-dom'
import {bindActionCreators} from "redux";

class AddCoffeeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      roast: '',
      amount: 0
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  static propTypes = {
    handleSubmit: PropTypes.func,
    fields: PropTypes.array,
    formElements: PropTypes.object
  }

  handleSubmit = values => {
    console.log(values);
    console.log({...values, ...{id: values.name.toLowerCase()}});
    this.props.saveCoffee({...values, ...{id: this.camelize(values.name)}})
    this.props.history.push('/')
  }
  camelize = str => {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
      return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
    }).replace(/\s+/g, '');
  }

  render() {
    const {handleSubmit, formElements} = this.props;

    return (
      <Form onSubmit={handleSubmit(this.handleSubmit)}>
        <div>
          <Field component={Input} { ...formElements.name} />
        </div>
        <div>
          <Field component={Input} options={this.props.roasts} { ...formElements.roast} />
        </div>
        <div>
          <Field component={Input} { ...formElements.amount} />
        </div>
        <Button type="submit">Submit</Button>
      </Form>
    )
  }
}

const Form = styled.form`

`


const mapStateToProps = (state, props) => {
  return {roasts : state.roasts};
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    saveCoffee
  }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)
(
  reduxForm({
    form: 'addCoffeeForm'
  })
  (withRouter(AddCoffeeForm))
)
