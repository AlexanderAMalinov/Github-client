import React from 'react';
import { render } from 'react-dom';
import { App } from './App.jsx';
import './index.css';
import "@babel/polyfill";

const rootEl = document.getElementById('root');
render(<App/>, rootEl);
