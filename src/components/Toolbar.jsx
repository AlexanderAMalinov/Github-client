import React from 'react';
import { connect } from 'react-redux';
import { setAppState, getRepoList } from '../actions/index.js';
import { appStates } from '../meta.js';

const actionCreators = { setAppState, getRepoList };

const Toolbar = (props) => {
  const handleListTransition = () => {
    props.getRepoList();
    props.setAppState(appStates.REPO_LIST)
  };

  return (
    <div className="toolbar">
      <button onClick={() => props.setAppState(appStates.LOGIN)} className="button">Logout</button>
      <button onClick={handleListTransition} className="button">Repositories</button>
    </div>
  );
};

export default connect(null, actionCreators)(Toolbar);