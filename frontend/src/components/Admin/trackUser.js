import React, { Component } from "react";
import { BarChart } from "react-easy-chart";
import * as CONST from "../../Const";
import axios from "axios";

class TrackUser extends Component {
  constructor(props) {
    super();
    const defaultData = [
      {
        x: "A",
        y: 46
      }
    ];
    this.state = {
      data: defaultData
    };
  }

  componentDidMount() {
    console.log("in Component did mount");
    axios.get(CONST.ROOT_URL + "/track_user_info", { params: { id: localStorage.getItem("id") } }).then(res => {
      console.log("Status: " + res.status);
      console.log("Data: " + JSON.stringify(res.data.data));
      if (res.status == 200) {
        this.setState({
          data: res.data.data
        });
      }
    });
  }

  render() {
    console.log("data:" + this.state.data);
    return (
      <div>
          {this.state.data}
      </div>
    );
  }
}

export default TrackUser;
