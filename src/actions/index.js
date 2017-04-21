import axios from 'axios'

export const setToken = token => ({
    type: 'SET_TOKEN',
    token: token
})

export const setUser = user => ({
    type: 'SET_USER',
    user
})

export const login = user => dispatch => {
    dispatch(setUser(user))
    dispatch(setToken(user.api_token))
}

export const registerUser = user => dispatch => {(
    axios.post('http://localhost:3000/auth/register',user)
    .then(response => {
        dispatch(setUser(response.data))
        dispatch(setToken(response.data.user.api_token))
    })
)}

export const loginRequest = user => dispatch => {(
    axios.post('http://localhost:3000/auth/login',user)
    .then(response => {
        //dispatch(setUser(response.data))
        //dispatch(setToken(response.data.user.api_token))
        dispatch(login(response.data.user))
    })
)}

export const logout = () => dispatch => {
    dispatch(setToken(''))
    dispatch(setUser(''))
}

export const addMeal = meal => ({
    type: 'ADD_MEAL',
    meal
})

export const setMeals = meals => ({
    type: 'SET_MEALS',
    meals
})

export const storeMeal = meal => (dispatch,getState) => {(
    axios.post('http://localhost:3000/meals',meal,{headers: {'Authorization': 'Bearer '+getState().token}})
    .then(response => {
        dispatch(addMeal(response.data.meals))
    })
)}

export const getMeals = () => (dispatch,getState) => {
    axios.get('http://localhost:3000/meals',{headers: {'Authorization': 'Bearer '+getState().token}})
    .then(response => {
        dispatch(setMeals(response.data.meals))
    })
}

export const updateSettings = settings => (dispatch,getState) => {
    axios.post('http://localhost:3000/user',settings,{headers: {'Authorization': 'Bearer '+getState().token}})
    .then(response => {
        dispatch(setUser(response.data))
    })
}
