import React, { Component } from "react";
import { IonContent, IonGrid, IonRow } from "@ionic/react";
import "./style.scss";

import ShowPassword from "./../../components/password";
import ImgSymbol from "./../../assets/img_logo_solid.png";
import ImgArrow from "./../../assets/img_arrow.png";

interface IState {
  circle_color: boolean;
}

export default class LoginPage extends React.Component<IState> {
  state: IState;

  constructor(props: any) {
    super(props);
    this.state = {
      circle_color: false
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(event: any) {
    if (event.target.value != "") {
      this.setState({
        circle_color: true
      });
    } else {
      this.setState({
        circle_color: false
      });
    }
  }

  render() {
    return (
      <IonContent className="no-scroll">
        <div className="container login--bkg"></div>
        <div>
          <div className="login--logo">
            <img src={ImgSymbol}></img>
          </div>
          <div className="login--title">
            <div className="login--padding">email</div>
            <div className="login--padding">password</div>
          </div>
          <div className="login--input">
            <div className="login--padding">
              <input
                type="text"
                className="login--email"
                placeholder="your email address"
              />
            </div>
            <div className="login--padding" onChange={this.onChange}>
              <ShowPassword></ShowPassword>
            </div>
          </div>
          <div
            className={
              this.state.circle_color
                ? "login--smallcircle-enable"
                : "login--smallcircle-disable"
            }
          >
            <img src={ImgArrow} className="arrow--left"></img>
          </div>
          <div>
            <a href="#" className="login--forgot_passwd">
              forgot my passoword
            </a>
            <a href="#" className="login--create_account">
              create account
            </a>
          </div>
        </div>
      </IonContent>
    );
  }
}
