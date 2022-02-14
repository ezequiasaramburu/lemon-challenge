import { createAction } from 'redux-actions';

export const getCountries = createAction('countries/get-countries');
export const setCountries = createAction('countries/set-countries');
export const setCountriesLoading = createAction(
  'countries/set-countries-loading',
);

export const getCountryDetail = createAction('countries/get-country-detail');
export const setCountryDetail = createAction('countries/set-country-detail');
export const setCountryDetailLoading = createAction(
  'countries/set-country-detail-loading',
);
