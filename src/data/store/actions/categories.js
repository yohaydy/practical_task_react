import actionTypes from "./actionTypes";

export const receiveCategories = categories => ({
  type: actionTypes.CATEGORIES_RECEIVE,
  categories
});
export const addCategory = category => ({
  type: actionTypes.CATEGORIES_ADD,
  category
});
export const deleteCategory = id => ({
  type: actionTypes.CATEGORIES_DELETE,
  id
});
