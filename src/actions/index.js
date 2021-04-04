import { createAction } from 'redux-actions';
import { getUserDataChanges } from '../services/FormChangesService.js';

// export const requestPending = createAction('REQUEST_PENDING');
// export const requestSuccess = createAction('REQUEST_SUCCESS');
// export const requestFailed = createAction('REQUEST_FAILED');

export const setUserData = createAction('SET_USER_DATA');
export const setClient = createAction('SET_CLIENT');
export const setAuthStatus = createAction('SET_AUTH_STATUS');

export const updateUserData = () => async (dispatch, getState) => {
  const { gitHubClient } = getState();
  try {
    const { data } = await gitHubClient.request("/user");
    dispatch(setUserData(data));
    dispatch(setAuthStatus(true));
  } catch(error) {
   // Notification
  }
};

export const sendFieldsChanges = (actualFieldsData) => async (dispatch, getState) => {
  const { gitHubClient, userData: { name, bio, blog } } = getState();
  const changes = getUserDataChanges({ name, bio, blog }, actualFieldsData);
  const preparedChanges = changes.reduce((acc, change) => ({ ...acc, [change.key]: change.value }), {});
  try {
    await gitHubClient.rest.users.updateAuthenticated(preparedChanges);
  } catch(error) {
    // Notification
  }
};