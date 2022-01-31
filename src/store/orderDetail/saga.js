import { call, put, takeEvery } from 'redux-saga/effects'
import { fetchHelper } from '../../helpers/fetch'
import { fetchOrderDetailStart, fetchOrderDetailSuccess, fetchOrderDetailError } from './actions'

function* orderDetailsWorker(action) {
  try {
    const response = yield call(fetchHelper, action.payload);
    yield put(fetchOrderDetailSuccess(response));
  } catch (error) {
    yield put(fetchOrderDetailError(error))
  }
}

export function* orderDetailsWatcher() {
  yield takeEvery(fetchOrderDetailStart, orderDetailsWorker)
}