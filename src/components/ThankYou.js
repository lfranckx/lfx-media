import React from 'react';
import { Helmet } from 'react-helmet';

export default function ThankYou() {
    return (
        <>
            <Helmet >
                <title>Thank You</title>
                <meta name='description' content='Thank you for contacting me. I will be in touch shortly.'/>
                <meta name='keywords' content='Web Developer, Web Designer, and SEO Manager' />
            </Helmet>

            <main>
                <h1>Thank you for contacting me. You will be hearing from me very soon. ^_^</h1>
                <h2 className={'h2'}>
                    <q>The best preparation for tomorrow is doing your best today.</q> - H. Jackson Brown, Jr.
                </h2>
            </main>
        </>
    )
}