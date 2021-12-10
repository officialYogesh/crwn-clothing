import { call, put, takeLatest } from "redux-saga/effects";
import { collection, getDocs } from "firebase/firestore";

import {
  convertCollectionsSnapshotToMap,
  db,
} from "../../firebase/firebase.utils";
import ShopActionTypes from "./shop.types";
import {
  fetchCollectionsFailure,
  fetchCollectionsSuccess,
} from "./shop.actions";

export function* fetchCollectionsAsync() {
  try {
    const docs = yield getDocs(collection(db, "collections"));
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, docs);
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}
