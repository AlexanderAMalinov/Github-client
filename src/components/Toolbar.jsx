import React from 'react';
import { connect } from 'react-redux';
import { setAppState, getRepoList } from '../actions/index.js';
import { appStates } from '../meta.js';

const actionCreators = { setAppState, getRepoList };
const mapStateToProps = ({ appState }) => ({ appState }); 

const Toolbar = (props) => {
  const handleListTransition = () => {
    props.getRepoList();
    props.setAppState(appStates.REPO_LIST)
  };

  return (
    <div className="toolbar">
      <button onClick={() => props.setAppState(appStates.LOGIN)} className="button">Log out</button>
      {props.appState === appStates.REPO_LIST
        ? <button onClick={() => props.setAppState(appStates.USER_EDIT)} className="button">Back to profile</button>
        : <button onClick={handleListTransition} className="button">Repositories</button>
      }
    </div>
  );
};

export default connect(mapStateToProps, actionCreators)(Toolbar);