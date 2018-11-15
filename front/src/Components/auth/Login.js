import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom';
import { Button, Icon,Input } from 'react-materialize'
import {connect} from 'react-redux';
import  * as actions from '../../actions/authAction'

 class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = e => {
    e.preventDefault();
    
  }
  render() {
    return (
      <div className="container">
      <form className="white" onSubmit={this.handleSubmit}>
      <h5 className="grey-text text-darken-3">Log In</h5>
      <Input  label="Email" s={6} onChange={this.onChange} />
      <Input type="password" label="password" s={12} onChange={this.onChange}/>
      <Button className="buttons"><Icon right>person_pin</Icon>LogIn</Button>
      </form>
      </div>
    )
  }
}
const mapStateToProps = ({ auth }) => ({
  auth: auth.user
})
export default connect(mapStateToProps,actions)(Login)
