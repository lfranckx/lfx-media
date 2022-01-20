import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ContactBar.scss';

export default function ContactBar() {
    return (
        <>
            <section id='contact'>
                <div className='content-wrap'>
                    <h3>Start a Project</h3>
                    <p>
                        Interested in working with me?<br/>
                        Send me a message.
                    </p>
                    <Link className='btn' to='/contact'>Get Started</Link>
                </div>
            </section>
        </>
    )
}