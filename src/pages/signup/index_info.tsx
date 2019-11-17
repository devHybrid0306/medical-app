import React, { Component } from "react";
import { IonContent, IonGrid, IonRow } from "@ionic/react";
import "./style.scss";

export class SignUpInfo extends React.Component {
  render() {
    return (
      <IonContent className="signup-no--scroll">
        <div className="container">
          <a href="#" className="signup-continue-enable">
            continue
          </a>
        </div>
      </IonContent>
    );
  }
}

export default SignUpInfo;
