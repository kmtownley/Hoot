import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import entitiesReducer from './entities_reducer';
import businessesReducer from './businesses_reducer';
import reviewsReducer from './reviews_reducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  businesses: businessesReducer,
  reviews: reviewsReducer,
  errors: errorsReducer
});

export default rootReducer;
