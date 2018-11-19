import React from 'react';
import {NavLink} from "react-router-dom";



const SignedOutLinks = (props)=>{
    return  <ul className='right'>
    <li><NavLink to='/'>Login / Enter</NavLink></li>
    {/* <li><NavLink to='/login' >Entrar</NavLink></li> */}
   </ul>
  

}

export default SignedOutLinks;