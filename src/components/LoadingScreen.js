import React from 'react';
import '../styles/LoadingScreen.scss';

export default function LoadingScreen(props) {
    const { loading } = props;

    // capture length of svg paths
    const logo = document.querySelectorAll("#logo path");
    if (logo) {
        for (let i = 0; i < logo.length; i++) {
            console.log(`letter ${i + 1} is ${logo[i].getTotalLength()}`)
        }
    }

    return (
        <>
            <div className={ loading ? 'loading-screen active' : 'loading-screen hidden'}>
                <div className={loading ? `hide` : `logo-wrap`}>
                <svg width="938" height="466" viewBox="0 0 938 466" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M115.45 345.45V350.449L120.449 350.45L254.298 350.487L221.154 384.66H77V85.6599H115.45V345.45Z" fill="#1BA49C" stroke="white" strokeWidth="10"/>
                    <path d="M376.17 216H503.46V250H376.17H371.17V255V384.66H332.71V85.6599H553.992L577.198 119.819L376.17 119.8L371.17 119.799V124.8V211V216H376.17Z" fill="#1BA49C" stroke="white" strokeWidth="10"/>
                    <path d="M295.516 350.45H371V384.62H262.374L295.516 350.45Z" fill="#1BA49C" stroke="white" strokeWidth="10"/>
                    <path d="M337.7 356L366 355.5L366.2 341.5L337.7 341V356Z" fill="#1BA49C"/>
                    <path d="M738.385 225.549L736.371 228.362L738.293 231.238L890.486 459H845.216L717.968 265.552L713.948 259.442L709.714 265.405L625.058 384.62H580.011L688.995 231.357L691.062 228.451L688.987 225.55L614.827 121.91L614.826 121.91L588.878 85.6599H633.898L709.723 191.737L713.793 197.432L717.86 191.735L793.574 85.6599H838.541L738.385 225.549Z" fill="#1BA49C" stroke="white" strokeWidth="10"/>
                    <path d="M41.26 418.96V423.96H46.26H786.404L809.152 460.23H5V5H932.14V458.97H890.201L867.255 423.96H892.53H897.53V418.96V46.3V41.3H892.53H46.26H41.26V46.3V418.96Z" fill="#1BA49C" stroke="white" strokeWidth="10"/>
                    <path d="M864 454.044L894.5 454.014L877 429L864 429.044V454.044Z" fill="#1BA49C"/>
                </svg>
                </div>
            </div>
        </>
    )
}