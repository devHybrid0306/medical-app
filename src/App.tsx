import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import { IonApp, IonPage } from "@ionic/react";
import "./App.css";

import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import SignUpInfo from "./pages/signup/index_info";

class App extends Component {
  render() {
    return (
      <Router>
        <IonApp>
          <IonPage>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/signup" component={SignUpInfo} />
            </Switch>
          </IonPage>
        </IonApp>
      </Router>
    );
  }
}

export default App;
