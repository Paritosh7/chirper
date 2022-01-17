import { connect } from "react-redux";
import Tweet from "../components/Tweet/Tweet";
import { selectAuthedUser } from "../store/authedUser/selectors";
import { selectFormattedTweet } from "../store/tweets/selectors";

const mapStateToProps = (state, ownProps) => {
  const { tweetId } = ownProps;
  /**
   * Accessing state like this is good practice,
   * as in the future if the store shape changes,
   * then just that function needs to be changed
   * to access that particular state. So these
   * calls are more future proof.
   */

  const authedUser = selectAuthedUser(state);
  return {
    tweet: selectFormattedTweet(state, tweetId),
    authedUser,
  };
};

export const TweetContainer = connect(mapStateToProps)(Tweet);
