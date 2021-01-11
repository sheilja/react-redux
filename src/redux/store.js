import { createStore,applyMiddleware } from 'redux';
import reducer from './user/reducer';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const store=createStore(reducer,applyMiddleware(thunkMiddleware));
export default store;
