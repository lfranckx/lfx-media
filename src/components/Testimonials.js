import React from 'react';
import justine from '../images/justine.jpg';

export default function Testimonials () {
    return (
        <section id='testimonials'>
            <div className='container'>
                <h2>Testimonials</h2>
                <h3>Hear what people have to say about me.</h3>

                <div className='card'>
                    <img src={justine} alt='headshot' />
                    <h3>Justine Berger</h3>
                    <h4>COO, Social Arthouse</h4>
                    <p>“Lachlan is the Social Art House go-to Web Developer for all projects. He’s fast, thorough, and able to manage the complexity of any request. Thanks to his dynamic design implementation, user experience, and SEO programs, our brand website and clients are top-performing, engaging, and responsive. I would recommend working with Lachlan to anyone!”</p>
                </div>
            </div>
        </section>
    )
}