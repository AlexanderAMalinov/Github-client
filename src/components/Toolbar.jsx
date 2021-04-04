import React from 'react';
import { connect } from 'react-redux';
import { setAppState } from '../actions/index.js';
import { appStates } from '../meta.js';

const actionCreators = { setAppState };

const Toolbar = (props) => {
  return (
    <div className="toolbar">
      <button onClick={() => props.setAppState(appStates.LOGIN)} className="button">Logout</button>
      <button onClick={() => props.setAppState(appStates.REPO_LIST)} className="button">Repositories</button>
    </div>
  );
};

export default connect(null, actionCreators)(Toolbar);