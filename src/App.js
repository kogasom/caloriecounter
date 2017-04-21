import React, { Component } from 'react';
import './App.css';

import Login from './components/Login.js'
import Registration from './components/Registration.js'
import Settings from './components/Settings.js'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
            <div className="col-md-12">
                <Login/>
                <Registration/>
                <Settings/>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
