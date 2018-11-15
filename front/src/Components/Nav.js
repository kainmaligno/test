import React, { Component } from 'react'
import { Navbar , NavItem } from 'react-materialize'
import { connect } from 'react-redux';
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

 class Nav extends Component {
    checkUser =() => {
        return (this.props.auth.username) ?  <SignedInLinks /> :  <SignedOutLinks />
   }
  render() {
    return (
        <Navbar className="nav" brand='HumanR' right>
          <NavItem>{this.checkUser}</NavItem>
       </Navbar>
    )
  }
}
const mapStateToProps = ({auth}) => ({
    auth: auth.user
})

export default connect(mapStateToProps)(Nav)
