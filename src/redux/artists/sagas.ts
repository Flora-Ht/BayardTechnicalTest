import { put, takeLatest, delay, call } from 'redux-saga/effects';
import * as actions from './actions';
import * as types from './types';
import Airtable from 'airtable';
import { API_TOKEN, AIRTABLE_BASE_ID, ARTISTS_TABLE_ID } from '@env';

function fetchAPI() {
  const base = new Airtable({ apiKey: API_TOKEN }).base(AIRTABLE_BASE_ID);
  let artists: Artist[] = [];

  return new Promise((resolve, reject) => {
    base(ARTISTS_TABLE_ID)
      .select({
        sort: [{ field: 'Name', direction: 'asc' }],
      })
      .eachPage(
        (records, fetchNextPage) => {
          records.forEach(function (record) {
            artists.push({
              id: record.id,
              name: record.get('Name') as string,
              tracks: record.get('Tracks') as string[],
            });
          });
          fetchNextPage();
        },
        error => {
          if (error) {
            reject(error);
          } else {
            resolve(artists);
          }
        },
      );
  });
}

function* fetchArtists({}: ReturnType<typeof actions.getArtists>) {
  console.log('fetchArtists');
  try {
    const artists: Artist[] = yield call(fetchAPI);
    // console.log('artists', artists);
    yield put(actions.getArtistsSuccess(artists));
  } catch (error: unknown) {
    yield put(actions.getArtistsFailure(error));
  }
}

export default function* artistsSaga() {
  yield takeLatest(types.GET_ARTISTS, fetchArtists);
}
