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

class App extends Component {
  render() {
    return (
      <Router>
        <IonApp>
          <IonPage>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/login" component={LoginPage} />
            </Switch>
          </IonPage>
        </IonApp>
      </Router>
    );
  }
}

export default App;
