import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import Login from './Login'
    class Event extends Component {
    constructor(){
        super()
        this.stae={

         not_logged_in:''

    };
}
    render() {
        return this.props.not_logged_in ? (
            <div>
       
            <h1>wecome</h1>
            </div>
          )
           :( <div>

              
            </div>
           )
    }
}
const mapStateToProps = state => {
    console.log("USERS");
 console.log(state.users)
     return {

        not_logged_in:state.not_logged_in
     }
   }
   
   const mapDispatchToProps = dispatch => {
    
     return {
       fetchUsers: () => {
        /*dispatch({
            type:'ADD_PRODUCT',
          //  product:this.state
        });*/
     }
   }
}
export default connect(mapStateToProps,mapDispatchToProps)(Event);