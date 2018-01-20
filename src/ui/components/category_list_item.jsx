import React, { Component } from "react";

export default class CategoryListItem extends Component {
  render() {
    const { category } = this.props;
    return (
      <div>
        <p>Category</p>
        <div> {category.name}</div>
      </div>
    );
  }
}
