import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white  box-shadow ">
                <h5 className="my-0 mr-md-auto font-weight-normal"></h5>
                <nav className="my-2 my-md-0 mr-md-3">
                    <Link to="/" className="p-2 text-dark navbar-link">Songs</Link>
                    <Link to="/artists" className="p-2 text-dark navbar-link">Artists</Link>
                    <Link to="/about" className="p-2 text-dark navbar-link">About</Link>
                    <Link to="/contact" className="p-2 text-dark navbar-link">Contact</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;
