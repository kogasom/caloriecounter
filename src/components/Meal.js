import React, { Component } from 'react';

class Meal extends Component {
    render () {
        const {date,time,text,calories} = this.props
        return (
            <li className="list-group-item">
                {date} {time}: {text}  - {calories} kCal
            </li>
        );
    }
}

export default Meal
