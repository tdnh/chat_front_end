import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import createHistory from 'history/createBrowserHistory';

import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'

import reducers from './reducers'; // Or wherever you keep your reducers

import AppRouter from '../src/router';


const middleware = [thunk];
if (process.env.NODE_ENV !== "production") {
  middleware.push(createLogger());
}

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
// const middleware =  routerMiddleware(history);
middleware.push(routerMiddleware(history));

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
  // ...reducers,
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  applyMiddleware(...middleware)
);


// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))

ReactDOM.render(
  <Provider store={store}>
    { /* ConnectedRouter will use the store from Provider automatically */ }
    <ConnectedRouter history={history} >
      <AppRouter />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)