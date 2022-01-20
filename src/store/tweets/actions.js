import { saveLikeToggle } from "../../utils/api";

export const RECEIVE_TWEETS = "RECEIVE_TWEETS";
export const TOGGLE_TWEET_LIKE = "TOGGLE_TWEET_LIKE";

export function receiveTweets(tweets) {
  return {
    type: RECEIVE_TWEETS,
    payload: {
      tweets,
    },
  };
}

export function toggleTweetLike({ id, authedUser, hasLiked }) {
  return {
    type: TOGGLE_TWEET_LIKE,
    id,
    authedUser,
    hasLiked,
  };
}

// Asynchronous action creator.
export function handleToggleTweetLike(info) {
  return (dispatch) => {
    dispatch(toggleTweetLike(info));
    return saveLikeToggle(info)
      .then((res) => {
        "db updated";
      })
      .catch((err) => {
        console.warn("error while updating db");
        dispatch(toggleTweetLike(info));
      });
  };
}
