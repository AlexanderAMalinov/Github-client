import React, { useState } from 'react';
import { connect } from 'react-redux';
import { sendFieldsChanges, updateUserData } from '../actions/index.js';

const actionCreators = { updateUserData, sendFieldsChanges };
const mapStateToProps = ({ userData }) => ({ userData });

export const UserForm = (props) => {
  const { userData, sendFieldsChanges } = props;
  const [nameField, setName] = useState(userData.name);
  const [blogField, setBlog] = useState(userData.blog);
  const [bioField, setBio] = useState(userData.bio);

  const handleSubmit = (event) => {
    event.preventDefault();
    sendFieldsChanges({ name: nameField, blog: blogField, bio: bioField });
  };
  
  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h3 className="login-form__header">Profile</h3>
      <div className="login-form__form-group">
        <label htmlFor='username'>Name</label>
        <input onChange={(event) => setName(event.target.value)} value={nameField} className="login-form__form-group__field" id="username" type="text"/>
      </div>
      <div className="login-form__form-group">
        <label htmlFor='blog'>Blog</label>
        <input onChange={(event) => setBlog(event.target.value)} value={blogField} className="login-form__form-group__field" id="blog" type="text"/>
      </div>
      <div className="login-form__form-group">
        <label htmlFor='bio'>Bio</label>
        <textarea onChange={(event) => setBio(event.target.value)} value={bioField} className="login-form__form-group__field" id="bio" type="text"/>
      </div>
      <button className="button login-form__submit-button" type="submit">Edit profile</button>
    </form>
  );
};

export default connect(mapStateToProps, actionCreators)(UserForm);
