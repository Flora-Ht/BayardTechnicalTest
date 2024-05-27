import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import combinedReducers from './reducers';
import { persistStore, persistReducer } from 'redux-persist';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

export const store = createStore(
  combinedReducers,
  applyMiddleware(...middlewares),
);
export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
