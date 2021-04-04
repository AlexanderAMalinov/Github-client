import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { Octokit } from '@octokit/rest';
import * as actions from '../actions/index.js';
import { appStates } from '../meta.js';

const gitHubClient = handleActions({
  [actions.setClient]: (state, { payload }) => new Octokit({ auth: payload }),
  [actions.setAppState]: (state, { payload }) => payload === appStates.LOGIN ? {} : state
}, {});

const userData = handleActions({
  [actions.setUserData]: (state, { payload }) => ({ ...payload }),
  [actions.setAppState]: (state, { payload }) => payload === appStates.LOGIN ? {} : state
}, {});

const appState = handleActions({
  [actions.setAppState]: (state, { payload }) => payload,
}, appStates.LOGIN);

const repoList = handleActions({
  [actions.updateRepoList]: (state, { payload }) => payload,
  [actions.setAppState]: (state, { payload }) => payload === appStates.LOGIN ? [] : state
}, []);

export default combineReducers({
  appState,
  userData,
  gitHubClient,
  repoList
});