import React, { Component } from 'react';

class Meal extends Component {
    render () {
        const {date,time,text,calories} = this.props
        return (
            <div>
                {date} {time}: {text}  - {calories} kCal
            </div>
        );
    }
}

export default Meal
