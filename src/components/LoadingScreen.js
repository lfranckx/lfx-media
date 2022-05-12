import React from 'react';
import '../styles/LoadingScreen.scss';

export default function LoadingScreen(props) {
    const { loading } = props;
    const logo = document.querySelectorAll("#logo path");
    console.log(logo);

    if (logo) {
        for (let i = 0; i < logo.length; i++) {
            console.log(`letter ${i + 1} is ${logo[i].getTotalLength()}`)
        }
    }

    return (
        <>
            <div className={ loading ? 'loading-screen active' : 'loading-screen hidden'}>
                <div className='logo-wrap'>
                <svg width="938" height="466" viewBox="0 0 938 466" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_164_13)">
                        <path d="M115.45 341.451C115.45 346.421 119.478 350.45 124.448 350.451L254.298 350.487L221.154 384.66H77V85.6599H115.45V341.451Z" fill="#1BA49C" stroke="white" stroke-width="10"/>
                        <path d="M577.198 119.819L380.171 119.8C375.2 119.8 371.17 123.829 371.17 128.8V207C371.17 211.97 375.199 216 380.17 216H503.46V250H380.17C375.199 250 371.17 254.029 371.17 259V384.66H332.71V85.6599H553.992L577.198 119.819ZM553.694 85.2219L553.697 85.2255C553.696 85.2243 553.695 85.2231 553.694 85.2218L554.522 84.6599L553.694 85.2219ZM578.259 121.381C578.259 121.381 578.258 121.38 578.258 121.379L578.259 121.381Z" fill="#1BA49C" stroke="white" stroke-width="10"/>
                        <path d="M262.374 384.62L295.516 350.45H371V384.62H262.374Z" fill="#1BA49C" stroke="white" stroke-width="10"/>
                        <path d="M337.7 356L366 355.5L366.2 341.5L337.7 341V356Z" fill="#1BA49C"/>
                        <path d="M614.827 121.91L614.826 121.91L588.878 85.6599H633.898L706.466 187.182C710.057 192.206 717.526 192.203 721.113 187.177L793.574 85.6599H838.541L739.996 223.299C737.815 226.345 737.749 230.424 739.83 233.539L890.486 459H845.216L721.183 270.44C717.703 265.15 709.992 265.012 706.326 270.176L625.058 384.62H580.011L687.342 233.683C689.568 230.552 689.561 226.354 687.326 223.23L614.827 121.91ZM839.674 84.0778L839.671 84.0819C839.672 84.0805 839.673 84.0791 839.674 84.0778ZM845.512 459.45L845.51 459.447C845.511 459.448 845.512 459.449 845.512 459.45Z" fill="#1BA49C" stroke="white" stroke-width="10"/>
                        <path d="M890.201 458.97L867.255 423.96H888.53C893.501 423.96 897.53 419.931 897.53 414.96V50.3C897.53 45.3294 893.501 41.3 888.53 41.3H50.26C45.2894 41.3 41.26 45.3295 41.26 50.3V414.96C41.26 419.931 45.2894 423.96 50.26 423.96H786.404L809.152 460.23H5V5H932.14V458.97H890.201Z" fill="#1BA49C" stroke="white" stroke-width="10"/>
                        <path d="M864 454L894.5 453.97L877 428.956L864 429V454Z" fill="#1BA49C"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_164_13">
                            <rect width="937.14" height="465.23" rx="4" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>

                </div>
            </div>
        </>
    )
}