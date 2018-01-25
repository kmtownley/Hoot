export const fetchReviews = (businessId) => (
  $.ajax({
    method: "GET",
    url: `api/businesses/${businessId}/reviews`
  })
);

export const fetchReview = id => (
  $.ajax({
    method: "GET",
    url: `api/reviews/${id}`,
  })
);

export const createReview = review => {

  return $.ajax({
    method: "POST",
    url: `api/businesses/${review.business_id}/reviews`,
    data: { review }
  });
};

export const updateReview = review => {
  debugger
  $.ajax({
    method: "PATCH",
    url: `api/businesses/${review.business_id}/reviews/${review.id}/`,
    data: { review }
  });
};


export const deleteReview = reviewId => (
  $.ajax({
    method: "DELETE",
    url: `apu/reviews/${reviewId}`
  })
);
