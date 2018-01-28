import merge from 'lodash/merge';

import {
  UPDATE_FILTER, CLEAR_FILTER
} from '../actions/filter_actions';

const filterReducer = (state = null, action ) => {
  Object.freeze(state);
  switch(action.type) {
    case UPDATE_FILTER:
      return merge({}, state, action.bounds );
    case CLEAR_FILTER:
      return {};
    default:
      return state;
  }
};

export default filterReducer;
