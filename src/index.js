import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import LoginComponent from './Login/login';
import SignupComponent from './Signup/signup';
import DashboardComponent from './Dashboard/dashboard';
const firebase =require("firebase");
require("firebase/firestore");

firebase.initializeApp({
    apiKey: "AIzaSyAbuGaHIDnRfeTMi-o5-Ob65fIhLHHAYXQ",
    authDomain: "chatapp-b8372.firebaseapp.com",
    databaseURL: "https://chatapp-b8372.firebaseio.com",
    projectId: "chatapp-b8372",
    storageBucket: "chatapp-b8372.appspot.com",
    messagingSenderId: "538336408910",
    appId: "1:538336408910:web:9cd2e76431f604aa675a1f",
    measurementId: "G-P1HPS1FX2P"
})

const routing = (
  <Router>
    <div id='routing-container'>
      <Route path='/login' component={LoginComponent}></Route>
      <Route path='/signup' component={SignupComponent}></Route>
      <Route path='/dashboard' component={DashboardComponent}></Route>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
