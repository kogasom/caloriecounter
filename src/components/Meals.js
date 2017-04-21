import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Filter from './Filter.js'

class Meals extends Component {
    render() {
        return (
            <div>
                <Filter/>
                <Link to="/meals/create" className="btn btn-primary">New meal</Link>
            </div>
        )
    }
}

export default Meals
