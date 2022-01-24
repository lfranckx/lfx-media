import React, { useState } from 'react';
import '../styles/Services.scss';
import ServicesPopup from './ServicesPopup';
// import design from '../images/design.png'
// import code from '../images/code.png';

export default function Services() {

    const [designCardOpen, toggleDesignCard] = useState(false);
    const [developmentCardOpen, toggleDevelopmentCard] = useState(false);
    const [seoCardOpen, toggleSeoCard] = useState(false);

    return (
        <>
            <section id='services'>
                <ul>
                    <li>
                        <div className='card'>
                            <i className="fas fa-drafting-compass"></i>
                            <h2>Design</h2>
                            <p>My approach to website design is to create a website that strengthens your company’s brand while ensuring ease of use for your audience.</p>

                            <div className='btn-wrap'>
                                <button onClick={() => toggleDesignCard(!designCardOpen)}>Learn More <i className="fas fa-chevron-circle-right"></i></button>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='card'>
                            <i className="fas fa-laptop-code"></i>
                            <h2>Development</h2>
                            <p>After creating the design I will start the development phase of your website. We will decide the best platform to build and host your website on depending on your needs and budget.</p>
                            <div className='btn-wrap'>
                                <button onClick={() => {toggleDevelopmentCard(!developmentCardOpen)}}>Learn More <i className="fas fa-chevron-circle-right"></i></button>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='card'>
                            <i className="fas fa-search-dollar"></i>
                            <h2>SEO</h2>
                            <p>Search Engine Optimization is the practice of improving and promoting a website in order to increase the number of visitors through search engines such as Google.</p>
                            <div className='btn-wrap'>
                                <button onClick={() => {toggleSeoCard(!seoCardOpen)}}>Learn More <i className="fas fa-chevron-circle-right"></i></button>
                            </div>
                        </div>
                    </li>
                </ul>

                <ServicesPopup
                    toggleDesignCard = {toggleDesignCard}
                    toggleDevelopmentCard = {toggleDevelopmentCard}
                    toggleSeoCard = {toggleSeoCard}
                    designCardOpen = {designCardOpen}
                    developmentCardOpen = {developmentCardOpen}
                    seoCardOpen = {seoCardOpen}
                />
            </section>
        </>
    )
}