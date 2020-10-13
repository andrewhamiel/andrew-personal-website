import React from 'react';
import '../index.css';

function Header() {
    return(
        <nav class="navbar navbar-dark bg-primary">
            <div className="row col-12 d-flex justify-content-center text-white">
            <span className="h3" href="/register"><a href="/registration" id="header">Register</a></span>
            </div>
        </nav>
    )
}
export default Header;
