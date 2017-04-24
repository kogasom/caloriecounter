import React, { Component } from 'react';
import { connect } from 'react-redux'
import { updateSettings } from '../actions'
import { Redirect } from 'react-router-dom'
import moment from 'moment'

class Settings extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            daily_calories: this.props.daily_calories
        }
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        const { dispatch } = this.props
        dispatch(updateSettings(this.state))
    }

    render () {
        if (!this.props.isLoggedIn) return <Redirect to="/auth/login"/>
        return (
            <div className={(this.props.todaysCalories < this.state.daily_calories) ? 'panel panel-success' : 'panel panel-danger'}>
                <div className="panel-heading">
                    Settings
                </div>
                <div className="panel-body">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Expected number of calories per day</label>
                            <input type="text" value={this.state.daily_calories} name="daily_calories" onChange={this.handleChange} className="form-control" />
                        </div>
                        <button type="submit" className="btn btn-default">Ok</button>
                    </form>
                </div>
            </div>
        )
    }
}

function todaysCalories(state) {
    let arr = state.meals.filter(meal => {
        if (moment(meal.date).isValid()) {
            if ((moment(meal.date) >= moment('00:00','HH:mm')) && (moment(meal.date) < moment('24:00','HH:mm'))) return true
        }

        return false
    })
    if (arr.length < 1) return 0
    return arr.map(e => e.calories).reduce((a,b) => a+b)
}

const mapStateToProps = state => {
    return {
        isLoggedIn: (state.token !== ''),
        daily_calories: state.user.daily_calories,
        todaysCalories: todaysCalories(state)
    }
}

export default connect(mapStateToProps)(Settings)
