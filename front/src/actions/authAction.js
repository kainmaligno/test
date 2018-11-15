import axios from 'axios';
import { LOGIN_USER, SIGNUP_USER, LOGOUT_USER } from './types';
import swal from 'sweetalert2';
const baseUrl = `http://localhost:3000/auth/`;


export const loginUser = (user) => (dispatch) => {
    axios.post(`${baseUrl}login`,user,{withCredentials:true})
    .then(res => {
      dispatch({type:LOGIN_USER, user:res.data})
      swal({
        type: 'success',
        title: 'Bienvenido',
        text: res.data.username
      })
      
    })
     .catch(error => {//SI ESTA LOGEADO MANDA PRIVATE
  
      swal({
        type:'error',
        title:'algo salio mal',
        text:error.message
      })
     })
  }


export const signupUser = (user) => dispatch => {
    const form = new FormData()
    for(let k in user){
      form.append(k,user[k])
    }
    console.log(form)
    axios.post(`${baseUrl}signup`,form,{withCredentials:true})
    .then(res => {
      dispatch({type:SIGNUP_USER, user: res.data})
      swal({
        type: 'success',
        title: 'Usuario registrado con exito',
        text: res.data.username
      })
    })
    .catch(e => {
      swal({
        type: 'error',
        title: 'Hubo un error con el usuario',
        text: e.message
      })
    })
  }

  export const logoutUser = () => async dispatch => {
    await axios.get(`${baseUrl}logout`)
    dispatch({type: LOGOUT_USER , payload:{}})
    swal({type:'success', title:'Hasta la Proxima'})
  }