import React, { useState } from 'react';
import '../styles/Navbar.scss';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import green from '../images/green-logo.png';

export default function Navbar(props) {
    const location = useLocation();
    const [active, setActive] = useState(false);

    return (
        <div id={props.id} className='nav'>
            <nav>
                <Link to="/">
                    <h1><img src={green} alt='lfx media logo'/></h1>
                </Link>

                <div className='wrap'>
                    <Link className='navlink' to="/results">Results</Link>
                    <Link className='navlink' to="/subscribe">Newsletter</Link>
                    {location.pathname === '/contact' ? <Link className="btn" to="/">Close</Link> : <Link className="btn" to="/contact">Say Hello</Link>}
                </div>

                <div className='toggler' onClick={() => {setActive(!active)}}>
                    <div className={`hamburger ${active ? 'active' : ''}`}>
                        <div className='line'></div>
                    </div>
                </div>
            </nav>
            <div id='mobile-menu' className={`${active ? 'show' : 'hide'}`}>
                <nav className='navlinks'>
                    <Link className='navlink' to="/results" onClick={() => {setActive(!active)}}>Results</Link>
                    <Link className='navlink' to="/subscribe" onClick={() => {setActive(!active)}}>Newsletter</Link>
                    {location.pathname === '/contact' 
                    ? <Link className="btn" to="/" onClick={() => {setActive(!active)}}>Home</Link> 
                    : <Link className="btn" to="/contact" onClick={() => {setActive(!active)}}>Say Hello</Link>}
                </nav>
            </div>
        </div>
    );
}