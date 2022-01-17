import { connect } from "react-redux";
import Dashboard from "../components/Dashboard/Dashboard";
import { selectSortTweets } from "../store/tweets/selectors";

const mapStateToProps = (state) => {
  const tweetIds = selectSortTweets(state);
  return { tweetIds };
};

export const DashboardContainer = connect(mapStateToProps)(Dashboard);
