export const selectAuthedUser = (state) => state.authedUser;

export const selectLoadingStatus = (state) => {
  return state.authedUser === null;
};
