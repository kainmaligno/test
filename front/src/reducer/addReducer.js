import { ADD_PERSON, EDIT_PERSON, DELETE_PERSON, GET_ALL } from '../actions/types'

const initialState = {
    persons:[]
}
export default (state = initialState, action) => {
    switch(action.type){
        // case ADD_PERSON:
        // return{
        //    ...state.persons.push(action.person),
            
        //     persons:state.persons.push(action.person)    
        // }
        // case EDIT_PERSON:
        // return{
        //     ...state,
        //     persons:action.editPerson
        // }

        // case DELETE_PERSON: 
        // return{
        
        //     persons: action.deletePerson
        // }

        case GET_ALL:
        return{
            ...state,
            persons:action.persons
        }
    default:
    return state
    }
}