import { all, call, put, takeLeading } from 'redux-saga/effects';
import { client } from '../../api';
import { getCountries, setCountries, setCountriesLoading } from './actions';

export function* workerCountriesRequest() {
  try {
    yield put(setCountriesLoading(true));
    const { data } = yield call(client.get, '/countries');
    yield put(setCountries(data));
  } catch (error) {
    console.log('error', error);
  } finally {
    yield put(setCountriesLoading(false));
  }
}

export default function* countriesEffects() {
  yield all([takeLeading(getCountries, workerCountriesRequest)]);
}
