import 'materialize-css/dist/css/materialize.min.css'
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import App from './components/App'
import reducers from './reducers';
import reduxThunk from 'redux-thunk';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
// check public folder index html, query selector is used to select a div from there
ReactDOM.render(
    <Provider store={store}><App /></Provider>,
     document.querySelector('#root'));
