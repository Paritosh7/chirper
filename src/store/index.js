import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import authedUserReducer from "./authedUser/reducer";
import tweetsReducer from "./tweets/reducer";
import usersReducer from "./users/reducer";

const reducer = combineReducers({
  authedUser: authedUserReducer,
  tweets: tweetsReducer,
  users: usersReducer,
});

/** To enable redux devtools */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunk))
);

export default store;
