import React, { Component } from "react";
//import cookie from "react-cookies";
//import { Redirect } from "react-router";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';

import * as myactions from '../../action/jobApply';
import Navbar from "../Common/Navbar";

class jobApply extends Component {
    constructor(props){
        super(props);
        this.state = 
        {                    
           resume:"",  
           name:"" 
        }
    }

    componentWillMount() {        
            this.props.INIT();
      }
     
    componentWillReceiveProps(nextProps) {
       console.log("component will receive props "+ JSON.stringify(nextProps.jobApply) );

      }       

    render() {
         return (
            <div>
                <Navbar />    
                    <h1>All Jobs</h1>
                   

                     <div class="container">
                     <div class="row">
                        <div class="col-sm">
                            <div style={{ height:"480px" ,overflow:"auto"}}>
                                {this.state.xx}           
                            </div>
                        </div>
                        <div class="col-sm">
                            <div style={{ height:"480px" ,overflow:"auto"}}>
                                {this.state.yy}           
                            </div>
                        </div>
                        
                    </div>
  
                    </div>
            </div>
            );
    }
}

const mapStateToProps = (state) => {
    
     return{
         jobApply : state.jobApply
     }
 }
//Get the current state of the signup page

 function matchDispatchToProps(dispatch){
     
     return bindActionCreators(myactions,dispatch)

 }  

 export default withRouter(connect(mapStateToProps,matchDispatchToProps)(jobApply));
