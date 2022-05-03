import React from 'react';
import '../styles/Navbar.scss';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import green from '../images/logo-green.png';
import white from '../images/logo-white.png';

export default function Navbar(props) {
    const location = useLocation();
    const { loading } = props;

    return (
        <div className='nav'>
            <nav>
                <Link to="/">
                    <h1><img src={ loading ? white : green} alt='lfx media logo' className={ loading ? 'loading' : '' } /></h1>
                </Link>

                <div className='wrap'>
                    {location.pathname === '/subscribe' ? <Link className="btn" to="/">Close</Link> : <Link className="btn" to="/subscribe">Newsletter</Link>}
                    {location.pathname === '/contact' ? <Link className="btn" to="/">Close</Link> : <Link className="btn" to="/contact">Say Hello</Link>}
                </div>
            </nav>
        </div>
    );
}