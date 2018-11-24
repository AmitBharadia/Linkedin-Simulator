import React, { Component } from "react";
//import cookie from "react-cookies";
//import { Redirect } from "react-router";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';

import * as myactions from '../../action/savedJobs';
import Navbar from "../Common/Navbar";

class savedJobs extends Component {
    constructor(props){
        super(props);
        this.state = 
        {                    
            savedJobs:[] ,
            xx:"",
            yy:"",
            appliedjobs:[]         
        }
    }


    componentWillMount() {        
            this.props.INIT();
      }
     
    componentWillReceiveProps(nextProps) {
       console.log("component will receive props "+ JSON.stringify(nextProps.savedJobs) );

        if (nextProps.savedJobs.status === "success" ) {
            
            this.setState({savedJobs: nextProps.savedJobs.msg });   
        
        this.setState({ appliedjobs: nextProps.savedJobs.appliedjobs });   
        
         let xx='';

         if(nextProps.savedJobs.msg.length){

             xx = nextProps.savedJobs.msg.map( (item,index) =>{                                

                return (
                    <div key={item._id} >
                    <h3 ><font color="blue" size="4"> {item.position} </font> </h3>
                    <p> location : {item.location} </p> 
                    <p> company : {item.company} </p>                     
                    <p> description : {item.description} </p>    

                    </div>
                );
             });

        }
        else{
            xx= <h2>Sorry No jobs found.  </h2> 
        }

        this.setState({xx});
        }   
        
    }       

    render() {

         return (
            <div>
                <Navbar />    
                    <h1>Saved Jobs</h1>                   

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
         savedJobs : state.savedJobs 
     }
 }
//Get the current state of the signup page

 function matchDispatchToProps(dispatch){
     
     return bindActionCreators(myactions,dispatch)

 }  

 export default withRouter(connect(mapStateToProps,matchDispatchToProps)(savedJobs));
