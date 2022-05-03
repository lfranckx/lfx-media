import React from 'react';
import '../styles/LoadingScreen.scss';

export default function LoadingScreen(props) {
    const { loading } = props;

    return (
        <>
            <div className={ loading ? 'loading-screen active' : 'loading-screen hidden'}>
                
            </div>
        </>
    )
}