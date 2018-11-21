import React, { Component } from "react";
import MainNavbar from "../Common/MainNavbar";
import ModalProfile from "./ModalProfile"
import ModalExperience from "./ModalExperience";
import ModalEducation from "./ModalEducation";
import { dummy } from "../../action/dummy";
import { connect } from "react-redux";
import "./prof.css";
import { getprofile } from "../../action/profile";
import jobsFormThird from "../Post Jobs/jobsFormThird";




class Profile extends Component{

    constructor(props){
        super(props);
        this.state={
            data:null,
            first_name:"",
            last_name:"",
            profileHeadline:"",
            profileEducation:"",
            Zipcode:null,
            profileLocation:"",
            profileIndustry:"",
            profileContact:"",
            profileSummary:"",
            countryName:"",
            experience:[],
            education:[]

        }
    }
  componentDidMount(){
      console.log("Hello");
      this.props.getprofile({id:
        this.props.match.params.id
        });
     
      
  }

  componentWillReceiveProps(newChangedProps){
    if(newChangedProps.profile.profile.result){
          console.log("Data received",newChangedProps);
          
          this.setState({
            data:newChangedProps.profile.profile.result,
            first_name:newChangedProps.profile.profile.result.first_name,
            last_name:newChangedProps.profile.profile.result.last_name,
            profileEducation:newChangedProps.profile.profile.result.profileEducation,
            profileHeadline:newChangedProps.profile.profile.result.profileHeadline,
            Zipcode:newChangedProps.profile.profile.result.Zipcode,
            profileLocation:newChangedProps.profile.profile.result.profileLocation,
            profileIndustry:newChangedProps.profile.profile.result.profileIndustry,
            profileContact:newChangedProps.profile.profile.result.profileContact,
            profileSummary:newChangedProps.profile.profile.result.profileSummary,
            countryName:newChangedProps.profile.profile.result.countryName,
            experience:newChangedProps.profile.profile.result.experience,
            education:newChangedProps.profile.profile.result.education,
            
          })
          
    }

    
}


render(){
   
        console.log("Checking in reneder",this.state.first_name);
        console.log("Checking in reneder",this.state.last_name);
        console.log("Checking in reneder",this.state.profileEducation);
        console.log("Checking in reneder",this.state.Zipcode);
        console.log("Checking in reneder",this.state.profileLocation);
        console.log("Checking in reneder",this.state.profileContact);
        console.log("Checking in reneder",this.state.profileSummary);
        console.log("Checking in reneder",this.state.experience);
        console.log("Checking in reneder",this.state.education);
        
        // console.log("Checking in reneder",this.state.first_name);
        // console.log("Props",this.props.profile.profile.result.countryName)
        // if(this.state.data.length>0){
        //     const first_name=this.state.data.first_name
        // console.log("fisrt nam",first_name);
        // }

        let expDetails=!this.state.experience ? "": this.state.experience.map((expdata,i)=>{
            if(expdata.experienceTitle && expdata.experienceCompany){
            return(
                <div class="card mb-3" width="250" style={{"border":"none"}}>
                <div class="card-body">
                    <h4 class="card-title">{expdata.experienceTitle}</h4>
                    <h5> {expdata.experienceCompany}</h5>
                    <p>From:{expdata.ExpFromMonth}/{expdata.ExpFromYear} - {expdata.ExpToMonth}/{expdata.ExpToYear}</p> 
                </div>
                <hr />
                </div>
            
            )
        }
        })

        let eduDetails=!this.state.education ? "":this.state.education.map((edudata,i)=>{
            if(edudata.educationSchool && edudata.educationDegree){
            return(
                <div class="card mb-3" width="250" style={{"border":"none"}}>
                <div class="card-body">
                    <h4 class="card-title">School: {edudata.educationSchool}</h4>
                    <p> {edudata.educationDegree} degree</p>
                </div>
                <hr />
                </div>
            )
        }
        })
        
        
    
    
    return(
        <div>
            <MainNavbar />
            <br/>
            <br/>
            <div class="row">
                <div class="col">
                {/* Something */}
                </div>
                <div class="col-8 pt-6 pl-0">

                <div class="card mb-3" width="150">
                    <div class="card-body">
                       
                       
                            <div id="DIV_3" class="border" />{" "}
                                <a href="" id="A_4">
                                    <img
                                        height="64"
                                        width="64"
                                        src="https://media.licdn.com/dms/image/C5603AQEqgYpgcdt-Sg/profile-displayphoto-shrink_100_100/0?e=1547683200&amp;v=beta&amp;t=OGK1W9t5IfzVDM80ex0DtDiqrdgNNojUiHCA8w3lrVg"
                                        id="IMG_5"
                                    />
                                    </a>

                                    
                                    <ModalProfile profileData={this.state.data} />
                                         <h4>Username: {this.state.first_name}</h4>
                                         <h4>Description:{this.state.profileHeadline}</h4> 
                                         <h4>Location:{this.state.profileLocation}</h4>
                   
                    </div>
                </div>      
                        <div class="card mb-3 pt-3" width="150" >
                            <div card="card-body">
                             <h3 class="card-title">Experience</h3>
                             <ModalExperience/>
                             {expDetails}
                                
                            </div>
                        </div>
                        <div class="card mb-3 pt-3" width="150">
                            <div card="card-body">
                             <h3 class="card-title">Education</h3>
                             <ModalEducation />
                             {eduDetails}
                                
                            </div>
                        </div>

                </div>

                

                
                <div class="col pt-5">
                    {/* Nothing */}
                </div>
                
                <div class="col" />

            </div>
            
        </div>
    )
} 


 
}
const mapStateToProps = state => {
    return {
      profile:state.profile
    };
  };

export default connect(
    mapStateToProps,
    {dummy,getprofile}
)(Profile);