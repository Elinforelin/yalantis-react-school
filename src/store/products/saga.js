import { call, put, delay, takeLatest } from 'redux-saga/effects';

import { fetchHelper } from "../../helpers/fetch";
import { originsSelectFetchError, originsSelectFetchStart, originsSelectFetchSuccess } from "./actions";
import { setOrigins, setPage } from './reducer';


function* originsSelectWorker(action) {
  yield delay(500)

  yield put(setOrigins(action.payload.newOrigins));
  yield put(setPage(action.payload.newPage));
  try {
    const response = yield call(fetchHelper, { endpoints: action.payload.endpoints });
    yield put(originsSelectFetchSuccess(response));
  } catch (error) {
    yield put(originsSelectFetchError(error))
  }
}

export function* originsSelectWatcher() {
  yield takeLatest(originsSelectFetchStart, originsSelectWorker)
}