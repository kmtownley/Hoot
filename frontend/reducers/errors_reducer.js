import { combineReducers } from "redux";
import SessionErrorsReducer from "./session_errors_reducer";
import review from "./review_errors_reducer";

const errorsReducer = combineReducers({
  session: SessionErrorsReducer,
  review
});

export default errorsReducer;
