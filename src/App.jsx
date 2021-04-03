import React, { useState } from 'react';
import { Octokit } from '@octokit/rest';
import { LoginForm } from './components/LoginForm.jsx';
import { UserForm } from './components/UserForm.jsx';

export const App = () => {
  const [isAuthCompleted, setAuthStatus] = useState(false);
  const [gitHubClient, setClient] = useState();
  const [userData, setUserData] = useState();

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

  if (isAuthCompleted) {
    return <UserForm userData={userData} client={gitHubClient}/>;
  }

  return <LoginForm handleSubmit={handleLoginSubmit} isAuthCompleted={isAuthCompleted}/>;
};