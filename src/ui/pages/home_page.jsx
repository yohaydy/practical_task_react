import React, { Component } from "react";
import { connect } from "react-redux";
import { receiveCategories } from "../../data/store/actions/categories";
import { receiveBrands } from "../../data/store/actions/brands";
import normalizeData from "../../data/utils/load_initial_data";
import CategoryList from "../components/category_list";
import { Link } from "react-router-dom";

export class HomePage extends Component {
  componentDidMount() {
    const { categories, brands, products } = normalizeData();
    console.log("brandsd", brands);
    console.log("cate", categories);
    this.props.receiveCategories(categories);
    this.props.receiveBrands(brands);
  }

  render() {
    const { categories } = this.props;

    if (categories.length < 1) {
      return <div> Loading </div>;
    }
    return (
      <div>
        <div style={styles.actions}>
          <p>Actions </p>
          <Link to="/modal/category_add">
            <button style={styles.button}>Add Category </button>
          </Link>
          <Link to="/modal/brand_add">
            <button style={styles.button}>Add Brand </button>
          </Link>
          <Link to="/modal/product_add">
            <button style={styles.button}>Add Product </button>
          </Link>
        </div>
        <CategoryList categories={categories} />
      </div>
    );
  }
}

const mapDispatchToProps = { receiveCategories, receiveBrands };
const mapStateToProps = state => {
  return { categories: state.categories };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

const styles = {
  button: {
    textDecoration: "none",
    margin: "0 10px"
  },
  actions: {
    marginBottom: "25px"
  }
};
