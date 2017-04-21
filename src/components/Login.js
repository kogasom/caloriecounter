import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    render () {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    Login
                </div>
                <div className="panel-body">
                    <form>
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="text" value={this.state.username} name="username" onChange={this.handleChange} className="form-control" />
                        </div>

                        <div className="form-group">
                            <label>Email address</label>
                            <input type="text" value={this.state.password} name="password" onChange={this.handleChange} className="form-control"/>
                        </div>
                        <button type="submit" className="btn btn-default">Login</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login
