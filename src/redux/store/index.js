import { createStore, combineReducers } from 'redux';
import listReducer from '../reducer';

const rootReducer = combineReducers({ listReducer });

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;