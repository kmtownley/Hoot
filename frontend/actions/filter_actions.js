import { fetchBusinesses } from './business_actions';

export const UPDATE_BOUNDS = 'UPDATE_BOUNDS';

export const updateBounds = (bounds) => ({
  type: UPDATE_BOUNDS,
  bounds
});

// export const updateBounds = (bounds, value) => (dispatch, getState) => {
//
//   dispatch(changeBounds(bounds, value));
//   return fetchBusinesses(getState().bounds)(dispatch);
// };
