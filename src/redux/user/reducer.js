import {FETCH_USERS_REQUEST,FETCH_USERS_SUCCESS,FETCH_USERS_FAILURE} from './actionTypes'
import axios from 'axios';
const initialstate={
    loading:false,
    users:[],
    errors:'',
    not_logged_in:false
    
}
const reducer=(state=initialstate,action)=>
{
    switch(action.type)
    {

         case 'FETCH_USERS_REQUEST':
             return{
                 ...state,
                 loading:true
             }
         case 'LOGIN':



             /*const data={
                "s_id":'111',
                "s_name":"selja",
                "s_description":"des",
                "sc_id":1,
                "s_status":0
   
             }*/
             /*const data={
                 "userid":233,
                 "id":233,
                 "title":"okay",
                 "body":"yjghg"
             }
            axios.post('https://jsonplaceholder.typicode.com/posts',data)*/
            const data={
                "p_mobile":'8000161298',
                "p_password":'Meet@12345'

            }
//            axios.post("http://localhost:3000/service",data)
            axios.post("http://localhost:3000/adminlogin",data)
            .then((data)=>{

                if(data.data.length!=0){
                    console.log("Correct");

                   // console.log(data.data)
                }
                    else{
                        console.log("Incorrect");
                    }
                 }
            )
            .catch(error => {

                // error.message is the error message
                console.log("error");
                console.log("err= "+error);
              })
             
             return{
                 ...state,

                 not_logged_in:true


                 

             }    
         case 'FETCH_USERS_SUCCESS':
            return{
                 ...state,
                 loading:false,
                 users:action.payload,
                 errors:''
             }
         case 'FETCH_USERS_FAILURE':

             return{
                 ...state,
                 loading:false,
                 users:[],
                 errors:action.payload
             }
         default:return state    
              
    }
}
export default reducer;