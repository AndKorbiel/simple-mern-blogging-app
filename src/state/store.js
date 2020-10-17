import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import mainReducer from './reducers';

export const store = createStore(mainReducer, applyMiddleware(thunk));