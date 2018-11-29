import React, { Component } from "react";

import { reduxForm, change } from "redux-form";
import {withRouter } from "react-router-dom";
import Modal from "react-responsive-modal";
import { connect } from "react-redux";
import { profile } from "../../action/profile";
import axios from "axios";
import * as CONST from "../../Const/index";

const styles = {
    width: "500px",
    horizontalAlign: "middle",
    maxHeight: "calc(100vh - 210px)",
    overflowY: "auto",
    height: "150px"
};


class ModalMessage extends Component {
    constructor(props) {
        super(props);
   

        this.state = {
            openMessageBox: false,
            message: ""
        };

        this.openModalMessageBox = this.openModalMessageBox.bind(this);
        this.closeModalMessageBox = this.closeModalMessageBox.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    openModalMessageBox() {
        this.setState({ openMessageBox: true });
    }
    closeModalMessageBox() {
        this.setState({ openMessageBox: false });
    }

    onSubmit() {
        console.log("profile", JSON.stringify(this.props.profileDetails))
        if (this.state.message != "") {
            axios
                .post(CONST.ROOT_URL + "/sendMessage", {
                    desc: this.state.message,
                    from_id: localStorage.getItem("id"),
                    to_id: this.props.match.params.id,
                    from_name: localStorage.getItem("first_name") || "",
                    to_name: this.props.profileDetails.first_name
                })
                .then(res => {
                    console.log("Status: " + res.status);
                    console.log("Data: " + JSON.stringify(res.data.data));
                });
        }
    }


    render() {
        const {
            openMessageBox,
        } = this.state;
        
        return (
            <div>
                <div className=" mr-5 mt-5">
                    {/* <svg cursor="pointer" onClick={this.openModalMessageBox} viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" class="artdeco-icon" focusable="false"><path d="M21,13H13v8H11V13H3V11h8V3h2v8h8v2Z" class="large-icon" style={{"fill": "currentColor"}}></path></svg> */}
                    {/* <button onClick={this.openModalMessageBox} style={{'min-height': '48px','width': '40%','position': 'relative','backgroundColor': '#f4a742','borderColor': '#f4a742','color': '#fff','text-shadow': 'none','line-height': '24px','margin-bottom': '0','font-weight': '400','text-align': 'center','cursor': 'pointer','border': '1px solid transparent','padding': '11px 32px','font-size': '1rem'}}>Edit Profile</button> */}
                    <div class="container row">
                    <div class="col"></div>
                    <div class="col">{localStorage.getItem("id") != this.props.match.params.id && (
                        <button
                            type="button"
                            class="btn btn-primary btn-block"
                            id="form-submit"
                            onClick={this.openModalMessageBox}
                        >
                            Send Message
                        </button>
                    )}</div> 
                    <div class="col"></div>
                 </div>

                    <Modal
                        open={openMessageBox}
                        onClose={this.closeModalMessageBox}
                        center
                        dialogClassName="my-modal"
                    >
                        <form >
                            <h2 class="pl-5" style={{ marginTop: "50px" }}>   Send Message</h2>
                            <hr />
                            <div style={styles}>
                                <div class="ml-5 mr-5">
                                    <textarea 
                                    class="form-control" 
                                    value={this.state.message} 
                                    style={{ "fontSize": 18 }} 
                                    rows="5"
                                    onChange={(e)=>{
                                        this.setState({
                                            message:e.target.value
                                        })
                                    }}
                                    ></textarea>

                                </div>
                            </div>
                            <div class="ml-5 mr-5">
                                <button
                                    className="btn btn-primary btn-lg btn-block"
                                    id="form-submit"
                                    tabindex="4" 
                                    onClick={this.onSubmit}
                                >
                                    Send
                </button>
                            </div>
                        </form>
                    </Modal>
                </div>
            </div>
        );
    }




}

//Get the current state of the signup page
const mapStateToProps = state => ({
    signin: state.signin,
    profileDetails: state.profile.profile.result || ""
});



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
    form: "ModalMessageForm"
})(
    connect(
        mapStateToProps,
        { profile }
    )(withRouter(ModalMessage))
);
