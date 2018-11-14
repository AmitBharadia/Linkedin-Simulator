import React, { Component } from "react";
import cookie from "react-cookies";
import "./Posts.css";

class Profile extends Component {
  render() {
    return (
      <div>
        <div class="card mb-3" width="250">
          <div class="card-body">
            <h5 class="card-title">
              Our largest content launch ever is here! Check out our live show
              schedule and enter for a chance to win a free annual membership.
            </h5>
          </div>
          <img
            class="card-img-top"
            src="https://media.licdn.com/media-proxy/ext?w=1201&h=631&f=pj&hash=f690l3UIqSM5%2FLXxVX9k%2FDPI2%2F0%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6nlh8Tw1It6a2FowGz60oISIfYC2G-KlTPm6ThFXaYCJCuCNPQ1SxnCV1w4nB4Dp7ZMUqVe5fBT-PsA94YzOuBXdmObAQSRzsTn0Z8vdkUHTA8maOTUMXUVX9j9skMQyWMYYD-KUIxDQ"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">Annual Membership</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <p class="card-text"> Like Comment Share</p>
          </div>
        </div>

        <div class="card mb-3 pt-3" width="250">
          <div class="card-body">
            <h5 class="card-title">
              We’re gearing up for hashtag#GHCI18 in Bangalore! Make sure to
              stop by our booth and catch our Global CIO, Lori Beer.
            </h5>
          </div>
          <img
            class="card-img-top"
            src="https://media.licdn.com/media-proxy/ext?w=744&h=400&f=pj&hash=sg4mJDYwB00AVxijDGyUwH1znOQ%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6nlh8Tw1It6a2FowGz60oIQY_PTWn8CnL_5aaFZnbrCKapBOjBoRR2el55xkMtLq3sGWO9R47vdMy6P7Mo1saycY2nbhUPZxcJ0zkf04NraUlr5cujWLmhNXcegLgMPX_7JeTrYkY-TDFq8uG7G5aPLBA0yHSdQ4DxEs9UDZFAxoBDyHlh8dmSJ5s95p56mWNw_UmypA"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">JP Morgan Chase</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <p class="card-text"> Like Comment Share</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
