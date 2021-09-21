import React, { Component } from "react";
import Authenticate from "./Authenticate";
import "./bootstrap.css"
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor(){
        super()
        
    }
    render() {
        
        let isUserLogin = Authenticate.isUserLogin();
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="http://localhost:3000" className="navbar-brand">WebPage</a></div>
                    <ul className="navbar-nav">

                        {isUserLogin && <li><Link className="nav-link" to="/welcome/:name">Home</Link></li>}
                        {isUserLogin && <li><Link className="nav-link" to="/todo">Todo</Link></li>}

                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        { !isUserLogin && <li><Link className="nav-link" to="/login" onClick={this.reload}>Login</Link></li>}
                        {isUserLogin && <li><Link className="nav-link" to="/logout" onClick={Authenticate.Logout}  >Logout</Link></li>}
                    </ul>
                </nav>

            </header>
        )
        
    
    }
} export default Header;