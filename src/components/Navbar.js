import React from 'react';
import '../styles/Navbar.scss';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <div id={props.id} className='nav'>
            <nav>
                <Link to="/">
                    <h1><img src='/images/green-logo.png' alt='lfx media logo'/></h1>
                </Link>

                <Link className="btn" to="/contact">Get a quote</Link>
            </nav>
        </div>
    );
}