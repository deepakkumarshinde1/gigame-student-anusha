import { call, put, takeLatest } from "redux-saga/effects";
import { getProductList, saveProductList } from "../product.slice";

// worker
const getProductListService = async (loginDetails) => {
  let response = await fetch(`https://fakestoreapi.com/products`, {
    method: "Post",
    body: JSON.stringify(loginDetails),
  });
  let data = await response.json();
  return data;
};

function* getProductListHandler(action) {
  let data = yield call(getProductListService, action.payload);
  console.log(data);
  yield put(saveProductList(data));
}

// watcher
// 5 => run all or run the latest
export function* getProductListWatcher() {
  yield takeLatest(getProductList.type, getProductListHandler);
}
