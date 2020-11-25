import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import beersReducer from './reducers/beersList';

const store = createStore(beersReducer, applyMiddleware(thunk));

export default store;
