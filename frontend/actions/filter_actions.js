import { fetchBusinesses } from './business_actions';

export const UPDATE_BOUNDS = 'UPDATE_BOUNDS';

export const changeBounds = (bounds, value) => ({
  type: UPDATE_BOUNDS,
  bounds,
  value
});

export const updateBounds = ( value) => (dispatch, getState) => {
  console.log(value);
  //dispatch(changeBounds(bounds, value));
  //return fetchBusinesses(getState().bounds)(dispatch);
};
