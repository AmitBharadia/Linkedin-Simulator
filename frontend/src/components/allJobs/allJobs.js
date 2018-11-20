import React, { Component } from "react";
//import cookie from "react-cookies";
//import { Redirect } from "react-router";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';

import * as myactions from '../../action/allJobs';
import Navbar from "../Common/Navbar";
import './allJobs.css';

{/* <button onClick={()=>this.props.save(nextProps.allJobs.msg[0]._id) }> save </button>    {/* redirect to save jobs */}
{/* <button onClick={()=>this.props.apply(nextProps.allJobs.msg[0]._id) }> apply </button>  go to next job */} 

class allJobs extends Component {
    constructor(props){
        super(props);
        this.state = 
        {                    
            allJobs:[] ,
            xx:"",
            yy:""         
        }
        this.myClick=this.myClick.bind(this);
    }

    myClick(job_uuid , index ){
        console.log(index);
        let  yy =  <div>
        <h3 ><font color="blue" size="4"> {this.state.allJobs[index].position} </font> </h3>
        <p> location : {this.state.allJobs[index].location} </p> 
        <p> company : {this.state.allJobs[index].company} </p> 
        <button onClick={()=>this.props.apply(job_uuid) }> apply </button>  
        <button onClick={()=>this.props.save(job_uuid) }> save </button>  

        <p> description : {this.state.allJobs[index].description} </p>   
        </div>
        console.log(yy);
        this.setState({yy});

    }

    // componentDidMount(){
    //     console.log(" componnet did mount " + this.state.allJobs);
    // }

    componentWillMount() {        
            this.props.INIT();
      }
     
    componentWillReceiveProps(nextProps) {
       console.log("component will receive props "+ JSON.stringify(nextProps.allJobs) );

        if (nextProps.allJobs.status === "success" ) {
            this.setState({allJobs: nextProps.allJobs.msg });   
        
        let xx='';
        let yy='';

        if(nextProps.allJobs.msg.length){

            xx = nextProps.allJobs.msg.map( (item,index) =>{ 

                return (
                    <div key={item._id} onClick={ () => this.myClick(item._id, index) }>
                    <h3 ><font color="blue" size="4"> {item.position} </font> </h3>
                    <p> location : {item.location} </p> 
                    <p> company : {item.company} </p>                     
                    <p> description : {item.description} </p>    

                    </div>
                );
             });

             yy =  <div>
                        <h3 ><font color="blue" size="4"> {nextProps.allJobs.msg[0].position} </font> </h3>
                        <p> location : {nextProps.allJobs.msg[0].location} </p> 
                        <p> company : {nextProps.allJobs.msg[0].company} </p> 
                        <button onClick={()=>this.props.apply(nextProps.allJobs.msg[0]._id) }> apply </button>  
                        <button onClick={()=>this.props.save(nextProps.allJobs.msg[0]._id) }> save </button>  
                     
                        <p> description : {nextProps.allJobs.msg[0].description} </p>    
                     </div>
           

        }
        else{
            xx= <h2>Sorry No jobs found.  </h2>
            yy=<h2>Sorry No jobs found. At the moment </h2>
        }

        this.setState({xx});
        this.setState({yy});
        }   
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
         allJobs : state.allJobs
     }
 }
//Get the current state of the signup page

 function matchDispatchToProps(dispatch){
     
     return bindActionCreators(myactions,dispatch)

 }  

 export default withRouter(connect(mapStateToProps,matchDispatchToProps)(allJobs));
