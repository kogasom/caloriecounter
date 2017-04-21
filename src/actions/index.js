import axios from 'axios'

export const setToken = token => ({
    type: 'SET_TOKEN',
    token
})

export const setUser = user => ({
    type: 'SET_USER',
    user
})

export const registerUser = user => dispatch => {(
    axios.post('http://localhost:3000/auth/register',user)
    .then(response => {
        dispatch(setUser(response.body))
        dispatch(setToken(response.body.user.auth_token))
    })
)}
