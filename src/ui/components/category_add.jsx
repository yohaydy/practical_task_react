import React, { Component } from "react";
import { connect } from "react-redux";
import { addCategory } from "../../data/store/actions/categories";

export class AddCategory extends Component {
  constructor() {
    super();
    this.handleAddCategory = this.handleAddCategory.bind(this);
  }
  handleAddCategory() {
    const category = {
      name: document.getElementById("categoryName").value
    };
    console.log("category", category)
    if (!category.name) {
      window.alert("Please provide a name");
      return;
    }
    this.props.addCategory(category);
    this.props.history.push("/");
  }
  render() {
    return (
      <div>
        <div> Add New Category </div>
        <div>
          <div>Name</div>
          <input id="categoryName" type="text" />
        </div>
        <div>
          <button onClick={this.handleAddCategory}>Add</button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = { addCategory };
export default connect(null, mapDispatchToProps)(AddCategory);
