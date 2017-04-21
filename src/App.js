import React, { Component } from 'react';
import './App.css';

import Login from './components/Login.js'
import Registration from './components/Registration.js'
import Settings from './components/Settings.js'
import Meal from './components/Meal.js'
import CreateMeal from './components/CreateMeal.js'
import Filter from './components/Filter.js'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
            <div className="col-md-12">
                <Login/>
                <Registration/>
                <Settings/>
                <Meal date="2017-04-21" time="14:00" text="Burrito" calories="1200"/>
                <CreateMeal/>
                <Filter/>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
