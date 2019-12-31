import { combineReducers } from 'redux';
// Note for future self, these need to be named according to the state they're reducing for :)
import contact from './contactReducer/contactReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const appReducer = combineReducers({
    contact,
    ajaxCallsInProgress
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
};

export default rootReducer;