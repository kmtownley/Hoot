export const fetchBusinesses = (areaQuery, contentQuery) => {
  return $.ajax({
    method: "GET",
    url: 'api/businesses',
    data: {areaQuery, contentQuery}
  });
};

export const fetchBusiness = id => (
  $.ajax({
    method: "GET",
    url: `api/businesses/${id}`,
  })
);

export const createBusiness = business => (
  $.ajax({
    method: "POST",
    url: `api/businesses`,
    data: { business }
  })
);

export const searchBusinesses = bounds => {
  $.ajax({
    method: "GET",
    url: `/businesses/search`,
    data: { bounds }
  });
};

export const deleteBusiness = businessId => (
  $.ajax({
    method: "DELETE",
    url: `apu/businesses/${businessId}`
  })
);

window.fetchBusinesses = fetchBusinesses;
