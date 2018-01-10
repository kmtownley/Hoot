import * as BizAPIUtil from '../util/business_api_util';

export const RECEIVE_ALL_BUSINESSES = "RECEIVE_ALL_BUSINESSES";
export const RECEIVE_BUSINESS = "RECEIVE_BUSINESS";
export const REMOVE_BUSINESS = "REMOVE_BUSINESS";
export const RECEIVE_SEARCHED_BUSINESSES = "RECEIVE_SEARCHED_BUSINESSES";

export const fetchBusinesses = () => dispatch => {
  return (
    BizAPIUtil.fetchBusinesses().then(businesses => dispatch(receiveAllBusinesses(businesses)))
  );
};

export const fetchBusiness = id => dispatch => {
  return (
  BizAPIUtil.fetchBusiness(id).then(business => dispatch(receiveBusiness(business)))
  );
};

export const deleteBusiness = businessId => dispatch => {
  return (
  BizAPIUtil.deleteBusiness(businessId).then(business => dispatch(removeBusiness(businessId)))
  );
};

export const searchBusinesses = query => dispatch => {
  return (
  BizAPIUtil.searchBusinesses(query).then(businesses => dispatch(receiveSearchedBusinesses(businesses)))
  );
};

const removeBusiness = businessId => ({
  type: REMOVE_BUSINESS,
  businessId
});



const receiveBusiness = business => ({
  type: RECEIVE_BUSINESS,
  business
});

const receiveAllBusinesses = businesses => {
  return {
    type: RECEIVE_ALL_BUSINESSES,
    businesses
  };
};
