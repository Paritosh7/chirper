import { RECEIVE_TWEETS } from "./actions";

export default function reducer(state = {}, action) {
  switch (action.type) {
    case RECEIVE_TWEETS:
      return {
        ...state,
        ...action.payload.tweets,
      };
    default:
      return state;
  }
}
