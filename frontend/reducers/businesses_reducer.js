import merge from 'lodash/merge';

import {
  RECEIVE_BUSINESS,
  RECEIVE_ALL_BUSINESSES,
  REMOVE_BUSINESS
} from '../actions/business_actions';

const businessesReducer = (state = {}, action ) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_ALL_BUSINESSES:
      return merge({}, action.businesses);
    case RECEIVE_BUSINESS:
      return merge({}, state, {[action.business.id]: action.business });
    case REMOVE_BUSINESS:
      delete newState[action.businessId];
      return newState;
    default:
      return state;
  }
};

export default businessesReducer;
