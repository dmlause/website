import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

export default function configureStore(initialState) {

    // if(process.env.NODE_ENV === 'production') {
    //     return createStore(
    //         rootReducer,
    //         initialState,
    //         applyMiddleware(thunk)
    //     );
    // }
    // else {
        return createStore(
            rootReducer,
            initialState,
            composeWithDevTools(applyMiddleware(thunk))
        );
    // }

};