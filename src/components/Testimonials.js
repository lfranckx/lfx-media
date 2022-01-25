import React, { useState } from 'react';
import justine from '../images/justine.jpg';
import da from '../images/da.jpeg';
import '../styles/Testimonials.scss';


export default function Testimonials () {
    const [card, setCard] = useState(1);

    return (
        <section id='testimonials'>
            <div className='container'>
                <h2>Testimonials</h2>
                <h3>Hear what people have to say about me.</h3>

                {
                    card === 1 && 
                    <div className={card === 1 ? 'card active' : 'card'}>
                        <img src={justine} alt='headshot' />
                        <h3>Justine Berger</h3>
                        <h4>COO, Social Art House</h4>
                        <p><q>Lachlan is the Social Art House go-to Web Developer for all projects. He’s fast, thorough, and able to manage the complexity of any request. Thanks to his dynamic design implementation, user experience, and SEO programs, our brand website and clients are top-performing, engaging, and responsive. I would recommend working with Lachlan to anyone!</q></p>
                    </div>
                }
                {
                    card === 2 && 
                    <div className={card === 2 ? 'card active' : 'card'}>
                        <img src={da} alt='headshot' />
                        <h3>Da Kornchamraskul</h3>
                        <h4>UI/UX Designer, Originator Inc.</h4>
                        <p><q>Lachlan is a talented, humble and friendly web developer who is able to add magic to any product. He’s fast, thorough and in my opinion one of the best developers I have worked with. I always enjoy doing work with him!</q></p>
                    </div>
                }
                <button onClick={() => {setCard(1)}} className={card === 1 ? 'active' : ''}></button>
                <button onClick={() => {setCard(2)}} className={card === 2 ? 'active' : ''}></button>
            </div>
        </section>
    )
}