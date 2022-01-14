import { getInitialData } from "../utils/api";
import { receiveTweets } from "./tweets/actions";
import { receiveUsers } from "./users/actions";
import { setAuthedUser } from "./authedUser/actions";

/**
 * An action creator that returns a function,
 * the returned function will be called by thunk middleware.
 * This pattern is used for making API calls.
 */

const AUTHED_USER = "tylermcginnis";

export function handleInitialData() {
  return (dispatch) => {
    getInitialData().then(({ users, tweets }) => {
      dispatch(receiveTweets(tweets));
      dispatch(receiveUsers(users));
      dispatch(setAuthedUser(AUTHED_USER));
    });
  };
}
