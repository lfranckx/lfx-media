import React from 'react';
import '../styles/LoadingScreen.scss';

export default function LoadingScreen(props) {
    const { loading } = props;

    return (
        <>
            <div className={ loading ? 'loading-screen active' : 'loading-screen hidden'}>
                <div className='text-wrap'>
                    <div className='swipe-left animation'><h2 className='text'>Launch your website</h2></div>
                    <div className='swipe-right animation'><h2 className='text'>Facilitate operations</h2></div>
                    <div className='swipe-left animation'><h2 className='text'>Expand your horizons</h2></div>
                </div>
            </div>
        </>
    )
}