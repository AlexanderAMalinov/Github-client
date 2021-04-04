import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Octokit } from '@octokit/rest';
import { updateUserData, setClient } from '../actions/index.js';

const actionCreators = { updateUserData, setClient };
const mapStateToProps = ({ authCompleted }) => ({ authCompleted });

export const LoginForm = (props) => {
  const [personalKey, setValue] = useState('');
  const { updateUserData, setClient } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    const client = new Octokit({ auth: personalKey });
    setClient(client);
    updateUserData();
  };

  if (props.isAuthCompleted) {
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h3 className="login-form__header">Login in to Github</h3>
      <div className="login-form__form-group">
        <input onChange={(event) => setValue(event.target.value)} className="login-form__form-group__field" id="PAT" type="text"/>
      </div>
      <button className="button login-form__submit-button" type="submit">Submit</button>
    </form>     
  );
};

export default connect(mapStateToProps, actionCreators)(LoginForm);
