import React, { Component } from "react";
import { BarChart } from "react-easy-chart";
import * as CONST from "../../Const";
import axios from "axios";

class ProfileViews extends Component {
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
    axios
      .get(CONST.ROOT_URL + "/profileViews", {
        params: { id: localStorage.getItem("id") }
      })
      .then(res => {
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
        {this.state.data && this.state.data.length > 0 && (
          <BarChart
            datePattern="%d-%b-%y"
            axes
            axisLabels={{ x: "Days" }}
            colorBars
            grid
            height={200}
            width={500}
            xType={"time"}
            barWidth={20}
            xDomainRange={["20-Nov-18", "7-Dec-18"]}
            // data={[
            //   { x: "EE", y: 1 },
            //   { x: "CE", y: 1 },
            //   { x: "SE", y: 2 },
            //   { x: "CE", y: 3 }
            // ]}
            data={this.state.data}
            margin={{ top: 0, right: 0, bottom: 30, left: 100 }}
          />
        )}
        <h2 class="font-weight-light">Number of profile views</h2>
      </div>
    );
  }
}

export default ProfileViews;
