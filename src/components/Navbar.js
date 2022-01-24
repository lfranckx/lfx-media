import React from 'react';
import '../styles/Navbar.scss';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import green from '../images/green-logo.png';

export default function Navbar(props) {
    const location = useLocation();
    console.log(location.pathname);

    return (
        <div id={props.id} className='nav'>
            <nav>
                <Link to="/">
                    <h1><img src={green} alt='lfx media logo'/></h1>
                </Link>

                {location.pathname === '/' && <Link className="btn" to="/contact">Say Hello</Link>}
                {location.pathname === '/contact' && <Link className="btn" to="/">Close</Link>}
            </nav>
        </div>
    );
}