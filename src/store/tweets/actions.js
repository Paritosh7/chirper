import { saveLikeToggle, saveTweet } from "../../utils/api";
import { formatTweet } from "../../utils/helpers";

export const RECEIVE_TWEETS = "RECEIVE_TWEETS";
export const TOGGLE_TWEET_LIKE = "TOGGLE_TWEET_LIKE";
export const ADD_NEW_TWEET = "ADD_NEW_TWEET";

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

export function addNewTweet(tweet) {
  console.log(tweet);
  return {
    type: ADD_NEW_TWEET,
    payload: {
      tweet,
    },
  };
}

// Asynchronous action creator.
export function handleToggleTweetLike(info) {
  return (dispatch) => {
    dispatch(toggleTweetLike(info));
    return saveLikeToggle(info)
      .then((res) => {
        console.log("tweet liked", res);
      })
      .catch((err) => {
        console.warn("tweet couldn't be liked");
        dispatch(toggleTweetLike(info));
      });
  };
}

export function handleAddTweet({ text, replyingTo }) {
  return (dispatch, getState) => {
    const { authedUser: author } = getState();

    return saveTweet({ text, author, replyingTo })
      .then((tweet) => {
        dispatch(addNewTweet(tweet));
      })
      .catch((err) => {
        console.warn("New tweet couldn't be saved", err);
      });
  };
}
