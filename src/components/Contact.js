import React from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router';

import '../styles/Contact.scss';
import me from '../images/me.png';

import emailjs from 'emailjs-com';
import { Helmet } from 'react-helmet';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0,0);
    }, [])

    const history = useHistory();

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_if54qk7', 'template_5f9yjza', e.target, 'user_4ZnH44kohKcJmQhnL2VGX')
            .then(res => {
                history.push('/thankyou');
            })
            .catch(err => console.log(err));
    }

    return (
        <>
            <Helmet >
                <title>Contact LFX Media</title>
                <meta name='description' content='Get in touch with Lachlan Franckx about a website'/>
                <meta name='keywords' content='Web Developer, Web Designer, and SEO Manager' />
            </Helmet>
            <main>
                <section id='contact'>
                    <div>
                        <img src={me} alt='Myself and the pups' width='250px'/>
                    </div>

                    <h1><span>Thanks for taking the time to reach out.</span><span>How can I help you today?</span></h1>

                    <form onSubmit={sendEmail}>
                        <div className='flex'>

                            <div className='wrap'>
                                <div className="label">
                                    <label htmlFor="name"></label>
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder='Your Name'
                                    />
                                </div>

                                <div className="label">
                                    <label htmlFor="salon"></label>
                                </div>

                                <div className="label">
                                    <label htmlFor="email"></label>
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                    />
                                </div>

                                <div className="label">
                                    <label htmlFor="phone"></label>
                                </div>
                                <div>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder='Your Phone Number'
                                    />
                                </div>
                            </div>

                            <div className='wrap'>
                                <div className="message-label">
                                    <label htmlFor="message">Message</label>
                                </div>

                                <div>
                                    <textarea 
                                        name='message' 
                                        rows='10' 
                                    />
                                </div>
                            </div>
                            
                        </div>

                        <button className="btn" type="submit">
                            Submit
                        </button>                        
                    </form>
                </section>
            </main>
        </>
    )
}

export default Contact;