import { createAction } from 'redux-actions';

export const authLoading = createAction('auth/loading');
export const getUser = createAction('auth/get-user');
export const setUser = createAction('auth/set-user');
