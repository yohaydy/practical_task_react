import { combineReducers } from "redux";
import categories from "./categories";
import brands from "./brands";

const rootReducer = combineReducers({
  categories,
  brands
});

export default rootReducer;
