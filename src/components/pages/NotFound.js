import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion/dist/framer-motion';

import '../../styles/NotFound.scss';

export default function NotFound () {
    useEffect(() => {
        window.scrollTo(0,0);
    }, [])

    return (
        <>
            <Helmet >
                <title>404 Not Found | LFX Media</title>
                <meta name='description' content='404, Page Not Found'/>
            </Helmet>
            <motion.main 
                initial={{ opacity: 0 }}    
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                id='notfound'
            >
                    <h1><span>404</span>Sorry, this page does not exist.</h1>
                    <div className='wrap'>
                        <Link className="btn" to="/">Return Home</Link>
                    </div>
            </motion.main>
        </>
    )
}