import React, { Component } from 'react';
import { Link} from 'react-router-dom'

class Nav extends Component {
    constructor(props) {
        super(props)
        this.state = {isLoggedIn: false};
    }
    render () {
        const isLoggedIn = this.state.isLoggedIn
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

export default Nav
