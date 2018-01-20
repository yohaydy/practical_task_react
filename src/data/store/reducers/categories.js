import actionTypes from "../actions/actionTypes";

const initialState = [];

export default function categories(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CATEGORIES_RECEIVE:
      return action.categories;
    case actionTypes.CATEGORIES_ADD:
      return [
        ...state,
        {
          id: new Date().toString,
          name: action.category.name
        }
      ];
    case actionTypes.CATEGORIES_DELETE:
      return state.filter(cat => cat.id !== action.id);
    default:
      return initialState;
  }
}
