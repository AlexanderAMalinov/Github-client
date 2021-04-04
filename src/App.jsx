import React from 'react';
import { connect } from 'react-redux';
import LoginForm from './components/LoginForm.jsx';
import Toolbar from './components/Toolbar.jsx';
import UserForm from './components/UserForm.jsx';

const mapStateToProps = ({ authCompleted }) => ({ authCompleted });

export const App = (props) => {
  const { authCompleted } = props;
  if (authCompleted) {
    return (
      <>
        <Toolbar/>
        <UserForm/>
      </>
    );
  }

  return <LoginForm/>;
};

export default connect(mapStateToProps)(App);