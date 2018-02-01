export const UPDATE_BOUNDS = 'UPDATE_BOUNDS';
export const UPDATE_FILTER = 'UPDATE_FILTER';
export const CLEAR_FILTER = 'CLEAR_FILTER';

export const updateBounds = (bounds, value) => ({
  type: UPDATE_BOUNDS,
  bounds,
  value
});

export const updateFilter = ({priceArray, delivery}) => {

  return {
  type: UPDATE_FILTER,
  priceArray,
  delivery
  };
};

export const clearFilter = () => ({
  type: CLEAR_FILTER
});
