import { call, put, takeEvery } from 'redux-saga/effects'
import { fetchHelper } from '../../helpers/fetch'
import { createOrderError, createOrderStart, createOrderSucces } from './actions'

function* createOrderWorker(action) {
  
  try {
    const response = yield call(fetchHelper, action.payload);
    yield put(createOrderSucces(response));
  } catch (error) {
    yield put(createOrderError(error))
  }
}

export function* createOrderWatcher() {
  yield takeEvery(createOrderStart, createOrderWorker)
}