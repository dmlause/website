import { combineReducers } from 'redux';
import contactReducer from '../reducers/contactReducer/contactReducer';
import ajaxStatusReducer from '../reducers/ajaxStatusReducer';

const rootReducer = combineReducers({
    contactReducer,
    ajaxStatusReducer
});

export default rootReducer;