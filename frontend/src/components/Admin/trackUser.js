import React, { Component } from "react";
import { BarChart } from "react-easy-chart";
import * as CONST from "../../Const";
import axios from "axios";

class TrackUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
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

        var TableRowDiv = "";

        if (this.state.data) {
            TableRowDiv = this.state.data.map((item,i) => {
                return (
                    <tr>
                        <th scope="row">{i+1}</th>
                        <td class="h3 font-weight-light">{item.job_name}</td>
                        <td  class="h3 font-weight-light" >{item.clicked}</td>
                        <td  class="h3 font-weight-light" >{item.started}</td>
                        <td  class="h3 font-weight-light">{item.submitted}</td>
                    </tr>
                )
            })
        }

        return (
            <div>
                {/* <h1>{JSON.stringify(this.state.data)}</h1> */}

                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col" class="h2">#</th>
                            <th scope="col" class="h2">Job Name</th>
                            <th scope="col" class="h2">Views</th>
                            <th scope="col" class="h2" >Partial Forms</th>
                            <th scope="col" class="h2">Completed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {TableRowDiv}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TrackUser;
