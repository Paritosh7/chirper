import { SET_AUTHED_USER } from "./actions";

function reducer(state, action) {
  switch (action.type) {
    case action.type === SET_AUTHED_USER:
      return action.payload.authedUser;
    default:
      return state;
  }
}
