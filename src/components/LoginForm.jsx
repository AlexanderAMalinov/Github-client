import React, { useState } from 'react';

export const LoginForm = (props) => {
  const [personalKey, setValue] = useState('');
  const wrappedSubmit = (event) => {
    event.preventDefault();
    props.handleSubmit(personalKey);
  };

  return (
    <form onSubmit={wrappedSubmit} className="login-form">
      <h3 className="login-form__header">Login in to Github</h3>
      <div className="login-form__form-group">
        <input onChange={(event) => setValue(event.target.value)} className="login-form__form-group__field" id="PAT" type="text"/>
      </div>
      <button className="login-form__submit-button" type="submit">Submit</button>
    </form>     
  );
};
