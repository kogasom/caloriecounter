import React, { Component } from 'react';

class CreateMeal extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            date: '',
            time: '',
            text: '',
            calories: '',
        }
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    render () {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    Meal
                </div>
                <div className="panel-body">
                    <form>
                        <div className="form-group">
                            <label>Date</label>
                            <input type="text" value={this.state.date} name="date" onChange={this.handleChange} className="form-control" />
                        </div>

                        <div className="form-group">
                            <label>Time</label>
                            <input type="text" value={this.state.time} name="time" onChange={this.handleChange} className="form-control" />
                        </div>

                        <div className="form-group">
                            <label>Meal</label>
                            <input type="text" value={this.state.text} name="text" onChange={this.handleChange} className="form-control"/>
                        </div>

                        <div className="form-group">
                            <label>Calories</label>
                            <input type="text" value={this.state.calories} name="calories" onChange={this.handleChange} className="form-control"/>
                        </div>
                        <button type="submit" className="btn btn-default">Save</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default CreateMeal
