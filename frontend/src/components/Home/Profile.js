import React, { Component } from "react";
import cookie from "react-cookies";
import "./Profile.css";

class Profile extends Component {
  render() {
    return (
      <div class="Profile nopadding">
        <div id="" class="ml-5 mt-5">
          <div id="DIV_2" class="border">
            <div id="DIV_333" clas="border" />{" "}
            <a href="" id="A_4">
              <img

                src="https://media.licdn.com/dms/image/C5603AQEqgYpgcdt-Sg/profile-displayphoto-shrink_100_100/0?e=1547683200&amp;v=beta&amp;t=OGK1W9t5IfzVDM80ex0DtDiqrdgNNojUiHCA8w3lrVg"
                id="IMG_55"
              />
            </a>{" "}
            <a href="" id="A_6">
              {" "}
              <span id="SPAN_7">User Name</span>
            </a>
            <p id="P_8">User Details</p>
          </div>
          <div id="DIV_9" class="border ">
            <div id="DIV_10">
              <p class>Number of connections: 1</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
