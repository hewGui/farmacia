import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function Navbar() {
    return (
        <>
            <div className="navbar-container">
                <div className="navbar-content">
                    <div className="navbar-brand">DrogaMais</div>
                    <div className="navbar-links">
                        <Link to="/home" className="navbar-link">Home</Link>
                        <Link to='/categorias' className='hover:underline'>Categorias</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
