import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

export default function configureStore(initialState) {

        // TODO: add NODE_ENV check to have different stores for dev and prod
        return createStore(
            rootReducer,
            initialState,
            composeWithDevTools(applyMiddleware(thunk))
        );
};