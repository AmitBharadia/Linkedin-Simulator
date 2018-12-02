import React, { Component } from "react";
import NavBar from "../Common/Navbar";
import { connect } from "react-redux";
import { dummy } from "../../action/dummy";

class SearchProfiles extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props.searchPeaople;
    console.log("data", data);

    let details = data.map((mydata, i) => {
      return (
        <div style={{ marginBottom: "50px" }}>
          <hr />
          <div class="card-body">
            <a href="" id="A_4">
              <img height="64" width="64" src={mydata.profile_url} id="IMG_5" />
            </a>

            <p>
              Username: {mydata.first_name} {mydata.last_name}
            </p>
            <p>Location: {mydata.profileLocation}</p>
            <p>Summary: {mydata.profileSummary}</p>

            <button
              className="btn btn-primary btn btn-block"
              style={{ width: "100px" }}
            >
              Connect
            </button>
          </div>
        </div>
      );
    });

    return (
      <div>
        <NavBar />
        <br />
        <br />
        <div class="row">
          <div class="col" />

          <div class="col-8 pt-6 pl-0">
            <div class="card mb-3" width="150">
              Showing {data.length} results
              <div class="row" style={{ marginBottom: "50px" }} />
              {/* <div class="card-body">
                            <a href="" id="A_4">
                                    <img
                                        height="64"
                                        width="64"
                                        src="https://media.licdn.com/dms/image/C5603AQEqgYpgcdt-Sg/profile-displayphoto-shrink_100_100/0?e=1547683200&amp;v=beta&amp;t=OGK1W9t5IfzVDM80ex0DtDiqrdgNNojUiHCA8w3lrVg"
                                        id="IMG_5"
                                    />
                            </a>

                            <p>Username: </p>
                            <p>Location: </p>
                            <p>Headline: </p>

                            <button>Connect</button>
                            </div>     */}
              {details}
            </div>
          </div>

          <div class="col pt-5" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    profile: state.profile,
    searchPeaople: state.searchPeaople
  };
};

export default connect(
  mapStateToProps,
  { dummy }
)(SearchProfiles);
