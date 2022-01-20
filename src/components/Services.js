import React, { useState } from 'react';
import '../styles/Services.scss';

export default function Services() {

    return (
        <>
            <section id='services'>
                <ul>
                    <li>
                        <div className='card'>
                            <i className="fas fa-pencil-alt"></i>
                            <h2>Design</h2>
                            <p>My approach to website design is to create a website that strengthens your company’s brand while ensuring ease of use for your audience.</p>
                            <button>Learn More <i class="fas fa-chevron-circle-right"></i></button>
                        </div>
                    </li>
                    <li>
                        <div className='card'>
                            <i className="fas fa-laptop-code"></i>
                            <h2>Development</h2>
                            <p>After creating the design I will start the development phase of your website. We will decide the best platform to build and host your website on depending on your needs and budget.</p>
                            <button>Learn More <i class="fas fa-chevron-circle-right"></i></button>
                        </div>
                    </li>
                    <li>
                        <div className='card'>
                            <i className="fas fa-search-dollar"></i>
                            <h2>SEO</h2>
                            <p>Search Engine Optimization is the practice of improving and promoting a website in order to increase the number of visitors through search engines such as Google.</p>
                            <button>Learn More <i class="fas fa-chevron-circle-right"></i></button>
                        </div>
                    </li>
                </ul>
            </section>
        </>
    )
}