import { createSelector } from "reselect";
import { formatTweet } from "../../utils/helpers";
import { selectAuthedUser } from "../authedUser/selectors";
import { selectUsers } from "../users/selectors";

const selectTweetsArray = (state) => Object.keys(state.tweets);

export const selectTweets = (state) => state.tweets;

export const selectTweet = (state, id) => state.tweets[id];

export const selectFormattedTweet = createSelector(
  [selectTweet, selectUsers, selectAuthedUser],
  (tweet, users, authedUser) => {
    return formatTweet(tweet, users[tweet.author], authedUser);
  }
);

/** sort the array based on timestamp */
export const sortTweets = createSelector(
  [selectTweetsArray, selectTweets],
  (tweetsArr, tweets) => {
    return tweetsArr.sort((a, b) => tweets[b].timestamp - tweets[a].timestamp);
  }
);
