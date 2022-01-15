import { combineReducers, createStore } from "redux";
import authedUserReducer from "./authedUser/reducer";
import tweetsReducer from "./tweets/reducer";
import usersReducer from "./users/reducer";

const reducer = combineReducers({
  authedUser: authedUserReducer,
  tweets: tweetsReducer,
  users: usersReducer,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
