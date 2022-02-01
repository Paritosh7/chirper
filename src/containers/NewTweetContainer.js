import { connect } from "react-redux";
import NewTweet from "../components/NewTweet/NewTweet";
import { handleAddTweet } from "../store/tweets/actions";

const mapDispatchToProps = {
  addTweet: (text, author, replyingTo) =>
    handleAddTweet({ text, author, replyingTo }),
};

export const NewTweetContainer = connect(null, mapDispatchToProps)(NewTweet);
