import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import { Button, Icon,Input } from 'react-materialize'
import {connect} from 'react-redux';
import  * as actions from '../../actions/authAction'

 class Login extends Component {
  state = {
    user:'',
    username: '',
    password: '',
    redirect: false
  }
  handleChange = event => {
    const { target } = event
    const { name, value } = target
    this.setState({
      [name]: value
})
  }
  handleSubmit =  async e => {
    try{
      e.preventDefault();
    let user = await this.props.loginUser(this.state)
     await this.setState({
       user: user
     }) 
    }catch(error){
         alert(error)
    }   
  }
 onRedirect =()=> {
    return (this.state.user === "")? (<form className="white" onSubmit={this.handleSubmit}>
    <h5 className="grey-text text-darken-3">Log In</h5>
    <Input  name="username" label="Email" s={6} onChange={this.handleChange} />
    <Input  name="password" type="password" label="password" s={12} onChange={this.handleChange}/>
  
    <Button type="submit" className="buttons"><Icon right>person_pin</Icon>LogIn</Button>
    </form>): (<Redirect to ="/private"/>)
 }
  render() {
    
    return (
      
      <div className="container">
      {this.onRedirect()}
      </div>
      
    )
  }
}
const mapStateToProps = ({ auth }) => ({
  auth: auth.user
})
export default connect(mapStateToProps,actions)(Login)
