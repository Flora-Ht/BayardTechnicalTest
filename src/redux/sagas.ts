import { all } from 'redux-saga/effects';
import artistsSaga from './artists/sagas';
import favoritesSaga from './favorites/sagas';
import tracksSaga from './tracks/sagas';
import musicStylesSaga from './musicStyles/sagas';

function* rootSaga() {
  yield all([artistsSaga(), tracksSaga(), musicStylesSaga(), favoritesSaga()]);
}

export default rootSaga;
