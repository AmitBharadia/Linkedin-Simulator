import React, { Component } from "react";
//import cookie from "react-cookies";
//import { Redirect } from "react-router";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';

import * as myactions from '../../action/allJobs';
import Navbar from "../Common/Navbar";
import './allJobs.css';

class allJobs extends Component {
    constructor(props){
        super(props);
        this.state = 
        {                    
            allJobs:[] ,
            xx:"",
            yy:"",
            savedjobs:[] ,
            
                company:'',
                easyApply:true,
                position:'',
                experienceLevel:'',
                location:''
                    
        }
        this.myClick=this.myClick.bind(this);
        this.apply=this.apply.bind(this);

    }
    setEasyApply(event) {
        // console.log(event.target.value);
        // console.log(event.target.name);
        this.setState( {easyApply : ! this.state.easyApply });
        // console.log("status " +this.state.easyApply);

    }

    onChange = (e) => {

        // console.log('name  '+e.target.name);
        //  console.log('value '+e.target.value);

        this.setState({ [e.target.name]: e.target.value });
      }

    apply(job_uuid){
        console.log( "clicked apply "+job_uuid );
    }

        myClick(job_uuid , index ){

            let status=0;

            this.state.savedjobs.forEach( (element)=> {
                console.log(element.job_uuid);
                if(element.job_uuid === job_uuid)
                    status=1;
            }) 

        if( status){
            let  yy =  <div>
        <h3 ><font color="blue" size="4"> {this.state.allJobs[index].position} </font> </h3>
        <p> location : {this.state.allJobs[index].location} </p> 
        <p> company : {this.state.allJobs[index].company} </p> 
        <button onClick={()=>this.props.UNSAVE(job_uuid) }> UNSAVE </button>  
        <button onClick={ ()=>this.apply(job_uuid)  }> apply </button>  

        <p> description : {this.state.allJobs[index].description} </p>   
        </div>
        console.log(yy);
        this.setState({yy});

        }
        else{
            let  yy =  <div>
        <h3 ><font color="blue" size="4"> {this.state.allJobs[index].position} </font> </h3>
        <p> location : {this.state.allJobs[index].location} </p> 
        <p> company : {this.state.allJobs[index].company} </p> 
        <button onClick={()=>this.props.SAVE(job_uuid ,this.state.allJobs[index].recruiter_id, this.state.allJobs[index].position , 
            this.state.allJobs[index].company, this.state.allJobs[index].location ) }> SAVE </button>  
        <button onClick={ ()=> this.apply(job_uuid)  }> apply </button>  

        <p> description : {this.state.allJobs[index].description} </p>   
        </div>
        console.log(yy);
        this.setState({yy});

        }
        

    }

    componentWillMount() {        
            this.props.INIT();
      }
     
    componentWillReceiveProps(nextProps) {
       console.log("component will receive props "+ JSON.stringify(nextProps.allJobs) );

        if (nextProps.allJobs.status === "success" ) {
            this.setState({allJobs: nextProps.allJobs.msg });   
        console.log(nextProps.allJobs.savedjobs);
        
        this.setState({ savedjobs: nextProps.allJobs.savedjobs });   
        
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

             let status=0;

             nextProps.allJobs.savedjobs.forEach( (element)=> {
                 console.log(element.job_uuid);
                 if(element.job_uuid === nextProps.allJobs.msg[0]._id)
                     status=1;
             }) 

            
            if( status){
                yy =  <div>
                <h3 ><font color="blue" size="4"> {nextProps.allJobs.msg[0].position} </font> </h3>
                <p> location : {nextProps.allJobs.msg[0].location} </p> 
                <p> company : {nextProps.allJobs.msg[0].company} </p> 
                <button onClick={()=>this.props.UNSAVE(nextProps.allJobs.msg[0]._id) }> UNSAVE </button>  
                <button onClick={ ()=> this.apply(nextProps.allJobs.msg[0]._id)  }> apply </button>  
                <p> description : {nextProps.allJobs.msg[0].description} </p>    
             </div>
            console.log(yy);

            }
            else{
            yy =  <div>
                        <h3 ><font color="blue" size="4"> {nextProps.allJobs.msg[0].position} </font> </h3>
                        <p> location : {nextProps.allJobs.msg[0].location} </p> 
                        <p> company : {nextProps.allJobs.msg[0].company} </p> 
                        <button onClick={()=>this.props.SAVE(nextProps.allJobs.msg[0]._id , nextProps.allJobs.msg[0].recruiter_id, nextProps.allJobs.msg[0].position , 
                            nextProps.allJobs.msg[0].company, nextProps.allJobs.msg[0].location) }> SAVE </button>  
                        <button onClick={()=> this.apply(nextProps.allJobs.msg[0]._id) }> apply </button>  
                        <p> description : {nextProps.allJobs.msg[0].description} </p>    
                     </div>
            console.log(yy);

        }

             
           

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
                <div>

                    <label class="maincontainer"> Easy Apply
                    <input type="checkbox" name="easyApply" onChange={this.setEasyApply.bind(this)} />
                    <span class="checkmark"></span>
                    </label>

                <input  type="text" placeholder="position" name="position" onChange={this.onChange} /> 
                <input  type="text" placeholder="company" name="company" onChange={this.onChange} /> 
                <input  type="text" placeholder="location" name="location" onChange={this.onChange} /> 

                </div>

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
