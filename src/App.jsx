import React from 'react';
import { connect } from 'react-redux';
import LoginForm from './components/LoginForm.jsx';
import Toolbar from './components/Toolbar.jsx';
import UserForm from './components/UserForm.jsx';
import RepoList from './components/RepoList.jsx';
import { appStates } from './meta.js';

const mapStateToProps = ({ appState }) => ({ appState });

export const App = (props) => {
  const { appState } = props;

  switch (appState) {
    case appStates.LOGIN:
      return <LoginForm/>;
    case appStates.USER_EDIT:
      return (
        <>
          <Toolbar/>
          <UserForm/>
        </>
      );
    case appStates.REPO_LIST:
      return (
        <>
          <Toolbar/>
          <RepoList/>
        </>
      );
  }
};

export default connect(mapStateToProps)(App);