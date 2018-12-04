import React, { Component } from "react";
import { PieChart } from "react-easy-chart";
import * as CONST from "../../Const";
import axios from "axios";

class Clicks extends Component {
  constructor(props) {
    super();
    const defaultData = [
      {
        key: "A",
        value: 46
      }
    ];
    this.state = {
      data: defaultData
    };
  }

  componentDidMount() {
    console.log("in Component did mount");
    axios.get(CONST.ROOT_URL + "/cityWiseJobs", { params: { id: localStorage.getItem("id") } }).then(res => {
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
      <div class="pl-5 ml-5 row">
        <div class="col pt-5 mt-5">
          <h2 class="font-weight-light text-center">
            {this.state.dataDisplay
              ? this.state.dataDisplay
              : "Click on the segment to show value"}
          </h2>
        </div>
        <div class="col">
          {this.state.data && <PieChart
            labels
            styles={{
              ".chart_lines": {
                strokeWidth: 0
              },
              ".chart_text": {
                fontFamily: "serif",
                fontSize: "1.25em",
                fill: "#333"
              }
            }}
            height={300}
            width={650}
            // data={[
            //   { x: "EE", y: 1 },
            //   { x: "CE", y: 1 },
            //   { x: "SE", y: 2 },
            //   { x: "CE", y: 3 }
            // ]}
            data={this.state.data}
            margin={{ top: 0, right: 0, bottom: 30, left: 100 }}
            clickHandler={d => {
              this.setState({
                dataDisplay: `The value of the ${d.data.key} is ${d.value}`
              });
            }}
          />}
        </div>
      </div>
    );
  }
}

export default Clicks;
