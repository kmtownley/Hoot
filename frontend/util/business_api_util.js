export const fetchBusinesses = (queries) => {
  return $.ajax({
    method: "GET",
    url: 'api/businesses',
    data: queries
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

export const searchBusinesses = (query) => {
  $.ajax({
    method: "GET",
    url: `/businesses/search/`,
    data: { query }
  });
};

export const deleteBusiness = businessId => (
  $.ajax({
    method: "DELETE",
    url: `apu/businesses/${businessId}`
  })
);

window.fetchBusinesses = fetchBusinesses;
