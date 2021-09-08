import React from 'react';
import '../styles/Footer.scss';

export default function Footer() {
    return (
        <>
            <footer>
                <h1><img src='images/white-logo.png' alt='white logo' width='100px'/></h1>
                <p id='quote'>The best preparation for tomorrow is doing your best today.</p>
                <ul>
                    <li><i class="fab fa-twitter"></i></li>
                    <li><i class="fab fa-instagram"></i></li>
                    <li><i class="fab fa-linkedin-in"></i></li>
                    <li><i class="fab fa-github"></i></li>
                    <li><i class="fas fa-envelope"></i></li>
                </ul>
                <p id='copyright'>Copyright © 2021. All rights reserved.</p>
            </footer>
        </>
    )
}