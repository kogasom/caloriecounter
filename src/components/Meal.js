import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Meal extends Component {
    render () {
        const {id,date,time,text,calories} = this.props
        return (
            <li className="list-group-item">
                {date} {time}: {text}  - {calories} kCal
                <Link to={'/meals/edit/'+this.props.id}>Edit</Link>
            </li>
        );
    }
}

export default Meal
