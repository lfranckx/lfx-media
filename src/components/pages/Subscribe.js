import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import '../../styles/Subscribe.scss';
import computer from '../../images/computer.png';
import SignUpForm from '../SignUpForm';
import { motion } from 'framer-motion/dist/framer-motion';

export default function SubscribePage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet >
                <title>Subscribe | LFX Media</title>
                <meta name='description' content='Subscribe to receive my educational newsletter where I give tips and advice. Be the first to know of important news and special offers!'/>
            </Helmet>
            <motion.div
                initial={{ opacity: 0 }}    
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                id='subscribe-page'
            >
                <header>
                    <div className='container'>
                        <div className='text-wrap'>
                            <h1>Being a web developer is tough.</h1>
                            <p>
                                Running a business as a web developer is even harder.
                                I will be sending out tips on surviving the world of freelance by letting you know what works and how to get started.
                                It's free and you can cancel anytime.
                            </p>
                        </div>
                    </div>

                    <SignUpForm />

                    <div className='image-wrap'>
                        <img src={computer} alt='desktop workspace' />
                    </div>
                </header>
            </motion.div>
        </>
    )
}