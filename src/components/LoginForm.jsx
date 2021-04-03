import React from 'react';

export const LoginForm = (props) => {
  return (
    <form className="login-form">
      <h3 className="login-form__header">Login in to Github</h3>
      <div className="login-form__form-group">
        <input className="login-form__form-group__field" id="PAT" type="text"/>
      </div>
      <button className="login-form__submit-button" type="submit">Submit</button>
    </form>     
  );
};
