import { saveLikeToggle, saveTweet } from "../../utils/api";

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

export function addNewTweet({ text, author, replyingTo }) {
  return {
    type: ADD_NEW_TWEET,
    payload: {
      text,
      author,
      replyingTo,
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

export function handleAddTweet(info) {
  return (dispatch) => {
    dispatch(addNewTweet(info));
    return saveTweet(info)
      .then(() => {
        console.log("New tweet added");
      })
      .catch((err) => {
        console.warn("New tweet couldn't be saved");
      });
  };
}
