import React, { Component } from 'react';
import { connect } from 'react-redux'
import { updateSettings } from '../actions'
import { Redirect } from 'react-router-dom'

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
            <div className="panel panel-default">
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

const mapStateToProps = state => {
    return {
        isLoggedIn: (state.token !== ''),
        daily_calories: state.user.daily_calories
    }
}

export default connect(mapStateToProps)(Settings)
