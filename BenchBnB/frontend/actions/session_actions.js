import * as SessionUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

export const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
  user
});

export const signup = (user) => dispatch => SessionUtil.signup(user)
  .then(user => dispatch(receiveCurrentUser(user)));

export const login = (user) => dispatch => SessionUtil.login(user)
  .then(user => dispatch(receiveCurrentUser(user)));

export const logout = () => dispatch => SessionUtil.logout
  .then(() => dispatch(logoutCurrentUser(user)));