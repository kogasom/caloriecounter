import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../actions'

class Nav extends Component {
    render () {
        const isLoggedIn = this.props.isLoggedIn
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <ul className="nav navbar-nav">
                        {!isLoggedIn && <li><Link to="/auth/register">Sign up</Link></li>}
                        {!isLoggedIn && <li><Link to="/auth/login">Log in</Link></li>}
                        {isLoggedIn && <li><Link to="/user">Settings</Link></li>}
                        {isLoggedIn && <li><Link to="/meals">Meals</Link></li>}
                        {isLoggedIn && <li onClick={this.props.logout}><a href="#">Logout</a></li>}
                    </ul>
                </div>
            </nav>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: (state.token !== '')
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => {
            dispatch(logout())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Nav)
