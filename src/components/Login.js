import React, { Component } from 'react';
import { connect } from 'react-redux'
import { loginRequest } from '../actions'
import { Redirect } from 'react-router-dom'

class Login extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        const { dispatch } = this.props
        dispatch(loginRequest(this.state))
    }

    render () {
        const isLoggedIn = this.props.isLoggedIn
        return (
            <div className="panel panel-default">
                {isLoggedIn && <Redirect to="/meals"/>}
                <div className="panel-heading">
                    Login
                </div>
                <div className="panel-body">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Username</label>
                            <input type="text" value={this.state.username} name="username" onChange={this.handleChange} className="form-control" />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" value={this.state.password} name="password" onChange={this.handleChange} className="form-control"/>
                        </div>
                        <button type="submit" className="btn btn-default">Login</button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: (state.token !== '')
    }
}

export default connect(mapStateToProps)(Login)
