import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {Router, browserHistory } from 'react-router'; 
import './index.css';
import routes from './routes'; 
import reducers from './reducers';
import promise from 'redux-promise';

const store = createStore(
  reducers,  applyMiddleware(promise)
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} /> 
  </Provider>
  , document.getElementById('root'));
