import React, { Component } from "react";
import { IonContent, IonGrid, IonRow } from "@ionic/react";
import "./style.scss";

import ShowPassword from "./../../components/password";
import ImgClose from "./../../assets/img_close.png";

interface IState {
  continue_color: boolean;
  progress_state: number;
  password: String;
}

export default class SignUpInfo extends React.Component {
  state: IState;

  constructor(props: any) {
    super(props);
    this.state = {
      continue_color: false,
      progress_state: 1,
      password: ""
    };
    this.onChangeButton = this.onChangeButton.bind(this);
    this.onChangeProgress = this.onChangeProgress.bind(this);
    this.getPassword = this.getPassword.bind(this);
  }

  onChangeButton(event: any) {
    if (event.target.value != "") {
      this.setState({
        continue_color: true
      });
    } else {
      this.setState({
        continue_color: false
      });
    }
  }

  onChangeProgress() {
    this.setState({
      progress_state: this.state.progress_state + 1
    });
  }

  getPassword(passwd: any) {
    this.setState({
      password: passwd
    });
  }

  render() {
    return (
      <IonContent className="signup-no-scroll">
        <div className="container signup-bkg">
          <div className="container">
            <div className="container signup--close">
              <img src={ImgClose}></img>
            </div>
            <div
              className={
                this.state.progress_state == 1
                  ? "signup-section-info1 display-block"
                  : "signup-section-info1 display-none"
              }
            >
              <div className="signup-label-name">name</div>
              <input
                type="text"
                className="signup-input-name"
                placeholder="Insert your name"
                onChange={this.onChangeButton}
              />
            </div>
            <div
              className={
                this.state.progress_state == 2
                  ? "signup-section-info2 display-block"
                  : "signup-section-info2 display-none"
              }
            >
              <div className="signup-label-mail">e-mail</div>
              <input
                type="text"
                className="signup-input-mail"
                placeholder="Insert your mail"
                onChange={this.onChangeButton}
              />
            </div>
            <div
              className={
                this.state.progress_state == 3
                  ? "signup-section-info3 display-block"
                  : "signup-section-info3 display-none"
              }
            >
              <div className="signup-label-phone">phone</div>
              <input
                type="text"
                className="signup-input-phone"
                placeholder="Insert your phone number"
                onChange={this.onChangeButton}
              />
            </div>
            <div
              className={
                this.state.progress_state == 4
                  ? "signup-section-info4 display-block"
                  : "signup-section-info4 display-none"
              }
            >
              <div className="signup-label-passwd">create a password</div>
              <ShowPassword
                color="green_color"
                getPasswordfromChild={this.getPassword}
              ></ShowPassword>
            </div>
          </div>
          <div className="container signup-section3">
            <div className="container signup-state">
              <div className="signup-state-bkg"></div>
              <div
                className={
                  this.state.progress_state == 1
                    ? "state-progress-bar1"
                    : this.state.progress_state == 2
                    ? "state-progress-bar2"
                    : this.state.progress_state == 3
                    ? "state-progress-bar3"
                    : this.state.progress_state == 4
                    ? "state-progress-bar4"
                    : "state-progress-bar4"
                }
              ></div>
            </div>
            <div
              className={
                this.state.continue_color
                  ? "signup-button-enable"
                  : "signup-button-disable"
              }
              onClick={this.onChangeProgress}
            >
              {this.state.password.length > 0 ? "done" : "continue"}
            </div>
          </div>
        </div>
      </IonContent>
    );
  }
}
