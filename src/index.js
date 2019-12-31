import React from 'react';
import {render} from 'react-dom';
import {Route, BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from './store';
import App from './components/App';
import * as serviceWorker from './utils/serviceWorker';
import initialState from './reducers/initialState';
import './assets/styles/main.scss';
import 'react-toastify/dist/ReactToastify.min.css';

const root = document.getElementById('root');
const store = configureStore(initialState);

render(
    <Provider store={store}>
        <BrowserRouter>
            <Route path="/" component={App}/>
        </BrowserRouter>
    </Provider>, root);

serviceWorker.unregister();