import axios from 'axios';
import { ADD_PERSON, EDIT_PERSON, DELETE_PERSON, GET_ALL } from './types';
import swal from 'sweetalert2';
const baseUrl = `http://localhost:3000/`;

export const addPerson = (person) => dispatch => {
    axios.post(`${baseUrl}newPersonel`,person )

    .then(res =>{
        dispatch({type:ADD_PERSON, person:res.data})
        swal({
          type: 'success',
          title: 'Person add',
          text: res.data.name
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

export const editPerson = (id) => dispatch => {
    axios.put(`${baseUrl}update_person/${id}`)
    .then(res =>{
        dispatch({type:EDIT_PERSON, person:res.data})
        swal({
          type: 'success',
          title: 'Person Edited',
          text: {"person edited:":res.data}
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

export const deletePerson = (id) => dispatch => {
    axios.delete(`${baseUrl}remove_person/${id}`)
    .then(res =>{
        dispatch({type:DELETE_PERSON, person:res.data})
        swal({
          type: 'success',
          title: 'person deleted successfully!',
          text: res.data.message
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

export const get_all = (person) => dispatch => {
    axios.get(`${baseUrl}all`)
    .then( res => {
        dispatch({type:GET_ALL, persons:res.data})
    })
}