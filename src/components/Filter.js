import React, { Component } from 'react';

class Filter extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
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

    render () {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    Filter
                </div>
                <div className="panel-body">
                    <form>
                        <div className="form-group">
                            <label>From (date)</label>
                            <input type="text" value={this.state.date_from} name="date_from" onChange={this.handleChange} className="form-control" />
                        </div>

                        <div className="form-group">
                            <label>To (date)</label>
                            <input type="text" value={this.state.date_to} name="date_to" onChange={this.handleChange} className="form-control" />
                        </div>

                        <div className="form-group">
                            <label>From (time)</label>
                            <input type="text" value={this.state.time_from} name="time_from" onChange={this.handleChange} className="form-control"/>
                        </div>

                        <div className="form-group">
                            <label>To (time)</label>
                            <input type="text" value={this.state.time_to} name="time_to" onChange={this.handleChange} className="form-control"/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Filter
