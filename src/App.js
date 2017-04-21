import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';

import Login from './components/Login.js'
import Registration from './components/Registration.js'
import Settings from './components/Settings.js'
import CreateMeal from './components/CreateMeal.js'
import Nav from './components/Nav.js'
import Meals from './components/Meals.js'


class App extends Component {
  render() {
    return (
            <Router>
                <div className="container">
                    <Nav/>

                    <div className="row">
                        <div className="col-md-12">
                            <Route exact path="/" component={Registration}/>
                            <Route exact path="/auth/register" component={Registration}/>
                            <Route exact path="/auth/login" component={Login}/>
                            <Route exact path="/user" component={Settings}/>
                            <Route exact path="/meals" component={Meals}/>
                            <Route exact path="/meals/edit/:id" component={CreateMeal}/>
                            <Route exact path="/meals/create" component={CreateMeal}/>
                        </div>
                    </div>
                </div>
            </Router>
    );
  }
}

export default App;
