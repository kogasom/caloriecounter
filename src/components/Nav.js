import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

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

export default connect(mapStateToProps)(Nav)
