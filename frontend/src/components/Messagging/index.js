import React, { Component } from "react";
import { connect } from "react-redux";
import MainNavbar from "../Common/MainNavbar";
import "./index.css"
class Messaging extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "peopleList": [],
            "chat_reciever_id": "2",
            "messageList": []
        }
    }

    componentDidMount(){
        this.setState({
            peopleList:[{
                "id": "2",
                "name": "Sunil Rajput",
                "img_src": "https://ptetutorials.com/images/user-profile.png"
            }, {
                "id": "3",
                "name": "Sunil Rajput",
                "img_src": "https://ptetutorials.com/images/user-profile.png"
            }, {
                "id": "4",
                "name": "Sunil Rajput",
                "img_src": "https://ptetutorials.com/images/user-profile.png"
            }]
        })
    }
    updateMessageList(id ){
        this.setState({
            "messageList": [
                {
                    "_id": "5bfe4fa472323e1a5bb28c24qwe",
                    "from_id":id,
                    "to_id": "1",
                    "desc": "Hi 1",
                    "date": "2016-05-18T16:00:00Z"
                },
                {
                    "_id": "5bfe4fa472323e1a5bb28c2qwe4",
                    "from_id": "1",
                    "to_id": id,
                    "desc": "Hi "+id,
                    "date": "2016-05-18T16:00:00Z"
                }, {
                    "_id": "5bfe4fa472323e1qwea5bb28c24",
                    "from_id": id,
                    "to_id": "1",
                    "desc": "how are you? 1",
                    "date": "2016-05-18T16:00:00Z"
                }
            ]

        })
    }
    render() {
        localStorage.setItem("id", "1");

        var chatListDiv = "";
        var messgeListDiv = "";
        if (this.state.peopleList) {
            chatListDiv = this.state.peopleList.map((people) => {
                return (
                    <div class="chat_list" onClick={()=>{
                        // this.setState({
                        //     chat_reciever_id: people.id
                        // })
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
                                    <span class="time_date"> {message.date}</span></div>
                            </div>
                        </div>
                    );
                } else {
                    return (<div class="outgoing_msg" >
                        <div class="sent_msg">
                        <p>{message.desc}</p>
                            <span class="time_date">{message.date}</span> </div>
                    </div >);
                }

            })
        }

        return (
            <div>
                <MainNavbar></MainNavbar>
                <div class="container">
                    <h3 class=" text-center">Messaging</h3>
                    <div class="messaging">
                        <div class="inbox_msg">
                            <div class="inbox_people">
                                <div class="headind_srch">
                                    <div class="recent_heading">
                                        <h4>Recent</h4>
                                    </div>
                                    <div class="srch_bar">
                                        <div class="stylish-input-group">
                                            <input type="text" class="search-bar" placeholder="Search" />
                                            <span class="input-group-addon">
                                                <button type="button"> <i class="fa fa-search" aria-hidden="true"></i> </button>
                                            </span> </div>
                                    </div>
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
                                        <input type="text" class="write_msg" placeholder="Type a message" />
                                        <button class="msg_send_btn" type="button"><i class="fa fa-paper-plane-o" aria-hidden="true"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <p class="text-center top_spac"> Design by <a target="_blank" href="#">Sunil Rajput</a></p>

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
