import React, { useState } from 'react';
import { Octokit } from '@octokit/rest';
import { LoginForm } from './components/LoginForm.jsx';
import { UserForm } from './components/UserForm.jsx';
import { getUserDataChanges } from './services/FormChangesService';

export const App = () => {
  const [isAuthCompleted, setAuthStatus] = useState(false);
  const [gitHubClient, setClient] = useState();
  const [userData, setUserData] = useState();

  const syncUserData = async (changes) => {
    const preparedChanges = changes.reduce((acc, change) => ({ ...acc, [change.key]: change.value }), {});
    try {
      await gitHubClient.rest.users.updateAuthenticated(preparedChanges);
      const { data } = await gitHubClient.request("/user");
      setUserData(data);
    } catch(error) {
      // TODO: make notification
    }
  };

  const handleLoginSubmit = async (personalKey) => {
    const client = new Octokit({ auth: personalKey });
    setClient(client);
    try {
      const { data } = await client.request("/user");
      setUserData(data);
      setAuthStatus(true);
    } catch(error) {
      // TODO: make notification
    }
  };

  const handleUserFormSubmit = async (actualFormData) => {
    const previousFormData = { name: userData.name, bio: userData.bio, blog: userData.blog };
    const changes = getUserDataChanges(previousFormData, actualFormData);
    await syncUserData(changes);
  };


  if (isAuthCompleted) {
    return <UserForm handleSubmit={handleUserFormSubmit} userData={userData} client={gitHubClient}/>;
  }

  return <LoginForm handleSubmit={handleLoginSubmit} isAuthCompleted={isAuthCompleted}/>;
};