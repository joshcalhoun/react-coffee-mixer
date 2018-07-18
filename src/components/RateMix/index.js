import React, { Component } from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import {saveCoffee} from '../../actions/coffeeActions';
import {saveUser} from '../../actions/userActions';
import RateMix from './RateMix'
import Header from '../common/Header'
import styled from 'styled-components'
import LoginForm from '../common/LoginForm'
import fire, {doSignInWithEmailAndPassword} from '../../config/firebase'



export class MainWrapper extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      coffees: [],
      user: {
        name: "",
        email: ""
      }
    }
    ;
    this.login = this.login.bind(this);
    this.submit = this.submit.bind(this);
  }
  submit = values => {
    // print the form values to the console
    console.log(values)
  }

  login = values =>  {

    doSignInWithEmailAndPassword(values.email, values.password).then(result => {
      console.log(result.user.uid);
      let user = {
        email: values.email,
        name: values.email
      }
      this.props.saveUser(user)

    });
    // fire.database().ref('users/' + result.user.uid).set({
    //   username: values.email,
    //   email: values.email
    // });

  }






  render() {
    return (
      <Wrapper>
        <Header/>
        <LoginForm onSubmit={this.login} />
        Name: {this.props.user.name}
        {/*<RateMix onClick={this.login}/>*/}
      </Wrapper>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    coffees : state.coffees,
    user : state.user

  };
};

function mapDispatchToProps(dispatch) {
  return {
    saveCoffee: saveCoffee,
    saveUser: saveUser

  }
}
const Wrapper = styled.div`

  `

export default connect(mapStateToProps, mapDispatchToProps())(MainWrapper);
