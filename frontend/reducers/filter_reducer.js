import merge from 'lodash/merge';

import {
  UPDATE_FILTER, CLEAR_FILTER, UPDATE_BOUNDS
} from '../actions/filter_actions';

const filterReducer = (state = null, action ) => {

  Object.freeze(state);
  switch(action.type) {
    case UPDATE_FILTER:
      let newState;
      newState = merge({}, state, action.bounds);
      // return action.bounds;
      return newState;
    case UPDATE_BOUNDS:
      newState = merge({}, state, action.bounds);
      // return action.bounds;
      return newState;
      // return action.bounds;
    case CLEAR_FILTER:
      return {};
    default:
      return state;
  }
};

export default filterReducer;
