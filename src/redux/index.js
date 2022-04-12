import { combineReducers } from "redux";
import twitterReducers from "./twitterReducers";

const reducers = combineReducers({
  twitter: twitterReducers,
});

export default reducers;
