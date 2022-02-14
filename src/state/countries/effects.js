import { all, call, put, takeLeading } from 'redux-saga/effects';
import { client } from '../../api';
import {
  getCountries,
  setCountries,
  setCountriesLoading,
  getCountryDetail,
  setCountryDetail,
} from './actions';

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

export function* workerCountryDetailRequest(action) {
  const slug = action.payload;
  try {
    const { data } = yield call(
      client.get,
      `/total/dayone/country/${slug}/status/confirmed`,
    );
    yield put(setCountryDetail(data));
  } catch (error) {
    console.log('error', error);
  }
}

export default function* countriesEffects() {
  yield all([
    takeLeading(getCountries, workerCountriesRequest),
    takeLeading(getCountryDetail, workerCountryDetailRequest),
  ]);
}
