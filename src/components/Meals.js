import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Filter from './Filter.js'
import { getMeals } from '../actions'
import { connect } from 'react-redux'

class Meals extends Component {
    componentDidMount() {
        const { dispatch } = this.props
        dispatch(getMeals())
    }
    render() {
        return (
            <div>
                <Filter/>
                <Link to="/meals/create" className="btn btn-primary">New meal</Link>
            </div>
        )
    }
}

export default connect()(Meals)
