import React, { Component } from 'react';
import { connect } from 'react-redux'
import { storeMeal, updateMealRequest } from '../actions'

class CreateMeal extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = (this.props.meal) ? this.props.meal : {
            date: '',
            time: '',
            text: '',
            calories: '',
        }
        //console.log(this.props.match.params.id)
        console.log(this.props)
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        const { dispatch } = this.props
        if (this.props.meal) {
            dispatch(updateMealRequest(this.state))
        } else {
            dispatch(storeMeal(this.state))
        }
    }

    render () {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    Meal
                </div>
                <div className="panel-body">
                    <form onSubmit={this.handleSubmit}>
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

function getMeal(state,ownProps) {
    return state.meals.filter(m => m.id == Number(ownProps.match.params.id))[0]
}

const mapStateToProps = (state,ownProps) => {
    return {
        meal:  getMeal(state,ownProps)
    }
}

export default connect(mapStateToProps)(CreateMeal)
