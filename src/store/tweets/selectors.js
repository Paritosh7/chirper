import { createSelector } from "reselect";
import { formatTweet } from "../../utils/helpers";
import { selectAuthedUser } from "../authedUser/selectors";
import { selectUsers } from "../users/selectors";

const selectTweetsArray = (state) => Object.keys(state.tweets);

export const selectTweets = (state) => state.tweets;

export const selectTweet = (state, id) => state.tweets[id];

export const selectFormattedTweet = createSelector(
  [selectTweets, selectTweet, selectUsers, selectAuthedUser],
  (tweets, tweet, users, authedUser) => {
    const tweetAuthor = users[tweet.author];
    const parentTweet = tweet ? tweets[tweet.replyingTo] : null;

    /** if tweet is present, return tweet, else return null */
    return tweet
      ? formatTweet(tweet, tweetAuthor, authedUser, parentTweet)
      : null;
  }
);

/** sort the array based on timestamp */
export const selectSortTweets = createSelector(
  [selectTweetsArray, selectTweets],
  (tweetsArr, tweets) => {
    return tweetsArr.sort((a, b) => tweets[b].timestamp - tweets[a].timestamp);
  }
);
