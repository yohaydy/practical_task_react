import React, { Component } from "react";
import { Route } from "react-router-dom";
import AddCategory from "./category_add";
import AddProduct from "./product_add";
import AddBrand from "./brand_add";

export default class Modal extends Component {
  constructor() {
    super();
    this.handleSkrimClick = this.handleSkrimClick.bind(this);
  }
  handleModalClick(evt) {
    evt.stopPropagation();
  }

  handleSkrimClick(evt) {
    this.props.history.push("/");
  }
  render() {
    return (
      <div>
        <div style={styles.skrim} onClick={this.handleSkrimClick}>
          <div onClick={this.handleModalClick} style={styles.modal}>
            <div>
              <Route path="/modal/category_add" component={AddCategory} />
              <Route path="/modal/brand_add" component={AddBrand} />
              <Route path="/modal/product_add" component={AddProduct} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  skrim: {
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: "rgba(0, 0, 0, 0.1)",
    zIndex: 100
  },
  modal: {
    zIndex: 200,
    width: "400px",
    height: "auto",
    background: "white",
    position: "relative",
    margin: "auto",
    padding: "20px",
    marginTop: "60px",
    borderRadius: "3px",
    boxShadow: "0 2px 2px rgba(0,0,0,0.1)"
  }
};
