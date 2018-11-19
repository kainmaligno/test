import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux';
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

 class Nav extends Component {
    checkUser =() => {
        return (this.props.auth.username) ?  (<SignedInLinks />) : (<SignedOutLinks />) 
   }
  render() {
    return (
    
      <nav className="nav">
      <div className="container">
      <ul>
        <li><NavLink to='/'>Human</NavLink></li>
      </ul>
       {this.checkUser()}
      </div>
    </nav>
        
    )
  }
}
const mapStateToProps = ({auth}) => ({
    auth: auth.user
})

export default connect(mapStateToProps)(Nav)
