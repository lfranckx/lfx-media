import React, { useEffect } from 'react';
import '../../styles/Header.scss';
import computer from '../../images/computer.png';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion/dist/framer-motion';

import About from '../About';
import Projects from '../Projects';
import Services from '../Services';
import Testimonials from '../Testimonials';
import ContactBar from '../ContactBar';

export default function Homepage(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { loading } = props;
    
    return (
        <>
            <motion.div 
                id="homepage"
                initial={{ opacity: 0 }}    
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <header className={loading ? '' : 'fade-in-screen'}>
                    <h1>Web Developer &amp; SEO Manager</h1>
                    <h2>I design and code beautiful yet simple things and love what I do.</h2>
                    <div className='btn-wrap'>
                        <Link className='btn-secondary' activeClass="active" to="projects" spy={true} smooth={true} offset={0} duration={700}>
                            View my work <i className="fas fa-chevron-circle-right" />
                        </Link>
                    </div>
                    <div className='image-wrap'>
                        <img src={computer} alt='desktop workspace' />
                    </div>
                </header>
                <main className={loading ? '' : 'fade-in-screen'}>
                    <About />
                    <Services />
                    <Projects />
                    <Testimonials />
                    <ContactBar />
                </main>
            </motion.div>
        </>
    );
}