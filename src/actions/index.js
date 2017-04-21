import axios from 'axios'

export const setToken = token => ({
    type: 'SET_TOKEN',
    token: token
})

export const setUser = user => ({
    type: 'SET_USER',
    user
})

export const registerUser = user => dispatch => {(
    axios.post('http://localhost:3000/auth/register',user)
    .then(response => {
        console.log(response.data)
        dispatch(setUser(response.data))
        dispatch(setToken(response.data.user.auth_token))
    })
)}
