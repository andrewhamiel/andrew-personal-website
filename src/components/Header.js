import React from 'react';
import '../index.css';
import HamburgerMenuPage from './HamburgerMenuPage';
function Header() {
    return(
        <nav class="navbar navbar-dark bg-primary">
            <div className="row col-12 d-flex justify-content-center text-white">
              <span className="col-1"><a href="/" id="header">Home Page</a></span>
              <span className="col-1"><a href="/registration" id="header">Register</a></span>
              <span className="col-1"><a href="/mining" id="header">Crypto Mining</a></span>
              <span className="col-1"><a href="/markets" id="header">Markets</a></span>
              <span className="col-1"><a href="/tutoring" id="header">Tutoring</a></span>
              <span className="col-1"><a href="/pc-builds" id="header">PC Building</a></span>
              <span className="col-1"><a href="/website-builds" id="header">Websites</a></span>
              <span className="col-1"><a href="/proactive-health" id="header">Health</a></span>
              <span className="col-1"><a href="/coding-widget" id="header">Coding Widget</a></span>
            </div>
        </nav>
    )
}
export default Header;
