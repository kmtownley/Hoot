import * as APIUtil from '../util/users_api_util';
import { receiveErrors, RECEIVE_CURRENT_USER, receiveCurrentUser } from "./session_actions";

export const updateUser = user => dispatch => (
  APIUtil.updateUser(user).then(user => dispatch(receiveCurrentUser(user)), err => dispatch(receiveErrors(err.responseJSON)))
);


window.updateUser = updateUser;
