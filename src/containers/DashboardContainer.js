import { connect } from "react-redux";
import Dashboard from "../components/Dashboard";
import { sortTweets } from "../store/tweets/selectors";

const mapStateToProps = (state) => {
  const tweetIds = sortTweets(state);
  return { tweetIds };
};

export const DashboardContainer = connect(mapStateToProps)(Dashboard);
