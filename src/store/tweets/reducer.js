import { RECEIVE_TWEETS, TOGGLE_TWEET_LIKE } from "./actions";

export default function reducer(state = {}, action) {
  switch (action.type) {
    case RECEIVE_TWEETS:
      return {
        ...state,
        ...action.payload.tweets,
      };
    case TOGGLE_TWEET_LIKE:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          likes: action.hasLiked
            ? state[action.id].likes.filter((uid) => uid !== action.authedUser)
            : [...state[action.id].likes, action.authedUser],
        },
      };
    default:
      return state;
  }
}
