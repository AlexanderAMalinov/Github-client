import { createAction } from 'redux-actions';
import { getUserDataChanges } from '../services/FormChangesService.js';
import { appStates } from '../meta.js';

// export const requestPending = createAction('REQUEST_PENDING');
// export const requestSuccess = createAction('REQUEST_SUCCESS');
// export const requestFailed = createAction('REQUEST_FAILED');

export const setUserData = createAction('SET_USER_DATA');
export const setClient = createAction('SET_CLIENT');
export const setAppState = createAction('SET_APP_STATE');
export const updateRepoList = createAction('UPDATE_REPO_LIST');

export const updateUserData = () => async (dispatch, getState) => {
  const { gitHubClient } = getState();
  try {
    const { data } = await gitHubClient.request("/user");
    dispatch(setUserData(data));
    dispatch(setAppState(appStates.USER_EDIT));
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

export const getRepoList = () => async (dispatch, getState) => {
  const { gitHubClient, userData: { login } } = getState();
  try {
    const { data } = await gitHubClient.request('GET /users/{username}/repos', {
      username: login
    });
    dispatch(updateRepoList(data));
  } catch(error) {
    // Notification
  }
};