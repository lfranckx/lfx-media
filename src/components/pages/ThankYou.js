import React from 'react';
import { Helmet } from 'react-helmet';
import '../../styles/ThankYou.scss';

export default function ThankYou() {
    return (
        <>
            <Helmet >
                <title>Thank You | LFX Media</title>
                <meta name='description' content='Thank you for contacting me. I will be in touch shortly.'/>
            </Helmet>

            <main id='thankyou'>
                <h1><span>Thank you for contacting me.</span>You will be hearing from me very soon.<span>^_^</span></h1>
            </main>
        </>
    )
}