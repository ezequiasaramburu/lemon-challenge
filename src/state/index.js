import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { spawn } from 'redux-saga/effects';
import authEffects from './auth/effects';
import { authReducer } from './auth/reducer';

const reducer = combineReducers({
  auth: authReducer,
  // countries reducer
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

function* sagas() {
  yield spawn(authEffects);
}

sagaMiddleware.run(sagas);

export default store;
