import actionTypes from "../actions/actionTypes";

const initialState = [];

export default function brands(state = initialState, action) {
  switch (action.type) {
    case actionTypes.BRANDS_RECEIVE:
      console.log("BRANDS_RECEIVE", action)
      return action.brands;
    case actionTypes.BRANDS_ADD:
      return [
        ...state,
        {
          id: new Date().getTime().toString(),
          name: action.category.name,
          categoryId: action.categoryId
        }
      ];
    case actionTypes.BRANDS_DELETE:
      return state.filter(brand => brand.id !== action.id);
    default:
      return state;
  }
}
