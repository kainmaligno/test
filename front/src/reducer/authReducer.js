import {  LOGIN_USER, LOGOUT_USER } from '../actions/types'

const initialState = {
    user:{}
}
export default (state = initialState, action) => {
    switch(action.type){
        case LOGIN_USER:
        return{
            ...state,
            user:action.user
        }
        case LOGOUT_USER: 
        return{
           ...state={},
            user: action.user
        }
    default:
    return state
    }
}