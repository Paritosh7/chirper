import { SET_AUTHED_USER } from "./actions";

export default function reducer(state = null, action) {
  switch (action.type) {
    case SET_AUTHED_USER:
      return action.payload.authedUser;
    default:
      return state;
  }
}
