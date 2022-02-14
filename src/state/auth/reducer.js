import { authLoading, setUser } from './actions';

const initialState = {
  user: null,
  isLoading: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case String(authLoading):
      return {
        ...state,
        isLoading: action.payload,
      };
    case String(setUser):
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
