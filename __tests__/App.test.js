import React from 'react';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { appStates } from '../src/meta.js'
import App from '../src/App.jsx';
import LoginForm from '../src/components/LoginForm.jsx';
import UserForm from '../src/components/UserForm.jsx';
import RepoList from '../src/components/RepoList.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('Correct render with different app states', () => {
  it('renders login form', () => {
    const wrapper = Enzyme.shallow(<App appState={appStates.LOGIN}/>);
    expect(wrapper.contains(<LoginForm />)).to.equal(true);
  });
});