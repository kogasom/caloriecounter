import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setFilters } from '../actions'

class Filter extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            date_from: '',
            date_to: '',
            time_from: '',
            time_to: '',
        }
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        const { dispatch } = this.props
        dispatch(setFilters(this.state))
    }

    render () {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    Filter
                </div>
                <div className="panel-body">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>From (date)</label>
                            <input type="text" value={this.state.date_from} name="date_from" onChange={this.handleChange} className="form-control" placeholder="YYYY-MM-DD"/>
                        </div>

                        <div className="form-group">
                            <label>To (date)</label>
                            <input type="text" value={this.state.date_to} name="date_to" onChange={this.handleChange} className="form-control" placeholder="YYYY-MM-DD"/>
                        </div>

                        <div className="form-group">
                            <label>From (time)</label>
                            <input type="text" value={this.state.time_from} name="time_from" onChange={this.handleChange} className="form-control" placeholder="HH:mm"/>
                        </div>

                        <div className="form-group">
                            <label>To (time)</label>
                            <input type="text" value={this.state.time_to} name="time_to" onChange={this.handleChange} className="form-control" placeholder="HH:mm"/>
                        </div>
                        <button type="submit" className="btn btn-default">Filter</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default connect()(Filter)
