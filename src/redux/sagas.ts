import { all } from 'redux-saga/effects';
import artistsSaga from './artists/sagas';
import favoritesSaga from './favorites/sagas';

function* rootSaga() {
  yield all([artistsSaga(), favoritesSaga()]);
}

export default rootSaga;
