import { put, takeLatest, delay, takeEvery, call } from 'redux-saga/effects';
import * as actions from './actions';
import * as types from './types';
import Airtable from 'airtable';
import { AIRTABLE_BASE_ID, API_TOKEN, TRACKS_TABLE_ID } from '@env';

function fetchFavAPI(id: string) {
  const base = new Airtable({ apiKey: API_TOKEN }).base(AIRTABLE_BASE_ID);
  let track: Track;

  return new Promise((resolve, reject) => {
    base(TRACKS_TABLE_ID).find(id, (error, record) => {
      if (error) {
        reject(error);
      } else {
        resolve({
          id: record?.id,
          title: record?.get('Title'),
          genres: record?.get('Genres'),
        });
      }
    });
  });
}

function* fetchFavTrack({
  payload,
}: ReturnType<typeof actions.getFavTrackById>) {
  console.log('fetchFavTrack');
  try {
    const track: Track = yield call(fetchFavAPI, payload);
    console.log('Fav Track', track);
    yield put(actions.getFavTrackByIdSuccess(track));
  } catch (error: unknown) {
    yield put(actions.getFavTrackByIdFailure(error));
  }
}

export default function* favoritesSaga() {
  yield takeEvery(types.GET_FAV_TRACK_BY_ID, fetchFavTrack);
}
