import { createStore, applyMiddleware } from 'redux';
import mainReducer from './reducers';
import mainSaga from './sagas/saga';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(mainReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mainSaga);