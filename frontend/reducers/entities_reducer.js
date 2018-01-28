import { combineReducers } from 'redux';

import businesses from './businesses_reducer';
import reviews from './reviews_reducer';
import filters from './filter_reducer';

export default combineReducers({
  businesses,
  reviews,
  filters
});
