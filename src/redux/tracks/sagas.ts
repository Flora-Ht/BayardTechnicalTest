import { put, takeLatest, delay, call, takeEvery } from 'redux-saga/effects';
import * as actions from './actions';
import * as types from './types';
import Airtable from 'airtable';
import { API_TOKEN, AIRTABLE_BASE_ID, TRACKS_TABLE_ID } from '@env';

function fetchAPI(id: string) {
  const base = new Airtable({ apiKey: API_TOKEN }).base(AIRTABLE_BASE_ID);

  return new Promise((resolve, reject) => {
    base(TRACKS_TABLE_ID).find(id, (error, record) => {
      if (error) {
        reject(error);
      } else {
        resolve({
          id: record?.id,
          title: record?.get('Title'),
          genres: record?.get('Genres'),
          audiofile: record?.get('Audiofile'),
        });
      }
    });
  });
}

function* fetchTrack({ payload }: ReturnType<typeof actions.getTrackById>) {
  try {
    const track: Track = yield call(fetchAPI, payload);
    yield put(actions.getTrackByIdSuccess(track));
  } catch (error: unknown) {
    yield put(actions.getTrackByIdFailure(error));
  }
}

export default function* tracksSaga() {
  yield takeEvery(types.GET_TRACK_BY_ID, fetchTrack);
}
