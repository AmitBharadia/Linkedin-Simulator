import React, {Component} from 'react';
import MainNav from "./MainNav";
import SignIn from './Signin'
import SignUp from './Signup'

class Index extends Component {
    constructor(props){
        super(props);
        this.state = {
           type:true,
           header:"Sign In",
           footer:"Create an Account",
        }
     }
   
    onSwitch=()=>{
           
            var newheader=this.state.footer;
            var newfooter=this.state.header;
            this.setState({type:!this.state.type,header:newheader,footer:newfooter})
    }
    display()
    {
         return (this.state.type ? <SignIn/> : <SignUp/>)
    }
   
    render() {
        return (
        <div className="container-fluid">  
          <MainNav/>
        <div className="container">
          <div className="row" style={{marginTop: "100px"}}>
            <div className="col-6 col-md-6">
                <div style={{float:"right"}}>
              {/*  <img src={require("../images/cartoon.png")} width="250" height="250" alt=""/>    */}
                </div>    
            </div>
            <div className="col-6 col-md-6">
              <div>
                  <h5 className="btn btn-link" style={{marginLeft:"-15px"}}>{this.state.header}</h5>

                  {/*switch the componenr*/}
                  {this.display()}

                  <button className="btn btn-link" style={{marginLeft:"-15px"}} 
                  onClick={this.onSwitch}>{this.state.footer}</button>


              </div>
            </div>
            </div>
          </div>
          </div>
          
        );
    }
}



export default (Index);