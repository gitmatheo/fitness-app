import React, { Component, Fragment } from "react";
import { Header, Footer } from "./layouts";
import Exercises from "./exercises";
import ReactDOM from "react-dom";

export default class extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Exercises />
        <Footer />
      </Fragment>
    );
  }
}
