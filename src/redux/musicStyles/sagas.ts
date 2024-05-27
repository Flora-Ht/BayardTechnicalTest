import { put, takeLatest, delay, call } from 'redux-saga/effects';
import * as actions from './actions';
import * as types from './types';
import Airtable from 'airtable';
import { API_TOKEN, AIRTABLE_BASE_ID, GENRES_TABLE_ID } from '@env';

function fetchAPI() {
  const base = new Airtable({ apiKey: API_TOKEN }).base(AIRTABLE_BASE_ID);
  let musicStyles: MusicStyle[] = [];

  return new Promise((resolve, reject) => {
    base(GENRES_TABLE_ID)
      .select()
      .eachPage(
        (records, fetchNextPage) => {
          records.forEach(function (record) {
            musicStyles.push({
              id: record.id,
              title: record.get('Title') as string,
              tracks: record.get('Tracks') as string[],
            });
          });
          fetchNextPage();
        },
        error => {
          if (error) {
            reject(error);
          } else {
            resolve(musicStyles);
          }
        },
      );
  });
}

function* fetchMusicStyles({}: ReturnType<typeof actions.getMusicStyles>) {
  console.log('fetchMusicStyles');
  try {
    const musicStyles: MusicStyle[] = yield call(fetchAPI);
    // console.log('music styles', musicStyles);
    yield put(actions.getMusicStylesSuccess(musicStyles));
  } catch (error: unknown) {
    yield put(actions.getMusicStylesFailure(error));
  }
}

export default function* musicStylesSaga() {
  yield takeLatest(types.GET_MUSIC_STYLES, fetchMusicStyles);
}
