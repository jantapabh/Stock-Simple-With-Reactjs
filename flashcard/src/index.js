import React from 'react';
import './index.css';
import App from './App';
import ReactDOM, {render} from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Router, Route, Link} from 'react-router-dom'
import firebase from 'firebase'
import config from './config'
import 'firebase/firestore'
import registerServiceWorker from './registerServiceWorker';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import WebFont from 'webfontloader';


if(firebase.apps.length === 0)

  firebase.initializeApp(config)
  export const firestore = firebase.firestore()

  ReactDOM.render(
    <BrowserRouter>
  <App />
    </BrowserRouter>
    , document.getElementById('root'));
  registerServiceWorker();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
