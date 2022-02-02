import { all } from 'redux-saga/effects'
import { orderDetailsWatcher } from './orderDetail/saga'
import { createOrderWatcher } from './orders/saga'
import { originsSelectWatcher } from './products/saga'

export default function* rootSaga() {
  yield all([
    createOrderWatcher(),
    orderDetailsWatcher(),
    originsSelectWatcher()
  ])
}
