import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import { useMediaQuery } from 'react-responsive'
import fire from './config/fire'
import { render } from '@testing-library/react';
import firebase from 'firebase'
import { BrowserRouter, Route, Link, Router, Redirect } from 'react-router-dom';
import Login from './components/Login'
import Topbar from './components/Topbar'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {}

    }
  }

  componentDidMount() {
    this.authListener()
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user })
      }
      else {
        this.setState({ user: null })
      }

    })
  }

  render() {

    if(this.state.user == null)
    {
      return(

        <div>
        <Topbar />
        <Login />   
        </div>

      );
    }
  
    return (

      <div>
        <div className="Topbar">
          <Topbar />
        </div>
        <BrowserRouter>
        
        </BrowserRouter>
      </div>

    );

  }
}


export default App;