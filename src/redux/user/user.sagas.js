import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { put, takeLatest, all, call } from "redux-saga/effects";

import {
  auth,
  createUserProfileDocument,
  googleProvider,
} from "../../firebase/firebase.utils";
import { signInFailure, signInSuccess } from "./user.actions";

import UserActionTypes from "./user.types";

export function* completeSignInProcess(user) {
  try {
    yield call(createUserProfileDocument, user);
    yield put(signInSuccess({ id: user.uid, ...user }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield signInWithPopup(auth, googleProvider);
    yield completeSignInProcess(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield signInWithEmailAndPassword(auth, email, password);
    yield completeSignInProcess(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* userSagas() {
  yield all([call(onGoogleSignInStart), call(onEmailSignInStart)]);
}
