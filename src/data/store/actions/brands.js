import actionTypes from "./actionTypes";

export const receiveBrands = brands => ({
  type: actionTypes.BRANDS_RECEIVE,
  brands
});
export const addBrand = brands => ({
  type: actionTypes.BRANDS_ADD,
  brand,
  categoryId
});
export const deleteBrand = id => ({
  type: actionTypes.BRANDS_ADD,
  id
});
