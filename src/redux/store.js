import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import beersReducer from './reducers/beersReducer';

const reducer = combineReducers({ beers: beersReducer });

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
