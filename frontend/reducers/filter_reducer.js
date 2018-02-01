import merge from 'lodash/merge';

import {
  UPDATE_FILTER, CLEAR_FILTER, UPDATE_BOUNDS
} from '../actions/filter_actions';

const filterReducer = (state = null, action ) => {

  Object.freeze(state);
  switch(action.type) {
    case UPDATE_FILTER:
    debugger
      let newState = merge({}, state);
      newState.priceArray = action.priceArray;
      newState.delivery = action.delivery;
      // newState = ({}, state, action.priceArray, action.delivery);
      // newState.priceArray.filter((el, idx) => (el === newState.priceArray[idx + 1]));
      return newState;
      // return action.priceArray, action.delivery;
    case UPDATE_BOUNDS:
      newState = merge({}, state, action.bounds);
      return newState;
      // return action.bounds;
    case CLEAR_FILTER:
      return {};
    default:
      return state;
  }
};

export default filterReducer;
