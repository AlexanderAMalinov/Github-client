import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from '../actions/index.js';

const gitHubClient = handleActions({
  [actions.setClient]: (state, { payload }) => payload,
}, {});

const userData = handleActions({
  [actions.setUserData]: (state, { payload }) => ({ ...payload })
}, {});

const authCompleted = handleActions({
  [actions.setAuthStatus]: (state, { payload }) => payload,
}, false);

export default combineReducers({
  userData,
  authCompleted,
  gitHubClient
});