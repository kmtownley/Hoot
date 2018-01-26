import merge from 'lodash/merge';

import {
  RECEIVE_REVIEW,
  RECEIVE_ALL_REVIEWS,
  REMOVE_REVIEW
} from '../actions/review_actions';

const reviewReducer = (state = {}, action ) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_ALL_REVIEWS:
      return merge({}, action.reviews);
    case RECEIVE_REVIEW:
      return merge({}, state, {[action.review.id]: action.review });
    case REMOVE_REVIEW:

      delete newState[action.reviewId];
      return newState;
    default:
      return state;
  }
};

export default reviewReducer;
