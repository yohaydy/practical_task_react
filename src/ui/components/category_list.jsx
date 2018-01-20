import React, { Component } from "react";
import CategoryListItem from "./category_list_item";

export default class CategoryList extends Component {
  render() {
    const { categories } = this.props;
    const listItems = categories.map(cat => (
      <CategoryListItem category={cat} key={cat.id} />
    ));
    return (
      <div>
        <div>Category List </div>
        {listItems}
      </div>
    );
  }
}
