import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import Filter from './Filter.js'
import { getMeals } from '../actions'
import { connect } from 'react-redux'
import Meal from './Meal.js'
import moment from 'moment'

class Meals extends Component {
    componentDidMount() {
        const { dispatch } = this.props
        if (this.props.isLoggedIn) dispatch(getMeals())
    }
    render() {
        const MealList = (this.props.meals) ? this.props.meals.map(meal => <Meal key={meal.id} {...meal}/>) : ''
        const isLoggedIn = this.props.isLoggedIn
        return (
            <div>
                {!isLoggedIn && <Redirect to="/auth/login"/>}
                <Filter/>

                <div className="panel panel-default">
                    <div className="panel-heading">
                        Meals
                    </div>
                    <ul className="list-group">
                        {MealList}
                    </ul>
                    <div className="panel-footer">
                        <Link to="/meals/create" className="btn btn-primary">New meal</Link>
                    </div>
                </div>
            </div>
        )
    }
}

function filteredMealList(state) {
    return state.meals.filter(meal => {
        var {date_from,date_to,time_from,time_to} = state.filter

        if (!moment(meal.date).isValid()) return true
        date_from = (date_from == '') ? '1970-01-01' : date_from
        if (moment(date_from).isValid()) {
            if (moment(meal.date) < moment(date_from)) return false
        }

        date_to = (date_to == '') ? '2222-12-22' : date_to
        if (moment(date_to).isValid()) {
            if (moment(meal.date) > moment(date_to)) return false
        }


        if (moment(meal.date+' '+meal.time).isValid() && moment(meal.date).isValid()) {
            let mealTimeSec = (moment(meal.date+' '+meal.time)-moment(meal.date))/1000

            time_from = (time_from == '') ? '00:00' : time_from
            if (moment(date_from+' '+time_from).isValid() && moment(date_from).isValid()) {
                let fromTimeSec = (moment(date_from+' '+time_from)-moment(date_from))/1000
                if (mealTimeSec < fromTimeSec) return false
            }

            time_to = (time_to == '') ? '23:59' : time_to
            if (moment(date_to+' '+time_to).isValid() && moment(date_to).isValid()) {
                let toTimeSec = (moment(date_to+' '+time_to)-moment(date_to))/1000
                if (mealTimeSec > toTimeSec) return false
            }
        }
        
        return true
    })
}

const mapStateToProps = state => {
    return {
        meals: filteredMealList(state),
        isLoggedIn: (state.token !== '')
    }
}

export default connect(mapStateToProps)(Meals)
