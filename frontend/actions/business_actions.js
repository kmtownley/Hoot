import * as BizAPIUtil from '../util/business_api_util';

export const RECEIVE_ALL_BUSINESSES = "RECEIVE_ALL_BUSINESSES";
export const RECEIVE_BUSINESS = "RECEIVE_BUSINESS";
export const REMOVE_BUSINESS = "REMOVE_BUSINESS";

export const fetchBusinesses = () => dispatch => (
  BizAPIUtil.fetchBusinesses().then(businesses => dispatch(receiveAllBusinesses(businesses)))
);

export const fetchBusiness = id => dispatch => (
  BizAPIUtil.fetchBusiness(id).then(business => dispatch(receiveBusiness(business)))
);

export const deleteBusiness = businessId => dispatch => (
  BizAPIUtil.deleteBusiness(businessId).then(business => dispatch(removeBusiness(businessId)))
);

const removeBusiness = businessId => ({
  type: REMOVE_BUSINESS,
  businessId
});

const receiveBusiness = business => ({
  type: RECEIVE_BUSINESS,
  business
});

const receiveAllBusinesses = businesses => ({
  type: RECEIVE_ALL_BUSINESSES,
  businesses
});
