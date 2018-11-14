import React, { Component } from "react";
import cookie from "react-cookies";
import { Redirect } from "react-router";
import Navbar from "../Common/Navbar";
import { Field, reduxForm, change } from "redux-form";
import { Link, withRouter } from "react-router-dom";
import Modal from 'react-responsive-modal';
import { YearPicker, MonthPicker } from 'react-dropdown-date';
import Countries  from 'react-select-country';
import { connect } from "react-redux";
import { profile } from "../../action/profile";
import './prof.css';

const styles={
    width:"500px",
    horizontalAlign:'middle',
    maxHeight: 'calc(100vh - 210px)',
    overflowY: 'auto',
    height: "350px"
}


class Profile extends Component{

    constructor(props){
        super(props);

        this.state={
            openEditProfile:false,
            openEditExperience:false,
            openEditEducation:false
            
        }

        this.openModalEditProfile = this.openModalEditProfile.bind(this);
        this.closeModalEditProfile = this.closeModalEditProfile.bind(this);
        this.openModalEditExperience = this.openModalEditExperience.bind(this);
        this.closeModalEditExperience = this.closeModalEditExperience.bind(this);
        this.openModalEditEducation = this.openModalEditEducation.bind(this);
        this.closeModalEditEducation = this.closeModalEditEducation.bind(this);


    }

    openModalEditProfile (){
        this.setState({ openEditProfile: true })
      }
      closeModalEditProfile () {
        this.setState({ openEditProfile: false })
      }

    openModalEditExperience (){
        this.setState({ openEditExperience: true })
      }
      closeModalEditExperience () {
        this.setState({ openEditExperience: false })
      }

      openModalEditEducation (){
        this.setState({ openEditEducation: true })
      }
      closeModalEditEducation () {
        this.setState({ openEditEducation: false })
      }  

      onSelectCountry(event){
        this.state.selectedCountry={
             id:event.target.value,
             name:event.target.options[event.target.selectedIndex].text
        }
        console.log("Selected Country",this.state.selectedCountry);
    }
    onSubmit(values) {
        console.log("Onsubmit values of profile",values);
        //this.props.signIn(values);
        this.props.profile(values);
      }

   

render(){
    const {openEditProfile,openEditExperience,openEditEducation}=this.state;
    const { handleSubmit } = this.props;
    return(
        <div>
            <Navbar />
            <br/>
            <br/>
            
            <div className="ml-5 mr-5 mt-5">
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <button onClick={this.openModalEditProfile} style={{'min-height': '48px','width': '40%','position': 'relative','backgroundColor': '#f4a742','borderColor': '#f4a742','color': '#fff','text-shadow': 'none','line-height': '24px','margin-bottom': '0','font-weight': '400','text-align': 'center','cursor': 'pointer','border': '1px solid transparent','padding': '11px 32px','font-size': '1rem'}}>Edit Profile</button>
            <Modal open={openEditProfile} onClose={this.closeModalEditProfile} center dialogClassName="my-modal">
          <h2 style={{'marginTop':'50px'}}>Edit Profile</h2>
          <hr/>
          <div style={styles}>
          
                            <div class="ml-5 mr-5 mt-5 pb-3">
                                <Field
                                    className="form-control form-control-lg"
                                    placeholder="First Name"
                                    label="First Name"
                                    name="firstName"
                                    type="text"
                                    component={this.renderField}
                                />
                            </div>

                            <div class="ml-5 mr-5 mt-5 pb-3">
                            <Field
                                className="form-control form-control-lg"
                                placeholder="Last Name"
                                label="Last Name"
                                name="lastName"
                                type="text"
                                component={this.renderField}
                            />
                            </div>

                            <div class="ml-5 mr-5 mt-5 pb-3">
                            <Field
                                className="form-control form-control-lg"
                                placeholder="Headline"
                                label="Headline *"
                                name="profileHeadline"
                                type="text"
                                component={this.renderField}
                            />

                            
                            </div>

            <div class="ml-5 mr-5 mt-5 pb-3">
                            <Field
                                className="form-control form-control-lg"
                                placeholder="Education"
                                label="Education *"
                                name="profileEducation"
                                
                                component={this.renderField}
                            />

                            
            </div>

            <div class="ml-5 mr-5 mt-5 pb-3">
                            <Field
                                className="form-control form-control-lg"
                                placeholder="Country/Region"
                                label="Country/Region *"
                                name="profileCountry"
                                
                                component={this.renderField}
                            />

                            
            </div>


                 <div class="ml-5 mr-5 mt-5 pb-3">
             <Countries ref="country" name="country" empty=" -- Select country --" onChange={(e)=>this.onSelectCountry(e)} style={{'width':'100%'}}/>
                </div>
            {/* <div class="ml-5 mr-5 mt-5 pb-3">
                            <Field
                                className="form-control form-control-lg"
                                
                                type="checkbox"
                                component={this.renderField}
                            />

                            
        </div>*/}
            <div class="ml-5 mr-5 mt-5 pb-3">
                            <Field
                                className="form-control form-control-lg"
                                placeholder="Zipcode"
                                label="Zipcode"
                                name="Zipcode"
                                
                                component={this.renderField}
                            />

                            
            </div>

             <div class="ml-5 mr-5 mt-5 pb-3">
                            <Field
                                className="form-control form-control-lg"
                                placeholder="Location"
                                label="Location within this area"
                                name="profileLocation"
                                
                                component={this.renderField}
                            />

                            
            </div>

            <div class="ml-5 mr-5 mt-5 pb-3">
                            <Field
                                className="form-control form-control-lg"
                                placeholder="Industry"
                                label="Industry *"
                                name="profileIndustry"
                                
                                component={this.renderField}
                            />

                            
            </div>

             <div class="ml-5 mr-5 mt-5 pb-3">
                            <Field
                                className="form-control form-control-lg"
                                placeholder="Profile URL, Email, WeChat ID"
                                label="Contact Info"
                                name="profileContact"              
                                component={this.renderField}
                            />
            </div>

                         <div class="ml-5 mr-5 mt-5 pb-3">
                            <Field
                                className="form-control form-control-lg"
                                placeholder="Summary"
                                label="Summary"
                                name="profileSummary"              
                                component={this.renderField}
                            />
            </div>

          </div>

        <div class="ml-5 mr-5">
                            <button
                                    type="submit"
                                    className="btn btn-primary btn-lg btn-block"
                                    id="form-submit"
                                    tabindex="4"
                                    component={this.renderField}
                                >
                                    Save
                                </button>
                    </div>
          
          

        </Modal>
           
           
           
           chanhge here
            <button onClick={this.openModalEditExperience} style={{'min-height': '48px','width': '40%','position': 'relative','backgroundColor': '#f4a742','borderColor': '#f4a742','color': '#fff','text-shadow': 'none','line-height': '24px','margin-bottom': '0','font-weight': '400','text-align': 'center','cursor': 'pointer','border': '1px solid transparent','padding': '11px 32px','font-size': '1rem'}}>Edit Experience</button>
            <Modal open={openEditExperience} onClose={this.closeModalEditExperience} center dialogClassName="my-modal" >
          <h2 style={{'marginTop':'50px','marginBottom':'25px'}}>Edit Experience</h2>
          <hr/>
          <div style={styles}>

                            <div class="ml-5 mr-5 mt-5 pb-3">
                                <Field
                                    className="form-control form-control-lg"
                                    placeholder="Ex:Manager"
                                    label="Title*"
                                    name="experienceTitle"
                                    type="text"
                                    component={this.renderField}
                                />
                            </div>

                            <div class="ml-5 mr-5 mt-5 pb-3">
                            <Field
                                className="form-control form-control-lg"
                                placeholder="Ex:Microsoft"
                                label="Company*"
                                name="experienceCompany"
                                type="text"
                                component={this.renderField}
                            />
                            </div>

                            <div class="ml-5 mr-5 mt-5 pb-3">
                            <Field
                                className="form-control form-control-lg"
                                placeholder="Ex:London, United Kingdom"
                                label="Location"
                                name="experienceLocation"
                                type="text"
                                component={this.renderField}
                            />

                            
                            </div>

                            <div class="ml-5 mr-5 mt-5 pb-3">
                            From
                            <MonthPicker 
                                className="form-control form-control-lg"
                                defaultValue={"Month"}
                                
                            />
                            </div>
                            <div >
                            <YearPicker 
                                className="form-control form-control-lg my-modal"
                                defaultValue={'Year'}
                                start={1959}
                                end={2018}
                                reverse
                                required={true}
                                
                            />
                            </div>
     

            {/* <span style={{'display':'block'}}>
                            <textarea onChange={this.questionDescriptionHandler} placeholder="Tell us more about your query" rows="5" cols="10" style={{'margin-bottom':'10px','width': '100%','padding':  '9px 14px','font-size':  '18px','border-radius':  '0px','line-height':  '1.33','margin-top':  '16px'}}></textarea>
            </span>


            <span style={{'justifyContent':'center','display':'flex'}}>
            <input type="submit" value="Not Now" onClick={this.closeModal} style={{'vertical-align':'middle','width':'40%','height':'44px','background-color':'light-grey','border-color':'light-grey','font-size':'18px','color':'black','padding':' 7px 31px','text-align':'center','cursor':'pointer'}}/>
            <input type="submit"  value="Send" onClick={this.sendQuestion}  style={{'margin-left':'5px','vertical-align':'middle','width':'40%','height':'44px','background-color':'#ff8a00','border-color':'#ff8a00','font-size':'18px','color':'#FFE','padding':' 7px 31px','text-align':'center','cursor':'pointer'}}/>

            </span> */}


            <div class="ml-5 mr-5 mt-5 pb-3">
                            <Field
                                className="form-control form-control-lg"
                                placeholder=""
                                label="Headline"
                                name="experienceHeadline"
                                
                                component={this.renderField}
                            />

                            
            </div>

            <div class="ml-5 mr-5 mt-5 pb-3">
                            <Field
                                className="form-control form-control-lg"
                                placeholder=""
                                label="Description"
                                name="experienceDescription"
                                
                                component={this.renderField}
                            />

                            
            </div>

            {/* <div class="ml-5 mr-5 mt-5 pb-3">
                            <Field
                                className="form-control form-control-lg"
                                
                                type="checkbox"
                                component={this.renderField}
                            />

                            
        </div>*/}

         

          </div>
          <div class="ml-5 mr-5 mt-5 pb-3">
                            <button
                                    type="submit"
                                    className="btn btn-primary btn-lg btn-block"
                                    id="form-submit"
                                    tabindex="4"
                                    component={this.renderField}
                                >
                                    Save
                                </button>
                    </div>

                    <div class="ml-5 mr-5">
                            <button
                                    type="submit"
                                    className="btn btn-primary btn-lg btn-block"
                                    id="form-submit"
                                    tabindex="4"
                                    component={this.renderField}
                                >
                                    Delete
                                </button>
                    </div>
        </Modal>

        <div>
            Chnage here</div>

            <button onClick={this.openModalEditEducation} style={{'min-height': '48px','width': '40%','position': 'relative','backgroundColor': '#f4a742','borderColor': '#f4a742','color': '#fff','text-shadow': 'none','line-height': '24px','margin-bottom': '0','font-weight': '400','text-align': 'center','cursor': 'pointer','border': '1px solid transparent','padding': '11px 32px','font-size': '1rem'}}>Edit Education  </button>
            <Modal open={openEditEducation} onClose={this.closeModalEditEducation} center dialogClassName="my-modal">
            
          <h2 style={{'marginTop':'50px','marginBottom':'25px'}}>Edit Education</h2>
          <hr/>
          <div style={styles}>

                            <div class="ml-5 mr-5 mt-5 pb-3">
                                <Field
                                    className="form-control form-control-lg"
                                    placeholder="Ex:Boston University"
                                    label="School *"
                                    name="educationSchool"
                                    type="text"
                                    component={this.renderField}
                                />
                            </div>

                            <div class="ml-5 mr-5 mt-5 pb-3">
                            <Field
                                className="form-control form-control-lg"
                                placeholder="Ex:Bachelor's"
                                label="Degree"
                                name="educationDegree"
                                type="text"
                                component={this.renderField}
                            />
                            </div>

                            <div class="ml-5 mr-5 mt-5 pb-3">
                            <Field
                                className="form-control form-control-lg"
                                placeholder="Ex:Business"
                                label="Field of Study"
                                name="educationFieldofStudy"
                                type="text"
                                component={this.renderField}
                            />

                            
                            </div>

                            <div class="ml-5 mr-5 mt-5 pb-3">
                            <Field
                                className="form-control form-control-lg"
                                placeholder=""
                                label="Grade"
                                name="educationGrade"
                                type="text"
                                component={this.renderField}
                            />

                            
                            </div>


                            <div class="ml-5 mr-5 mt-5 pb-3">
                            <Field
                                className="form-control form-control-lg"
                                placeholder=""
                                label="Activities and socities"
                                name="educationActivities"    
                                component={this.renderField}
                            />

                                                        
                                        </div>



                            
                            <div style={{'marginTop':'20px'}} >
                                From
                            <YearPicker 
                                className="form-control form-control-lg my-modal"
                                defaultValue={'Year'}
                                start={1959}
                                end={2018}
                                reverse
                                required={true}

                                
                            />

                             To
                            <YearPicker
                                className="form-control form-control-lg"
                                defaultValue={'Year'}
                                start={1959}
                                end={2018}
                                reverse
                                required={true}
                                
                            />
                            </div>

                            <div style={{'marginTop':'20px'}}>
                               
                            </div>
     



            <div class="ml-5 mr-5 mt-5 pb-3">
                            <Field
                                className="form-control form-control-lg"
                                placeholder=""
                                label="Description"
                                name="educationDescription"
                                
                                component={this.renderField}
                            />

                            
            </div>

     
                  
          </div>

            <div class="ml-5 mr-5 mt-5 pb-3">
                            <button
                                    type="submit"
                                    className="btn btn-primary btn-lg btn-block"
                                    id="form-submit"
                                    tabindex="4"
                                    component={this.renderField}
                                >
                                    Save
                                </button>
                    </div>

                    <div class="ml-5 mr-5">
                            <button
                                    type="reset"
                                    className="btn btn-primary btn-lg btn-block"
                                    id="form-submit"
                                    tabindex="4"
                                    component={this.renderField}
                                >
                                    Delete
                                </button>
                    </div>
        </Modal>
    


        </form>
        </div>
        </div>
    )
} 

 //Define component that you want to render
 renderField(field) {
    //console.log("Field Details : " + JSON.stringify(field));
    const {
      meta: { touched, error },
      type,
      placeholder,
      value
    } = field;
    const className = `form-group form-control-lg ${
      touched && error ? "has-danger" : ""
    }`;
    //console.log("className : " + className);
    return (
      <div class="form-group form-control-lg has-danger">
        <label>{field.label}</label>
        <input
          class="form-control form-control-lg border border border-dark"
          type={type}
          placeholder={placeholder}
          value={value}
          {...field.input}
        />
        <div class={{ className }}>{touched ? error : ""}</div>
      </div>
    );
  }
}

//Get the current state of the signup page
const mapStateToProps = state => {
    //console.log("Current State : " + JSON.stringify(state.login.authLogin));
    return {
      //   authLogin: state.login.authLogin
    };
  };


function validate(values) {
    const errors = {};
  
    // Validate the inputs from 'values'
    if (!values.username) {
      errors.username = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.username)
    ) {
      errors.username = "Invalid email address";
    }
    if (!values.password) {
      errors.password = "Required";
    }
  
    // If errors is empty, the form is fine to submit
    // If errors has *any* properties, redux form assumes form is invalid
    return errors;
}

export default reduxForm({
    
    form: "ProfileForm"
  })(
    connect(
      mapStateToProps,
      { profile }
    )(withRouter(Profile))
  );