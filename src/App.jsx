import React from 'react';
import { connect } from 'react-redux';
import LoginForm from './components/LoginForm.jsx';
import UserForm from './components/UserForm.jsx';

const mapStateToProps = ({ authCompleted }) => ({ authCompleted });

export const App = (props) => {
  const { authCompleted } = props;
  return authCompleted ? <UserForm/> : <LoginForm/>;
};

export default connect(mapStateToProps)(App);