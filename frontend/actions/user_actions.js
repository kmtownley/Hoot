import * as APIUtil from '../util/users_api_util';
import { RECEIVE_CURRENT_USER, receiveCurrentUser } from "./session_actions";

export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";
export const CLEAR_USER_ERRORS = "CLEAR_USER_ERRORS";

export const updateUser = user => dispatch => (
  APIUtil.updateUser(user).then(user => dispatch(receiveCurrentUser(user)), err => dispatch(receiveUserErrors(err.responseJSON)))
);


export const receiveUserErrors = err => {
  return {
    type: RECEIVE_USER_ERRORS,
    err
  };
};

export const clearUserErrors = () => (
  {type: CLEAR_USER_ERRORS}
);
window.updateUser = updateUser;
