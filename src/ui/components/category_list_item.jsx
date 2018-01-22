import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteCategory } from "../../data/store/actions/categories";

export class CategoryListItem extends Component {
  constructor() {
    super();
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete() {
    this.props.deleteCategory(this.props.category.id);
  }
  render() {
    const { category } = this.props;
    return (
      <div>
        <div style={{ display: "inline" }}> {category.name}</div>{" "}
        <button onClick={this.handleDelete}> Delete </button>
      </div>
    );
  }
}

const mapDispatchToProps = { deleteCategory };
export default connect(null, mapDispatchToProps)(CategoryListItem);
