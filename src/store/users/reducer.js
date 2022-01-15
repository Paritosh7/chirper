import { RECEIVE_USERS } from "./actions";

export default function reducer(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.payload.users,
      };
    default:
      return state;
  }
}
