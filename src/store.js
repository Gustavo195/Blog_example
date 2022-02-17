import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { createLogger } from 'redux-logger';
import reducers from './reducers';

const middleware = applyMiddleware(thunk, promise, createLogger());

//const middleware = applyMiddleware(promise, thunk);
const store = createStore(reducers, middleware);
export default store;
