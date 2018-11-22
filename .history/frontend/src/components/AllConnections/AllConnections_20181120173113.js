import React, { Component } from "react";
import cookie from "react-cookies";
import { Redirect } from "react-router";
import Navbar from "../Common/Navbar";

import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Invitations from "./Invitations/Invitations";
import Recommendations from "./Recommendations/Recommendations";
import myStyles from "./Connections.css.js";
import { register } from "../../serviceWorker";
