import { combineReducers } from "redux";
import signin from "./signin";
import signup from "./signup";
import searchPeaople from "./searchPeaople";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  form: formReducer,
  signup,
  signin,
  searchPeaople
});
