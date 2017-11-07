import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import "./style/index.scss";

import ShoppingBag from './components/shopping-bag.component';
import reducers from './reducers';
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <ShoppingBag />
  </Provider>
  , document.querySelector('.container'));