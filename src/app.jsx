import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./data/store/store";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Modal from "./ui/components/modal";
import HomePage from "./ui/pages/home_page";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <HomePage />
            <Route path="/modal" component={Modal} />
          </div>
        </Router>
      </Provider>
    );
  }
}
