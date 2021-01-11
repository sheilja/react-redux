/*import React, { useEffect } from 'react'

import { connect } from 'react-redux';
import {FETCH_USERS_REQUEST,FETCH_USERS_SUCCESS,FETCH_USERS_FAILURE} from '../redux/user/actionTypes'
import {fetchUsers} from '../redux/user/actions';



function userContainer({ userData, fetchUsers }) {
    useEffect(() => {
        fetchUsers()
      }, [])
      
      return userData.loading ? (
        <h2>Loading</h2>
      ) : userData.error ? (
        <h2>{userData.error}</h2>
      ) : (
        <div>
          <h2>Users List</h2>
          <div>
            {userData &&
              userData.users &&
              userData.users.map(user => <p>{user.name}</p>)}
          </div>
        </div>
    )
}
const mapStateToProps=state=>{
    return{
        
        users:state.users
    }
}
const mapDispatchToProps=dispatch=>{
    return{

        fetchUsers:()=>{
            dispatch(fetchUsers())},
            
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(userContainer)

*/
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {fetchUsers} from '../redux/user/actions';
function UserContainer ({ errors,userData,loading, fetchUsers }) {
  useEffect(() => {
    fetchUsers()
  }, [])
console.log(loading);
console.log(errors);
  return loading ? (
    <h2>Loading</h2>
  ) : errors ? (
    <h2>{errors}</h2>
  ) : (
    <div>

      <h2>Users List</h2>
      <div>
          {
userData.map(user => <p>{user.s_name}</p>)
          }

      </div>
    </div>
  )
}
const mapStateToProps = state => {
   console.log("USERS");
console.log(state.users)
    return {
        loading:state.loading, 
      userData: state.users,
       errors:state.errors
    }
  }
  
  const mapDispatchToProps = dispatch => {
   
    return {
      fetchUsers: () => {
      dispatch(fetchUsers())}
    }
  }
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserContainer)

/*function UserContainer (props) {
    return (
        <div>
            <h1>hello{props.userData}</h1>
            <button onClick={() =>{

            //var a=[];
            //userData.users.map(user => <p>{user.name}</p>)
            //a=props.fetchUsers();

            console.log(props.userData);

            }}>fetch</button>
            
            
        </div>
    )
  }
const mapStateToProps = state => {
  return {
    userData: state.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserContainer)*/