import React from 'react';
import { useEffect } from 'react';
import '../../styles/Homepage.scss';

import About from '../About';
import Projects from '../Projects';
import Services from '../Services';
import Testimonials from '../Testimonials';
import ContactBar from '../ContactBar';

import computer from '../../images/computer.png'

export default function Homepage(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <>
            <div id="homepage">
                <header>
                    <h1>Front-end Developer, Full-stack Engineer &amp; SEO Manager</h1>
                    <h2>I build beautiful and effective online stores that help businesses succeed.</h2>
                    <div className='image-wrap'>
                        <img src={computer} alt='desktop workspace' />
                    </div>
                </header>
                <main>
                    <About />
                    <Services />
                    <Projects />
                    <Testimonials />
                    <ContactBar />
                </main>
            </div>
        </>
    );
}