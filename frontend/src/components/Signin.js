import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as myactions from '../action_creators/signin';
 
import { withRouter } from 'react-router-dom'


class SignIn extends Component {
    constructor(props){
        super(props);
        this.state = 
        {
            user:{              
                email:"",
                password:""
            }
        }
    }
    updateState(name, value){
            var user = this.state.user;
            
            if(name==="email")
                user.email = value;
            if(name==="password")
                user.password = value;
            
            this.setState({user})
    }
    display_msg(){
        if(this.props.signin.status==="success"){
            return (<div className="alert alert-success" role="alert">
            {this.props.signin.msg  }
            {localStorage.setItem("vamshi-token",this.props.signin.token)}
            {this.props.history.push('/')}   
          </div>)
        }else if(this.props.signin.status==="error"){
            return (<div className="alert alert-danger" role="alert">
                {this.props.signin.msg}
          </div>)
        }
        else{
            return <div></div>
        }
    }
    
    render() {
        return (
            <div style={{backgroundColor:"white",width:"70%"}}>
                  <input type="email" className="form-control" placeholder="Email" 
                  onChange={e => this.updateState('email',e.target.value)} required/><br/>
                  <input type="password" className="form-control" placeholder="Password" 
                  onChange={e => this.updateState('password',e.target.value)} required/><br/>
                  <button className="btn btn-primary" onClick={()=>this.props.SignIn(this.state)}> Sign in</button>
                  <br/>
                  <br/>
                  
                   {this.display_msg()}
            </div>
          
        );
    }
}
function mapStateToProps(state){
    
     return { signin : state.signin }
 }
 function matchDispatchToProps(dispatch){
     
     return bindActionCreators(myactions,dispatch) 
 }
  
 export default withRouter(connect(mapStateToProps,matchDispatchToProps)(SignIn));