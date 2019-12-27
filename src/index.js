import React from 'react';
import {render} from 'react-dom';
import {Route, BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from './store';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import './assets/styles/main.scss';

const root = document.getElementById('root');

render(
    <Provider store={configureStore()}>
        <BrowserRouter>
            <Route path="/" component={App}/>
        </BrowserRouter>
    </Provider>, root);

serviceWorker.unregister();