import { ADD_NEW_TWEET, RECEIVE_TWEETS, TOGGLE_TWEET_LIKE } from "./actions";

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
    case ADD_NEW_TWEET:
      const tweet = action.payload.tweet;
      console.log(tweet);
      let replyingTo = {};
      if (tweet.replyingTo) {
        replyingTo = {
          [tweet.replyingTo]: {
            ...state[tweet.replyingTo],
            replies: [state[tweet.replyingTo].replies, tweet.id],
          },
        };
      }

      return {
        ...state,
        [tweet.id]: tweet,
        ...replyingTo,
      };
    default:
      return state;
  }
}
