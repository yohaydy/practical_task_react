import React, { Component } from "react";
import { connect } from "react-redux";
import { addBrand } from "../../data/store/actions/brands";

export class AddBrand extends Component {
  constructor() {
    super();
    this.handleAddBrand = this.handleAddBrand.bind(this);
  }

  handleAddBrand() {
    console.log("handleAddBrand", this.props);
    
  }
  
  render() {
    const { categories } = this.props
    const categoryOptions = categories.map(cat => <option key={cat.id} value={cat.id}>{cat.name}</option>)
    return (
      <div>
        <div>Add Brand </div>
        <div>Name: </div>
        <input id="brandName" type="text" />
        <div>Category: </div>
        <select id="category">
          { categoryOptions }
        </select>
        <div>
          <button onClick={this.handleAddBrand}>Add</button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  categories: state.categories
});
const mapDispatchToProps = { addBrand };
export default connect(mapStateToProps, mapDispatchToProps)(AddBrand);
