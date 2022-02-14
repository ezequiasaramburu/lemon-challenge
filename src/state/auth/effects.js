import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  authLoading,
  getUser,
  setUser,
  getCurrentUser,
  setLogout,
  userLogout,
} from './actions';

export function* workerGetUser() {
  try {
    yield put(authLoading(true));
    yield call([GoogleSignin, 'hasPlayServices']);
    const userInfo = yield call([GoogleSignin, 'signIn']);
    yield put(setUser(userInfo));
    yield call([AsyncStorage, 'setItem'], 'token', userInfo.idToken);
  } catch (error) {
    console.log('error', error);
  } finally {
    yield put(authLoading(false));
  }
}

export function* workerLogoutUser() {
  try {
    yield call([GoogleSignin, 'signOut']);
    yield put(setLogout());
    yield call([AsyncStorage, 'clear']);
  } catch (error) {
    console.log('error', error);
  }
}

export function* workerGetCurrentUser() {
  try {
    yield put(authLoading(true));
    const userInfo = yield call([GoogleSignin, 'signInSilently']);
    yield put(setUser(userInfo));
    yield call([AsyncStorage, 'setItem'], 'token', userInfo.idToken);
  } catch (error) {
    console.log(error);
  } finally {
    yield put(authLoading(false));
  }
}

export default function* authEffects() {
  yield all([
    takeLatest(getUser, workerGetUser),
    takeEvery(userLogout, workerLogoutUser),
    takeEvery(getCurrentUser, workerGetCurrentUser),
  ]);
}
