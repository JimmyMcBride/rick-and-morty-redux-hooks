import { combineReducers } from "redux";
import { rickAndMorty } from "./rickAndMorty";

// Using combine reducers to break up reducers into different files
export default combineReducers({
  rickAndMorty
});
