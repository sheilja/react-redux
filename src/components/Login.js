import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
//import {router} from 'react-router-dom';
 class Login extends Component {
        constructor(){
            super()
            this.stae={
             /*id:'1',
             name:'selja',
             price:10*/
             s_id:'111',
             s_name:"selja",
             s_description:"des",
             sc_id:1,
             s_status:0,
             not_logged_in:''

        };
    }
    handler=(e)=>{

        this.props.fetchUsers(this);
        //history.push("/event");
        //this.props.router.push("/event");
        //return( <Redirect to="/event"></Redirect>)
    }
    render() {
        console.log("status");
        console.log(this.props.not_logged_in);
        return this.props.not_logged_in ? (
            <div>
            
            <Redirect to="/event"></Redirect>
            </div>
          )
           :( <div>
               Mobile<input type="text"></input>
               Password<input type="text"></input>
                <button onClick={this.handler}>LOGIN</button>
            </div>
           )
        
    }
}
const mapStateToProps = state => {
    console.log("USERS");
 console.log(state.users)
     return {
         loading:state.loading, 
       userData: state.users,
        errors:state.errors,
        not_logged_in:state.not_logged_in
     }
   }
   
   const mapDispatchToProps = dispatch => {
    
     return {
       fetchUsers: () => {
        dispatch({
            type:'LOGIN',
          //  product:this.state
        });
     }
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);