import React, { Component } from "react";
import { connect } from "react-redux";
import { receiveCategories } from "../../data/store/actions/categories";
import normalizeData from "../../data/utils/load_initial_data";
import CategoryList from "../components/category_list";

export class HomePage extends Component {
  componentDidMount() {
    const { categories, brands, products } = normalizeData();
    this.props.receiveCategories(categories);
  }

  render() {
    const { categories } = this.props;

    if (categories.length < 1) {
      return <div> Loading </div>;
    }
    return (
      <div>
        <p>Actions </p>
        <button> Add Category </button>
        <button> Add Brand </button>
        <button> Add Proudct </button>

        <CategoryList categories={categories} />
      </div>
    );
  }
}

const mapDispatchToProps = { receiveCategories };
const mapStateToProps = state => {
  return { categories: state.categories };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
