import * as ReviewAPIUtil from '../util/review_api_util';

export const RECEIVE_ALL_REVIEWS = "RECEIVE_ALL_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";

export const fetchReviews = businessId => dispatch => {
  debugger
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
  return (
    ReviewAPIUtil.createReview(review).then(review = dispatch(receiveReview(review)))
  );
};

export const deleteReview = reviewId => dispatch => {
  return (
  ReviewAPIUtil.deleteReview(reviewId).then(review => dispatch(removeReview(reviewId)))
  );
};

const removeReview = reviewId => ({
  type: REMOVE_REVIEW,
  reviewId
});

const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});

const receiveAllReviews = reviews => ({
    type: RECEIVE_ALL_REVIEWS,
    reviews
});

window.fetchReviews = fetchReviews;
window.fetchReview = fetchReview;
window.deleteReview = deleteReview;
window.createReview = createReview;
