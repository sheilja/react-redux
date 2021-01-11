import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST,FETCH_USERS_SUCCESS } from "./actionTypes"
import axios from 'axios';
export const fetchUserRequest=()=>{

    return{
    type:'FETCH_USERS_REQUEST'
    }
}
export const fetchUserSuccess=(users)=>{
    return{
    type:'FETCH_USERS_SUCCESS',
    payload:users
    }
}
export const fetchUserFailure=(Errors)=>{

    return{
    type:'FETCH_USERS_FAILURE',
    payload:Errors
    }
}

export const fetchUsers=()=>{

    return(dispatch)=>{
        dispatch(fetchUserRequest())

        //axios.get('https://jsonplaceholder.typicode.com/users')
        axios.get("http://localhost:3000/service")
        .then(response => {

          // response.data is the users
          const users = response.data
 
          dispatch(fetchUserSuccess(users))
        })
        .catch(error => {

          // error.message is the error message
          dispatch(fetchUserFailure(error.message))
        })
    }
}