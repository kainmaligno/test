import React from 'react';
import { NavLink } from "react-router-dom";
import { Icon } from 'react-materialize'
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authAction';

const  SignedInLinks = (props) => {
  //console.log(props)
    return (
      <ul className='right'>
        {/* <li><NavLink to='/'>Home</NavLink></li> */}
        <li><a onClick={props.logoutUser}>Salir</a></li>
        <li>User Dashboard<NavLink to='/private' className='btn btn-floating purple lighten-1'><Icon>account_circle</Icon></NavLink></li>
        
      </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
  return{
      logoutUser: () => dispatch(logoutUser())
  }
}
export default connect(null,mapDispatchToProps)(SignedInLinks)