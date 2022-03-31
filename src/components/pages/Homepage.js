import React, { useEffect } from 'react';
import '../../styles/Header.scss';
import computer from '../../images/computer.png';
import { Link } from 'react-scroll';

import About from '../About';
import Projects from '../Projects';
import Services from '../Services';
import Testimonials from '../Testimonials';
import ContactBar from '../ContactBar';

export default function Homepage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <>
            <div id="homepage">
                <header>
                    <h1>Web Developer, Full-stack Engineer &amp; SEO Manager</h1>
                    <h2>I build beautiful and effective online stores that help businesses succeed.</h2>
                    <div className='btn-wrap'>
                        <Link className='btn' activeClass="active" to="projects" spy={true} smooth={true} offset={0} duration={500}>
                            View my work <i className="fas fa-chevron-circle-right" />
                        </Link>
                    </div>
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