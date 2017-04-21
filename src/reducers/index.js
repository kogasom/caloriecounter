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
        case 'DELETE_MEAL': return [...state.filter(m => m.id !== Number(action.meal.id))]
        default: return state
    }
}

const filter = (state = {
    date_from: '',
    date_to: '',
    time_from: '',
    time_to: '',
}, action) => {
    switch(action.type) {
        case 'SET_FILTERS': return {...action.filters}
        default: return state
    }
}

const reducer = combineReducers({
    token,
    user,
    meals,
    filter
})

export default reducer
