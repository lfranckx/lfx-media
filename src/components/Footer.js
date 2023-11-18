import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.scss';
import white from '../images/white-logo.png';

export default function Footer() {
    return (
        <>
            <footer>
                <div className='logo-wrap'>
                    <Link to={'/'}>
                        <h1><img src={white} alt='white logo' /></h1>
                    </Link>
                </div>
                
                
                <p id='quote'>The best preparation for tomorrow is doing your best today.</p>
                <ul>
                    <li>
                        <a href='https://twitter.com/lfxmedia'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-twitter"></i>
                        </a>                        
                    </li>
                    <li>
                        <a href='https://www.instagram.com/lachnr0ll/'
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-instagram"></i>
                        </a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/in/lachlanfranckx/'
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </li>
                    <li>
                        <a href='https://github.com/lfranckx'
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-github"></i>
                        </a>
                    </li>
                    <li>
                        <a href='mailto:lachlan@lfxmedia.io'
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                        <i className="fas fa-envelope"></i>
                        </a>
                    </li>
                </ul>
                <p id='copyright'>Copyright © 2021. All rights reserved.</p>
            </footer>
        </>
    )
}