import React, { Component } from "react";

import loadingGif from "../images/gif/loading-arrow.gif";
export default class Loading extends Component {
  render() {
    return (
      <div className="loading">
        <h3>Nothing Found...</h3>
        <img src={loadingGif} alt="" />
      </div>
    );
  }
}
