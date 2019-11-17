import React, { Component } from "react";
import "./style.scss";

export default class ShowPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "input",
      score: "null"
    };
    this.showHide = this.showHide.bind(this);
  }

  showHide(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      type: this.state.type === "input" ? "password" : "input"
    });
  }

  render() {
    return (
      <div>
        <input
          type={this.state.type}
          className="password__input"
          placeholder="your password"
        />
        <i
          className={
            this.state.type === "input" ? "fa fa-eye-slash" : "fa fa-eye"
          }
          aria-hidden="true"
          onClick={this.showHide}
        ></i>
      </div>
    );
  }
}
