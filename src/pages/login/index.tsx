import React, { Component } from "react";
import { IonContent, IonGrid, IonRow } from "@ionic/react";
import "./style.scss";

import ImgSymbol from "./../../assets/img_logo_solid.png";

export default class LoginPage extends React.Component {
  render() {
    return (
      <IonContent className="no-scroll">
        <div className="container login--bkg"></div>
        <div>
          <div className="login--logo">
            <img src={ImgSymbol}></img>
          </div>
          <div className="login--title">
            <div>email</div>
            <div>password</div>
          </div>
          <div className="login--input">
            <input type="text" className="login--email" />
            <input type="text" className="login--passwd" />
          </div>
          <div className="login--smallcircle"></div>
          <div className="container">
            <a href="#" className="login--create-account">
              create account
            </a>
          </div>
        </div>
      </IonContent>
    );
  }
}
