import React, { Component } from 'react';

class Settings extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            expected_calories: ''
        }
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    render () {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    Settings
                </div>
                <div className="panel-body">
                    <form>
                        <div className="form-group">
                            <label>Expected number of calories per day</label>
                            <input type="text" value={this.state.expected_calories} name="expected_calories" onChange={this.handleChange} className="form-control" />
                        </div>
                        <button type="submit" className="btn btn-default">Ok</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Settings
