import React from 'react';
import '../styles/Footer.scss';

export default function Footer() {
    return (
        <>
            <footer>
                <h1><img src='images/white-logo.png' alt='white logo' width='100px'/></h1>
                <p id='quote'>The best preparation for tomorrow is doing your best today.</p>
                <ul>
                    <li>
                        <a href='https://twitter.com/lachnr0ll'
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
                        <a href='https://www.instagram.com/lachnr0ll/'
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
                        <a href='mailto:lfranckx@gmail.com'
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