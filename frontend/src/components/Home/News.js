import React, { Component } from "react";
import cookie from "react-cookies";
import "./Posts.css";

class News extends Component {
  render() {
    return (
      <div>
        <div class="card mb-3" width="250">
          <div class="card-body">
            <h5 class="card-title">What people are talking about now</h5>
          </div>
          <div class="card-body">
            <h5 class="card-title">Leaders agree to draft Brexit</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <div class="card-body">
            <h5 class="card-title">Forbes unviels 30 under 30</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <div class="card-body">
            <h5 class="card-title">Cras justo odio</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>

        <div class="card mb-3 pt-3" width="250">
          <div class="card-body">
            <h5 class="card-title">Add to your Feed</h5>
          </div>
          <div class="card-body">
            <p class="card-text">Dapibus ac facilisis in</p>
          </div>
          <div class="card-body">
            <p class="card-text">Vestibulum at eros</p>
          </div>
          <div class="card-body">
            <p class="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.
            </p>
          </div>
        </div>

        <div class="card mb-3 pt-3" width="250">
          <div class="card-body">
            <h5 class="card-title">Add to your Feed</h5>
          </div>
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
