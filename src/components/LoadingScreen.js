import React from 'react';
import '../styles/LoadingScreen.scss';
import whiteLogo from '../images/logo-white.png';

export default function LoadingScreen(props) {
    const { loading } = props;

    return (
        <>
            <div className={ loading ? 'loading-screen active' : 'loading-screen hidden'}>
                <div className='logo-wrap'>
                    <img src={whiteLogo} alt='white LFX logo' />
                </div>

                <div className='content'>
                    <div className='text-wrap'>
                        <div className='has-animation first'>
                            <h2>Launch your website</h2>
                        </div>
                        <div className='has-animation second'>
                            <h2>Facilitate operations</h2>
                        </div>
                        <div className='has-animation third'>
                            <h2>Expand your horizons</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}