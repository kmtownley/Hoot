import * as ReviewAPIUtil from '../util/review_api_util';

export const RECEIVE_ALL_REVIEWS = "RECEIVE_ALL_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const fetchReviews = businessId => dispatch => {
  return (
    ReviewAPIUtil.fetchReviews(businessId).then(reviews => dispatch(receiveAllReviews(reviews)))
  );
};

export const fetchReview = id => dispatch => {
  return (
  ReviewAPIUtil.fetchReview(id).then(review => dispatch(receiveReview(review)))
  );
};

export const createReview = review => dispatch => {
  debugger
  return (
    ReviewAPIUtil.createReview(review).then(review = dispatch(receiveReview(review)), err => dispatch(receiveErrors(err.responseJSON)))
  );
};

// export const updateReview = review => dispatch => {
//   debugger
//   return (
//     ReviewAPIUtil.updateReview(review).then(review = dispatch(receiveReview(review)), err => dispatch(receiveErrors(err.responseJSON)))
//   );
// };

export const deleteReview = reviewId => dispatch => {
  return (
  ReviewAPIUtil.deleteReview(reviewId).then(review => dispatch(removeReview(reviewId)))
  );
};

const removeReview = reviewId => ({
  type: REMOVE_REVIEW,
  reviewId
});

const receiveReview = review => {
  debugger
  return {
  type: RECEIVE_REVIEW,
  review
  };
};

const receiveAllReviews = reviews => ({
    type: RECEIVE_ALL_REVIEWS,
    reviews
});

export const receiveErrors = err => {
  debugger
  return {
  type: RECEIVE_REVIEW_ERRORS,
  err
  };
};

export const clearErrors = () => (
  {type: CLEAR_ERRORS}
);

window.fetchReviews = fetchReviews;
