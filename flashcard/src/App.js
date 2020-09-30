import React, { Component } from 'react';
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
import Home from './components/Home'
import Stock from './components/Stock'
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';


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
    if (this.state.user == null) {
      return (
        <div>
          <Login />
        </div>
      );
    }

    return (

      <div>
        <Layout>
          <div>
            <Header className="header-color" title={<Link style={{ textDecoration: 'none', color: 'white', fontSize: '30px', borderRadius: '20px', backgroundColor: 'black', padding: '10px', margin: '10px' }} to="/">My Portfolio</Link>} scroll>
              <Navigation>
                <Link style={{ fontSize: '25px' }} to="/">Home</Link >
                <Link style={{ fontSize: '25px' }} to="/Stock">Stock</Link>
              </Navigation>
            </Header>
            <Drawer title={<Link style={{ textDecoration: 'none', color: 'black' }} to="/">STOCK</Link>}>
              <Navigation>
                <Link style={{ fontSize: '25px' }} to="/">Home</Link >
                <Link style={{ fontSize: '25px' }} to="/Stock">Stock</Link>
              </Navigation>
            </Drawer>
          </div>
          <BrowserRouter>
            <Route exact path="/" component={Home} />
            <Route path="/Stock" component={Stock} />
            <Route path="/login" component={Login} />
          </BrowserRouter>
        </Layout>
      </div>

    );

  }
}


export default App;