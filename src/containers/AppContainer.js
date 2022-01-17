import { connect } from "react-redux";
import App from "../components/App/App";
import { selectLoadingStatus } from "../store/authedUser/selectors";
import { handleInitialData } from "../store/shared";

const mapStateToProps = (state) => {
  return {
    loading: selectLoadingStatus(state),
  };
};

/**
 * This function can do without dispatch, since it's a common pattern
 * the action creators are automatically binded to dispatch method.
 */
const mapDispatchToProps = (dispatch) => {
  return {
    fetchInitialData: () => dispatch(handleInitialData()),
  };
};

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
