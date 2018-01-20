import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./data/store/store";

import HomePage from './ui/pages/home_page'

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <HomePage/>
      </Provider>
    );
  }
}
