import React from 'react';

export const UserForm = (props) => {
  return (
    <form className="login-form">
      <h3 className="login-form__header">Profile</h3>
      <div className="login-form__form-group">
        <label htmlFor='username'>Name</label>
        <input className="login-form__form-group__field" id="username" type="text"/>
      </div>
      <div className="login-form__form-group">
        <label htmlFor='blog'>Blog</label>
        <input className="login-form__form-group__field" id="blog" type="text"/>
      </div>
      <div className="login-form__form-group">
        <label htmlFor='bio'>Bio</label>
        <textarea className="login-form__form-group__field" id="bio" type="text"/>
      </div>
    </form>
  );
};
