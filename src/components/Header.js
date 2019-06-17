import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
                <h5 className="my-0 mr-md-auto font-weight-normal">Company name</h5>
                <nav className="my-2 my-md-0 mr-md-3">
                    <Link to="/" className="p-2 text-dark">Songs</Link>
                    <Link to="/artists" className="p-2 text-dark">Artists</Link>
                    <Link to="/about" className="p-2 text-dark">About</Link>
                    <Link to="/contact" className="p-2 text-dark">Contact</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;
