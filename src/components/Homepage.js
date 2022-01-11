import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Homepage.scss';
import Projects from './Projects';
import Services from './Services';

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
                        <img src='images/computer.png' alt='desktop workspace' />
                    </div>
                </header>
                <main>
                    <section id='about'>
                        <div className='container'>
                            <h2>Hi, my name is Lachlan.</h2>
                            <h3>I have been very fortunate to pursue my dream as a freelance web developer.  My experience has allowed me to collaborate with some of the leading educators, influencers, and companies in the hair and beauty industry. I am quietly confident, naturally curious, and perpetually growing my love and skill for my profession.</h3>
                        </div>
                    </section>

                    <Services />
                    <Projects />

                    <section id='testimonials'>
                        <div className='container'>
                            <h2>Testimonials</h2>
                            <h3>Hear what people have to say about me.</h3>

                            <div className='card'>
                                <img src='images/justine.jpg' alt='headshot' />
                                <h3>Justine Berger</h3>
                                <h4>COO, Social Arthouse</h4>
                                <p>“Lachlan is the Social Art House go-to Web Developer for all projects. He’s fast, thorough, and able to manage the complexity of any request. Thanks to his dynamic design implementation, user experience, and SEO programs, our brand website and clients are top-performing, engaging, and responsive. I would recommend working with Lachlan to anyone!”</p>
                            </div>
                        </div>
                    </section>

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
                </main>
            </div>
        </>
    );
}