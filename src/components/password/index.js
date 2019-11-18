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
    this.sendPassword = this.sendPassword.bind(this);
  }

  showHide(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      type: this.state.type === "input" ? "password" : "input"
    });
  }

  sendPassword(event) {
    this.props.getPasswordfromChild(event.target.value);
  }

  render() {
    return (
      <div>
        <input
          type={this.state.type}
          className={`password__input ${this.props.color}`}
          placeholder="your password"
          onChange={this.sendPassword}
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
