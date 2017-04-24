import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteMealRequest } from '../actions'

class Meal extends Component {
    constructor(props) {
        super(props)
        this.deleteMeal = this.deleteMeal.bind(this);
    }

    deleteMeal() {
        const { dispatch } = this.props
        dispatch(deleteMealRequest(this.props.id))
    }
    render () {
        const {date,time,text,calories} = this.props
        return (
            <li className="list-group-item">
                {date} {time}: {text}  - {calories} kCal
                <Link to={'/meals/edit/'+this.props.id} className="btn btn-primary btn-xs pull-right">Edit</Link>
                <button onClick={this.deleteMeal} className="btn btn-xs btn-warning pull-right">Delete</button>
            </li>
        );
    }
}

export default connect()(Meal)
