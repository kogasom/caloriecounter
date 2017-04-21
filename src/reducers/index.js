import { combineReducers } from 'redux'

const token = (state = '', action) => {
    switch(action.type) {
        case 'SET_TOKEN': return action.token
        default: return state
    }
}

const user = (state = '', action) => {
    switch(action.type) {
        case 'SET_USER': return action.user
        default: return state
    }
}


const meals = (state = [], action) => {
    switch(action.type) {
        case 'ADD_MEAL': return [...state,action.meal]
        case 'SET_MEALS': return [...action.meals]
        case 'UPDATE_MEAL': return state.map(m => {
            if (m.id !== action.meal.id) {return m}
            return {...action.meal}
        })
        default: return state
    }
}

const reducer = combineReducers({
    token,
    user,
    meals
})

export default reducer
