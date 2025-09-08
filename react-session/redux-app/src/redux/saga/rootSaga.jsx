import { all } from "redux-saga/effects";
import { getProductListWatcher } from "./product.saga";

export function* rootSaga() {
  let list = [getProductListWatcher()];
  yield all(list);
}
