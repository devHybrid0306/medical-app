import React, { Component } from "react";
import { IonContent, IonGrid, IonRow } from "@ionic/react";
import "./style.scss";

import ImgSymbol from "./../../assets/img_logo_solid.png";

export default class HomePage extends React.Component {
  render() {
    return (
      <IonContent className="homepage--bkg no-scroll">
        <div className="container">
          <div className="homepage--logo">
            <img src={ImgSymbol}></img>
          </div>
          <div className="homepage--title">
            <div>agende,</div>
            <div>consulte,</div>
            <div>relate.</div>
          </div>
          <div className="homepage--bigcircle">
            <div className="homepage--smallcircle"></div>
          </div>
          <div className="container">
            <a href="/login" className="homepage--login">
              LOGIN TO MY ACCOUNT
            </a>
          </div>
          <div className="container">
            <a href="#" className="homepage--create-account">
              create account
            </a>
          </div>
        </div>
      </IonContent>
    );
  }
}
