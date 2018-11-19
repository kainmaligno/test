import axios from 'axios';
import { LOGIN_USER,  LOGOUT_USER } from './types';
import swal from 'sweetalert2';
const baseUrl = `http://localhost:3000/auth/`;


export const loginUser = (user) => (dispatch) => {
    
    axios.post(`${baseUrl}login`,user,{withCredentials:true})
    .then(res => {
      dispatch({type:LOGIN_USER, user:res.data})
      swal({
        type: 'success',
        title: 'Welcome',
        text: res.data.username
      })
      
    })
     .catch(err => {
      swal({
        type:'error',
        title:'Something went wrong',
        text:err.message
      })
     })
  }

  export const loggedin = () => (dispatch) => {
    axios.get(`http://localhost:3000/auth/loggedin`,{withCredentials:true})
    .then(res => {
      dispatch({type:LOGIN_USER, user:res.data})
      
    })
    .catch(error => {
      console.log(error)
    })
  } 
  export const logoutUser = () => async dispatch => {
    await axios.get(`${baseUrl}logout`)
    dispatch({type: LOGOUT_USER , user:{}})
    swal({type:'success', title:'See yaa!!'})
  }