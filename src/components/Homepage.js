import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Homepage.scss';

export default function Homepage(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <>
            <div id="homepage">
                <header>
                    <h1>Front-end Developer, Full-stack Engineer <br/> &amp; SEO Manager</h1>
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

                    <section id='services'>
                        <ul>
                            <li>
                                <div className='card'>
                                    <i className="fas fa-pencil-alt"></i>
                                    <h2>Design</h2>
                                    <p>My approach to website design is to create a website that strengthens your company’s brand while ensuring ease of use for your audience.</p>
                                    {/* <button>Learn More</button> */}
                                </div>
                            </li>
                            <li>
                                <div className='card'>
                                    <i className="fas fa-laptop-code"></i>
                                    <h2>Development</h2>
                                    <p>After creating the design I will start the development phase of your website. We will decide the best platform to build and host your website on depending on your needs and budget.</p>
                                    {/* <button>Learn More</button> */}
                                </div>
                            </li>
                            <li>
                                <div className='card'>
                                    <i className="fas fa-search-dollar"></i>
                                    <h2>SEO</h2>
                                    <p>Search Engine Optimization is the practice of improving and promoting a website in order to increase the number of visitors through search engines such as Google.</p>
                                    {/* <button>Learn More</button> */}
                                </div>
                            </li>
                        </ul>
                    </section>

                    <section id='projects'>
                        <h2>Featured Work</h2>
                        <p>Here are a few professional projects I have recently built. Want to see more? <span><Link className='email' to='/'>Email me.</Link></span></p>
                        <ul>
                            <li className='card'>
                                <a  href='https://forevercurlsbyleysa.com/'
                                    target="_blank" 
                                    rel="noopener noreferrer" >
                                    <div className='image-wrap'>
                                        <img src='images/leysa.png' alt='Leysa' />
                                    </div>
                                </a>
                            </li>
                            <li className='card'>
                                <a  href='https://www.socialarthouse.com/'
                                    target="_blank" 
                                    rel="noopener noreferrer" >
                                    <div className='image-wrap'>
                                        <img src='images/SAH.png' alt='Social Arthouse' />
                                    </div>
                                </a>
                            </li>
                            <li className='card'>
                                <a  href='https://ouidadeducation.com/'
                                    target="_blank" 
                                    rel="noopener noreferrer" >
                                    <div className='image-wrap'>
                                        <img src='images/ouidad.png' alt='Ouidad' />
                                    </div>
                                </a>
                            </li>
                            <li className='card'>
                                <a  href='https://texturedhairelevated.com/'
                                    target="_blank" 
                                    rel="noopener noreferrer" >
                                    <div className='image-wrap'>
                                        <img src='images/THE.png' alt='Textured Hair Elevated' />
                                    </div>
                                </a>
                            </li>
                            <li className='card'>
                                <a  href='https://www.omgartistry.com/'
                                    target="_blank" 
                                    rel="noopener noreferrer" >
                                    <div className='image-wrap'>
                                        <img src='images/omg.png' alt='OMG Artistry' />
                                    </div>
                                </a>
                            </li>
                            <li className='card'>
                                <a  href='https://www.michelleoconnorbeauty.com/'
                                    target="_blank" 
                                    rel="noopener noreferrer" >
                                    <div className='image-wrap'>
                                        <img src='images/Michelle-text.png' alt='Michelle O Connor' />
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </section>

                    <section id='testimonials'>
                        <div className='container'>
                            <h2>Testimonials</h2>
                            <h3>Hear what people have to say about me.</h3>

                            <div className='card'>
                                <img src='images/justine.jpg' alt='headshot' />
                                <h3>Justine Berger</h3>
                                <h4>COO, Social Arthouse</h4>
                                <p>“Lachlan’s is the Social Art House go-to Web Developer for all projects. He’s fast, thorough, and able to manage the complexity of any request. Thanks to his dynamic design implementation, user experience, and SEO programs, our brand website and clients are top-performing, engaging, and responsive. I would recommend working with Lachlan to anyone!”</p>
                            </div>
                        </div>
                    </section>

                    <div className='contact'>
                        <h3>Start a Project</h3>
                        <p>
                            Interested in working with me?<br/>
                            Send me a message.
                        </p>
                        <Link className='btn' to='/contact'>Get Started</Link>
                    </div>
                </main>
            </div>
        </>
    );
}