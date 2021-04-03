import React, { useState } from 'react';

const getUserDataChanges = (previousData, actualData) => {
  const notMatchedFields = Object.entries(previousData).reduce((fields, dataItem) => {
    const [key, value] = dataItem;
    const propIsEqual = actualData[key] === value;
    if (!propIsEqual) {
      return [...fields, { key, value: actualData[key] }];
    }
    return fields;
  }, []);

  return notMatchedFields;
};

export const UserForm = (props) => {
  const { client, userData } = props;
  const [nameField, setName] = useState(userData.name);
  const [blogField, setBlog] = useState(userData.blog);
  const [bioField, setBio] = useState(userData.bio);

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, blog, bio } = userData;
    const actualData = { name: nameField, blog: blogField, bio: bioField };
    const changes = getUserDataChanges({ name, blog, bio }, actualData);
    console.log(changes);
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
      <button className="login-form__submit-button" type="submit">Submit</button>
    </form>
  );
};
