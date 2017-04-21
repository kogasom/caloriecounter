import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import Filter from './Filter.js'
import { getMeals } from '../actions'
import { connect } from 'react-redux'
import Meal from './Meal.js'

class Meals extends Component {
    componentDidMount() {
        const { dispatch } = this.props
        if (this.props.isLoggedIn) dispatch(getMeals())
    }
    render() {
        const MealList = this.props.meals.map(meal => <Meal key={meal.id} {...meal}/>)
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

const mapStateToProps = state => {
    return {
        meals: state.meals,
        isLoggedIn: (state.token !== '')
    }
}

export default connect(mapStateToProps)(Meals)
