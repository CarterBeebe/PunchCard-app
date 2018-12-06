import React, { Component } from "react";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>PunchCard App</h1>
          <p>An app for recording hours worked</p>
        </div>
      </div>
    );
  }
}