import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as myactions from '../action_creators/Signup';

import { withRouter } from 'react-router-dom'

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = 
        {
            user:{
                firstname:"",
                lastname:"",
                email:"",
                password:""
            }
        }
    }
    updateState(name, value){
            var user = this.state.user;
            if(name==="firstname")
                user.firstname = value;
            if(name==="lastname")
                user.lastname = value;
            if(name==="email")
                user.email = value;
            if(name==="password")
                user.password = value;
            
            this.setState({user})
    }
    display_msg(){
        if(this.props.signup.status==="success"){
            this.props.history.push('/')
        }else if(this.props.signup.status==="error"){
            return (<div className="alert alert-danger" role="alert">
                {this.props.signup.msg}
          </div>)
        }
        else{
            return <div></div>
        }
    }
    componentWillMount(){
        if(this.props.signup.status==="success")            
            this.props.history.push('/signin');

    }
    
    render() {
        
        return (
            <div style={{backgroundColor:"white",width:"70%"}}>
                    <input type="text" className="form-control" placeholder="First name"
                    onChange={e => this.updateState('firstname',e.target.value)} required/><br/>
                    <input type="text" className="form-control" placeholder="Last name" 
                    onChange={e => this.updateState('lastname',e.target.value)} required/><br/>
                    <input type="email" className="form-control" placeholder="Email" 
                    onChange={e => this.updateState('email',e.target.value)} required/><br/>
                    <input type="password" className="form-control" placeholder="Password" 
                    onChange={e => this.updateState('password',e.target.value)} required/><br/>
                    <button className="btn btn-primary" onClick={()=>this.props.SignUp(this.state.user)}> Create an Account</button>
                    <br/>
                    <br/>
                    {this.display_msg()}
            </div>
          
        );
    }
}
function mapStateToProps(state){
   
    return{
       
        signup : state.signup
    }
}
function matchDispatchToProps(dispatch){
    
    return bindActionCreators(myactions,dispatch)
  
    
}


export default withRouter(connect(mapStateToProps,matchDispatchToProps)(SignUp));