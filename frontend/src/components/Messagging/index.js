import React, { Component } from "react";
import { connect } from "react-redux";
import MainNavbar from "../Common/MainNavbar";
import axios from "axios";
import * as CONST from "../../Const/index";

import "./index.css";
class Messaging extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "peopleList": [],
            "messageList": [],
            "message": "",
            "currentChatBuddy": ""
        }
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        axios
            .get(CONST.ROOT_URL + "/chatList", {
                params: { id: localStorage.getItem("id") }
            })
            .then(res => {
                console.log("Status: " + res.status);
                console.log("Data: " + JSON.stringify(res.data.data));
                if (res.status == 200) {
                    this.setState({
                        peopleList: res.data.data
                    });
                }
            });



    }
    updateMessageList(id2) {
        axios
            .get(CONST.ROOT_URL + "/messages", {
                params: { id1: localStorage.getItem("id"), id2: id2 }
            })
            .then(res => {
                console.log("Status: " + res.status);
                console.log("Data: " + JSON.stringify(res.data.data));
                if (res.status == 200) {
                    this.setState({
                        messageList: res.data.data,
                        message:""
                    });
                }
            });
    }

    onSubmit() {
        if (this.state.message != "" && localStorage.getItem("id") ) {
            axios
                .post(CONST.ROOT_URL + "/sendMessage", {
                    desc: this.state.message,
                    from_id: localStorage.getItem("id"),
                    to_id: this.state.currentChatBuddy.id,
                    from_name: localStorage.getItem('first_name'),
                    to_name: this.state.currentChatBuddy.name
                })
                .then(res => {
                    console.log("Status: " + res.status);
                    console.log("Data: " + JSON.stringify(res.data.data));
                    if (res.status == 200) {
                        this.updateMessageList(this.state.currentChatBuddy.id);   
                         
                    }   
                });
        }
    }

    render() {
        var chatListDiv = "";
        var messgeListDiv = "";
        if (this.state.peopleList.length > 0) {
            chatListDiv = this.state.peopleList.map((people) => {
                return (
                    <div class="chat_list" onClick={() => {
                        this.setState({
                            currentChatBuddy: people
                        })

                        this.updateMessageList(people.id)
                    }}>
                        <div class="chat_people">
                            <div class="chat_img"> <img src={people.img_src} /> </div>
                            <div class="chat_ib">
                                <h5>{people.name}</h5>
                            </div>
                        </div>
                    </div>)
            })

        }

        if (this.state.messageList) {
            messgeListDiv = this.state.messageList.map((message) => {
                if (message.from_id != localStorage.getItem("id")) {
                    return (
                        <div class="incoming_msg">
                            <div class="incoming_msg_img"></div>
                            <div class="received_msg">
                                <div class="received_withd_msg">
                                    <p>{message.desc}</p>
                                    <span class="time_date"> {message.post_date}</span></div>
                            </div>
                        </div>
                    );
                } else {
                    return (<div class="outgoing_msg" >
                        <div class="sent_msg">
                            <p>{message.desc}</p>
                            <span class="time_date">{message.post_date}</span> </div>
                    </div >);
                }

            })
        }

        return (
            <div>
                <MainNavbar></MainNavbar>
                <div class="container">
        
                    <div class="messaging">
                        <div class="inbox_msg">
                            <div class="inbox_people">
                                <div class="headind_srch">
                                    <div class="recent_heading">
                                        <h4>Recent</h4>
                                    </div>
                                    {/* <div class="srch_bar">
                                        <div class="stylish-input-group">
                                            <input type="text" class="search-bar" placeholder="Search" />
                                            <span class="input-group-addon">
                                                <button type="button"> <i class="fa fa-search" aria-hidden="true"></i> </button>
                                            </span> </div>
                                    </div> */}
                                </div>
                                <div class="inbox_chat">
                                    {chatListDiv}
                                </div>
                            </div>
                            <div class="mesgs">
                                <div class="msg_history">
                                    {messgeListDiv}
                                </div>
                                <div class="type_msg">
                                    <div class="input_msg_write">
                                        <input type="text" class="write_msg"  value={this.state.message} placeholder="Type a message" onChange={(e) => {
                                            this.setState({
                                                message: e.target.value
                                            })
                                        }} />
                                        <button class="msg_send_btn" type="button" onClick={this.onSubmit}><i class="fa fa-paper-plane-o" aria-hidden="true"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>




                    </div></div>
            </div>

        )
    }
}

//export default Home;
export default connect(
    null,
    {}
)(Messaging);
