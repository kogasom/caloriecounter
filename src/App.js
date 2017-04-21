import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Login from './components/Login.js'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
            <div className="col-md-12">
                <Login/>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
