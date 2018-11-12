import React, { Component } from "react";
import { connect } from "react-redux";
import { dummy } from "../../action/dummy";

class Home extends Component {
  render() {
    return (
      <div>
        <button
          onClick={e => {
            this.props.dummy();
          }}
        >
          Check
        </button>
      </div>
    );
  }
}

//export default Home;
export default connect(
  null,
  { dummy }
)(Home);
