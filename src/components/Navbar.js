import React from 'react';
import '../styles/Navbar.scss';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

export default function Navbar(props) {
    const location = useLocation();
    console.log('location', location);

    return (
        <div id={props.id} className='nav'>
            <nav>
                <Link to="/">
                    <h1><img src='/images/green-logo.png' alt='lfx media logo'/></h1>
                </Link>

                <Link className="btn" to="/contact">Say Hello</Link>
            </nav>
        </div>
    );
}