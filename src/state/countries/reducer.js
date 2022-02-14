import {
  setCountries,
  setCountriesLoading,
  setCountryDetail,
  setCountryDetailLoading,
} from './actions';

const initialState = {
  data: null,
  isLoading: false,
};

export const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case String(setCountries): {
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    }
    case String(setCountriesLoading): {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    case String(setCountryDetail): {
      return {
        ...state,
        details: action.payload,
        detailsLoading: false,
      };
    }
    case String(setCountryDetailLoading): {
      return {
        ...state,
        detailsLoading: action.payload,
      };
    }
    default:
      return state;
  }
};
